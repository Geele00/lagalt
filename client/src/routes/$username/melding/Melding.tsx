import { useInfiniteQuery, useMutation } from "@tanstack/react-query";
import { useParams } from "@tanstack/react-router";
import { FormEvent, KeyboardEvent, useMemo } from "react";
import { fetchChats, sendChatMessage } from "src/api/v1/chats/Chats";
import { useAuth } from "src/auth/AuthProvider";
import { queryClient } from "src/index";
import "./Melding.style.scss";

const Melding = () => {
  const { authState } = useAuth();
  const { username: recipientUsername } = useParams();

  const { data, error, fetchNextPage, isInitialLoading } = useInfiniteQuery({
    queryKey: ["/chats", recipientUsername, authState.username],
    queryFn: ({ pageParam = 0 }) => {
      const { token } = authState;

      const params = `?target=${recipientUsername}&size=20&sort=createdAt&page=${pageParam}`;
      const headers = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      return token ? fetchChats(headers, params) : null;
    },
    getNextPageParam: (lastPage, pages) => pages.length,
    refetchOnWindowFocus: true,
    refetchOnMount: true,
    refetchOnReconnect: true,
    // replace with websocket
    refetchInterval: 5000,
  });

  const sendMessageMutation = useMutation({
    mutationFn: (content: string) => {
      const { token } = authState;

      if (!token) throw new Error("No token error blabla");
      if (!recipientUsername) throw new Error("No recipient found");

      const body = {
        content,
        recipientUsername,
      };

      return sendChatMessage(body, token);
    },
    onSuccess: () => {
      queryClient.invalidateQueries([
        "/chats",
        recipientUsername,
        authState.username,
      ]);
    },
    onError: () => {},
  });

  const reachedFinalPage = useMemo(() => {
    console.log(data);
    return !!data?.pages.at(-1)?.last;
  }, [data]);

  const fetchNextPageOnClick = (e: any) => {
    e.preventDefault();
    if (!reachedFinalPage) fetchNextPage();
  };

  const submitLogic = (textEl: HTMLTextAreaElement) => {
    sendMessageMutation.mutate(textEl.value);
    console.log(textEl.value);
    textEl.value = "";
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(e.target);
    console.log(e.currentTarget);
  };

  const onKeyUp = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    switch (e.key) {
      case "Enter":
        if (e.ctrlKey) {
          submitLogic(e.currentTarget);
        }
        break;
      case "Escape":
        e.currentTarget.blur();
    }
  };

  console.log(data?.pages.at(-1)?.last);

  // set scrolltop on history container to last item position when implementing scroll
  // div.scrollTop = div.scrollHeight?
  console.log(data);
  console.log(error);

  const messages = useMemo(() => {
    return data?.pages
      .map((page) =>
        page?.content?.map((message) => (
          <article
            key={message.createdAt}
            data-author={
              message.authorUsername === authState.username ? "self" : "other"
            }
          >
            <p>{message.content}</p>
          </article>
        ))
      )
      .reverse();
  }, [data]);

  return (
    <div className="user-chat">
      <section className="user-chat__history">
        {isInitialLoading ? "Loading gif" : error ? "Error" : <>{messages}</>}
      </section>
      <button onPointerUp={fetchNextPageOnClick}>Next Page</button>
      <form
        className="user-chat__compose"
        spellCheck={false}
        onSubmit={onSubmit}
      >
        <textarea placeholder="Skriv en melding" onKeyUp={onKeyUp} />
        <div className="user-chat__compose__controls">
          <button>Submit</button>
          <button>Opt1</button>
          <button>Op2</button>
        </div>
      </form>
    </div>
  );
};

export default Melding;

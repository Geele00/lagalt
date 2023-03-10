import { useInfiniteQuery, useMutation } from "@tanstack/react-query";
import { useParams } from "@tanstack/react-router";
import { FormEvent, KeyboardEvent } from "react";
import { fetchChats } from "src/api/v1/chats/Chats";
import { useAuth } from "src/auth/AuthProvider";
import { queryClient } from "src/index";
import "./Melding.style.scss";

const Melding = () => {
  const { authState } = useAuth();
  const { username: recipientUsername } = useParams();

  // console.log(recipientUsername);

  const {
    isFetching,
    data,
    error,
    fetchNextPage,
    fetchPreviousPage,
    isInitialLoading,
  } = useInfiniteQuery({
    queryKey: ["/chats", recipientUsername, authState],
    queryFn: ({ pageParam = 0 }) => {
      const { token } = authState;

      // const params = `/users/${authState.username}/chats/${recipientUsername}`;
      const params = `?target=${recipientUsername}`;
      const headers = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      return token ? fetchChats(headers, params) : null;
    },
    getNextPageParam: (lastPage, pages) => pages.length,
  });

  const sendMessageMutation = useMutation({
    mutationFn: (content: string) => {
      const { token } = authState;

      if (!token) throw new Error("No token error blabla");

      const body = {
        content: content,
        recipientUsername,
      };

      const opts = {
        body: JSON.stringify(body),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      return fetchChats(opts);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["/chats", recipientUsername, authState]);
    },
    onError: () => {},
  });

  console.log(data);

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

  return (
    <div className="user-chat">
      <section className="user-chat__history">
        <article>
          <p>
            Message bla bla
            MessageMessageMessageMessageMessageMessage;alskjfsalkdjf slkdjf
          </p>
        </article>
        <article data-author="self">
          <p>
            Message bla bla
            MessageMessageMessageMessageMessageMessage;alskjfsalkdjf
          </p>
        </article>

        <article data-author="self">
          <p>
            Message bla bla
            MessageMessageMessageMessageMessageMessage;alskjfsalkdjf
          </p>
        </article>
        <article data-author="self">
          <p>
            Message bla bla
            MessageMessageMessageMessageMessageMessage;alskjfsalkdjf
          </p>
        </article>
        <article data-author="self">
          <p>
            Message bla bla
            MessageMessageMessageMessageMessageMessage;alskjfsalkdjf
          </p>
        </article>
        <article data-author="self">
          <p>
            Message bla bla
            MessageMessageMessageMessageMessageMessage;alskjfsalkdjf
          </p>
        </article>
      </section>
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

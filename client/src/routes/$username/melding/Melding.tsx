import {
  InfiniteData,
  useInfiniteQuery,
  useMutation,
} from "@tanstack/react-query";
import { useParams } from "@tanstack/react-router";
import {
  FormEvent,
  KeyboardEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from "react";
import { sendChatMessageReq } from "src/api/v1/chats/Chats";
import { useAuth } from "src/auth/AuthProvider";
import { queryClient } from "src/index";
import { IChatMessagePage } from "src/types/entities/Chat";
import "./Melding.style.scss";

const pageSize = 20;

const Melding = () => {
  const { authState } = useAuth();
  const { username: recipientUsername } = useParams();

  // ~~~ Query logic

  const queryKey = useMemo(
    () => [
      `/chats?target=${recipientUsername}&size=${pageSize}&sort=createdAt`,
      authState,
      "/chats",
    ],
    [authState, recipientUsername]
  );

  const {
    data,
    error,
    fetchNextPage,
    isInitialLoading,
    isFetching,
    dataUpdatedAt,
  } = useInfiniteQuery<IChatMessagePage, Error>({
    queryKey,
    refetchInterval: 3000,
  });

  const sendMessageMutation = useMutation({
    mutationFn: (content: string) => {
      const { token } = authState;

      if (!token) throw new Error("No token error blabla");
      if (!recipientUsername) throw new Error("No recipient found");

      return sendChatMessageReq({ content, recipientUsername }, token);
    },
    onMutate: async (newMessageText) => {
      await queryClient.cancelQueries({
        queryKey,
      });

      const previousData: InfiniteData<IChatMessagePage> | undefined =
        queryClient.getQueryData(queryKey);

      queryClient.setQueryData(
        queryKey,
        (prev: InfiniteData<IChatMessagePage> | undefined) => {
          if (prev === undefined) return;

          const prevCopy = { ...prev };

          const messageId = ((prev as any).pages.at(-1).content[0].messageId +
            1) as number;

          const authorUsername = authState.username as string;

          const optimisticMsg = {
            messageId,
            authorUsername,
            recipientUsername: recipientUsername as string,
            content: newMessageText,
            createdAt: new Date().toISOString(),
          };

          prevCopy.pages[prevCopy.pages.length - 1].content.push(optimisticMsg);

          return prevCopy;
        }
      );

      return { previousData };
    },
    onSettled: () => {
      queryClient.invalidateQueries(queryKey);
    },
    onError: (err, text, context) => {
      const previousData = context?.previousData;

      queryClient.setQueryData(queryKey, previousData);
    },
  });

  // ~~~ Scrolling

  const containerRef = useRef<HTMLElement>(null);

  // Scroll into view for first page
  useEffect(() => {
    if (!containerRef.current?.lastChild) return;
    if (!data) return;
    if (data.pages.length > 1) return;

    (containerRef.current.lastChild as HTMLElement).scrollIntoView();
  }, [data]);

  const reachedFinalPage = useMemo(() => {
    return !!data?.pages.at(-1)?.last;
  }, [data]);

  const onScroll = useCallback(() => {
    if (isFetching) return;
    if (reachedFinalPage) return;
    if (!containerRef.current) return;

    const { offsetTop, getClientRects } = containerRef.current;
    const { top } = getClientRects()[0];

    const hasReachedTop = top === offsetTop;

    if (!hasReachedTop) return;

    fetchNextPage();
  }, [isFetching, reachedFinalPage, containerRef, fetchNextPage]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

  // ~~~ Form logic

  const submitLogic = (textEl: HTMLTextAreaElement) => {
    sendMessageMutation.mutate(textEl.value);
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

  // ~~~ Painting

  const messages = useMemo(
    () =>
      data?.pages.map((page) =>
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
      ),
    [data, dataUpdatedAt]
  );

  const spinner = useMemo(() => {
    if (!isInitialLoading) return null;
    return <p>Loading...</p>;
  }, [isInitialLoading]);

  const errorMessage = useMemo(() => {
    if (!error) return null;
    if (parseInt(error.message) === 404)
      return <p>Send din første melding til {recipientUsername}</p>;
    return "Her har det skjedd en feil";
  }, [error]);

  return (
    <div className="user-chat">
      <section className="user-chat__history" ref={containerRef}>
        {spinner ?? errorMessage ?? messages}
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

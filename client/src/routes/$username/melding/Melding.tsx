import "./Melding.style.scss";
import {
  InfiniteData,
  useInfiniteQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { ErrorComponent, useParams } from "@tanstack/react-router";
import {
  FormEvent,
  KeyboardEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from "react";
import { sendChatMessageFetch } from "src/api/v1/chats/Chats";
import { useAuth } from "src/auth/Auth.Provider";
import { IChatMessagePage } from "src/types/models/Chat";
import LoadingScreen from "src/components/LoadingScreen/LoadingScreen";
import { DefaultError } from "src/types/defaults/DefaultError";

const Melding = () => {
  const { authState } = useAuth();
  const { username: recipientUsername } = useParams();
  const queryClient = useQueryClient();

  // ~~~ Query logic

  const queryKey = [
    `/chats`,
    {
      filters: { target: recipientUsername, size: 20 },
      token: authState.token,
    },
  ];

  const {
    data,
    error,
    fetchNextPage,
    isInitialLoading,
    isFetching,
    dataUpdatedAt,
  } = useInfiniteQuery<IChatMessagePage, DefaultError>({
    queryKey,
    enabled: !!authState.token,
    // refetchInterval: 3000,
  });

  const sendMessageMutation = useMutation({
    mutationFn: (content: string) => {
      const { token } = authState;

      if (!token) throw new Error("No token error blabla");
      if (!recipientUsername) throw new Error("No recipient found");

      return sendChatMessageFetch({ content, recipientUsername }, token);
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

          const messageId = ((prev as any).pages.at(-1).content.at(-1)
            .messageId + 1) as number;

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
    onSettled: (data, error, vars, context) => {
      if (error) {
        const previousData = context?.previousData;
        queryClient.setQueryData(queryKey, previousData);
      }

      queryClient.invalidateQueries(queryKey);
    },
  });

  // ~~~ Scrolling

  const containerRef = useRef<HTMLElement>(null);

  // Scroll into view for first page
  useEffect(() => {
    if (!containerRef.current?.lastChild) return;
    if (!data || data.pages.length > 1) return;
    (containerRef.current.lastChild as HTMLElement).scrollIntoView();
  }, [data]);

  const reachedFinalPage = useMemo(
    () => !data?.pages.at(-1)?.hasNextPage,
    [data]
  );

  const onScroll = useCallback(() => {
    if (isFetching) return;
    if (reachedFinalPage) return;
    if (!containerRef.current) return;

    const { offsetTop } = containerRef.current as HTMLElement;
    const { top } = containerRef.current.getClientRects()[0];

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

  const onSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();
    console.log(e.target);
    console.log(e.currentTarget);
  }, []);

  const onKeyUp = useCallback((e: KeyboardEvent<HTMLTextAreaElement>) => {
    switch (e.key) {
      case "Enter":
        if (e.ctrlKey) {
          submitLogic(e.currentTarget);
        }
        break;
      case "Escape":
        e.currentTarget.blur();
    }
  }, []);

  // ~~~ Painting

  const messages = useMemo(
    () =>
      data?.pages
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
        .reverse(),
    [data, dataUpdatedAt]
  );

  const loadingScreen = useMemo(() => {
    if (!isInitialLoading) return null;
    return <LoadingScreen />;
  }, [isInitialLoading]);

  const errorScreen = useMemo(() => {
    if (!error) return null;

    if (error.cause) {
      switch (error.cause.code) {
        case 404:
          return <h2>Send din første melding til {recipientUsername}</h2>;
      }
    }

    return <ErrorComponent error={new Error(error.message)} />;
  }, [error]);

  return (
    <div className="user-chat">
      <section className="user-chat__history" ref={containerRef}>
        {loadingScreen ?? errorScreen ?? messages}
      </section>
      <form
        className="user-chat__compose"
        spellCheck={false}
        onSubmit={onSubmit}
      >
        <textarea
          placeholder={`Chat med ${recipientUsername}`}
          onKeyUp={onKeyUp}
        />
        <button title="Send" className="user-chat__compose__send">
          <img src="/images/send-message.svg" alt="paper plane" />
        </button>
        <div className="user-chat__compose__controls">
          <button>
            <img src="/images/wrench.svg" />
          </button>
          <button>Op2</button>
        </div>
      </form>
    </div>
  );
};

export default Melding;

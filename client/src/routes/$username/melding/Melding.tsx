import "./Melding.style.scss";
import {
  InfiniteData,
  useInfiniteQuery,
  useMutation,
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
import { queryClient } from "src/index";
import { IChatMessagePage } from "src/types/entities/Chat";
import LoadingScreen from "src/components/LoadingScreen/LoadingScreen";

const pageSize = 20;

const Melding = () => {
  const { authState } = useAuth();
  const { username: recipientUsername } = useParams();

  // ~~~ Query logic

  const queryKey = useMemo(
    () => [`/chats`, authState, recipientUsername],
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
    meta: {
      params: `?target=${recipientUsername}&size=${pageSize}`,
      token: authState.token,
    },
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

  const reachedFinalPage = useMemo(() => {
    return !!data?.pages.at(-1)?.last;
  }, [data]);

  const onScroll = useCallback(() => {
    switch (false) {
      case isFetching:
      case reachedFinalPage:
      case !containerRef.current:
        const { offsetTop, getClientRects } =
          containerRef.current as HTMLElement;
        const { top } = getClientRects()[0];

        const hasReachedTop = top === offsetTop;

        if (!hasReachedTop) return;

        fetchNextPage();
    }
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

  const loadingScreen = useMemo(() => {
    if (!isInitialLoading) return null;
    return <LoadingScreen />;
  }, [isInitialLoading]);

  const errorScreen = useMemo(() => {
    if (!error) return null;
    if (parseInt(error.message) === 404)
      return <p>Send din første melding til {recipientUsername}</p>;
    return <ErrorComponent error={error} />;
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

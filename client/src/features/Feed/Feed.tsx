import "./Feed.style.scss";
import { useCallback, useEffect, useMemo, useRef } from "react";
import { InfiniteData, useInfiniteQuery } from "@tanstack/react-query";
import { useAuth } from "src/auth/Auth.Provider";
import { IProjectsPage } from "src/types/models/Project";
import { ErrorComponent } from "@tanstack/react-router";
import FeedItems from "./FeedItems";

const apiUri = import.meta.env.VITE_API_V1_URL;

interface IFeed {
  filters: {
    [key: string]: string | number;
  };
}

const Feed = ({ filters }: IFeed) => {
  const { authState } = useAuth();

  // ~~~ Query logic

  const placeholderData = useMemo(() => {
    const placeHolders = [];

    for (let i = 0; i < 20; i++) {
      placeHolders.push({
        content: [
          {
            title: "",
            description: "",
            projectId: i,
          },
        ],
      });
    }

    return { pages: placeHolders } as InfiniteData<IProjectsPage>;
  }, []);

  const queryKey = ["/feed", { filters, token: authState.token }];

  const { isFetching, data, error, fetchNextPage, isPlaceholderData, refetch } =
    useInfiniteQuery<IProjectsPage>({
      queryKey,
      enabled: !!authState.token,
      placeholderData,

      onSuccess: async (data) => {
        const lastPage = data.pages.at(-1);

        if (!lastPage) return;

        const projectIds = lastPage?.content.map(
          (project) => project.projectId
        );

        fetch(`${apiUri}/users/history`, {
          method: "POST",
          body: JSON.stringify(projectIds),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authState.token}`,
          },
        });
      },
    });

  const updates = {
    projectId: 109,
    title: "lol",
  };

  //const testMut = useMutation({
  //  mutationFn: () => {
  //    const { token } = authState;
  //    if (!token) throw new Error("Authentication error");
  //    return updateProject(updates, token);
  //  },
  //  onSuccess: () => {
  //    refetch();
  //    //queryClient.invalidateQueries(["/feed"]);
  //  },
  //});

  const containerRef = useRef<HTMLUListElement>(null);

  const reachedFinalPage = useMemo(() => {
    return !data?.pages.at(-1)?.hasNextPage;
  }, [data]);

  // ~~~ Scrolling

  const onScroll = useCallback(() => {
    if (!!isFetching) return;
    if (!!reachedFinalPage) return;
    if (!containerRef.current?.lastChild) return;

    const lastChild = containerRef.current.lastChild as HTMLLIElement;
    const { top } = lastChild.getBoundingClientRect();

    const hasPassedBoundary = top < window.innerHeight * 2;
    if (!hasPassedBoundary) return;

    fetchNextPage();
  }, [isFetching, reachedFinalPage, containerRef, fetchNextPage]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

  const errorScreen = useMemo(() => {
    if (!error) return null;
    return <ErrorComponent error={error} />;
  }, [error]);

  return (
    <ul className="feed" role="feed" ref={containerRef}>
      {errorScreen ?? (
        <FeedItems data={data} isPlaceholderData={isPlaceholderData} />
      )}
    </ul>
  );
};

export default Feed;

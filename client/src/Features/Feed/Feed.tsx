import { useQuery } from "@tanstack/react-query";
import { FeedItem } from "./FeedItem";

const feedItems = [
  {
    id: 1,
    title: "Awesome Project",
    description: "This is an awesome project. An awesome project this is.",
  },
  {
    id: 2,
    title: "Awesome Project 2",
    description: "This is an awesome project. An awesome project this is.",
  },
  {
    id: 3,
    title: "Mediocre project",
    description: "This is an awesome project. An awesome project this is.",
  },
  {
    id: 4,
    title: "Bunnies and chips",
    description: "This is an awesome project. An awesome project this is.",
  },
  {
    id: 5,
    title: "Random name for random project",
    description: "This is an awesome project. An awesome project this is.",
  },
  {
    id: 6,
    title: "Blarghhh",
    description: "This is an awesome project. An awesome project this is.",
  },
];

export const Feed = () => {
  const { status, data, error, isFetching, isLoading } = useQuery({
    queryKey: ["/users"],
  });

  console.log(data);

  return (
    <main className="feed" role="feed">
      {feedItems.map((item) => (
        <FeedItem
          title={item.title}
          description={item.description}
          key={item.id}
        />
      ))}
    </main>
  );
};

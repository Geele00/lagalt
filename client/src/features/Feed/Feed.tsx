import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { fetchUsers } from "src/api/v1/users";
import { AuthProvider } from "src/auth/AuthProvider";
import { useUser } from "src/index";
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
  const { data, error, isLoading, isSuccess } = useQuery({
    queryKey: ["/users"],
    queryFn: fetchUsers,
  });

  const user = useUser();

  useEffect(() => {
    user.logIn({ username: "wes", uuid: "2983usdljk" });
  }, []);

  console.log(user.username);

  console.log(data);

  // data.map((user: any) => console.log(user));

  return isLoading ? (
    <div>Loading gif</div>
  ) : error ? (
    <div>Error</div>
  ) : (
    <main className="feed" role="feed">
      <p>{isSuccess && data[0].username}</p>
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

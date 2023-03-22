import { Explore } from "src/features/Explore/Explore";
import Feed from "src/features/Feed/Feed";

const filters = {
  size: 20,
  sort: "createdAt,desc",
};

const Home = () => {
  return (
    <>
      {/*<Explore />*/}
      <Feed filters={filters} />
    </>
  );
};

export default Home;

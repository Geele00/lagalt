import "./FeedItem.scss";

interface IFeedItem {
  title: string;
  description: string;
}

export const FeedItem = ({ title, description }: IFeedItem) => {
  return (
    <article className="feed-item">
      <section className="feed-item__main">
        <h2>{title}</h2>

        <p>{description}</p>

        <footer>
          <p>Likes</p>
          <p>Comments</p>
          <p>10 hours ago</p>
        </footer>
      </section>

      <section className="feed-item__sidebar">menu</section>
    </article>
  );
};

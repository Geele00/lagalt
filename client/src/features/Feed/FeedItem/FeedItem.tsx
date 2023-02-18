import { IFeedItem } from ".";

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
          <p>Favourite</p>
        </footer>
      </section>

      <section className="feed-item__right">
        <img />
        <ul></ul>
      </section>
    </article>
  );
};

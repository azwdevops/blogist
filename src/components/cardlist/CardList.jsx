import Pagination from "../pagination/Pagination";
import styles from "./cardlist.module.css";
import Card from "../card/Card";

const getPosts = async (page) => {
  const response = await fetch(`http://localhost:3000/api/posts?page=${page}`, {
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error("Unable to fetch posts");
  }

  return response.json();
};

const CardList = async ({ page }) => {
  const data = await getPosts(page);
  console.log(typeof data);
  console.log(data);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {data?.map((item) => (
          <Card key={item?._id} item={item} />
        ))}
      </div>
      <Pagination page={page} />
    </div>
  );
};

export default CardList;

import styles from "../styles/Home.module.css";
import useSwr from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  return (
    <div className={styles.container}>
      <main>
        <h1>My thing!</h1>
        <RandomWidget />
      </main>
    </div>
  );
}

const RandomWidget = () => {
  const { data } = useSwr<{ randomThing: number }>(
    "/api/random-thing",
    fetcher
  );

  if (!data) {
    return <div>Loading...</div>;
  }

  return <div>Here's a random thing: {data.randomThing}</div>;
};

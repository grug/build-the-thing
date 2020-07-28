import styles from "../styles/Home.module.css";
import useSwr from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>My things!</h1>
      <RandomThing />
      <AnotherThing />
    </div>
  );
}

const AnotherThing = () => <div>Next.js is cool</div>;

const RandomThing = () => {
  const { data } = useSwr<{ randomThing: number }>(
    "/api/random-thing",
    fetcher,
    {
      revalidateOnFocus: false,
    }
  );

  if (!data) {
    return <div>Loading...</div>;
  }

  return <div>Random thing: {data.randomThing}</div>;
};

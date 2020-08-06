import styles from "../styles/Home.module.css";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>My things!</h1>
      <AnotherThing />
      <RandomThing />
    </div>
  );
}

const AnotherThing = () => {
  return <h1>My name is Dave!</h1>;
};

const RandomThing = () => {
  const { data } = useSWR<{ randomThing: number }>(
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

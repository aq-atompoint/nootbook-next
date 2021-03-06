import Head from "next/head";
import HomeTabs from "../Components/HomeTabs/HomeTabs";
import { useStyles } from "../styles/Home.style.js";

export default function Home() {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <Head>
        <title>Pivot</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HomeTabs />
      </main>
    </div>
  );
}

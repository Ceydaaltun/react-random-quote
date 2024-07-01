import Head from "next/head";
import { Playfair } from "next/font/google";
import styles from "@/styles/Home.module.css";
import FetchSWR from "./SWRFetch";

const playFair = Playfair({
  weight: ['500', '600'],
  subsets: ['latin'],
});

export default function Home() {
  return (
    <>
      <Head>
        <meta name="Daily Inspirational Quotes" content="Get daily random inspirational quotes." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Daily Inspirational Quotes</title>
        <link rel="icon" href="https://img.icons8.com/ios-filled/50/quote.png" />
      </Head>
      <main className={`${styles.main} ${playFair.className}`}>
        <FetchSWR />
      </main>
    </>
  );
};

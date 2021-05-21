import Head from "next/head";
import Link from "next/link";
import styles  from "../styles/Home.module.css";

export default function Home() {
  return (
      <>
          <Head>
              <title>Py List | Home</title>
              <meta name='keywords' content='py list'/>
          </Head>
          <div >
              <h1 className={styles.title}>Homepage</h1>
              <p className={styles.text}>what can i say</p>
              <p className={styles.text}>what can i say</p>
              <p className={styles.text}>what can i say</p>
              <Link href='/py'>
                  <a className={styles.btn}>See py listing</a>
              </Link>
          </div>
      </>
  )
}

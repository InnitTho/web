import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Saeko</title>
        <meta name="description" content="Saeko&apos;s website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hello!
        </h1>

        <p className={styles.description}>
          idk what to put here and im too quirky like dat to remove it
        </p>

        <div className={styles.grid}>
          <a href="https://drive.google.com/drive/folders/11XyJfKZqPPUBeUSG_SyZkasIttUGujsR?usp=sharing">
            <h2>SVP files &rarr;</h2>
            <p>SVP files I probably just got by 
              editing someone&apos;s VSQX or UST</p>
          </a>

          <a href="https://discord.gg/rsVMyBqP">
            <h2>Discord Server &rarr;</h2>
            <p>ded</p>
          </a>

        
        </div>
        </main>

        <footer className={styles.footer}>
            Website by Saeko
        </footer>
      </div>
  )
}

export default Home
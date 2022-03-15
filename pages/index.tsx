import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>hmmmm</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.description}>
        <h1 className={styles.title}>
          Hello!
        </h1>

        <p className={styles.description}>
          This is where I put all my stuff
        </p>

        <p className={styles.description}>
          ==================================================
        </p>

        <div className={styles.header}>
          <a href="https://drive.google.com/drive/folders/11XyJfKZqPPUBeUSG_SyZkasIttUGujsR?usp=sharing">
            <h2>SVP files</h2>
            <p>SVP files I probably just got by 
              editing someone&apos;s VSQX or UST</p>
          </a>

          <p className={styles.header}>
          --------------------------------------------------------------------------------
        </p>

          <a href="https://discord.gg/rsVMyBqP">
            <h2>Discord Server</h2>
            <p>ded</p>
          </a>

        
        </div>
        </main>

        <footer className={styles.footer}>
            made with the loss of my nerd points
        </footer>
      </div>
  )
}

export default Home
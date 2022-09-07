import Head from 'next/head'
import styles from './styles.module.scss'

export default function Posts() {
  return (
    <>
      <Head>
        <title>Post | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="">
            <time>12 de janeiro de 2022</time>
            <strong>Titulo teste</strong>
            <p>breve descrição teste</p>
          </a>
          <a href="">
            <time>12 de janeiro de 2022</time>
            <strong>Titulo teste</strong>
            <p>breve descrição teste</p>
          </a>
          <a href="">
            <time>12 de janeiro de 2022</time>
            <strong>Titulo teste</strong>
            <p>breve descrição teste</p>
          </a>
        </div>
      </main>
    </>
  )
}
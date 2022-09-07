import { GetStaticProps } from 'next'
import Head from 'next/head'
import Prismic from '@prismicio/client'
import { getPrismicClient } from '../../services/prismic'

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

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const response = await prismic.query([
    Prismic.Predicates.at('document.type', 'publication' )
  ], {
    fetch: ['publication.title', 'publication.content'],
    pageSize: 100,
  })

  console.log(response)

  return {
    props: {}
  }
}
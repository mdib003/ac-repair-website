import Head from 'next/head';

import Link from 'next/link';
import styles from '@component/styles/Home.module.css'
import { HomePageComponent } from '@component/src/components/HomePage';

export default function Home() {
  return (
    <>
      <Head>
      </Head>
      <main>
        <HomePageComponent />
      </main>
    </>
  )
}

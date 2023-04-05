import Head from 'next/head';
import { HomePageComponent } from '@component/src/components/HomePage';

export default function Home() {
  return (
    <>
      <Head>
        <title>HomeComfort India</title>
      </Head>
      <main>
        <HomePageComponent />
      </main>
    </>
  )
}

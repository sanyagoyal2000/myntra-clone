import Head from 'next/head'
import Header from "../components/Header"
import Banner from "../components/Banner"
import Footer from "../components/Footer"
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Online Shopping for Women Kids Lifestyle....</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <Banner/>
      <Footer/>
    </div>
  )
}

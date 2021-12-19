import Head from 'next/head'
import Header from "../components/Header"
import Banner from "../components/Banner"
import Footer from "../components/Footer"
import ProductFeed from "../components/ProductFeed"
export default function Home({products}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Online Shopping for Women Kids Lifestyle....</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      
      <Banner className="mt-6"/>
      <br/><br/><br/><br/>
      <br/><br/><br/><br/>
      <br/><br/><br/><br/>
      <ProductFeed products={products}/>
      <Footer/>
    </div>
  )
}

export async function getServerSideProps(context){
  const products=await fetch("https://fakestoreapi.com/products/category/women's%20clothing").then((res)=>res.json());

  return {
    props:{
      products,
    }
  };
}
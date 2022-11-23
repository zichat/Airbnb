import Head from 'next/head'
import Banner from '../components/Banner'
import Explore from '../components/Explore'
import Header from '../components/Header'
import LargeCard from '../components/LargeCard'
import LiveAnyWhere from '../components/LiveAnyWhere'
import Footer from '../components/Footer'

const errorValue = [{'img': 'error', 'title': 'error'}]

const Home = ({exploreData, cardData}) => {

  return (
    <div>
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* navigation */}
      <Header/>
      
      {/* header section of page */}
      <Banner/>

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>

        
        <Explore  exploreData = {exploreData}/>

        <LiveAnyWhere cardData = {cardData}/>

        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The greatest Outdoors"
          description="Wishlist curated by Airbnb"
          buttonText="Get Inspired"
        />
        
      </main>

      <Footer/>

    </div>
  )
}

export default Home;



export async function getStaticProps(){

  try {
    const exploreData = await fetch("https://www.jsonkeeper.com/b/4G1G").then(
      (res) => res.json()
    );

    const cardData = await fetch("https://www.jsonkeeper.com/b/VHHT").then(
      (res) => res.json()
    );

    if ((!exploreData) || (!cardData) ) {
      return{
        props:{
          exploreData: errorValue,
          cardData: errorValue
        }
      };
      
    };
    return {
      props: {
        exploreData,
        cardData

      }
    };
    

  } catch (error) {
    console.log('error:', error);
  }

}

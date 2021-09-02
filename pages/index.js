import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Explore from "../containers/explore";
import LiveAnyWhere from "../containers/liveAnyWhere";
import SmallCard from "../components/SmallCard";
import MeduimCard from "../components/MeduimCard";
import LargeCard from "../components/LargeCard";
import Footer from "../containers/footer";

export default function Home({ exploreData, cardsData }) {
  return (
    <div>
      <Head>
        <title>HostDeal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <Container>
        <Explore exploreData={exploreData} />
        <LiveAnyWhere cardsData={cardsData} />
        <LargeCard
          img="https://links.papareact.com/4cj"
          title="the Greatest Outdoors"
          description="Wishtlists curated by HostDeal"
          buttonText="Get Inspired"
        />
      </Container>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );

  const cardsData = await fetch("https://links.papareact.com/zp1").then((res) =>
    res.json()
  );

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}

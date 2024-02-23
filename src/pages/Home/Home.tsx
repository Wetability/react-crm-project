// * Base
import Intro from '../../components/Intro/Intro';
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import Catalog from '../../components/Catalog/Catalog';
import LatestNews from '../../components/LatestNews/LatestNews';
import Footer from '../../components/Footer/Footer';

function Home() {
  return (
    <>
      <Header />
      <main>
        <Intro />
        <Banner />
        <Catalog />
        <LatestNews />
        <Footer />
      </main>
    </>
  );
}

export default Home;

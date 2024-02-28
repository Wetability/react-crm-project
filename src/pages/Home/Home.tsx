// * Base
import Intro from '../../components/Intro/Intro';
import Banner from '../../components/Banner/Banner';
import Catalog from '../../components/Catalog/Catalog';
import LatestNews from '../../components/LatestNews/LatestNews';

function Home() {
  return (
    <>
      <main>
        <Intro />
        <Banner />
        <Catalog />
        <LatestNews />
      </main>
    </>
  );
}

export default Home;

// * Base
import Intro from '../../components/Intro/Intro';
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';

function Home() {
  return (
    <>
      <Header />
      <main>
        <Intro />
        <Banner />
      </main>
    </>
  );
}

export default Home;

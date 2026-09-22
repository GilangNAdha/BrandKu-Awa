import Hero from "../components/Hero";
import CardGrid from "../components/CardGrid";
import { featureData } from "../data/features";

const Home = () => {
  console.log("data :", featureData);

  return (
    <section>
      <Hero />
      <CardGrid features={featureData} />
    </section>
  );
};

export default Home;
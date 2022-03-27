import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { MostVisited } from "../components/MostVisited";
import { Layout } from "../components/Layout";
import "../style/global.css";

function LandingPage() {
  return (
    <Layout>
      <Hero />
      <MostVisited />
      <Footer />
    </Layout>
  );
}

export {LandingPage};

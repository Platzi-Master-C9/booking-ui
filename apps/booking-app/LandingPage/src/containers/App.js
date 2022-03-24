import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { MostVisited } from "../components/MostVisited";
import { Layout } from "../components/Layout";
import "../style/global.css";

function App() {
  return (
    <Layout>
      <Hero />
      <MostVisited />
      <Footer />
    </Layout>
  );
}

export default App;

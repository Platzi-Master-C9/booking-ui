import { Layout } from '../Layout';
import { Hero } from '../Hero';
import { MostVisited } from '../MostVisited';
import { Footer } from '../Footer';

function LandingPage() {
  return (
    <Layout>
      <Hero />
      <MostVisited />
      <Footer />
    </Layout>
  );
}

export default LandingPage;

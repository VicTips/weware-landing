import Header from "./components/header/Header";
import Features from "./components/features/Features";
import Reviews from "./components/reviews/Reviews"
import Faq from "./components/faq/Faq";
import Footer from "./components/footer/Footer"
import Teams from "./components/teams/Teams";

const App = () => {
  return (
    <div>
      <Header />
      <Teams />
      <Features />
      <Reviews />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;

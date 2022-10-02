import Navbar from "./components/navbar/Navbar";
import Features from "./components/features/Features";
import Reviews from "./components/reviews/Reviews"
import Faq from "./components/faq/Faq";
import Footer from "./components/footer/Footer"

const App = () => {
  return (
    <div>
      <Navbar />
      <Features />
      <Reviews />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;

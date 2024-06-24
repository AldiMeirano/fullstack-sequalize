import AllProduct from "../components/LandingPage/AllProduct";
import BookHoot from "../components/LandingPage/BookHo";

import Carousel from "../components/LandingPage/Corusel";
import Footer from "../components/LandingPage/Footer";
import UpCommingBook from "../components/LandingPage/UpCommingBook";

const LandingPage = () => {
  return (
    <div>
      <Carousel />

      <UpCommingBook />
      <BookHoot />
      <AllProduct />
      <Footer />
    </div>
  );
};

export default LandingPage;

import React from "react";
import { Navbar} from './components/navbar'
import { Carousel } from './components/carousel';
import { Footer } from "./components/footer";

 const Home = () => {
  return (
    <div className="container">
      <Navbar/>
    <Carousel />
    <Footer />
      </div>
  );
};
export default Home;
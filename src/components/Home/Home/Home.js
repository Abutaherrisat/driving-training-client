import React from "react";
import Header from "../Header/Header";
import OurClients from "../OurClients/OurClients";
import Services from "../Services/Services";
import FeaturedService from "../FeaturedService/FeaturedService";
import Reviews from "../Reviews/Reviews";
import Blogs from "../Blogs/Blogs";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Services></Services>
      <OurClients></OurClients>
      <FeaturedService></FeaturedService>
      <Reviews></Reviews>
      <Blogs></Blogs>
      <Footer></Footer>
    </div>
  );
};

export default Home;

import React from "react";
import featuredImg from "../../../images/man-driving-5.jpg";

const FeaturedService = () => {
  return (
    <section className="featured-service my-5 pb-md-5 pb-0">
      <div className="container mb-5">
        <div className="row mb-5">
          <div className="col-md-7 mb-4">
            <img className="img-fluid" src={featuredImg} alt="" />
          </div>
          <div className="col-md-5 align-self-center">
            <h1>Defensive Driving for New Clients</h1>
            <p className="text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              efacere amet aperiam non odio. Temporibus, nemo quasi quisquam
              ipsa distinctio saepe sed veniam incidunt, tempora mollitia,
              dignissimos repellendus expedita. Obcaecati minima, reiciendis
              optio aspernatur autem pariatur soluta illum velit, eligendi
              dolorem consequuntur sapiente rerum accusamus aut nulla
              praesentium! Neque autem animi, voluptatem magnam nesciunt officia
              nemo nam, delectus minima velit beatae iste praesentium ad
              repudiandae, similique excepturi sapiente.
            </p>
            <button className="btn btn-primary">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedService;

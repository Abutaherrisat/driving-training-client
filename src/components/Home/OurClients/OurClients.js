import React from "react";
import slideImg1 from "../../../images/instructor-with-client-1.jpg";
import slideImg2 from "../../../images/instructor-with-client-3.jpg";
import slideImg3 from "../../../images/man-driving-2.jpg";
import slideImg4 from "../../../images/woman-driving-1.jpg";
import slideImg5 from "../../../images/man-driving-4.jpg";
import slideImg6 from "../../../images/instructor-with-client-4.jpg";
const OurClients = () => {
  return (
    <div className="my-5 mx-3 text-center" style={{ height: "50%" }}>
      <h1>Some Of Our Clients</h1>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade mt-5"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="3000">
            <img src={slideImg1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img src={slideImg2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img src={slideImg3} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img src={slideImg4} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img src={slideImg5} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img src={slideImg6} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default OurClients;

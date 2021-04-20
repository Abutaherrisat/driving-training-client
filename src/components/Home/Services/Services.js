import React, { useEffect, useState } from "react";
import ServicesDetail from "../ServicesDetail/ServicesDetail";
import { Link } from "react-router-dom";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://sleepy-oasis-89562.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <section className="services-container mt-5">
      <div className="text-center">
        <h1 style={{ color: "#1cc7c1" }}>OUR SERVICES</h1>
        <h2>
          <span>
            <Link style={{ color: "#3a4256" }} to="/order/:`${name}`">
              Services
            </Link>
          </span>{" "}
          We Provide
        </h2>
      </div>
      <div className="d-flex justify-content-center">
        <div className="w-75 row mt-5 pt-5">
          {services.map((service) => (
            <ServicesDetail key={service._id} service={service}></ServicesDetail>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

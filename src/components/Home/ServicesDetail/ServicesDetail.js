import React from "react";
import { useHistory } from "react-router";

const ServicesDetail = ({ service }) => {
  const history = useHistory();
  const handleBuyService = () => {
    history.push(`/order/${service.title}`);
  };
  return (
    // <div className="col-md-4 text-center">
    //   <img style={{ height: "60%", width: "90%" }} src={service.img} alt="" />
    //   <h2 className="mt-3 mb-3">{service.name}</h2>
    //   <p className="text-secondary">
    //     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis,
    //     assumenda!
    //   </p>
    // </div>
    <div className="col-md-4 col-sm-12">
      <div className="service-item my-4" onClick={handleBuyService}>
        {service.image ? (
          <img
            style={{ height: "60%", width: "90%" }}
            src={`data:image/png;base64,${service.image.img}`}
          />
        ) : (
          <img
            style={{ height: "60%", width: "90%" }}
            className="img-fluid mb-3"
            src={`https://sleepy-oasis-89562.herokuapp.com/${service.img}`}
            alt=""
          />
        )}
        <h5 className="my-4">{service.title}</h5>
        <p style={{ color: "#707070" }}>{service.description}</p>
      </div>
    </div>
  );
};

export default ServicesDetail;

import React from "react";
import { useHistory } from "react-router";
import './ServicesDetail.css'
const ServicesDetail = ({ service }) => {
  const history = useHistory();
  const handleBuyService = () => {
    history.push(`/order/${service.title}`);
  };
  const serviceDetailStyle = {
    textAlign: 'center',
    borderRadius: '10px',
    border:'1px solid lightgrey',
    //   paddingLeft:'20px',
    //   paddingTop:'20px',
    //   cursor:'pointer',
    boxShadow: '20px 20px 20px grey'
  }
  return (
    <div className="col-md-4 col-sm-12">
      <div style={serviceDetailStyle} className="service-item my-4" onClick={handleBuyService}>
        {service.image ? (
          <img
            style={{ height: "180px", width: "90%", marginTop: "15px" }}
            src={`data:image/png;base64,${service.image.img}`} alt=''
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
        <p style={{ color: "#707070", padding: '15px',textAlign: 'justify'}}>{service.description}</p>
      </div>
    </div>
  );
};

export default ServicesDetail;

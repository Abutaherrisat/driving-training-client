import React from "react";
// import manDriving from "../../../images/slide03.jpg";

const HeaderMain = () => {
  return (
    <main style={{ height: "600px" }} className="row d-flex align-items-center">
      <div className="col-md-4 offset-md-1">
        <h1 style={{ color: "#F4CA59" }}>
          A Driving School <br /> You Can Rely On
        </h1>
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          perspiciatis explicabo sequi eveniet suscipit dolore.
        </p>
        <button className="btn btn-primary">GET APPOINMENT</button>
      </div>
    </main>
  );
};

export default HeaderMain;

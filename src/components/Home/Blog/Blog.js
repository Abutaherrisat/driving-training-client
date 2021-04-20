import React from "react";

const Blog = (props) => {
  const { img, title, description } = props.blog;
  return (
    <div className="col-md-4 d-flex align-items-center justify-content-center text-center">
      <div className="card shadow border">
        <div className="card-body">
          <img className='img-fluid' width="320" height="250" src={img} alt="" />
          <h6 className="text-primary">{title}</h6>
          <p className="m-0">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;

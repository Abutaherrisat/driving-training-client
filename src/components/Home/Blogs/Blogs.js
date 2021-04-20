import React from "react";
import safeDriving from "../../../images/blog-post-1.jpg";
import automaticCar from "../../../images/blog-post-2.jpg";
import drivingTest from "../../../images/blog-post-3.jpg";
import Blog from "../Blog/Blog";

const blogData = [
  {
    id:'1',
    img: safeDriving,
    title: "10 Safe Driving Tips for Your Employees",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ",
  },
  {
    id:'2',
    img: automaticCar,
    title: "Learn To Drive In An Automatic Car",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ",
  },
  {
    id:'3',
    img: drivingTest,
    title: "10 Reasons People Fail Their Driving Test",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ",
  },
];

const Blogs = () => {
  return (
    <section className="blogs my-5">
      <div className="container">
        <div className="section-header text-center">
          <h1>From Our Blogs</h1>
        </div>
        <div className="card-div row mt-5">
          {blogData.map((blog) => (
            <Blog key={blog.id} blog={blog}></Blog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;

import React from "react";
import "./BlogCard.css";

function BlogCard({ title, description, image }) {
  return (
    <div className="blog-card">
      <img src={image} alt="Blog" className="blog-card-image" />
      <div className="blog-card-content">
        <h2 className="blog-card-title">{title}</h2>
        <p className="blog-card-description">{description}</p>
      </div>
    </div>
  );
}

export default BlogCard;

import React from "react";
import BlogCard from "./BlogCard";

function App() {
  return (
    <div>
      <h1>Blog Card Example</h1>
      <BlogCard
        title="React Basics"
        description="Learn the fundamentals of React and build amazing applications."
        image="images/download (1).png"
      />
      <BlogCard
        title="Styling in React"
        description="Discover how to style React components with CSS and other methods."
        image="images/images.png"
      />
    </div>
  );
}

export default App;

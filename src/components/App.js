import React from "react";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import blogData from "../data/blog";

function App() {
  const blogName = "My Personal Blog"; // Replace with blogData.name if available
  const blogImage = "https://via.placeholder.com/215"; // You can also use a specific image from blogData
  const aboutText = "This is a blog about my experiences."; // Replace with blogData.about if available
  const blogPosts = blogData.posts; // Assuming blogData has a posts array

  return (
    <div className="App">
      <Header name={blogName} />
      <About image={blogImage} about={aboutText} />
      <ArticleList articles={blogPosts} />
    </div>
  );
}

export default App;

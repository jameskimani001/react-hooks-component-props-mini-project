
import React from 'react';
import Article from './Article';

const ArticleList = ({ articles }) => {
  return (
    <main>
      {articles.map((post) => (
        <Article 
          key={post.id} 
          title={post.title} 
          date={post.date || "January 1, 1970"} 
          preview={post.preview} 
        />
      ))}
    </main>
  );
};

export default ArticleList;

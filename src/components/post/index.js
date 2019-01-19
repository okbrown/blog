import React from 'react';

const Post = ({ title, subtitle, date, author, children }) => {
  return (
    <article className="blog-post">
      <div className="blog-header">
        <div>
          <h1>{title}</h1>
        </div>
        <div className="blog-meta">
          {date && <time>{date}</time>}
          {author && <span>by {author}</span>}
        </div>
      </div>
      {subtitle && <h2>{subtitle}</h2>}
      {children}
    </article>
  );
};

export default Post;

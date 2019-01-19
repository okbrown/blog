import React from 'react';
import { Link } from '@reach/router';

/*
const handleTags = (tags) => {
  const regex = /,/g;
  if (tags && tags.length) {
    const tagList = tags.toString();
    return tagList.replace(regex, ', ');
  }
};
*/

const PostListItem = ({ id, slug, date, title, subtitle, image, author, category, tags }) => {
  return (
    <article className="article-item">
      <div className="article-img">
        <Link to={`/${slug}/`}>
          <img {...image}/>
        </Link>
      </div>
      <div className="article-content">
        <Link to={`/${slug}/`}><h1>{title}</h1></Link>
        <div className="article-list-description">
          <p>
            {subtitle}
          </p>
        </div>
        <dl className="article-list-meta">
          <div className="article-list-meta-group">
            <div className="article-list-date">
              <dt>Date:</dt>
              <dd> {date} </dd>
            </div>
          </div>
          <div className="article-list-meta-group">
            <div className="article-list-author">
              <dt>Author:</dt>
              <dd>{author}</dd>
            </div>
          </div>
          <div className="article-list-meta-group">
            <div className="article-list-category">
              <dt>Category:</dt>
              <dd>{category}</dd>
            </div>
          </div>
          {/*
          <div className="article-list-meta-group">
            <div className="article-list-tags">
              <dt>Tags:</dt>
              <dd>{handleTags(tags)}</dd>
            </div>
          </div>
*/}
        </dl>
      </div>
    </article>
  );
};

export default PostListItem;

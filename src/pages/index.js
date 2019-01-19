import React from 'react';
import { withRouteData } from 'react-static';

import PostListItem from '../components/post-list-item';

export default withRouteData(({ posts }) => (
  <section className="article-list">
    {(posts && posts.length) && posts.map(post => <PostListItem key={post.id}{...post}/>)}
  </section>
));

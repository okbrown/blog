import config from 'config';
import posts from './src/posts';

const sortPosts = (a, b) => (a.id - b.id);
const getPosts = (post) => ({ path: `/${post.slug}`, component: post.component, getData: () => ({ post }) });
const getData = () => ({ posts });

export default {
  siteRoot:'https://orlandobrown.uk',
  getSiteData: async () => ({
    ...config
  }),
  getRoutes: async () => {
    const childrenPosts = posts.sort(sortPosts).map(getPosts);
    return [
      {
        path: '/',
        getData,
        children: childrenPosts
      }
    ];
  }
};

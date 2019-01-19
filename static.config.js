import postList from './src/posts';
const posts = postList.sort((a,b) => a.id - b.id);

export default {
  getSiteData: async () => ({
    siteRoot:'https://okbrown.github.io',
    siteTitle: 'Orlando Brown - The pixel pusher blog',
    header: {
      logoName: 'OB',
      mainMenuList: {
        className: 'main-menu',
        list: [ { name: 'Home', link: ' ' }, { name: 'About', link: 'about' } ]
      },
      socialMenuList: {
        className: 'social-menu',
        list: [
          {
            link: 'https://github.com/okbrown/',
            className: 'fab fa-github-square fa-2x'
          }, {
            link: 'https://twitter.com/orlandobrown_uk/',
            className: 'fab fa-twitter-square fa-2x'
          },
          {
            link: 'https://www.instagram.com/orlandobrown_uk/',
            className: 'fab fa-instagram fa-2x'
          }
        ]
      }
    },
    basepath:'blog'
  }),
  getRoutes: async () => {
    const getData = () => ({ posts });
    const childrenPosts = posts.map(post => ({
      path: `/${post.slug}`,
      component: post.component,
      getData: () => ({ post })
    }));

    return [
      {
        path: '/',
        getData,
        children: childrenPosts
      }
    ];
  }
};

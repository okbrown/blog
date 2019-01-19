
import universal, { setHasBabelPlugin } from '/Users/okbrown/DevProjects/Apps/okb-blog/okb-blog-v1/node_modules/react-universal-component/dist/index.js'


setHasBabelPlugin()

const universalOptions = {
  loading: () => null,
  error: props => {
    console.error(props.error);
    return <div>An error occurred loading this page's template. More information is available in the console.</div>;
  },
}

const t_0 = universal(import('../src/pages/404.js'), universalOptions)
const t_1 = universal(import('../src/pages/about.js'), universalOptions)
const t_2 = universal(import('../src/pages/index.js'), universalOptions)
const t_3 = universal(import('../src/posts/why-another-web-developer-blog.js'), universalOptions)
const t_4 = universal(import('../src/posts/challenging-our-comfort-zone.js'), universalOptions)
const t_5 = universal(import('../src/posts/to-fullstack-or-not-to-fullstack.js'), universalOptions)


// Template Map
export default [
  t_0,
t_1,
t_2,
t_3,
t_4,
t_5
]

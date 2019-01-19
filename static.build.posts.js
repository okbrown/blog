const fs = require('fs');
const { reactStaticCustom:{ postsLocation } } = require('./package.json');

const getPost = (data) => {
  const regex = /{(.|\n)*?},(.|\n)*?}/;
  const post = data.match(regex);
  return post[0];
};

const buildPost = async (file) => {
  try {
    const data = await fs.readFileSync(`./src/posts/${file}`, 'utf8');
    return getPost(data);
  }
  catch (e) {
    console.log('Build Post Error: ', e);
  }
};

const buildPosts = async (path) => {
  try {
    console.info(`=> Building Posts from ${path}`);
    const files = await fs
      .readdirSync(path)
      .filter(file => file !=='index.js');
    return await Promise.all(files.map(buildPost));
  }
  catch (e) {
    console.log('Build Post List Error: ', e);
  }
};

const writePostList = async (posts) => {
  try {
    const output = `const posts = [${posts}];\nexport default posts;`;
    console.info(`=> Writing Posts to ${postsLocation}`);
    await fs.writeFileSync('./src/posts/index.js', output);
  }
  catch (e) {
    console.log('Write Post List Error: ', e);
  }
};

buildPosts(postsLocation).then(writePostList);

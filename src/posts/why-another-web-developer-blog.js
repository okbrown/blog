import React from 'react';
import Post from '../components/post';
import HeaderImage from '../components/header-image';
import HighLight from '../components/highlight';

const post = {
  id: 1,
  date: '1st January 2019',
  title: "Why another web developer blog?",
  subtitle: "There is over 7.53 billion people in the world all with individual stories. How many will we know about?",
  description: `I started web development long before I knew I was to become a web developer, my journey is similar but not 
    the same as everyone else, though we learn the same things we learn them in different ways and its important that we 
    understand this. This blog is more about the nuances in and in between the learning, the experiences and the battles 
    within us.`,
  image: {
    src: "https://source.unsplash.com/y-mB90P-6DY",
    alt: "Sharing experiences as a web developer",
    caption: "Depending on how you choose to receive it",
  },
  category: "Personal",
  author: "Orlando Brown",
  tags: [ 'web developer', 'blog', 'journey' ],
  slug: 'why-another-web-developer-blog',
  component: "./src/posts/why-another-web-developer-blog.js"
};


const BlogPost = () => {
  return (
    <Post {...post}>
      <p>
        Well, to be honest I'm not interested in presenting something that has been done to death. I actually have had
        enough of reading articles on <HighLight>medium, dev.to</HighLight> and others about the same topics regarding
        programming (specifically) javascript frameworks, functional programming etc.
      </p>
      <HeaderImage {...post}/>
      <p>
        I was encouraged many times to start a blog and share my journey as a web developer, but at the time
        I felt I had nothing to offer, as my main points of reference (et al medium, stack, etc) seem to answer
        all everything. So how could I help anyone else. However over time I started asking my own questions
        no one could answer, leaving me to discover them for my self.
      </p>
      <p>
        This blog intends to explore the nuances in and in between the learning, the experiences and the battles we have
        developing the amazing applications we build. Some posts will be my thoughts, questions, discoveries, the odd guide
        and more importantly my honest point of view on how and what I believe we should be doing with all this technology
        were building.
      </p>
      <p>
        You will find I have strong opinions about a fair number of things, from code to life, all of it your welcome
        to agree or disagree, I hope to learn from this experience and learn from yours so its all good what ever comes
        from this.
      </p>
      <p>
        I hope your able to get something from this.
      </p>
      <i>Orlando.</i>
    </Post>
  );
};

export default BlogPost;

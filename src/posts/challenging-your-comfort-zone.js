import React from 'react';
import Post from '../components/post';
import PostLink from '../components/link';
import HighLight from '../components/highlight';
import HeaderImage from '../components/header-image';
import UnsplashImage from '../components/unsplash-image';

const post = {
  id: 2,
  date: "12th January 2019",
  title: "Challenging your comfort zone",
  subtitle: "Knowing when to take the training wheels off and really understand how things work.",
  description: `In this post, I talk about when I started learning React, via the help of CRA, the Create React App 
    CLI tool and how helpful it was to get building and learning react apps, however very quickly it become obvious 
    that I need to learn things like webpack was really working and how to setup everything from scratch`,
  image: {
    src: "https://source.unsplash.com/GUSPPE-NjH8",
    alt: "Challenging you to rise above the fear of the unknown in web development",
    caption: "RTFM"
  },
  category: "Javascript",
  author: "Orlando Brown",
  slug: 'challenging-your-comfort-zone',
  tags: [ "create react app", "react", "webpack" ],
  component: "./src/posts/challenging-your-comfort-zone.js"
};

const BlogPost = () => {
  return (
    <Post {...post}>
      <p>
        Hands up how many of you waited for React to mature a bit more before getting into it?
        How many made the jump when
        <HighLight>
          <PostLink
            url="https://reactjs.org/blog/2015/01/27/react-v0.13.0-beta-1.html"
            target="_blank"
          >
            react@0.13.0-beta.1
          </PostLink>
        </HighLight> arrived or when <i>Create-React-App</i> was released?
      </p>
      <p>
        Well I was one. Prior to then I played about with React but was still happy with Angular's all in one solution.
        Until I stumbled across CRA, and thought cool, I dont have to learn all this boilerplate just to get
        something up and running.
      </p>
      <HeaderImage {...post}/>
      <p>
        Few months deep into a new project went by and that dreaded moment came when I had to take the training wheels
        off.
        The feeling of losing my safety blanket started approach. I needed to add some functionality
        that required me to <HighLight>eject</HighLight> the project and start getting into the nitty gritty
        of what webpack is really doing.
      </p>

      <p>
        I was reluctant at first and investigated many workarounds to avoid having to lose the comfort of having
        all the work done for me. But it had to be done.
      </p>

      <p>
        But before I ejected I decided to take time with webpack's documentation and really embrace the horror to come.
        Well that is what I thought. The thing is, i've learned over the many years solving problems to be never afraid
        of
        the new. Because you always get used to it. We quickly forget how simple it is while it becomes second nature.
      </p>

      <p>
        What baffles me is, as a kid I was always curious and fearless. I would dismantle my sony walkman, piece by
        piece and put it back together again and it be good as new. Along with my atari 2600, my commodore 64 and many
        other
        gadgets and toys. I recall repairing family turntable (phono/vinyl player for the millennials reading this) many
        times,
        along with finding abandoned old speakers in an attempt to build my own personal sound system. More on this
        another time.
      </p>
      <UnsplashImage id="Fk6Hj4-FFWw"/>
      <p>
        So why is it that im older I sometimes find my self afraid to get under the hood of some code to see whats
        really
        going on. I think it might be laziness or having it to good not fully sure on that one.
        Either way I strongly suggest to find the time to be curious and tap into that fearless side and take a peak
        behind vale, its not that scary. I promise.
      </p>
    </Post>
  );
};

export default BlogPost;

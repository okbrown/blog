import React from 'react';
import Post from '../components/post';
import HeaderImage from '../components/header-image';
import UnsplashImage from '../components/unsplash-image';

const post = {
  id: 3,
  date: '19th January 2019',
  title: "To Fullstack or not to Fullstack",
  subtitle: "Why do we get drawn into these pointless and meaningless definitions and buzzwords?",
  description: `There is this opinion I hear a lot that you cannot be good at everything, as if you should not try 
  to be good at more than one thing. It is a confusing and potentially debilitating theme, that I personally do not 
  care for. I would like to see more people doing the things they love or would love to do and not allowing others 
  tell them they should do one thing.`,
  image: {
    src: "https://source.unsplash.com/F2WX4BTIkpQ",
    alt: "What do you really want?",
    caption: "You should define whats important to you.",
  },
  category: "Javascript",
  author: "Orlando Brown",
  tags: [ 'full stack', 'javascript', 'programming' ],
  slug: 'to-fullstack-or-not-to-fullstack',
  component: "./src/posts/to-fullstack-or-not-to-fullstack.js"
};

const BlogPost = () => {
  return (
    <Post {...post}>
      <p>
        If it's one phrase I truly despise the most it's the one that goes "jack of all trades master of none".
      </p>
      <p>
        The person who came up with this phrase was a single minded tunnel vision hater. You know those people who are
        simply jealous that you can do more than one thing or have more than one interest.
      </p>
      <HeaderImage {...post}/>
      <p>
        I have acquired skills and knowledge from all my experiences. Short, small, long and large. I have worked in
        customer services, sales, delivery, burger flipping (where I'm from your not real if you didn't do the standard
        McDonald's job in your teens. It teaches you humility and patience), secretarial work, data entry, stock room
        operations, and studio engineering. And all this was before I started university.
      </p>
      <p>
        University taught me a whole heap of other things and I gained new skills during that time also.
      </p>
      <p>
        If your like me, who knows how to apply and use life's lessons to everyday problems you see the world slightly
        different. For example I grew up in the 80's where we had VHS tapes, my logic was if you can operate a video
        player you can operate a washing machine and visa versa. To me it was the same, it took a command and
        executed it. All you had to do was experiment a bit to find the right buttons to press.
      </p>
      <p>
        Some people read manuals some press buttons and hope for something to happen. Nothing wrong with either approach.
        (Albeit back then you could potentially break it lol)
      </p>
      <p>
        There's nothing wrong with being curious and interested in other things. And no, you won't miss out
        or be distracted, providing your honest to yourself about whether or not it's really for you.
      </p>
      <p>
        Recently at work a conversation about "...what is a Full Stack Developer?" came up and the same typical
        comments as mentioned above came flying out of my colleagues mouths without even a thought to where they
        got that thinking from.
      </p>
      <p>
        Me being me, I interjected and asked what does it matter in the grand scheme of things?
        We all have our specialities in this office, we all know who to lean on when we get a little lost in areas we are
        not familiar with and if it is an area that interests us we naturally pay attention and soak up all the information
        we can to solve our problem. So who really cares.
      </p>
      <UnsplashImage id="geM5lzDj4Iw"/>
      <p>
        Forget the buzz words and do what you love and if it is to be a full stack developer, you define what that means
        so that you do not get lost in all the fog.
      </p>
    </Post>
  );
};

export default BlogPost;

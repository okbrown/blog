import React from 'react';
import Post from '../components/post';

export default () => (
  <Post
    title="About"
    subtitle="Father, Web Developer and occasional beat maker"
  >
    <div className="about-me">
      <h3>Languages</h3>
      <ul className="about-me-list">
        <li>JavaScript</li>
        <li>Currently learning Scala</li>
      </ul>
      <h3>Skills</h3>
      <ul className="about-me-list">
        <li>
          <strong>Frontend: </strong>
          HTML, CSS, SASS, React, Angular, EJS, jQuery,
        </li>
        <li>
          <strong>Backend: </strong>
          NodeJS, MySQL, Postgres, MongoDB, DynamoDB, Redis, AWS*,
        </li>
        <li>
          <strong>Tools: </strong>
          Webpack, Gulp, NPM, Yarn, Verdaccio, Docker, CI/CD (CircleCi & Jenkins)
        </li>
      </ul>
      <h3>Projects</h3>
      <ul className="about-me-list">
        <li>Time to leave (PWA)</li>
        <li>What I did yesterday</li>
        <li>What to wear</li>
      </ul>
      <h3>Interests</h3>
      <ul className="about-me-list">
        <li>Black British History</li>
        <li>Comics (mostly by Image Publishing)</li>
        <li>Art (mostly my kids drawings)</li>
        <li>Go Karting</li>
        <li>Snow boarding</li>
        <li>Racing Games</li>
        <li>Music production (long time Akai MPC user)</li>
        <li>Sound engineering</li>
        <li>All round tinkerer</li>
      </ul>
    </div>
  </Post>
)

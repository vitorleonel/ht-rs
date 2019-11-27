import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>hello world</h1>
      <Link to="/main">main</Link>
    </div>
  );
};

export default Home;

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = props => {
  useEffect(() => {
    props.history.push('/login');
  }, []);

  return <div />;
};

export default Home;

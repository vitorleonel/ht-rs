import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

const CardList = ({ children }) => {
  return <Container>{children}</Container>;
};

export default CardList;

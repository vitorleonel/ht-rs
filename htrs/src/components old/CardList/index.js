import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

const CardItem = ({ children }) => {
  return <Container>{children}</Container>;
};

export default CardItem;

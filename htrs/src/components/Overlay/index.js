import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FadedBackground, Container } from './styles';

const Overlay = ({ Header, Body, Footer }) => {
  return (
    <FadedBackground>
      <Container>
        <div className="modal-header">
          <span>{Header}</span>
        </div>
        <div className="modal-body">{Body}</div>
        <div>{Footer}</div>
      </Container>
    </FadedBackground>
  );
};

export default Overlay;

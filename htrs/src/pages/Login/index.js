import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function Login() {
  return (
    <Container>
      <Link to="/school" tag="a">
        Entrar como escola
      </Link>

      <Link to="/teacher" tag="a">
        Entrar como palestrante
      </Link>
    </Container>
  );
}

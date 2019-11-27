import React, { useState } from 'react';
import { withRouter } from 'react-router';
import { user } from '../../assets/images';
import { Container, AvatarImg, ProfileBtn, HeaderLink } from './styles';

const Header = props => {
  const [userData, setUserData] = useState({ name: 'aaaa' });
  const [showMenu, setShowMenu] = useState(false);
  // fetch
  const type = props.location.pathname;

  return (
    <Container>
      <div className="header-left">TechNaEscola</div>
      {type === '/teacher' && (
        <>
          <HeaderLink to="#">Minha Agenda</HeaderLink>
          <HeaderLink to="#">Palestras Disponíveis</HeaderLink>
        </>
      )}
      {type === '/school' && (
        <>
          <HeaderLink to="#">Meu Cronograma</HeaderLink>
        </>
      )}
      <div className="profile-btn">
        <AvatarImg src={user} alt="avatar" />
        <ProfileBtn onClick={() => setShowMenu(!showMenu)}>Perfil</ProfileBtn>
      </div>
    </Container>
  );
};

export default withRouter(Header);

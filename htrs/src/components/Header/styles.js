import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100vw;
  height: 70px;
  background: transparent;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  border-bottom: 1px solid #ddd;

  .header-left {
    width: 80px;
    font-size: 1rem;
    padding: 10px;
    font-weight: bold;
  }

  .profile-btn {
    width: 110px;
    font-size: 1rem;

    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-right: 5px;
  }
`;

export const AvatarImg = styled.img`
  width: 40px;
  border-radius: 50%;
`;

export const ProfileBtn = styled.button`
  text-decoration: none;

  font-size: 1rem;
  border: none;
  background: transparent;
  cursor: pointer;
`;

export const HeaderLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`;

import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 16px;
  background-color: #006064;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  padding: 16px;
  width: 100%;
  max-width: 560px;
  background-color: white;
  border-radius: 8px;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 16px;
  margin-bottom: 16px;
  border-bottom: 1px solid #eeeeee;
`;

export const HeaderImage = styled.img`
  width: 64px;
  height: 64px;
  object-fit: cover;
  object-position: center;
  border-radius: 64px;
  margin-right: 16px;
`;

export const HeaderContent = styled.div`
  flex: 1;
`;

export const HeaderName = styled.h2`
  font-size: 20px;
  text-transform: uppercase;
`;

export const HeaderTech = styled.span`
  display: block;
  margin-top: 4px;
  color: #757575;
  text-transform: uppercase;
`;

export const Body = styled.div`
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  width: 100%;
  height: 44px;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  text-transform: uppercase;
  background-color: #006064;
  color: white;
  margin-top: 16px;
`;

export const Questions = styled.div``;

export const Question = styled.div`
  & + & {
    margin-top: 1rem;
  }
`;

export const QuestionLabel = styled.div`
  margin-bottom: 8px;

  strong {
    display: inline-block;
    background-color: #ccc;
    padding: 4px 8px;
    border-radius: 8px;
  }
`;

export const QuestionSelect = styled.select`
  width: 100%;
  height: 44px;
  border: 1px solid #eeeeee;
  font-size: 16px;
`;

export const StarsContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 0;

  p {
    margin-bottom: 32px;
    font-weight: bold;
  }
`;

export const StarsItems = styled.div`
  display: flex;
  justify-content: space-around;
  direction: rtl;

  > * + * {
    margin-right: 1rem;
  }
`;

export const StarsItem = styled(FaStar)`
  font-size: 56px;
  color: #cccccc;
  cursor: pointer;

  &:hover,
  &:hover ~ &,
  &.selected,
  &.selected ~ & {
    fill: #fdd835;
  }
`;

export const Finished = styled.div`
  text-align: center;
  padding: 32px 0;
`;

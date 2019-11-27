import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: #00bcd4;
  height: 100%;
  padding: 20px;
`;

export const CardList = styled.ul`
  width: 100%;
  background: #ddd;
  height: 800px;
  overflow-y: auto;
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 10px;
`;

export const CardItem = styled.li`
  width: 100%;
  background: #fff;
  &:hover {
    background: ${({ date }) => (date ? '#fff' : '#eee')};
  }
  border: 1px solid white;
  margin: 10px auto;
  border-radius: 5px;
  list-style-type: none;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .item-header {
    border-bottom: 1px solid #eee;
    text-align: left;
    padding: 0 0 16px 0;
    width: 100%;

    span {
      font-weight: bold;
      text-transform: uppercase;
    }
  }
  .item-body {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 100%;

    .item-body-card {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: flex-start;
      height: 80%;
      width: 100%;
      padding: 16px;

      .item-body-card-title {
        text-transform: uppercase;
        color: #00bcd4;
        font-weight: bold;
      }
    }

    .tech-text {
      width: 450px;
      margin-left: 10px;
    }

    .date {
      width: 150px;
    }

    .last {
      width: 250px;
      border: 1px solid transparent;
      &:hover {
        cursor: ${({ date }) => (date ? 'pointer' : 'default')};
        border: ${({ date }) => (date ? '1px solid rgba(0,0,0,0.3)' : 'none')};
        border-radius: 8px;
      }
    }

    .school {
      width: 250px;
    }

    .item-body-avatar {
      width: 40px;
    }
  }

  .join-button {
    width: 100%;
    background: #00bcd4;
    border-radius: 6px;
    border: none;
    height: 64px;
    color: #eee;
    font-size: 16px;
    font-weight: bold;
  }
`;

export const AvatarImg = styled.img`
  width: 50px;
  border-radius: 50%;
`;

export const ModalHeader = styled.div`
  height: 50px;
  width: 430px !important;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;

  img {
    width: 40px;

    border-radius: 50%;
  }

  span {
    color: #aaa;
  }

  .modal-header-teacher {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  .modal-header-teacher-name {
    font-weight: bold;
    color: #000;
    font-size: 0.9rem;
  }

  .modal-header-teacher-score {
    span {
      font-size: 1.3rem;
      font-weight: bold;
      color: orange;
    }
    width: 35px;
  }
`;

export const ModalBody = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 160px;

  input {
    width: 350px;
    height: 30px;
    padding-left: 10px;
  }

  span {
    width: 350px;
    font-size: 0.9rem;
    text-align: left;
    margin: 5px 0;
  }

  .modal-user-contact {
    height: 40px;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }

  .modal-user-link {
    /* margin-left: 20px; */
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 20px;
    width: 50%;
  }
`;

export const ModalFooter = styled.div`
  width: 100%;

  .cancel-button {
    background: transparent;
    border: 1px solid #00bcd4;
    color: #00bcd4;
    font-weight: bold;
  }
`;

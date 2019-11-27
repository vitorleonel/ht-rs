import React, { useState } from 'react';
import { FaGithub, FaPhone } from 'react-icons/fa';
import { Overlay } from '../../../components';
import { user } from '../../../assets/images';
import {
  Container,
  CardList,
  CardItem,
  AvatarImg,
  ModalBody,
  DateButton,
  ModalHeader,
} from './styles';

const fakeList = [
  {
    id: 1,
    nome: 'fake title',
    tecnologia: 'html',
    descricao:
      'descricao de html Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, esse!',
    instrutor: 'mateus',
    data: '11/11/1111',
  },
  {
    id: 2,
    nome: 'fake title 2',
    tecnologia: 'css',
    descricao:
      'descricao de css Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, esse!',
    instrutor: 'mateus',
    data: '11/11/1111',
  },
  {
    id: 3,
    nome: 'fake title 3',
    tecnologia: 'js',
    descricao:
      'descricao de js Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, esse!',
    instrutor: 'mateus',
    data: '',
  },
];
const School = () => {
  const [showModal, setShowModal] = useState(false);
  const [showUserModal, setShowUserModal] = useState(false);
  const [classesList, setClassesList] = useState(fakeList);
  // TODO fetch

  const ModalContent = (
    <ModalBody>
      <span>DATA</span>
      <input placeholder="dd/mm/aaaa" />
      <span>HORA</span>
      <input placeholder="hh/mm" />
    </ModalBody>
  );

  const UserModalHeader = (
    <ModalHeader>
      <div className="modal-header-avatar">
        <img src={user} alt="palestrante" />
        <div className="modal-header-teacher">
          <span className="modal-header-teacher-name">TODO NAME</span>
          <span>PROGRAMADOR</span>
        </div>
      </div>
      <div className="modal-header-teacher-score">
        <span>4.5</span>
      </div>
    </ModalHeader>
  );

  const ModalFooter = (
    <button type="button" onClick={() => setShowModal(false)}>
      SALVAR
    </button>
  );

  const UserModalContent = (
    <ModalBody>
      <span className="modal-user-description">
        Descrição sobre as especialidades do instrutor palestrante
        <br />
        <br />
      </span>
      <div className="modal-user-contact">
        <span className="modal-user-link">
          <FaPhone color="#333" size={18} />
          (48) 99777 7777
        </span>

        <span className="modal-user-link">
          <FaGithub color="#333" size={18} />
          github.com/lara
        </span>
      </div>
    </ModalBody>
  );

  const UserModalFooter = (
    <button type="button" onClick={() => setShowUserModal(false)}>
      FECHAR
    </button>
  );

  const handleDataModal = date => {
    if (!date) setShowModal(true);
  };

  return (
    <>
      {showModal && (
        <Overlay
          Header="DEFINIR DATA"
          Body={ModalContent}
          Footer={ModalFooter}
        />
      )}
      {showUserModal && (
        <Overlay
          Header={UserModalHeader}
          Body={UserModalContent}
          Footer={UserModalFooter}
        />
      )}
      <Container>
        <CardList className="container">
          {classesList.map(({ id, tecnologia, descricao, data, instrutor }) => (
            <CardItem key={id} date={data}>
              <div className="item-header">
                <span>TODO Calc mes</span>
              </div>
              <div className="item-body">
                <div className="item-body-avatar">
                  <AvatarImg src={user} alt="avatar" />
                </div>
                <div className="item-body-card tech-text">
                  <span className="item-body-card-title">{tecnologia}</span>
                  <span>{descricao}</span>
                </div>
                <div className="item-body-card date">
                  <span className="item-body-card-title">DATA</span>
                  <span onClick={() => handleDataModal(data)}>
                    {data || <DateButton>Agendar</DateButton>}
                  </span>
                </div>

                <div
                  className="item-body-card last"
                  onClick={() => setShowUserModal(true)}
                >
                  {data && (
                    <>
                      <span className="item-body-card-title">Instrutor</span>
                      <span>{instrutor}</span>
                    </>
                  )}
                </div>
              </div>
            </CardItem>
          ))}
        </CardList>
      </Container>
    </>
  );
};

export default School;

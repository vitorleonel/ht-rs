import React, { useState } from 'react';
import { user } from '../../../assets/images';
import { Overlay } from '../../../components';
import {
  Container,
  CardList,
  CardItem,
  AvatarImg,
  ModalBody,
  ModalHeader,
  ModalFooter,
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

const Teacher = () => {
  const [showModal, setShowModal] = useState(false);
  const [classesList, setClassesList] = useState(fakeList);
  // TODO fetch

  const UserModalHeader = (
    <ModalHeader>
      <div className="modal-header-avatar">
        <img src={user} alt="palestrante" />
        <div className="modal-header-teacher">
          <span className="modal-header-teacher-name">TODO NAME</span>
          <span>Descrição da Palestra</span>
        </div>
      </div>
      <div className="modal-header-teacher-score">
        <span>4.5</span>
      </div>
    </ModalHeader>
  );

  const ModalContent = (
    <ModalBody>
      <span className="modal-user-description">
        Descrição sobre as especialidades do instrutor palestrante
        <br />
        <br />
      </span>
      <div className="modal-user-contact"></div>
    </ModalBody>
  );

  const UserModalFooter = (
    <ModalFooter>
      <button
        type="button"
        onClick={() => setShowModal(false)}
        className="cancel-button"
      >
        CANCELAR
      </button>
      <button type="button" onClick={() => setShowModal(false)}>
        SIM, PALESTRAR
      </button>
    </ModalFooter>
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
          Footer={UserModalFooter}
        />
      )}
      <Container>
        <CardList>
          <h4>Palestras Disponíveis</h4>
          <br />
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

                <div className="item-body-card school">
                  <span className="item-body-card-title">ESCOLA</span>
                  <span>Escola rural do MIT</span>
                </div>

                <div className="item-body-card date">
                  <span className="item-body-card-title">DATA</span>
                  <span>{data}</span>
                </div>

                <div className="item-body-card last">
                  <span className="item-body-card-title">Endereço</span>
                  <span>Rua do evento XYZ Pindamonhangaba SP</span>
                </div>
              </div>
              <button
                type="button"
                className="join-button"
                onClick={() => setShowModal(true)}
              >
                PALESTRAR
              </button>
            </CardItem>
          ))}
        </CardList>
      </Container>
    </>
  );
};

export default Teacher;

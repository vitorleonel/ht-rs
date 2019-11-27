import React, { useState, useEffect } from 'react';
import { user } from '../../../assets/images';
import { Overlay, OverlayLoader } from '../../../components';
import {
  Container,
  CardList,
  CardItem,
  AvatarImg,
  ModalBody,
  ModalFooter,
} from './styles';
import api from '../../../services/api';

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
  const [loading, setLoading] = useState(true);
  const [classesList, setClassesList] = useState(fakeList);
  // TODO fetch
  useEffect(() => {
    const fetchTalks = async () => {
      const talks = await api.get('/talks');
      console.log('talks', talks.data[0]);
      setClassesList(talks.data);
      setLoading(false);
    };
    fetchTalks();
  }, []);

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

  return (
    <>
      {showModal && (
        <Overlay
          Header="DEFINIR DATA"
          Body={ModalContent}
          Footer={UserModalFooter}
        />
      )}
      {loading ? (
        <OverlayLoader loading={loading} />
      ) : (
        <Container>
          <CardList>
            <br />
            {classesList.map(({ id, course, date, school }) => (
              <CardItem key={id} date={date}>
                <div className="item-header">
                  <span>Palestra disponível</span>
                </div>
                <div className="item-body">
                  <div className="item-body-avatar">
                    <AvatarImg src={user} alt="avatar" />
                  </div>
                  <div className="item-body-card tech-text">
                    <span className="item-body-card-title">
                      {course && course.name}
                    </span>
                    <span>{course && course.description}</span>
                  </div>

                  <div className="item-body-card school">
                    <span className="item-body-card-title">ESCOLA</span>
                    <span>Escola rural do MIT</span>
                  </div>

                  <div className="item-body-card date">
                    <span className="item-body-card-title">DATA</span>
                    <span>{date && date.split('T')[0]}</span>
                  </div>

                  <div className="item-body-card last">
                    <span className="item-body-card-title">Endereço</span>
                    <span>
                      {school && school.address}, {school && school.city}
                    </span>
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
      )}
    </>
  );
};

export default Teacher;

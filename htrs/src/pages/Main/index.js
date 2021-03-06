import React from 'react';
import { withRouter } from 'react-router-dom';
import Teacher from './Teacher';
import School from './School';
import Alumni from './Alumni';
import { Container, Header } from '../../components';

const Main = props => {
  // const [userType, setUserType] = useState('school');

  const handleUserType = () => {
    const type = props.location.pathname;
    if (type === '/teacher') return <Teacher />;
    if (type === '/school') return <School />;
    if (type === '/alumni') return <Alumni />;
    return <h3>Erro carregando dados</h3>;
  };
  return (
    <>
      <Header />
      <Container>
        {/* <div style={{ background: 'orange' }}>
          <button type="button" onClick={() => setUserType('teacher')}>
            Palestrante
          </button>
          <button type="button" onClick={() => setUserType('school')}>
            Escola
          </button>
        </div> */}
        {handleUserType()}
      </Container>
    </>
  );
};

export default withRouter(Main);

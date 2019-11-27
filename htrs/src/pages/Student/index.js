import React, { useState } from 'react';

import {
  Container,
  Content,
  Header,
  HeaderImage,
  HeaderContent,
  HeaderName,
  HeaderTech,
  Body,
  Button,
  Questions,
  Question,
  QuestionLabel,
  QuestionSelect,
  StarsContent,
  StarsItems,
  StarsItem,
  Finished,
} from './styles';

export default function Student() {
  const [displayStars, setDisplayStars] = useState(false);
  const [finished, setFinished] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState(null);

  function answersHandler() {
    setLoading(true);

    setTimeout(() => {
      setDisplayStars(true);
      setLoading(false);
    }, 1000);
  }

  function evaluationHandler() {
    if (!selected) {
      alert('Selecione uma nota antes de enviar a avaliação!');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setFinished(true);
      setLoading(false);
    }, 1000);
  }

  function _renderQuestions() {
    return (
      <>
        <Questions>
          {[1, 2, 3, 4, 5].map(number => (
            <Question>
              <QuestionLabel>
                {number}. Qual a diferença da tag <strong>br</strong> para a{' '}
                <strong>p</strong>?
              </QuestionLabel>

              <QuestionSelect>
                <option>Selecione uma resposta</option>
                <option>
                  A tag BR coloca um paragrafo, enquanto a P quebra linha
                </option>
                <option>
                  A tag P coloca o texto em negrito, enquanto a BR quebra linha
                </option>
              </QuestionSelect>
            </Question>
          ))}
        </Questions>

        <Button disabled={loading} onClick={answersHandler}>
          {loading ? 'Aguarde...' : 'Enviar Respostas'}
        </Button>
      </>
    );
  }

  function _renderStars() {
    return (
      <>
        <StarsContent>
          <p>Qual sua nota para o palestrante?</p>

          <StarsItems>
            {['5', '4', '3', '2', '1'].map(item => (
              <StarsItem
                className={selected === item ? 'selected' : ''}
                onClick={() =>
                  selected === item ? setSelected(null) : setSelected(item)
                }
              />
            ))}
          </StarsItems>
        </StarsContent>

        <Button disabled={loading} onClick={evaluationHandler}>
          {loading ? 'Aguarde...' : 'Enviar Avaliação'}
        </Button>
      </>
    );
  }

  return (
    <Container>
      <Content>
        <Header>
          <HeaderImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" />

          <HeaderContent>
            <HeaderName>Matheus Azevedo</HeaderName>
            <HeaderTech>Html</HeaderTech>
          </HeaderContent>
        </Header>

        <Body>
          {!finished && (
            <>{displayStars ? _renderStars() : _renderQuestions()}</>
          )}

          {finished && <Finished>Parabéns, até a proxima palestra!</Finished>}
        </Body>
      </Content>
    </Container>
  );
}

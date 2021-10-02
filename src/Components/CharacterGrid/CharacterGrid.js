import React from 'react'
import styled from 'styled-components'
import { Character } from './../Character/Character'

const Container = styled.div`
  width: 95%;
  display: grid;
  grid-template-columns: repeat(auto-fill, calc(95% / 4));
  grid-template-rows: repeat(auto-fill, calc(150px));
  justify-content: space-between;
  align-content: end;
  gap: 10px 10px;
  margin: 0 auto;

  @media screen and (max-width: 1400px) {
    grid-template-columns: repeat(auto-fill, calc(95% / 3));
  }

  @media screen and (max-width: 1200px) {
    grid-template-rows: repeat(auto-fill, calc(100vh / 7.5));
  }

  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, calc(95% / 2));
  }

  @media screen and (max-width: 768px) {
    & {
      grid-template-columns: repeat(auto-fill, calc(95% / 2));
      grid-template-rows: repeat(auto-fill, 130px);
    }
  }
  @media screen and (max-width: 600px) {
    & {
      width: 100%;
      grid-template-columns: repeat(auto-fill, 95%);
      justify-content: center;
    }
  }
  @media screen and (max-width: 350px) {
    grid-template-columns: repeat(auto-fill, 92%);
  }
`

export const CharacterGrid = ({ characters }) => {
  return (
    <Container>
      {characters.map((character) => (
        <Character key={character.id} character={character} />
      ))}
    </Container>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  grid-template-rows: 100%;
  overflow: hidden;
  background: rgb(60, 62, 68);
  border-radius: 0.5rem;
  margin: 0.3rem;
  box-shadow: rgb(0 0 0 / 10%) 0px 4px 6px -1px,
    rgb(0 0 0 / 6%) 0px 2px 4px -1px;

  @media screen and (max-width: 768px) {
    & {
      height: 130px;
      margin: 0;
      font-size: 14px;
    }
  }
`

const Image = styled.div`
  img {
    max-width: 100%;
    max-height: 100%;
    height: 100%;
  }
`

const Description = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto;
  padding: 0.5rem 0.75rem;

  text-align: left;
  position: relative;
  color: rgb(255, 255, 255);

  .section {
    display: flex;
    flex-direction: column;
  }

  .name-link {
    color: rgb(245, 245, 245);
    text-decoration: none;
    &:hover {
      color: rgb(255, 152, 0);
    }
  }

  .name {
    font-size: 17px;
    margin: 0;
  }

  .status {
    display: flex;
    align-items: center;
    font-weight: 500;
  }

  @media screen and (max-width: 500px) {
    .name {
      font-size: 16px;
    }
  }
`

export const Character = ({ character }) => {
  return (
    <Container>
      <Image>
        <img src={character.image} alt={character.name} />
      </Image>
      <Description>
        <div className="section">
          <Link
            to={`/characters/${character.id}`}
            className={'name-link'}
            href="/"
          >
            <h2 className={'name'}>{character.name}</h2>
          </Link>
        </div>
        <div className="section">
          <span className={'status'}>Status: {character.status}</span>
          <span className={'status'}>Species: {character.species}</span>
        </div>
        <div className="section">
          <span className={'gender'}>Gender: {character.gender}</span>
          <span className={'type'}>Type: {character.type}</span>
        </div>
      </Description>
    </Container>
  )
}

import React, { useEffect, useState } from 'react'
import { useRouteMatch } from 'react-router'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { charactersApi } from '../../api/characters'
import { Character } from './../Character/Character'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height 100vh;
  position: fixed;

  overflow: hidden;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
`

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  background: rgba(0, 0, 0, 0.2);
`

const Inner = styled.div`
  padding: 20px;
  border-radius: 8px;
  background: rgb(60, 62, 68);

  color: #fff;

  z-index: 3;

  .episode {
    display: grid;
    grid-template-columns: auto auto;
    justify-content: start;
    gap: 10px;
    margin: 5px 0;
    &__name {
      font-weight: 500;
      font-size: 18px;
      color: rgb(255, 152, 0);
    }
    &__episode {
      color: #fff;
    }
  }

  @media screen and (max-width: 768px) {
    .episode {
      &__name {
        font-size: 16px;
      }
    }
  }
  @media screen and (max-width: 400px) {
    width: 80vw;
  }
`

export const CharacterModal = () => {
  const match = useRouteMatch()
  const history = useHistory()
  const characterId = match.params.id
  const [character, setCharacter] = useState(null)
  const [episodes, setEpisodes] = useState(null)
  const [error, setError] = useState({ text: null })

  useEffect(() => {
    ;(async () => {
      const response = await charactersApi.getCharacterById(characterId)
      if (!response) return setError({ text: 'Something goes wrong' })
      setCharacter(response.result)
      const newEpisodes = response.result.episode
        .slice(0, 10)
        .map((episode) => loadEpisodeInfo(episode))
      Promise.all(newEpisodes).then((data) => setEpisodes(data))
    })()
  }, [characterId])

  const loadEpisodeInfo = async (episode) => {
    const info = await charactersApi.getEpisodeByUrl(episode)
    if (!info) {
      return setError({ text: 'Error while fetching episode information' })
    }
    return info
  }
  const closeModal = () => {
    history.replace('/')
  }

  if (error.text) {
    return (
      <Container>
        <Overlay />
        <Inner>
          <h2>{error.text}</h2>
        </Inner>
      </Container>
    )
  }
  if (!error.text && !character) {
    return (
      <Container>
        <Overlay />
        <Inner>
          <h2>Загрузка</h2>
        </Inner>
      </Container>
    )
  }

  return (
    <Container>
      <Overlay onClick={closeModal} />
      <Inner>
        <h2>Character Details</h2>
        <Character character={character} />
        <div>
          <h3>Episodes: </h3>
          {episodes?.map((episode) => (
            <div className={'episodes'} key={episode.id}>
              <div className="episode">
                <span className="episode__epispde">{episode.episode}</span>
                <span className="episode__name">{episode.name}</span>
              </div>
            </div>
          ))}
        </div>
      </Inner>
    </Container>
  )
}

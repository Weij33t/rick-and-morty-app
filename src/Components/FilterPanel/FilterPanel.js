import React, { useState } from 'react'

import styled from 'styled-components'
import { Input } from '../Shared/Input'
import { Button } from '../Shared/Button'

const Container = styled.div`
  width: 95%;
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 25px;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 20px 0;

  font-size: 18px;
  font-weight: 500;

  @media screen and (max-width: 1200px) {
    & {
      margin: 0 auto;
      & > div,
      & > button {
        justify-self: start;
      }

      font-size: 16px;
    }
  }
  @media screen and (max-width: 900px) {
    grid-template-columns: auto;
    grid-rows-columns: auto;
  }

  @media screen and (max-width: 600px) {
    width: 95%;
  }

  @media screen and (max-width: 350px) {
    width: 92%;
  }
`

export const FilterPanel = ({ getCharactersByFilter }) => {
  const [gender, setGender] = useState('Male')
  const [status, setStatus] = useState('Alive')
  const [name, setName] = useState('')
  const [species, setSpecies] = useState('')
  const [type, setType] = useState('')

  const toggleAliveStatus = () => {
    if (status === 'Alive') setStatus('Died')
    else if (status === 'Died') setStatus('Unknown')
    else setStatus('Alive')
  }

  const toggleGender = () => {
    if (gender === 'Male') setGender('Female')
    else if (gender === 'Female') setGender('Genderless')
    else if (gender === 'Genderless') setGender('Unknown')
    else setGender('Male')
  }

  const resetFilters = () => {
    setGender('Male')
    setStatus('Alive')
    setName('')
    setSpecies('')
    setType('')
    getCharactersByFilter({
      gender: '',
      name: '',
      status: '',
      species: '',
      type: '',
    })
  }

  return (
    <Container>
      <div>
        Filter by: &nbsp;
        <Input
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder={'Name'}
        />{' '}
        <Input
          onChange={(e) => setSpecies(e.target.value)}
          value={species}
          placeholder={'Species'}
        />{' '}
        <Input
          onChange={(e) => setType(e.target.value)}
          value={type}
          placeholder={'Type'}
        />
      </div>
      <div>
        Character is:&nbsp;
        <Button value={status} onClick={() => toggleAliveStatus()} />{' '}
        <Button value={gender} onClick={() => toggleGender()} />{' '}
      </div>
      <div>
        <Button
          value={'Filter'}
          onClick={() =>
            getCharactersByFilter({ gender, name, status, species, type })
          }
        />
        &nbsp;
        <Button
          value={'X'}
          className={'reset'}
          onClick={() => resetFilters()}
        />
      </div>
    </Container>
  )
}

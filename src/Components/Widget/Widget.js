import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { charactersApi } from '../../api/characters'
import { CharacterGrid } from '../CharacterGrid/CharacterGrid'
import { FilterPanel } from '../FilterPanel/FilterPanel'
import { Pagination } from '../Pagination/Pagination'

const Container = styled.div``

export const Widget = () => {
  const [characters, setCharacters] = useState([])
  const [totalPagesNumber, setTotalPagesNumber] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [filters, setFilters] = useState({})
  const [error, setError] = useState({ text: null })

  useEffect(() => {
    ;(async () => {
      const response = await charactersApi.getAllCharacters()
      analyzeResponse(response)
    })()
  }, [])

  const analyzeResponse = (response) => {
    if (!response) return setError({ text: 'Data fetching error' })
    if (response.results === undefined) {
      setCharacters([])
      setError({ text: 'Nothing found' })
      setTotalPagesNumber(0)

      return null
    }
    setCharacters(response.results)
    setTotalPagesNumber(response.pages)
    setError({ text: null })
  }

  const getCharactersByFilter = async (filter) => {
    setFilters(filter)
    const response = await charactersApi.getCharactersByFilter(filter)
    analyzeResponse(response)
    setCurrentPage(1)
  }

  const changePage = async (page) => {
    const response = await charactersApi.getPage(page, filters)
    analyzeResponse(response)
    setCurrentPage(page)
  }

  return (
    <Container>
      <FilterPanel getCharactersByFilter={getCharactersByFilter} />
      {!error.text && <CharacterGrid characters={characters} />}
      {!error.text && (
        <Pagination
          changePage={changePage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPagesNumber={totalPagesNumber}
        />
      )}
      {error.text && <h1>{error.text}</h1>}
    </Container>
  )
}

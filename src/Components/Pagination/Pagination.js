import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from './../Shared/Button'

const Container = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
`

export const Pagination = ({
  totalPagesNumber,
  changePage,
  currentPage,
  setCurrentPage,
}) => {
  const PAGE_LOAD_STEP = 3
  const SCROLL_BAR_WIDTH = 18
  let pagesAtOnce = window.innerWidth < 768 + SCROLL_BAR_WIDTH ? 9 : 15
  pagesAtOnce =
    window.innerWidth < 500 + SCROLL_BAR_WIDTH ? 6 : Math.min(pagesAtOnce, 15)
  const [offset, setOffset] = useState(0)
  const [limit, setLimit] = useState(pagesAtOnce)

  const pageClickHandler = (newCurrentPage) => {
    if (newCurrentPage > limit - PAGE_LOAD_STEP) {
      if (limit + PAGE_LOAD_STEP > totalPagesNumber) {
        setLimit(totalPagesNumber)
        setOffset(totalPagesNumber - pagesAtOnce)
      } else {
        setLimit(limit + PAGE_LOAD_STEP)
        setOffset(offset + PAGE_LOAD_STEP)
      }
      setCurrentPage(newCurrentPage)
    } else if (newCurrentPage < offset + 1 + PAGE_LOAD_STEP) {
      setLimit(Math.max(limit - PAGE_LOAD_STEP, pagesAtOnce))
      setOffset(Math.max(0, offset - PAGE_LOAD_STEP))
      setCurrentPage(newCurrentPage)
    } else setCurrentPage(newCurrentPage)
    changePage(newCurrentPage)
  }

  const createPages = () => {
    const pages = []

    for (let i = offset; i < Math.min(limit, totalPagesNumber); i++) {
      const newPage = (
        <Button
          key={i}
          value={i + 1}
          className={currentPage === i + 1 && 'active'}
          onClick={() => pageClickHandler(i + 1)}
        />
      )
      pages.push(newPage)
    }
    return pages
  }
  return <Container>{createPages()}</Container>
}

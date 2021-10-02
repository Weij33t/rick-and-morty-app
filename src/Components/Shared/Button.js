import React from 'react'
import styled from 'styled-components'

const Btn = styled.button`
  width: max-content;
  height: 35px;
  padding: 7px 10px;
  background: rgb(60, 62, 68);

  border: none;
  border-radius: 3px;
  outline: none;

  font-weight: 500;
  font-family: unset;
  font-size: 16px;
  color: #fff;

  cursor: pointer;

  &.active,
  &:focus,
  &:hover {
    padding: 7px 10px;
    color: rgb(255, 152, 0);
    border-bottom: 2px solid rgb(255, 152, 0);
  }

  .reset {
    font-size: 10px;
    width: 16px;
    height: 16px;
    padding: 0;
    &:hover {
      padding: -2px 0;
    }
  }

  @media screen and (max-width: 900px) {
    & {
      height: 30px;
      padding: 4px 10px;
      font-size: 15px;
    }
    &.active,
    &:hover {
      padding-top: 5px !important;
    }
  }
`

export const Button = ({ value, ...rest }) => {
  return (
    <Btn className={rest.className} {...rest}>
      {value}
    </Btn>
  )
}

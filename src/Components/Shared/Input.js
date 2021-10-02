import React from 'react'
import styled from 'styled-components'

const Inp = styled.input`
  width: max-content;
  height: 25px;
  padding: 7px 10px;
  background: rgb(60, 62, 68);

  border: none;
  outline: none;
  border-radius: 3px;

  font-weight: 500;
  font-family: unset;
  font-size: 16px;
  color: #fff;

  &.active,
  &:focus {
    border-bottom: 3px solid rgb(255, 152, 0);
    padding-bottom: 4px;
    color: rgb(255, 152, 0);
    background: rgb(60, 62, 68);
  }

  @media screen and (max-width: 1200px) {
    & {
      min-width: 100px;
      width: 12vw;
    }
  }

  @media screen and (max-width: 900px) {
    width: 10vw;
    font-size: 15px;
    padding: 5px 8px;
    &.active,
    &:focus {
      padding-bottom: 2px;
    }
  }

  @media screen and (max-width: 500px) {
    & {
      min-width: 40px;
      width: 17vw;
      height: 20px;

      font-size: 14px;
    }
  }

  @media screen and (max-width: 350px) {
    & {
      width: 15vw;
      height: 20px;

      font-size: 13px;
    }
  }
`

export const Input = ({ ...rest }) => {
  return <Inp className={rest.value && 'active'} {...rest} />
}

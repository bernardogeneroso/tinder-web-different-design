import styled from 'styled-components'
import { transparentize } from 'polished'

export const Container = styled.div``

export const Button = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 100%;
  color: #e94057;
  background-color: ${transparentize(0.8, '#E94057')};
  outline: 0;
  border: 0;
  height: 56px;
  font-size: 1.4rem;
  font-weight: bold;
  border-radius: 1.5rem;
  text-align: start;
  padding: 2rem;
  margin-top: 1.6rem;
  margin-bottom: 1rem;

  transition: filter 0.2s;

  svg {
    margin-right: 0.8rem;
  }

  /*&:hover {
        filter: brightness(0.8);
      }*/

  .react-datepicker__day--keyboard-selected {
    background-color: #e94057;
  }

  input.date-picker-tinder {
    cursor: pointer;
    width: inherit;
    font-size: 1.4rem;
    border: 0;
    background: transparent;
    color: transparent;

    &::placeholder {
      color: #e94057;
      font-weight: bold;
    }
  }
`

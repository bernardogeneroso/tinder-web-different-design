import styled, { css } from 'styled-components'

interface ContainerProps {
  isError: boolean
}

export const Container = styled.div<ContainerProps>`
  cursor: pointer;
  flex: 1;
  position: relative;
  border-radius: 15px;
  border: 1px solid #e8e6ea;
  padding: 1.6rem 2rem;
  text-align: start;

  ${(props) =>
    props.isError
      ? css`
          padding: 1.6rem 2rem 0.2rem 2rem;
        `
      : css`
          padding: 1.6rem 2rem;
        `}

  & + div {
    margin-top: 1.6rem;
  }

  div.label {
    position: absolute;
    top: -14px;
    left: 12px;
    background-color: #f1f1f1;
    padding-right: 0.6rem;
    padding-left: 0.6rem;

    span {
      font-size: 12px;
      font-weight: normal;
      color: #7a7878;
    }
  }

  input {
    outline: 0;
    border: 0;
    background: transparent;
    color: #000;
    font-size: 1.4rem;
  }

  textarea {
    width: 100%;
    height: 100%;
    resize: none;
    outline: 0;
    border: 0;
    background: transparent;
    color: #000;
    font-size: 1.4rem;
  }

  span.error {
    font-size: 11px;
    font-weight: normal;
    color: #e94057;
  }
`

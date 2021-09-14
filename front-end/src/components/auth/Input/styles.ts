import styled from 'styled-components'

interface ContentProps {
  error: boolean
}

export const Container = styled.div`
  border-radius: 3rem;

  & + div {
    margin-top: 0.8rem;
  }

  p.error {
    text-align: start;
    padding-top: 0.2rem;
    margin: 0;
  }
`

export const Content = styled.div<ContentProps>`
  display: flex;
  flex-direction: row;
  border-radius: inherit;
  border: 0.1rem solid ${(props) => (props.error ? '#fe5166' : '#303742')};

  height: 5.6rem;

  div.icon {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 1.6rem;
    padding-right: 1.6rem;
  }

  input {
    width: 100%;
    border: 0;
    background-color: transparent;
    font-size: 1.6rem;
    font-weight: 400;
    color: #303742;
    border-top-right-radius: 3rem;
    border-bottom-right-radius: 3rem;

    &::placeholder {
      color: #303742;
    }
  }
`

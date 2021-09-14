import styled from 'styled-components'

interface ContainerProps {
  text: string
}

export const Container = styled.button<ContainerProps>`
  position: relative;
  margin-top: 2.4rem;
  background: linear-gradient(to right, #fd297b, #ff5864, #ff655b);
  border: 0;
  height: 56px;
  border-radius: 3rem;
  font-size: 16px;
  font-weight: 400;
  color: #fff;

  &:after {
    display: flex;
    justify-content: center;
    align-items: center;
    content: '${(props) => props.text}';
    opacity: 0;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border-radius: inherit;
    transition: opacity 0.3s;
    background: linear-gradient(to left, #fd297b, #ff5864, #ff655b);
  }

  &:hover:after {
    opacity: 1;
  }
`

import styled from 'styled-components'

export const Container = styled.div`
  padding: 1rem;
  border-radius: 0.8rem;
  background: #fff;
  text-align: center;
  text-decoration: none;
  color: #7a7878;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`

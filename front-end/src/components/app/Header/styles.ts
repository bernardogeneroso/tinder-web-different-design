import styled from 'styled-components'
import { animated } from 'react-spring'

export const Container = styled(animated.div)`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #fff;
  padding: 2rem 8rem;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);

  svg {
    cursor: pointer;
    color: #7a7878;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    width: 125px;
    height: 125px;
  }
`

export const ContentUser = styled.div`
  margin-left: 2.8rem;
  display: flex;
  flex-direction: row;

  img {
    margin-right: 1.6rem;
    width: 56px;
    height: 56px;
    border-radius: 2.8rem;
  }

  div.welcome-message {
    margin: auto;
    display: flex;
    flex-direction: column;

    span {
      font-size: 1.6rem;
    }

    span.welcome {
      color: #696868;
    }

    span.username {
      font-weight: 500;
      color: #fe5166;
    }
  }
`

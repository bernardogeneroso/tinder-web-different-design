import styled from 'styled-components'
import { Link } from 'react-router-dom'

import ContainerAnimation from '../../components/app/ContainerAnimation'

export const Container = styled.div`
  height: 100vh;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`

export const ContainerOptions = styled(ContainerAnimation)`
  overflow-x: hidden;
  flex: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  padding: 2rem;
`

export const Content = styled(Link)``

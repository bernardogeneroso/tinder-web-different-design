import styled from 'styled-components'

export const Container = styled.div`
  position: sticky;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const Content = styled.div`
  position: relative;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  touch-action: none;
`

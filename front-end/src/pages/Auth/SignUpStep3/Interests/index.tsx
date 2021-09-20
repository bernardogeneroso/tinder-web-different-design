import { SpringValue } from 'react-spring'
import SelectInterests from './SelectInterests'

import { Container, Content } from './styles'

interface InterestsProps {
  style: {
    x: SpringValue<number>
    opacity: SpringValue<number>
    display: SpringValue<string>
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  bind: any
}

export default function Interests({ style, bind }: InterestsProps) {
  return (
    <Container style={style} {...bind()}>
      <Content>
        <p>
          Select a few of your interests and let everyone know what you’re
          passionate about.
        </p>

        <SelectInterests />
      </Content>
    </Container>
  )
}

import { useSpring } from 'react-spring'

import { Container, Step } from './styles'

interface StepsProps {
  step: 1 | 2 | 3
}

export default function Steps({ step }: StepsProps) {
  const styles = useSpring({
    to: { translateY: 0, opacity: 1 },
    from: { translateY: -250, opacity: 0 },
  })

  return (
    <Container style={styles}>
      <div className="content">
        {[1, 2, 3].map((stepOption) => (
          <Step key={stepOption.toString()} isActive={stepOption === step}>
            Step {stepOption}
          </Step>
        ))}
      </div>

      <div className="line" />
    </Container>
  )
}

import { useState } from 'react'
import { useTransition, config } from 'react-spring'

// eslint-disable-next-line import/no-cycle
import { GenderOptions } from '..'
import { Container, ContainerGender, Content } from './styles'

interface SelectGenderProps {
  modal: boolean
  handleSetGender(genderOption: GenderOptions, index: number): void
}

const genderMoreOptions: GenderOptions[] = [
  'Gay',
  'Lesbian',
  'Hetero',
  'Intersex',
  'Transgender',
  'Bisexual',
]

export default function SelectGender({
  modal,
  handleSetGender,
}: SelectGenderProps) {
  const [genderGhost, setGenderGhost] = useState<GenderOptions>(
    'Chose another gender'
  )

  const transitions = useTransition(modal, {
    from: { translateY: -20, opacity: 0 },
    enter: { translateY: 0, opacity: 1 },
    leave: { translateY: -20, opacity: 0 },
    config: config.stiff,
  })

  function handleClickGender(gender: GenderOptions) {
    setGenderGhost(gender)
    handleSetGender(gender, 2)
  }

  return (
    <Container>
      <span>{genderGhost}</span>

      {transitions(
        (styles, item) =>
          item && (
            <ContainerGender style={styles}>
              {genderMoreOptions.map((genderOption) => (
                <Content
                  key={genderOption}
                  onClick={() => handleClickGender(genderOption)}
                  isActive={genderGhost === genderOption}
                >
                  {genderOption}
                </Content>
              ))}
            </ContainerGender>
          )
      )}
    </Container>
  )
}

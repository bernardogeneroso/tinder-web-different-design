import { useState, useCallback } from 'react'
import { SpringValue, useSpring } from 'react-spring'
import { FiCheck } from 'react-icons/fi'

import ChevronAnimation from './ChevronAnimation'
// eslint-disable-next-line import/no-cycle
import SelectGender from './SelectGender'

import { Container, GenderContent } from './styles'

export type GenderOptions =
  | 'Man'
  | 'Woman'
  | 'Chose another gender'
  | 'Gay'
  | 'Lesbian'
  | 'Hetero'
  | 'Intersex'
  | 'Transgender'
  | 'Bisexual'
type GenderType = [number, GenderOptions] | null

const genderList: GenderOptions[] = ['Man', 'Woman', 'Chose another gender']

interface GenderOptionProps {
  isActive: boolean
  index: number
  gender: GenderOptions
  extra: boolean
  modal: boolean
  handleSetGender(genderOption: GenderOptions, index: number): void
  handleToggleModalGender(): void
}

function GenderOption({
  isActive,
  index = 0,
  gender = 'Man',
  modal = false,
  extra = false,
  handleToggleModalGender,
  handleSetGender,
}: GenderOptionProps) {
  const styles = useSpring({
    background: isActive ? '#fe5166' : '#fff',
    color: isActive ? '#fe5166' : '#7A7878',
  })

  function handleClickGender() {
    handleSetGender(gender, index)

    if (extra || modal) handleToggleModalGender()
  }

  return (
    <GenderContent
      style={styles}
      isActive={isActive}
      onClick={handleClickGender}
    >
      {extra ? (
        <SelectGender {...{ modal, handleSetGender }} />
      ) : (
        <span>{gender}</span>
      )}

      {extra ? <ChevronAnimation {...{ modal }} /> : <FiCheck size={20} />}
    </GenderContent>
  )
}

interface GenderProps {
  style: {
    display: SpringValue<string>
    opacity: SpringValue<number>
    x: SpringValue<number>
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  bind: any
}

export default function Gender({ bind, style }: GenderProps) {
  const [gender, setGender] = useState<GenderType>(null)
  const [modal, setModal] = useState(false)

  const handleToggleModalGender = useCallback(() => {
    setModal((state) => !state)
  }, [])

  const handleSetGender = useCallback(
    (genderOption: GenderOptions, index: number) => {
      setGender([index, genderOption])
    },
    []
  )

  return (
    <Container {...bind()} style={style}>
      {genderList.map((genderI, i) => (
        <GenderOption
          key={genderI}
          index={i}
          gender={genderI}
          isActive={genderI === gender?.[1]}
          handleSetGender={handleSetGender}
          extra={i === genderList.length - 1}
          modal={modal}
          handleToggleModalGender={handleToggleModalGender}
        />
      ))}
    </Container>
  )
}

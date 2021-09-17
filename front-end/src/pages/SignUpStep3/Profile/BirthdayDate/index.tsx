import { useMemo, useState } from 'react'
import { HiOutlineCake } from 'react-icons/hi'
import DatePicker from 'react-datepicker'
import { format, subYears } from 'date-fns'

import { Container, Button } from './styles'

export default function BirthdayDate() {
  const [dateSelected, setDateSelected] = useState<Date | null>(null)

  const date = useMemo(() => {
    return dateSelected ? format(dateSelected, 'dd/MM/yyyy') : null
  }, [dateSelected])

  function handleSelectDay(dateReceived: Date) {
    setDateSelected(dateReceived)
  }

  return (
    <Container>
      <Button onClick={() => dateSelected && setDateSelected(null)}>
        <HiOutlineCake size={24} />

        {!date ? (
          <DatePicker
            className="date-picker-tinder"
            maxDate={subYears(new Date(), 18)}
            onChange={handleSelectDay}
            showYearDropdown
            dateFormatCalendar="MMMM"
            yearDropdownItemNumber={50}
            scrollableYearDropdown
            placeholderText="Choose birthday date"
          />
        ) : (
          <div>{date}</div>
        )}
      </Button>
    </Container>
  )
}

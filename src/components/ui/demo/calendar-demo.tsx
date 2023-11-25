'use client'

import { ptBR } from 'date-fns/locale'
import { Calendar } from '../calendar'
import useDate from './useDate'

export function CalendarDemo() {
  const { date, setDate } = useDate()

  return (
    <Calendar
      mode="single"
      locale={ptBR}
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    />
  )
}

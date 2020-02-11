import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import { setCurrentMonth } from '../store/calendar'

const CalendarHead: React.FC<{}> = () => {
  const { selectedDate } = useSelector((state: RootState) => ({
    ...state.calendar,
  }))

  const year = selectedDate.getFullYear()
  const month = selectedDate.getMonth()

  const dispatch = useDispatch()
  const nextMonth = () => {
    dispatch(setCurrentMonth(month + 1))
  }
  const prevMonth = () => {
    dispatch(setCurrentMonth(month - 1))
  }
  return (
    <div className="CalendarHead">
      <button className="btn-prev" onClick={(e) => prevMonth()}>
        {'<'}
      </button>
      <span className="month">{month + 1}</span>
      <span className="year">{year}</span>
      <button className="btn-next" onClick={(e) => nextMonth()}>
        {'>'}
      </button>
    </div>
  )
}

export default CalendarHead

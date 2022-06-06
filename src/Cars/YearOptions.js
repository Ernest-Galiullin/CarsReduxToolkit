import React from 'react'
import {useSelector} from 'react-redux'

export default function YearOptions(props) {
  const {selectedYear} = useSelector(state => state.cars)

  const renderYearOptions = [2018, 2019, 2020].map(year => (
    <div
      key={year}
      className={selectedYear === year ? 'active-option' : 'filter-option'}
      id={year}>
      {year}
    </div>
  ))

  return (
    <>
      <div>Filter by Year</div>
      <div id="year-options" onClick={props.handleYearChange}>
        {renderYearOptions}
      </div>
    </>
  )
}

import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  updateCars,
  updateFiltredCars,
  updateSelectYear,
  updateSelectBrand,
  selectCars,
  selectBrand,
  selectYear,
  selectBrandOptions,
  selectAllYears,
  selectFiltredCars
} from '../store/carsSlice'

import data from '../data'
import CarsList from './CarsList'
import YearOptions from './YearOptions'
import BrandFilter from './BrandFilter'
import * as functions from './functions'

export default function Cars() {
  const cars = useSelector(selectCars)
  const filtredCars = useSelector(selectFiltredCars)
  const years = useSelector(selectAllYears)
  const selectedYear = useSelector(selectYear)
  const selectedBrand = useSelector(selectBrand)
  const brandOptions = useSelector(selectBrandOptions)
  const dispatch = useDispatch()

  const handleBrandChange = event => {
    const currentBrand = event.target.value
    dispatch(updateSelectBrand(currentBrand))
  }

  const handleYearChange = event => {
    const inputYear = Number(event.target.id)

    if (inputYear) {
      if (inputYear === selectedYear) {
        dispatch(updateSelectYear(''))
      } else {
        dispatch(updateSelectYear(inputYear))
      }
    }
  }

  useEffect(() => {
    ;(function () {
      setTimeout(() => {
        dispatch(updateCars(data))
        dispatch(updateFiltredCars(data))
      }, 1500)
    })()

    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    let filteredData = functions.filterByYear(cars, selectedYear)
    filteredData = functions.filterByBrand(filteredData, selectedBrand)

    dispatch(updateFiltredCars(filteredData))
    // eslint-disable-next-line
  }, [selectedBrand, selectedYear])

  return (
    <>
      {cars.length === 0 && <div>Loading...</div>}
      {cars.length > 0 && (
        <>
          <YearOptions
            handleYearChange={handleYearChange}
            value={selectedYear}
            years={years}
          />
          <BrandFilter
            handleBrandChange={handleBrandChange}
            value={selectedBrand}
            options={brandOptions}
          />
          <CarsList cars={filtredCars} />
        </>
      )}
    </>
  )
}

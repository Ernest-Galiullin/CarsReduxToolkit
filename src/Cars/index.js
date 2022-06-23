import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  updateCars,
  updateFiltredCars,
  updateSelectYear,
  updateSelectBrand
} from '../store/carsSlice'
import data from '../data'

import CarsList from './CarsList'
import YearOptions from './YearOptions'
import BrandFilter from './BrandFilter'

export default function Cars() {
  const { cars, selectedYear, selectedBrand } = useSelector(state => state.cars)
  const dispatch = useDispatch()

  const filterByBrand = filteredData => {
    if (selectedBrand.toLowerCase() === 'all') {
      return filteredData
    }

    const filteredCars = filteredData.filter(
      car => car.name.split(' ').indexOf(selectedBrand) !== -1
    )
    return filteredCars
  }

  const filterByYear = filteredData => {
    if (!selectedYear) {
      return filteredData
    }

    const filteredCars = filteredData.filter(
      car => car.release_year === selectedYear
    )
    return filteredCars
  }

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
    let filteredData = filterByYear(cars)
    filteredData = filterByBrand(filteredData)

    dispatch(updateFiltredCars(filteredData))
    // eslint-disable-next-line
  }, [selectedBrand, selectedYear])

  return (
    <>
      {cars.length === 0 && <div>Loading...</div>}
      {cars.length >= 1 && (
        <>
          <YearOptions handleYearChange={handleYearChange} />
          <BrandFilter handleBrandChange={handleBrandChange} />
          <CarsList />
        </>
      )}
    </>
  )
}

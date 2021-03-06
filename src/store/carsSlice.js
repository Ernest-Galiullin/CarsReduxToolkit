import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cars: [],
  filtredCars: [],
  years: [2018, 2019, 2020],
  brandOptions: ['All', 'BMW', 'VW', 'Audi'],
  selectedBrand: 'All',
  selectedYear: ''
}

export const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    updateCars: (state, action) => {
      state.cars = action.payload
    },
    updateFiltredCars: (state, action) => {
      state.filtredCars = action.payload
    },
    updateSelectYear: (state, action) => {
      state.selectedYear = action.payload
    },
    updateSelectBrand: (state, action) => {
      state.selectedBrand = action.payload
    }
  }
})

export const {
  updateCars,
  updateFiltredCars,
  updateSelectYear,
  updateSelectBrand
} = carsSlice.actions

export const selectCars = state => state.cars.cars
export const selectFiltredCars = state => state.cars.filtredCars
export const selectBrand = state => state.cars.selectedBrand
export const selectYear = state => state.cars.selectedYear
export const selectBrandOptions = state => state.cars.brandOptions
export const selectAllYears = state => state.cars.years

export default carsSlice.reducer

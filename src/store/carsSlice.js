import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cars: [],
  filtredCars: [],
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

export default carsSlice.reducer

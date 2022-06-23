export const filterByYear = (filteredData, year) => {
  if (!year) {
    return filteredData
  }
  const filteredCars = filteredData.filter(car => car.release_year === year)
  return filteredCars
}

export const filterByBrand = (filteredData, brand) => {
  if (brand.toLowerCase() === 'all') {
    return filteredData
  }
  const filteredCars = filteredData.filter(
    car => car.name.split(' ').indexOf(brand) !== -1
  )
  return filteredCars
}

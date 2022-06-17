import { Grid } from '@mui/material'
import { useSelector } from 'react-redux'
import CarsItem from './CarsItem'
export default function CarsList() {
  const { filtredCars } = useSelector(state => state.cars)

  return (
    <Grid id="car-list" container spacing={2} columns={12}>
      {filtredCars.map(item => (
        <CarsItem key={item.url} item={item} />
      ))}
    </Grid>
  )
}

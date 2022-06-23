import { Grid } from '@mui/material'
import CarsItem from './CarsItem'

export default function CarsList({ cars }) {
  return (
    <Grid id="car-list" container spacing={2} columns={12}>
      {cars.map(item => (
        <CarsItem key={item.url} item={item} />
      ))}
    </Grid>
  )
}

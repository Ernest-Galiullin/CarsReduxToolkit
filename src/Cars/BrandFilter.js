import { useSelector } from 'react-redux'
import {
  Typography,
  MenuItem,
  Grid,
  FormControl,
  Box,
  Select
} from '@mui/material'

export default function BrandFilter(props) {
  const { selectedBrand } = useSelector(state => state.cars)

  const optionsList = ['All', 'BMW', 'VW', 'Audi'].map(brandName => (
    <MenuItem key={brandName} value={brandName}>
      {brandName}
    </MenuItem>
  ))
  return (
    <Grid container direction="row" justifyContent="center" sx={{ mb: '1rem' }}>
      <Box sx={{ maxWidth: 300 }}>
        <FormControl fullWidth>
          <Typography variant="h5" component="h5" align="center">
            Filter by Brand
          </Typography>
          <Select
            id="brand-input"
            value={selectedBrand}
            onChange={props.handleBrandChange}
          >
            {optionsList}
          </Select>
        </FormControl>
      </Box>
    </Grid>
  )
}

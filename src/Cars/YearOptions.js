import { useSelector } from 'react-redux'
import { Typography, Grid, Button, Container } from '@mui/material'

export default function YearOptions(props) {
  const { selectedYear } = useSelector(state => state.cars)

  const renderYearOptions = [2018, 2019, 2020].map(year => (
    <Button
      variant={selectedYear === year ? 'contained' : 'text'}
      key={year}
      id={year}
    >
      {year}
    </Button>
  ))

  return (
    <>
      <Typography
        variant="h4"
        component="h4"
        align="center"
        sx={{ mb: '1rem' }}
      >
        Filter by Year
      </Typography>
      <Container maxWidth="xs" sx={{ mb: '1rem' }}>
        <Grid
          container
          id="year-options"
          onClick={props.handleYearChange}
          direction="row"
          justifyContent="space-around"
        >
          {renderYearOptions}
        </Grid>
      </Container>
    </>
  )
}

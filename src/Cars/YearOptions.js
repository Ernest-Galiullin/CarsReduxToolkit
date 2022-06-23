import { Typography, Grid, Button, Container } from '@mui/material'

export default function YearOptions({ handleYearChange, value, years }) {
  const renderYearOptions = years.map(year => (
    <Button
      variant={value === year ? 'contained' : 'text'}
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
          onClick={handleYearChange}
          direction="row"
          justifyContent="space-around"
        >
          {renderYearOptions}
        </Grid>
      </Container>
    </>
  )
}

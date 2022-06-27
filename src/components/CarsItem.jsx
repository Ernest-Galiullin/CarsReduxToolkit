import { Grid, Card, Typography, CardMedia, CardContent } from '@mui/material'

export default function CarsItem({ item }) {
  return (
    <Grid item xs={12} sm={6} md={4} display="flex" justifyContent="center">
      <Card sx={{ maxWidth: 300 }}>
        <CardContent>
          <Typography
            variant="h5"
            component="div"
          >{`Name: ${item.name}`}</Typography>
          <Typography
            variant="h6"
            component="div"
          >{`Year: ${item.release_year}`}</Typography>
        </CardContent>
        <CardMedia
          component="img"
          height="200"
          image={item.url}
          alt="car-img"
        />
      </Card>
    </Grid>
  )
}

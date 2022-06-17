import { Grid, Card, Typography, CardMedia, CardContent } from '@mui/material'

export default function CarsItem({ item }) {
  return (
    <Grid item xs={4}>
      <Card sx={{ maxWidth: 345 }}>
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

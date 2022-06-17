import Cars from './cars'
import { Container, Typography } from '@mui/material'

export default function App() {
  return (
    <Container maxWidth="md">
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Filter Application
      </Typography>
      <Cars />
    </Container>
  )
}

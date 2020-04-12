import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { Button } from '@material-ui/core'
import Link from '@material-ui/core/Link'
import Header from '../components/Header';
import Map from '../components/Map'

export default function Index() {
  return (
    <>
      <Header/>
      <Container maxWidth="md">
        <Box mt={2}>
          <Typography variant="h4" align="center">
            Can't Stop Us
          </Typography>
          <Typography variant="body1" gutterBottom={true} align="center">
            Can’t Stop Us is a nationwide movement that activates our unique talents and compassion to solve real problems. We embrace courageous ideas and rapidly deliver new and innovative solutions.
          </Typography>
          <Container maxWidth="sm">
            <Map />
          </Container>
          <Box align="center" mt={2}>
            <Button variant="contained" color="primary" component={Link} href="/toolkit">
              Get Started in Your City
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}
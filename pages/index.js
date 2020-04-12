import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { Button } from '@material-ui/core'
import Link from '@material-ui/core/Link'
import Header from '../components/Header';

export default function Index() {
  return (
    <>
      <Header/>
      <Container maxWidth="md">
        <Box mt={2}>
          <Typography variant="h4" align="center">
            Can't Stop Us
          </Typography>
          <Typography variant="body2" gutterBottom={true}>
            Can’t Stop Columbus is a community-wide movement that activates our city’s talents and compassion to solve real problems. We embrace courageous ideas and rapidly deliver new and innovative solutions. We built this toolkit to help organize the movement in other cities.
          </Typography>
          <Button variant="contained" color="primary" component={Link} href="/toolkit">
            Toolkit
          </Button>
        </Box>
      </Container>
    </>
  );
}
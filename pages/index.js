import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { Button } from '@material-ui/core'
import Link from '@material-ui/core/Link'
import Header from '../components/Header';

export default function Index() {
  return (
    <>
      <Header/>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center">
          Can't Stop Us Toolkit
        </Typography>
        <Typography variant="body2" gutterBottom={true}>
          Can’t Stop Columbus is a community-wide movement that activates our city’s talents and compassion to solve real problems. We embrace courageous ideas and rapidly deliver new and innovative solutions. We built this toolkit to help organize the movement in other cities.
        </Typography>
        <Typography variant="h5">
          The purpose of this toolkit is:
        </Typography>
        <Typography variant="body1">
          <b>To help</b> other communities kickstart support movements like Can’t Stop Columbus
        </Typography>
        <Typography variant="body1">
          <b>To empower</b>  organizers to inspire an attitude of help and support
        </Typography>
        <Typography variant="body1" gutterBottom={true}>
          <b>To provide</b>  a structure for creating a movement by sharing tools, insights, successes, and failures
        </Typography>
        <Button variant="contained" color="primary" component={Link} href="https://docs.google.com/document/d/1H72twsb5stdXdGf3Gl0oO7fsPYhU9ZLKEr1-jQiX2iU/edit?usp=sharing">
          Open the Toolkit
        </Button>
      </Container>
    </>
  );
}
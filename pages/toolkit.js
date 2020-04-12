import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { Button } from '@material-ui/core'
import Link from '@material-ui/core/Link'
import Header from '../components/Header';
import Footer from '../components/Footer'
import Meta from '../components/Meta'

export default function Index() {
  return (
    <>
      <Meta 
        title="Can't Stop Us Toolkit" 
        desc="The Can't Stop Us toolkit is a structure that helps you to launch a successful covid-19 response in your city."
        url="https://cantstop-us.com/toolkit"
      />
      <Header/>
      <Container maxWidth="md">
        <Box mt={2}>
          <Typography variant="h4" align="center">
            Can't Stop Us Toolkit
          </Typography>
          <Typography variant="h5">
            We built this toolkit:
          </Typography>
          <Typography variant="body1">
            <b>To help</b> other communities kickstart support movements like <Link href="https://cantstopcolumbus.com">Can’t Stop Columbus</Link>
          </Typography>
          <Typography variant="body1">
            <b>To empower</b>  organizers to inspire an attitude of help and support
          </Typography>
          <Typography variant="body1" gutterBottom={true}>
            <b>To provide</b>  a structure for creating a movement by sharing tools, insights, successes, and failures
          </Typography>
          <Box align="center" mt={2}>
            <Button variant="contained" color="primary" component={Link} href="https://docs.google.com/document/d/1H72twsb5stdXdGf3Gl0oO7fsPYhU9ZLKEr1-jQiX2iU/edit?usp=sharing">
                Open the Toolkit
            </Button>
          </Box>
        </Box>
        <Footer/>
      </Container>
    </>
  );
}
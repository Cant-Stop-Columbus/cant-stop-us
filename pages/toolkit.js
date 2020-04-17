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
        <Box mt={3}>
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
          <Box mt={3}>
            <Typography variant="body1" gutterBottom={true}>
              To start this in your city and get listed on this site email <Link href="mailto:move@cantstop-us.com">move@cantstop-us.com</Link>
            </Typography>
          </Box>
          <Box align="center" mt={2}>
            <Button align="center" variant="contained" color="primary" component={Link} href="/starter-kit.pdf" download>
                Download the Toolkit
            </Button>
          </Box>
        </Box>
        <Footer/>
      </Container>
    </>
  );
}
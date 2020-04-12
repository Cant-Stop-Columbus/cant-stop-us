import AppBar from '@material-ui/core/AppBar';
import Link from '@material-ui/core/Link'
import { Grid, Box } from '@material-ui/core';

const Header = () => (
  <AppBar title={<img src="/images/logo-square-white.png"/>} color="primary" position="sticky">
    <Grid>
      <Link href='/'>
        <Box mx={2} mt={0.5}>
          <img src="/images/logo-square-white.png" style={{height:'40px', width:'auto'}} alt="logo"/>
        </Box>
      </Link>
    </Grid>
  </AppBar>
);

export default Header;
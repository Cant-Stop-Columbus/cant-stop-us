import Link from '@material-ui/core/Link'
import { Grid, Box, Typography } from '@material-ui/core';
import theme from '../src/theme';

const Header = () => (
  <Box my={5} py={3} bgcolor={theme.palette.grey1.main} borderRadius={10}>
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid container direction="row" justify="space-around" alignItems="center">
        {/* <Link href="/code-of-conduct">Code of Conduct</Link> */}
        <Link href="mailto:contact@cantstop-us.com">contact@cantstop-us.com</Link>
      </Grid>
      <Box my={1}/>
      <Grid container direction="row" justify="center" alignItems="center">
        <Typography variant="body2">Made with <span style={{color:`${theme.palette.primary.main}`}}>&#x2764;</span> by Columbus on&nbsp;</Typography>
        <Link href="https://github.com/william-matz/cant-stop-us" rel="noopener noreferrer" target="_blank">GitHub</Link>
      </Grid>
    </Grid>
  </Box>
);

export default Header;
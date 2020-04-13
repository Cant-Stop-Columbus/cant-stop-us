import { Grid, Box, Typography, Button, Link } from '@material-ui/core';
import theme from '../src/theme';
import { TwitterTweetEmbed } from 'react-twitter-embed';

const CaseStudy = () => {
  return (
    <Box my={5} py={3} bgcolor={theme.palette.grey1.main} borderRadius={10}>
      <Grid container direction="row" spacing={2}>
        <Grid container item direction="column" xs={6} align="right">
          <img src="/images/cant-stop-columbus.png" alt="cant stop columbus" style={{height:"120px", width:"120px"}}/>
        </Grid>
        <Grid container item direction="column" xs={6} justify="center">
          <Typography variant="h4" align="left">Case Study</Typography>
          <Typography variant="h5" align="left">Can't Stop Columbus</Typography>
        </Grid>
      </Grid>
      <br/>
      <Typography variant="h5" align="center">It started with an idea...</Typography>
      <br/>
      <Grid align="center">
        <TwitterTweetEmbed tweetId={'1239327951939829761'} />
      </Grid>
      <br/>
      <Typography variant="h5" align="center">By the next day we...</Typography>
      <br/>
      <Typography variant="h6" align="center">Crowdsourced a proposal</Typography>
      <Typography variant="h6" align="center">Set up a Slack workspace</Typography>
      <Typography variant="h6" align="center">Began planning with 100+ community members</Typography>
      <br/>
      <br/>
      <Typography variant="h5" align="center">Where we are now:</Typography>
      <br/>
      <Typography variant="h6" align="center">Engaged 1200+ volunteers</Typography>
      <Typography variant="h6" align="center">Organized 80+ project teams</Typography>
      <Typography variant="h6" align="center">Garnered support from 80+ organizations</Typography>
      <Typography variant="h6" align="center">Launched 10+ community projects</Typography>
      <br/>
      <br/>
      <Typography variant="h5" align="center">We've found a structure that works - let's take this movement nationwide.</Typography>
      <Box align="center" mt={2}>
        <Button variant="contained" color="primary" component={Link} href="/toolkit">
          Get Started in Your City
        </Button>
      </Box>
    </Box>
  );
};

export default CaseStudy;

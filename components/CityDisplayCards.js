import { Grid, Button, Typography, Link, Box } from '@material-ui/core';

function CityDisplayCards({cities}) { 
  return (
    cities.map(city =>
      <>
        <Grid container xs={12} justify="center" direction="row" alignItems="center">
          <Box m={1}>
            <Typography variant="body1">
              {city['name']}
            </Typography>
          </Box>
          <Button href={city['url']} variant="outlined" color="grey1" component={Link}>
            See Website
          </Button>
        </Grid>
      </>
    )
  )
}

export default CityDisplayCards;
import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { Button } from '@material-ui/core'
import Link from '@material-ui/core/Link'
import Header from '../components/Header';
import Footer from '../components/Footer'
import Map from '../components/Map'
import CaseStudy from '../components/CaseStudy'
import Meta from '../components/Meta'
import CityDisplayCards from '../components/CityDisplayCards'
import MailingListSignup from '../components/MailingListSignup'

export default function Index() {
  const [content, setContent] = useState("");
  const markers = [
    { markerOffset: -25, name: "Columbus, OH", coordinates: [-82.9988, 39.9612], url: "https://cantstopcolumbus.com" },
    { markerOffset: 10, name: "Dayton, OH", coordinates: [-84.1916, 39.7589], url: "https://cantstopdyt.com" }
  ];

  return (
    <>
      <Meta/>
      <Header/>
      <Container maxWidth="md">
        <Box mt={2}>
          <Typography variant="h4" align="center">
            Can't Stop Us
          </Typography>
          <Typography variant="body1" gutterBottom={true} align="center">
            Can’t Stop Us is community-focused nationwide movement that activates our unique talents and compassion to solve real problems. We embrace courageous ideas and rapidly deliver new and innovative solutions.
          </Typography>
          <Container maxWidth="sm">
            <Map setTooltipContent={setContent} markers={markers} />
            <ReactTooltip html={true} effect="solid" delayHide={2000} delayUpdate={2000}>{content}</ReactTooltip>
          </Container>
          <CityDisplayCards cities={markers} />
          <Box align="center" mt={2}>
            <Button variant="contained" color="primary" component={Link} href="/toolkit">
              Get Started in Your City
            </Button>
          </Box>
          <Box align="center" mt={2}>
            <MailingListSignup />
          </Box>
        </Box>
        <CaseStudy/>
        <Footer/>
      </Container>
    </>
  );
}

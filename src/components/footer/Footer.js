import React from 'react'
import Grid from '@mui/material/Grid';

import Button from '@mui/material/Button';
import { Typography, Box, Container } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  let footer_links = ['About', 'Project', 'Studio', 'Blog', 'Contact']
  let social_medias = [FacebookIcon, LinkedInIcon, TwitterIcon, YouTubeIcon, InstagramIcon]
  return (
    <>
      <Grid container
        spacing={0}
        alignItems="center"
        justifyContent="center"
        style={{ backgroundColor: '#F8F8F8' }}
      >
        <Grid container item
          spacing={0}
          alignItems="center"
          justifyContent="center"
          xs={9}
          style={{ backgroundColor: '#F8F8F8' }}
        >
          <Grid item xs={4} sx={{ display: { xs: 'none', md: 'unset' } }}>

            <img style={{ width: '100px', textAlign: 'left', display: 'flex', marginLeft: '-27px' }} src={`${process.env.PUBLIC_URL}/logo.png`} alt='text' />

          </Grid>
          <Grid item xs={4} sx={{ display: { xs: 'none', md: 'unset' } }}>
            <Container maxWidth="sm" sx={{ padding: '40px 0' }}>
              <Box sx={{ textAlign: 'left' }}>
                <Typography variant="h6" component="div" gutterBottom>
                  WHAT WE DO
                </Typography>
              </Box>
            </Container>
          </Grid>
          <Grid item xs={4} sx={{ display: { xs: 'none', md: 'unset' } }}>
            <Container maxWidth="sm" sx={{ padding: '40px 0' }}>
              <Box sx={{ textAlign: 'left' }}>
                <Typography variant="h6" component="div" gutterBottom>
                  Get in touch
                </Typography>
              </Box>
            </Container>
          </Grid>
        </Grid>
        <Grid container item
          spacing={0}
          alignItems="flex-start"
          justifyContent="center"
          xs={9}
          style={{ backgroundColor: '#F8F8F8' }}
        >
          <Grid item xs={4} sx={{ display: { xs: 'none', md: 'unset' } }}>
            <Typography textAlign='left' width={'70%'} variant="h6" component="div" gutterBottom>
              We introduce our selves as  LAND Interior and Architectural Design
              Consultancy – one of the best interior designers in Chennai. Chennai
              Luxury Interior and Architectural Design Consultancy has challenged
              the conventional way of interior designing and given new dimensions
              to the art of interior designing.
            </Typography>
          </Grid>
          <Grid item xs={4} sx={{ display: { xs: 'none', md: 'unset' } }}>
            <Container maxWidth="sm" sx={{ padding: '40px 0' }}>
              <Box sx={{ textAlign: 'left' }}>
                <Box>
                  {['Interior Design', 'Kitchen', 'Ceiling', 'Bedroom', 'Smart Home'].map((item, index) => (
                    <Typography key={index} variant="body1" component="div" gutterBottom>
                      {item}
                    </Typography>
                  ))}
                </Box>
              </Box>
            </Container>
          </Grid>
          <Grid item xs={4} sx={{ display: { xs: 'none', md: 'unset' } }}>
            <Container maxWidth="sm" sx={{ padding: '40px 0' }}>
              <Box sx={{ textAlign: 'left' }} style={{ width: '70%' }}>
                <Typography variant="h6" component="div" gutterBottom>
                  landinteriors@gmail.com
                  <br></br>
                  +91 98987 65656
                </Typography>
              </Box>
            </Container>
          </Grid>
        </Grid>
        <Grid container item
          spacing={0}
          alignItems="center"
          justifyContent="center"
          xs={9}
          style={{ backgroundColor: '#F8F8F8' }}
        >
          <Grid item xs={4} sx={{ display: { xs: 'none', md: 'unset' } }}>
            <Container maxWidth="sm" sx={{ padding: '40px 0' }} style={{ textAlign: 'left' }}>
              {social_medias.map((SocialComponent, idx) => (
                <SocialComponent key={idx} fontSize='large'/>
              ))}
            </Container>
          </Grid>
          <Grid item xs={8} sx={{ display: { xs: 'none', md: 'unset' } }}>
            <Container maxWidth="sm" sx={{ padding: '40px 0' }} style={{ textAlign: 'right' }}>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
              {footer_links.map((page, idx) => (
                <Button 
                  key={idx}
                  sx={{ my: 2, color: '#451A64', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            </Container>
          </Grid>
        </Grid>
        <Grid container item
          spacing={0}
          alignItems="center"
          justifyContent="center"
          xs={9}
          style={{ backgroundColor: '#F8F8F8' }}
        >
          <Grid item xs={12} sx={{ display: { xs: 'unset', md: 'none' } }}>
            <Container maxWidth="sm" sx={{ padding: '40px 0' }} style={{ textAlign: 'center' }}>

              <img style={{ width: '100px', textAlign: 'center'}} src={`${process.env.PUBLIC_URL}/logo.png`} alt='text' />

              <Typography variant="h6" component="div" gutterBottom>
                landinteriors@gmail.com
                <br></br>
                +91 98987 65656
              </Typography>
              {social_medias.map((SocialComponent, idx) => (
                <SocialComponent key={idx} fontSize='large'/>
              ))}
            </Container>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default Footer

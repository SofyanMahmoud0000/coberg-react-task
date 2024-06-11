import React from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Typography, Box } from '@mui/material';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
const Item = ({ imagePath, title, body, cardWidth }) => {
  return (
    <Box>
      <Card sx={{ maxWidth: cardWidth, display: 'inline-grid' }}>
        <CardActionArea>
          <CardMedia
            component="img"
            image={imagePath}
          />
        </CardActionArea>
      </Card>
      <Typography variant="p" component="div" gutterBottom textAlign={'left'} padding={'0px 15px'}>
        <h3>{title}</h3>
        <p>{body}</p>
      </Typography>
    </Box>
  )
}

export default Item

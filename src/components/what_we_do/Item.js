import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';

const Item = ({imagePath}) => {
  return (
    <Grid item xs={6} sm={6} md={3}>
      <Card sx={{ maxWidth: 300, display: 'inline-grid' }}>
        <CardActionArea>
          <CardMedia
            component="img"
            image={imagePath}
            alt="green iguana"
          />
        </CardActionArea>
      </Card>
    </Grid>
  )
}

export default Item

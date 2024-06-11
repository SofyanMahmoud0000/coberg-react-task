import React from 'react'

import Grid from '@mui/material/Grid';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import HomeIcon from '@mui/icons-material/Home';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
const Statistics = () => {
  return (
    <>
      <h1 style={{}}>
        Why LAND Interiors
      </h1>
      <Grid container spacing={{ xs: 3, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
        <Grid item xs={4} sm={4} md={4}>
          <CalendarTodayIcon sx={{color:'#451A64', fontSize: '50px'}} />
          <p>50 days or we pay you rent</p>
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          <HomeIcon sx={{color:'#451A64', fontSize: '50px'}} />
          <p>1500+happy customers</p>
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          <WorkspacePremiumIcon sx={{color:'#451A64', fontSize: '50px'}}/>
          <p>300+ design experties</p>
        </Grid>
      </Grid>
    </>
  )
}

export default Statistics

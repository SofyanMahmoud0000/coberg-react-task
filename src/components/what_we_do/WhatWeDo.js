import React from 'react'
import Grid from '@mui/material/Grid';

import data from './data'
import Item from './Item'

const WhatWeDo = () => {
  return (
    <>
      <h1>What we do?</h1>
      <Grid container
        spacing={0}
        alignItems="center"
        justifyContent="center"
      >
        {
          data.map((item, idx) => (
            <Item key={idx} imagePath={item.imagePath} idx = {idx} />
          ))
        }
      </Grid>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <p style={{ textAlign: 'center', width: '40%' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet 
          luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non 
          enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla
        </p>
      </div>
    </>

  )
}

export default WhatWeDo

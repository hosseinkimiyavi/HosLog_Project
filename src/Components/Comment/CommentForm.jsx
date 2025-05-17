import { Button, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

function CommentForm({slug}) {
  const [userName,setUserName] =useState("");
  const [Email,setEmail] =useState("");
  const [Comment,setComment] =useState("");
 
  return (
    <>
      <Grid container sx={{ boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px", borderRadius: 4, py: 1, mt: 5 }}>
        <Grid size={{xs:12}} m={2}>
          <Typography component="p" variant="h5" fontWeight={600} color='secondary'>
            Comment form
          </Typography>
        </Grid>
        <Grid size={{xs:12}} m={2}>
          <TextField
          value={userName}
          onChange={(e)=>setUserName(e.target.value)}
          color='secondary'
            id="outlined-basic"
            label="UserName"
            variant="outlined"
            sx={{ width: '100%' }}
          />
        </Grid>
                <Grid size={{xs:12}} m={2}>
          <TextField
          value={Email}
          onChange={(e)=>setEmail(e.target.value)}
          color='secondary'
            id="outlined-basic"
            label="Email"
            variant="outlined"
            sx={{ width: '100%' }}
          />
        </Grid>
                <Grid size={{xs:12}} m={2}>
          <TextField
          value={Comment}
          onChange={(e)=>setComment(e.target.value)}
          color='secondary'
            id="outlined-basic"
            label="Comment"
            multiline
            minRows={4}
            variant="outlined"
            sx={{ width: '100%' }}
          />
        </Grid>
        <Grid size={{xs:12}} m={2} >
          <Button variant='contained'>Send</Button>
        </Grid>
      </Grid>
    </>
  )
}

export default CommentForm
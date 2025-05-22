import { useMutation } from '@apollo/client';
import { Button, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { SEND_COMMENT } from '../../graphql/Mutation';
import { ToastContainer, toast } from 'react-toastify';

function CommentForm({slug}) {
  const [userName,setUserName] =useState("");
  const [Email,setEmail] =useState("");
  const [Comment,setComment] =useState("");
  const [sendComment,{loading,error,data}] = useMutation(SEND_COMMENT,{variables:{name:userName ,email:Email ,text:Comment ,slug}});  //برای افزودن  کامنت

  const sendHandler =()=>{
    if(userName && Email && Comment) {
      sendComment();
    }
    else {
      toast.warn("compeleted all fields")
    }
    
  }
  if(data) {
    toast.success("Comment submitted and awaiting approval.")
  }
 
 
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
          {loading ? (<Button variant='contained' disabled>Loading...</Button>) : (<Button onClick={sendHandler} variant='contained'>Send</Button>)}
        </Grid>
        <ToastContainer position='top-center' />
      </Grid>
    </>
  )
}

export default CommentForm
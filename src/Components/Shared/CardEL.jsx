import { Margin, Style } from '@mui/icons-material'
import { Card, CardHeader, Avatar, IconButton, Typography, CardMedia, CardContent, Divider, CardActions, Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function CardEL({author,coverPhoto ,title ,slug}) {
    
  return (
    <>
    <Card sx={{boxShadow:"rgba(0,0,0,0.4) 0px 4px 12px", borderRadius:4}} >
        <CardHeader
          avatar={
            <Avatar src= {author.avatar.url} aria-label="">
              
            </Avatar>
          }
          title={<Typography component="p" variant='p' color='textSecondary' >{author.name}</Typography>}
        />
        <CardMedia component="img" height="194" image={coverPhoto.url} alt={slug} />
      <CardContent><Typography component="h3" variant="h9" color='textPrimary' fontWeight={600}>{title}</Typography></CardContent>
      <Divider variant='middle' sx={{margin:'10px'}} />
      <CardActions>
        {/* <Link to={`/blogs/${slug}`} style={{textDecoration:"none", width:"100%"}} > */}
        <Button variant='outlined' color='secondary'  size='small' sx={{width:"100%", borderRadius:4, color:'blue'}}>Read more</Button>
        {/* </Link> */}
      </CardActions>

    </Card>
    </>
  )
}

export default CardEL
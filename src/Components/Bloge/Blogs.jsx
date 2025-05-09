import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_BLOGS_INFO } from '../../graphql/queries'
import { Grid } from '@mui/material';
import CardEL from '../Shared/CardEL';

function Blogs() {
  const{loading,errors,data} = useQuery(GET_BLOGS_INFO);
  if(loading) return <h2>Loading...</h2>
  if(errors) return <h2>error...</h2>
 
  return (
    <>
    <Grid container spacing={2}>
    {data.posts.map(post=>(
      <Grid size={{xs: 12, sm:6 ,md:4}} key={post.id}  >
       <CardEL {...post}  />
      </Grid>
    ))}

    </Grid>
    </>
  )
}

export default Blogs
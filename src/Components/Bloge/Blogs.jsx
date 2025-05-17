import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_BLOGS_INFO } from '../../graphql/queries'
import { Grid } from '@mui/material';
import CardEL from '../Shared/CardEL';
import Loader from '../Shared/Loader';

function Blogs() {
  const{loading,errors,data} = useQuery(GET_BLOGS_INFO);
  if(loading) return <Loader />
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
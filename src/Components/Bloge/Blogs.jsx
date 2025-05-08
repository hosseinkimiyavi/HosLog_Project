import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_BLOGS_INFO } from '../../graphql/queries'

function Blogs() {
  const{loading, errors,data} = useQuery(GET_BLOGS_INFO);
  if(loading) return <h2>Loading...</h2>
  if(errors) return <h2>error...</h2>
  console.log(data);
  return (
    <div>Blogs</div>
  )
}

export default Blogs
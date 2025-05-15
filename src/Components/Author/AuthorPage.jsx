import { useQuery } from '@apollo/client';
import React from 'react'
import { useParams } from 'react-router-dom'
import { GET_AUTHOR_INFO } from '../../graphql/queries';

function AuthorPage() {
  const params =useParams();
  const {slug} =params;
  const {error ,loading ,data} =useQuery(GET_AUTHOR_INFO,{variables:{slug}}); 
    if(loading) return <h2>Loading...</h2>
  if(error) return <h2>error...</h2>
  console.log(data);


  return (
    <div>AuthorPage</div>
  )
}

export default AuthorPage
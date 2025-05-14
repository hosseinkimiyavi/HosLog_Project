import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_AUTHORS_INFO } from '../../graphql/queries'

function Authors() {
  const{loading ,error, data} = useQuery(GET_AUTHORS_INFO);
  if(loading) return <h1>loading...</h1>
  if(error) return <h1>error...</h1>
  console.log(data);
  return (
    <div>Authors</div>
  )
}

export default Authors
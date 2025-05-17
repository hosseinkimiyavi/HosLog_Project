import React from 'react'
import { ClipLoader } from 'react-spinners'

function Loader() {
  return (
    <div style={{display:"flex",justifyContent:"center", width:"100%", height:"1000px",paddingTop:"10rem"}} >
       <ClipLoader size={100}  />

    </div>
  )
}

export default Loader
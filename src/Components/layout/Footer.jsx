import React from 'react'
import Typography from '@mui/material/Typography'

function Footer() {
  return (
    <>
    <footer>
        <Typography component="p" fontWeight={600} variant="p" color="secondary" padding="10px" mt={10} textAlign="center" >
            WebLog Project with GraphQL & MUI |Developed by Hossein Kimiyavi
        </Typography>
    </footer>
    
    </>
  )
}

export default Footer
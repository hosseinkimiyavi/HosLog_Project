import { useQuery } from "@apollo/client";
import React from "react";
import { GET_AUTHORS_INFO } from "../../graphql/queries";
import { Avatar, Divider, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Loader from "../Shared/Loader";

function Authors() {
  const { loading, error, data } = useQuery(GET_AUTHORS_INFO);
  if (loading) return <Loader />;
  if (error) return <h1>error...</h1>;

  const { authors } = data;
  return (
    <>
      <Grid
        container
        sx={{ boxShadow: "rgba(0,0,0,0.4) 0px 4px 12px", borderRadius: 4 }}
      >
        {authors.map((author, index) => (
          <React.Fragment key={author.id}>
          <Grid size={{xs:12}} padding={2} >
            <Link to={`/authors/${author.slug}`} style={{display:"flex" ,alignItems:"center"}}>
            <Avatar src={author.avatar.url} sx={{marginRight:1}} ></Avatar>
            <Typography component="p" variant='p' color='textSecondary' >{author.name}</Typography>
            </Link>
          </Grid>
           {
            index != authors.length-1 && (   <Grid size={{xs:12}}  >
            <Divider variant="middle" style={{color:"textSecondary"}} />
           </Grid>)
           }
        
           </React.Fragment>
           
        ))}
      </Grid>
    </>
  );
}

export default Authors;

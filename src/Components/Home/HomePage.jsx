import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import Authors from "../Author/Authors";
import Blogs from "../Bloge/Blogs";

function HomePage() {
  return (
    <>
      <Container maxWidth="lg">
        <Grid container spacing={2} padding={3} >
          <Grid size={{xs: 12, md: 3}}  mt={4} >
            <Typography component="h3" variant="h5" mb={3} fontWeight={700}  >AUTHORS</Typography>
            <Authors />
          </Grid>
          <Grid size={{xs: 12, md: 9}}  mt={4} >
            <Typography component="h3" variant="h5" mb={3} fontWeight={700}  >BLOGS</Typography>
            <Blogs />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default HomePage;

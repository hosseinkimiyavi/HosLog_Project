import { useQuery } from "@apollo/client";
import React from "react";
import { GET_POST_COMMENT } from "../../graphql/queries";
import { Avatar, Box, Grid, Typography } from "@mui/material";

function Comments({ slug }) {
  const { loading, data } = useQuery(GET_POST_COMMENT, {
    variables: { slug },
  });
  
  console.log(loading, data);
  // const { comments } = data;
  // console.log(loading, data);

  return (
    <>
      <Grid
        container
        sx={{
          boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
          borderRadius: 4,
          py: 1,
          mt: 5,
        }}
      >
        <Grid size={{ xs: 12 }} m={2}>
          <Typography
            component="p"
            color="secondary"
            variant="h6"
            fontWeight={600}
          >
            Comments
          </Typography>
        {data && data.comments && data.comments.length > 0 ? (
          data.comments.map((comment) => (
            <Grid
              size={{ xs: 12 }}
              m={2}
              p={1}
              borderRadius={4}
              border="2px silver solid"
              key={comment.id}
            >
              <Box component="div" display="flex" alignItems="center" mb={3}>
                <Avatar>
                    {comment.name[0].toUpperCase()}
                </Avatar>
                <Typography component="span" fontWeight={600} ml={1}>
                    {comment.name}
                </Typography>
              </Box>
              <Typography component='p' variant="p" fontWeight={600}>
                {comment.text}
              </Typography>
            </Grid>
          ))
        ) : loading ? (
          <Typography>Loading comments...</Typography>
        ) : (
          <Typography>No comments found.</Typography>
        )}
        </Grid>
      </Grid>
    </>
  );
}

export default Comments;

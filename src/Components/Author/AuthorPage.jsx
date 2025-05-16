import { useQuery } from "@apollo/client";
import React from "react";
import { data, useParams } from "react-router-dom";
import { GET_AUTHOR_INFO } from "../../graphql/queries";
import { Avatar, Container, Grid, Typography } from "@mui/material";
import sanitizeHtml from "sanitize-html";
import CardEL from "../Shared/CardEL";

function AuthorPage() {
  const params = useParams();
  const { slug } = params;
  const { error, loading, data } = useQuery(GET_AUTHOR_INFO, {
    variables: { slug },
  });
  console.log(data);
  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>error...</h2>;
  const {
    author: { avatar, description, field, name,posts },
  } = data;

  return (
    <>
      <Container maxWidth="lg">
        <Grid container mt={10}>
          <Grid
            size={{ xs: 12 }}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
          >
            <Avatar src={avatar.url} sx={{ width: 250, height: 250 }} />
            <Typography component="h3" variant="h5" fontWeight={700} mt={4}>
              {name}
            </Typography>
            <Typography
              component="p"
              variant="h6"
              color="text.secondary"
              fontWeight={500}
              mt={1}
            >
              {field}
            </Typography>
          </Grid>
          <Grid size={{ xs: 12 }} mt={2}>
            <div //چون در محتویات اچ تی ام ال تگ کد وپی ار ای وجود داشت باعث اسکرول میشد ک با این یوتیلیتی های تیلویند استایل متن درست شد
              className="break-words w-full whitespace-pre-wrap [&_pre]:whitespace-pre-wrap [&_code]:break-words [&_pre]:overflow-x-auto "
              dangerouslySetInnerHTML={{
                __html: sanitizeHtml(description.html),
              }}
            ></div>
          </Grid>
          <Grid size={{xs:12}} mt={6} >   
            <Typography component="h3" variant="h5" fontWeight={700}>
              {name}'s articles
            </Typography>
            
             <Grid container spacing={2}  >   {/* مقالات نوشته شده توسط شخص  */}
              {posts.map((post)=>(
                <Grid key={post.id} size={{xs:12 , sm:6 , md:4}} mt={4}  >
                  <CardEL title={post.title} coverPhoto={post.coverPhoto} slug={post.slug} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default AuthorPage;

import { useQuery } from "@apollo/client";
import { useNavigate, useParams } from "react-router-dom";
import { GET_POST_INFO } from "../../graphql/queries";
import Loader from "../Shared/Loader";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import sanitizeHtml from "sanitize-html"
import CommentForm from "../Comment/CommentForm";
import Comments from "../Comment/Comments";


export default function BlogPage() {
  const Navigate = useNavigate(); //برای برگشتن به مرحله قبل
  const { slug } = useParams();
  const { error, loading, data } = useQuery(GET_POST_INFO, {
    variables: { slug },
  });
  if (loading) return <Loader />;
  if (error) return <h2>error...</h2>;
  
  const {
    post: {
      author: { avatar, name, field },
      content,
      coverPhoto,
      title,
    },
  } = data;

  return (
    <>
      <Container maxWidth="lg">
        <Grid container mt={5}>
          <Grid
            size={{ xs: 12 }}
            mt={5}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography component="h3" variant="h4" fontWeight={600}>
              {title}
            </Typography>
            <ArrowBackRoundedIcon
              color="action"
              onClick={() => Navigate(-1)}
              style={{ cursor: "pointer" }}
            />
          </Grid>
          <Grid size={{ xs: 12 }} mt={6}>
            <img
              src={coverPhoto.url}
              alt={title}
              width="80%"
              style={{ borderRadius: 15,margin:'auto' }}
            />
          </Grid>
          <Grid size={{ xs: 12 }} mt={2} display="flex" alignItems="center">
            <Avatar
              src={avatar.url}
              sx={{ width: 80, height: 80, marginRight: 2 }}
            />
            <Box component="div">
              <Typography component="h4" variant="h5" fontWeight={600}>
                {name}
              </Typography>
              <Typography
                component="h6"
                variant="h6"
                fontWeight={600}
                color="textSecondary"
              >
                {field}
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12 }} mt={4}>
            <div
              className="  text-2xl   break-words w-full whitespace-pre-wrap [&_pre]:whitespace-pre-wrap [&_code]:break-words [&_pre]:overflow-x-auto "
              dangerouslySetInnerHTML={{
                __html: sanitizeHtml(content.html),
              }}
            ></div>
          </Grid>
         <Grid size={{xs:12}}>
          <CommentForm slug={slug} />
         </Grid>
         <Grid size={{xs:12}} >
          <Comments slug={slug} />
         </Grid>
        </Grid>
      </Container>
    </>
  );
}

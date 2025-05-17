import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import { GET_POST_INFO } from "../../graphql/queries";
import Loader from "../Shared/Loader";

export default function BlogPage() {
  const { slug } = useParams();
  const { error, loading, data } = useQuery(GET_POST_INFO, {
    variables: { slug },
  });
  if (loading) return <Loader />;
  if (error) return <h2>error...</h2>;
  console.log(data);
  const {
    post: { author, content, coverPhoto, title },
  } = data;
  
  return <div>BlogPage</div>;
}

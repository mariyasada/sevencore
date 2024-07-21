import React from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import { useNews } from "../Context/NewsContext";
import { useNavigate } from "react-router-dom";

const BlogDetails = () => {
  const { singleArticle, setSingleArticle } = useNews();
  const navigate = useNavigate();

  const backClickHandler = () => {
    setSingleArticle(null);
    navigate("/");
  };
  return (
    <Container sx={{ marginTop: 4 }}>
      <Button
        sx={{ marginBottom: 2 }}
        onClick={backClickHandler}
        variant="contained"
      >
        Back to List
      </Button>
      <Card>
        <CardMedia
          component="img"
          height="400"
          image={singleArticle?.urlToImage}
          alt={singleArticle?.title}
        />
        <CardContent>
          <Typography variant="h4" gutterBottom>
            {singleArticle?.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            {new Date(singleArticle?.publishedAt).toLocaleDateString()}
          </Typography>
          <Typography variant="body1">
            {singleArticle?.content || singleArticle?.description}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default BlogDetails;

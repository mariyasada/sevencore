import React from "react";
import {
  Typography,
  Card,
  CardActionArea,
  CardContent,
  Box,
} from "@mui/material";
import { useNews } from "../Context/NewsContext";
import { useNavigate } from "react-router-dom";

const BlogPostItem = ({ blog }) => {
  const { setSingleArticle } = useNews();
  const navigate = useNavigate();

  const handleClick = (blog) => {
    setSingleArticle(blog);
    navigate(`/blog/${blog.source.id}`);
  };
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "350px",
      }}
      onClick={() => handleClick(blog)}
      data-testid="news-card"
    >
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {blog.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {blog.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Box sx={{ padding: 2 }}>
        <Typography variant="caption" color="text.secondary">
          Published at: {new Date(blog.publishedAt).toLocaleDateString()}
        </Typography>
      </Box>
    </Card>
  );
};

export default BlogPostItem;

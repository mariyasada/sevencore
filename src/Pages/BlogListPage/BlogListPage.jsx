import React from "react";
import {
  Container,
  Typography,
  Grid,
  Pagination,
  Box,
  CircularProgress,
} from "@mui/material";
import { useNews } from "../../Context/NewsContext";
import BlogPostItem from "../../Components/BlogPostItem";

const BlogList = () => {
  const { newsList, isloading, page, setPage } = useNews();

  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h4" gutterBottom>
        Blog List
      </Typography>
      <Grid container spacing={4}>
        {isloading ? (
          <Box
            sx={{
              display: "flex",
              position: "absolute",
              top: "50%",
              left: "50%",
            }}
          >
            <CircularProgress data-testid="progressBar" />
          </Box>
        ) : (
          newsList.map((blog, index) => (
            <Grid item key={blog} xs={12} sm={6} md={4}>
              <BlogPostItem key={blog} blog={blog} />
            </Grid>
          ))
        )}
      </Grid>
      {!isloading && (
        <Pagination
          count={12}
          page={page}
          onChange={(event, value) => setPage(value)}
          sx={{
            marginTop: 4,
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        />
      )}
    </Container>
  );
};

export default BlogList;

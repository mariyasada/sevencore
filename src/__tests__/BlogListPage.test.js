import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { NewsProvider } from "../Context/NewsContext";
import BlogList from "../Pages/BlogListPage/BlogListPage";
import "@testing-library/jest-dom";

describe("test case for Bloglist page", () => {
  test("should have a title of Bloglist", () => {
    render(
      <BrowserRouter>
        <NewsProvider>
          <BlogList />
        </NewsProvider>
      </BrowserRouter>
    );
    const blogListTitle = screen.getByText(/Blog List/i);
    expect(blogListTitle).toBeInTheDocument();
  });

  test("pagination component", () => {
    render(
      <BrowserRouter>
        <NewsProvider>
          <BlogList />
        </NewsProvider>
      </BrowserRouter>
    );
    const buttons = screen.getAllByRole("button");
    expect(buttons.length).toBe(8);
  });

  test("Should render 12 cards on first page", async () => {
    render(
      <BrowserRouter>
        <NewsProvider>
          <BlogList />
        </NewsProvider>
      </BrowserRouter>
    );

    await screen.findByRole("progressBar", {}, { timeout: 3000 });

    const newsCards = screen.getAllByTestId("news-card");
    expect(newsCards.length).toBe(12);
  });
});

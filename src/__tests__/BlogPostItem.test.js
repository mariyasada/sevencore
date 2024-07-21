import { BrowserRouter } from "react-router-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { NewsProvider } from "../Context/NewsContext";
import "@testing-library/jest-dom";
import BlogPostItem from "../Components/BlogPostItem";
import { articles } from "./data/articles";
import BlogDetails from "../Components/BlogDetails";

describe("Blogpost item related test cases", () => {
  test("Blog card should render correct data", () => {
    render(
      <BrowserRouter>
        <NewsProvider>
          <BlogPostItem blog={articles[0]} />
        </NewsProvider>
      </BrowserRouter>
    );
    const name = screen.getByText(
      "US cyber agency CISA says malicious hackers are 'taking advantage' of CrowdStrike outage | TechCrunch"
    );
    expect(name).toBeInTheDocument();
  });

  test("Blog card should have published at text", () => {
    render(
      <BrowserRouter>
        <NewsProvider>
          <BlogPostItem blog={articles[0]} />
        </NewsProvider>
      </BrowserRouter>
    );
    const name = screen.getByText("Published at");
    expect(name).toBeInTheDocument();
  });
  test("when clicking on newsacrd it should render newsdetail page", () => {
    render(
      <BrowserRouter>
        <NewsProvider>
          <BlogPostItem blog={articles[0]} />
          <BlogDetails />
        </NewsProvider>
      </BrowserRouter>
    );
    const newsCard = screen.getByTestId("news-card");
    fireEvent.click(newsCard);

    const backButton = screen.getByRole("button", { name: "BACK TO LIST " });
    expect(backButton).toBeInTheDocument();
  });
});

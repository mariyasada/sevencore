import { MemoryRouter, Route, Routes } from "react-router-dom";
import BlogDetails from "../Components/BlogDetails";
import { NewsProvider } from "../Context/NewsContext";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BlogList from "../Pages/BlogListPage/BlogListPage";

describe("test related to blogdetails page", () => {
  test("should render details page correctly", () => {
    render(
      <MemoryRouter initialEntries={["/blog/:id"]}>
        <NewsProvider>
          <Routes>
            <Route path="/blog/:id" element={<BlogDetails />} />
          </Routes>
        </NewsProvider>
      </MemoryRouter>
    );
    const buttons = screen.getAllByRole("button");
    expect(buttons.length).toBe(1);
  });

  test("should have image component", () => {
    render(
      <MemoryRouter initialEntries={["/blog/:id"]}>
        <NewsProvider>
          <Routes>
            <Route path="/blog/:id" element={<BlogDetails />} />
          </Routes>
        </NewsProvider>
      </MemoryRouter>
    );
    const img = screen.getAllByRole("img");
    expect(img.length).toBe(1);
  });

  test("should redirect to homepage when clicking back button", () => {
    render(
      <MemoryRouter initialEntries={["/blog/:id"]}>
        <NewsProvider>
          <Routes>
            <Route path="/blog/:id" element={<BlogDetails />} />
            <Route path="/" element={<BlogList />} />
          </Routes>
        </NewsProvider>
      </MemoryRouter>
    );
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(screen.getByText("Blog List")).toBeInTheDocument();
  });
});

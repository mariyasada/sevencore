import logo from "./logo.svg";
import "./App.css";
import BlogList from "./Pages/BlogListPage/BlogListPage";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import BlogDetails from "./Components/BlogDetails";
import { useEffect } from "react";
import { useNews } from "./Context/NewsContext";

function App() {
  const navigate = useNavigate();
  const { singleArticle } = useNews();
  useEffect(() => {
    !singleArticle && navigate("/");
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
      </Routes>
    </div>
  );
}

export default App;

import axios from "axios";
import { useContext, useState, createContext, useEffect } from "react";

const NewsContext = createContext();
const NewsProvider = ({ children }) => {
  const [newsList, setNewsList] = useState([]);
  const [isloading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const pageSize = 12;
  const [singleArticle, setSingleArticle] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com`,
          {
            params: {
              pageSize: pageSize,
              page: page,
              apiKey: process.env.REACT_APP_API_KEY,
            },
          }
        );
        setNewsList(response.data.articles);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };
    fetchArticles();
  }, [page]);

  return (
    <NewsContext.Provider
      value={{
        newsList,
        setNewsList,
        isloading,
        setLoading,
        page,
        setPage,
        pageSize,
        singleArticle,
        setSingleArticle,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};
const useNews = () => useContext(NewsContext);

export { useNews, NewsProvider };

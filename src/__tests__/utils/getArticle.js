import axios from "axios";

export const getArticles = async () => {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com`,
      {
        params: {
          pageSize: 12,
          page: 1,
          apiKey: process.env.REACT_APP_API_KEY,
        },
      }
    );
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching articles:", error);
  }
};

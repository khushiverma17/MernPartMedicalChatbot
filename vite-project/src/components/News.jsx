import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import AnimatedLoader from 'react-na'
import axios from "axios";
const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchnews = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://newsdata.io/api/1/news?apikey=pub_5255566b8bfcf81908bd4f7be66385264cc2d&q=Health&country=in&language=en&category=health"
      );
      console.log(response.data);
      if (response.status == 200) {
        setLoading(false);
        setNews(response.data.results.slice(0, 3));
        console.log(news);
      }
    } catch (e) {
      // Implement Request Throttling or Debouncing
      // You can limit the frequency of requests made by your application to avoid hitting the rate limit. For instance, you can delay subsequent requests or use a debounce function to ensure requests aren't made too quickly.
      if (e.response && e.response.status === 429) {
        console.log("Rate limit exceeded. Retrying in 5 seconds...");
        setTimeout(fetchnews, 5000); // Retry after 5 seconds
      } else {
        console.log(e);
        setLoading(false);
      }
    }
  };
  useEffect(() => {
    fetchnews();
  }, []);
  return (
    <>
      <div className="page-section bg-light mt-3">
        {loading ? (
          <>is Loading..</>
        ) : (
          <>
            <div className="container p-3">
              <h1 className="text-center wow fadeInUp">Latest News</h1>
              <div className="row mt-5">
                {news.map((data) => {
                  return (
                    <div key={data.article_id} className="col-md-12 col-lg-4">
                      <div className="card" style={{ width: "18rem" }}>
                        <img
                          src={data.image_url}
                          className="card-img-top"
                          alt="Loading is in Process..."
                        />
                        <div className="card-body">
                          <h5 className="card-title">{data.title}</h5>
                          <p className="card-text">{data.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}

                <div className="col-12 text-center mt-4 wow zoomIn">
                  <a href="blog.html" className="btn btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default News;

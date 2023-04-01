import React from "react";
import NewsItem from "./NewsItem";

function RightContent() {
  return (
    <section id="content-right">
      <div className="right-column">
        <div className="header">
          <div className="heading-title">
            <h3 className="featured-news fw-semi-bold">Featured News</h3>
          </div>
          <div className="right-arrow"></div>
        </div>

        <div className="content-body">
          <ul className="news-container">
            <NewsItem />
            <NewsItem />
            <NewsItem />
            <NewsItem />
          </ul>
        </div>
      </div>
    </section>
  );
}

export default RightContent;

import React, { useEffect, useState } from "react";
import Axios from "axios";
import moment from "moment";
import XMLParser from "react-xml-parser";
import Parser from "html-react-parser";

import Spinner from "../Spinner/Spinner";

import classes from "./module.css";

export default function NewsList(props) {
  const [rawPosts, setRawPosts] = useState([]);
  const [err, seterr] = useState(null);
  const [loading, setLoading] = useState(true);

  const bbcArabicRssFeedUrl = "https://feeds.bbci.co.uk/arabic/rss.xml";
  // const france24ArabicRssFeedUrl = "https://www.france24.com/ar/rss";

  const rssUrl = `https://cors.bridged.cc/${bbcArabicRssFeedUrl}`;

  useEffect(() => {
    setLoading(true);

    Axios.get(rssUrl, {
      headers: new Headers({
        Accept: "text/html",
        "content-type": "application/x-www-form-urlencoded",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT",
        "Access-Control-Allow-Headers": "Content-Type",
      }),
      mode: "no-cors",
    })
      .then((response) => {
        let posts = [];
        let xml = new XMLParser().parseFromString(response.data);
        let news = xml.children[0].children;

        news.forEach((newsItem) => {
          if (newsItem.name === "item") {
            posts.push({
              title: newsItem.children[0].value,
              description: newsItem.children[1].value,
              link: newsItem.children[2].value,
              guid: newsItem.children[3].value,
              pubDate: newsItem.children[4].value,
            });
          }
        });

        setRawPosts(posts);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        console.log(e);
        seterr(e);
      });
  }, [rssUrl]);

  const posts = rawPosts.map((post, index) => (
    <div key={post.guid} className={`card ${classes.card}`}>
      <div className={classes.cardhorizontal}>
        <div className={`card-body ${classes.cardbody}`}>
          <h4 className="card-title">{Parser(post.title)}</h4>

          <div className={`card-text ${classes.limit}`}>
            {Parser(post.description)}
          </div>
        </div>
      </div>
      <div className="card-footer">
        <small className="text-muted">
          {moment.utc(post.pubDate).format("llll")}
        </small>
      </div>
    </div>
  ));

  let rendered;
  let error;
  let errorMsg;

  if (err && !loading) {
    error = err.code ? err.code : err.name;
    errorMsg = err.message;
    rendered = (
      <React.Fragment>
        <h2 className="red center">{error}</h2>
        <p className="errorMessage center">{errorMsg}</p>
      </React.Fragment>
    );
  }

  if (loading) {
    rendered = <Spinner />;
  }

  if (!loading && posts.length > 0) {
    rendered = <div>{posts}</div>;
  }

  return <div className="container">{rendered}</div>;
}

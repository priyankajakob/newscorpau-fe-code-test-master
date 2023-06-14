import { useState, useEffect } from "react";
import moment from "moment";
import { get, cloneDeep } from "lodash";
import { Content } from "../../../components/molecules";
import List from "../../../components/molecules/List";

import { fetchAll as fetchAllArticles } from "../../../api/articles";

const loadThumbnailImages = (article) => {
  //TODO: Recheck thumbnail logic and use lodash here
  const idd = article.related?.thumbnail?.default[0] || "";
  const thumbnailUrl = article?.references[idd]?.link?.media || "";

  const height = article?.references[idd]?.height
  const width = article?.references[idd]?.width

  const image = {
    alt: article.extendedHeadline?.default,
    src: thumbnailUrl,
    height: (height <= "75" ? height : "75"),
    width: (width <= "100" ? width : "100"),
  };
  return image;
};

//Picking only required data from articles list to pass to reusable list renderer
const customizeArticlesList = (articlesList) => {
  const newArticlesList = [];
  if (articlesList.length > 0) {
    articlesList.forEach((article) => {
      const articleData = {
        id: get(article,"id"),
        headline: get(article, "headline.default", ""),
        standfirst: get(article, "standfirst.default"),
        image: loadThumbnailImages(article),
        date: get(article, "date.live")
          ? moment(article.date.live).format("MMMM DD, YYYY")
          : "",
        link: {
          href: get(article, "link.canonical", ""),
          title: get(article, "target.urlTitle", ""),
        },
        byline:
          (article.byline && article.byline?.default) ||
          (article.authors &&
            article.authors?.length > 0 &&
            article.authors[0].name) ||
          "",
      };
      const newArticleData = cloneDeep(articleData);
      newArticlesList.push(newArticleData);
    });
    return newArticlesList;
  } else {
    return articlesList;
  }
};

const ArticlesList = () => {
  const [fullArticlesSet, setFullArticlesSet] = useState({});
  const [articlesList, setArticlesList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fullData = await fetchAllArticles();
        setFullArticlesSet(fullData);
        setLoading(false);
      } catch (err) {
        console.log("List.jsx : get all articles call failed with error")
        console.log(err);
        setError(true);
        setLoading(false);
      }
    }
    if (loading) {
      fetchData();
    }
  }, [loading]);

  useEffect(() => {
    if (fullArticlesSet?.size > 0 && fullArticlesSet?.results) {
      const newList = customizeArticlesList(fullArticlesSet.results);
      setArticlesList(newList);
    }
  }, [fullArticlesSet]);

  return (
    <Content>
      <List list={articlesList} loading={loading} error={error} />
    </Content>
  );
};

export default ArticlesList;

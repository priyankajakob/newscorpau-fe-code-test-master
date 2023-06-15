import { useState, useEffect, useMemo } from "react";
import moment from "moment";
import { get, cloneDeep, forEach } from "lodash";
import { Content } from "../../../components/molecules";
import List from "../../../components/molecules/List";
import { ArticleContext } from "../../../context";
import { fetchAll as fetchAllArticles } from "../../../api/articles";

const loadThumbnailImages = (article) => {
  //TODO: Recheck thumbnail logic and use lodash here
  const idd = article?.related?.thumbnail?.default[0] || "dummy";
  const thumbnailUrl =
    (article?.references && article.references[idd]?.link?.media) || "";

  const height = article?.references && article?.references[idd]?.height;
  const width = article?.references && article?.references[idd]?.width;

  const image = {
    alt: article?.extendedHeadline?.default,
    src: thumbnailUrl,
    height: height <= "75" ? height : "75",
    width: width <= "100" ? width : "100",
  };
  return image;
};

//Picking only required data from articles list to pass to reusable list renderer
const customizeArticlesList = (articlesList) => {
  const newArticlesList = [];
  if (articlesList.length > 0) {
    forEach(articlesList, (article) => {
      const articleData = {
        id: get(article, "id"),
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
        intro: get(article, "intro.default", undefined),
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
  const [loaded, setLoaded] = useState(false);
  const [noRecordsToDisplay, setNoRecordsToDisplay] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fullData = await fetchAllArticles();
        setFullArticlesSet(fullData);
        setLoading(false);
        setLoaded(true);
      } catch (err) {
        console.log("List.jsx : get all articles call failed with error");
        console.log(err);
        setError(true);
        setLoading(false);
        setLoaded(true);
      }
    };
    if (loading) {
      fetchData();
    }
  }, [loading]);

  useEffect(() => {
    if (fullArticlesSet?.results?.length > 0 && fullArticlesSet?.results) {
      const newList = customizeArticlesList(fullArticlesSet.results);
      setArticlesList(newList);
    } else {
      if (loaded) {
        // To track that api call is complete and still list is empty
        setNoRecordsToDisplay(true);
      }
    }
  }, [fullArticlesSet, loaded]);

  const value = useMemo(
    () => ({ list: articlesList, loading, error, noRecordsToDisplay }),
    [articlesList, loading, error, noRecordsToDisplay],
  );

  return (
    <Content>
      <ArticleContext.Provider value={value}>
        <List />
      </ArticleContext.Provider>
    </Content>
  );
};

export default ArticlesList;

import { useState, useEffect } from "react";
import { MuiBox, MuiTypography } from "../../../components/atoms";
import { Content } from "../../../components/molecules";
import { ArticleSection } from "../../../components/molecules/articles";
import { commonConstants } from '../../../constants'
import "./list.scss";

const ArticlesList = () => {
  const [fullArticlesSet, setFullArticlesSet] = useState({});
  const [articlesList, setArticlesList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        //This could be replaced with any api call instead of mocked json
        const response = await fetch("./capi.json");
        const fullData = await response.json();
        console.log(fullData);
        setFullArticlesSet(fullData);
        setLoading(false);
      } catch (err) {
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
    if (fullArticlesSet.hits > 0 && fullArticlesSet?.results) {
      setArticlesList(fullArticlesSet.results);
    }
  }, [fullArticlesSet]);

  return (
    <Content>
      <MuiBox>
        {/* Todo: Add Pagination */}
        <MuiTypography variant={"h2"}> </MuiTypography>
        <MuiBox>
          {loading && <p>{commonConstants.LOADING}</p>}
          {error && <p>{commonConstants.NETWORK_ERROR}</p>}
          {!error &&
            !loading &&
            articlesList.map((article) => {
              //TODO: Remove this console.log
              console.log(article);

              return <ArticleSection article={article} />;
            })}
        </MuiBox>
      </MuiBox>
    </Content>
  );
};

export default ArticlesList;

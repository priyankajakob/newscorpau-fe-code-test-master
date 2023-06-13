import { useState, useEffect } from "react";
import { MuiBox, MuiTypography } from "../../../components/atoms";
import { Content } from "../../../components/molecules";
import ArticleSection from "./ArticleSection";
import CurrentList from "../../../data/capi.json";
import "./list.scss";

const ArticlesList = () => {
  const [fullArticlesSet, setFullArticlesSet] = useState({});
  const [articlesList, setArticlesList] = useState([]);

  useEffect(() => {
    setFullArticlesSet(CurrentList);
  }, []);

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
          {articlesList.map((article) => {
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

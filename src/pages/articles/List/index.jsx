import { useState, useEffect } from "react";
import moment from 'moment';
import { MuiBox, MuiTypography } from "../../../components/atoms";
import { Thumbnail, Content } from "../../../components/molecules";
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

  const loadThumbnailImages = (article) => {
    //TODO: Recheck thumbnail logic
    const idd = article.related?.thumbnail?.default[0] || "";
    const thumbnailUrl = article.references[idd]?.link?.media || "";

    const image = {
      alt: article.extendedHeadline?.default,
      src: thumbnailUrl,
      height: article?.references[idd]?.height || "75",
      width: article?.references[idd]?.width || "100",
    };
    return <Thumbnail image={image} />;
  };

  return (
    <Content>
    <MuiBox>
    {/* Todo: Add Pagination */}
      <MuiTypography variant={"h2"}>  </MuiTypography>
      <MuiBox>
        {articlesList.map((article) => {
          //TODO: Remove this console.log
          console.log(article);

          return (
            <MuiBox className="flex-row" key={article.id}>
              <MuiBox>{loadThumbnailImages(article)}</MuiBox>

              <MuiBox>
                <MuiTypography variant="h5" sx={{lineHeight:"24px",fontWeight:"bold"}}>
                    <a
                    href={article.link && article.link.canonical}
                    title={article.target && article.target.urlTitle}
                    >
                    <span className="headline">{article.headline && article.headline.default}</span>
                    </a>
                </MuiTypography>
                {article.standfirst && article.standfirst.default && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: article.standfirst.default,
                    }}
                  />
                )}
                <p>
                  <MuiTypography variant="body2" sx={{color:"grey"}}>
                    <em>{(article.byline && article.byline.default) ||
                      (article.authors &&
                        article.authors.length > 0 &&
                        article.authors[0].name)}</em>
                    &nbsp;|&nbsp;
                    {article.date && article.date.live && moment(article.date.live).format('MMMM DD, YYYY')}
                  </MuiTypography>
                </p>
              </MuiBox>
            </MuiBox>
          );
        })}
      </MuiBox>
    </MuiBox>
    </Content>
  );
};

export default ArticlesList;


import { MuiBox } from '../../../components/atoms';

import Article from './Article';
import ArticleThumbnail from './ArticleThumbnail';

const loadThumbnailImages = (article) => {
  //TODO: Recheck thumbnail logic and use lodash here
  const idd = article.related?.thumbnail?.default[0] || "";
  const thumbnailUrl = article.references[idd]?.link?.media || "";

  const image = {
    alt: article.extendedHeadline?.default,
    src: thumbnailUrl,
    height: article?.references[idd]?.height || "75",
    width: article?.references[idd]?.width || "100",
  };
  return image
};

const ArticleSection = ({article}) => {
      return (
        <MuiBox className="flex-row" key={article.id}>
          <ArticleThumbnail image={loadThumbnailImages(article)}/>
          <Article article={article}/>
        </MuiBox>
      );
}

export default ArticleSection;

import { MuiBox } from '../../../components/atoms';

import Article from './Article';
import ArticleThumbnail from './ArticleThumbnail';

const ArticleSection = ({article}) => {
      //TODO: Use lodash for all getKey
      return (
        <MuiBox className="flex-row" key={article.id}>
          <ArticleThumbnail article={article}/>
          <Article article={article}/>
        </MuiBox>
      );
}

export default ArticleSection;
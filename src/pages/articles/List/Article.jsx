import moment from 'moment';
import { MuiBox, MuiTypography } from '../../../components/atoms';

const ArticleHeadine = ({headline, articleLink}) => {
  return(
    <MuiTypography variant="h5" sx={{lineHeight:"24px",fontWeight:"bold"}}>
      <a
        href={articleLink.href}
        title={articleLink.title}
      >
        <span className="article-headline">{headline}</span>
      </a>
    </MuiTypography>
  )
}

const ArticleStandfirst = ({standfirst}) => {
  return(
    <div
      className="article-standfirst"
      dangerouslySetInnerHTML={{
        __html: standfirst,
      }}
    />
  )
}

const ArticleFooter = ({ byline, date}) => {
  return(
    <p>
        <MuiTypography variant="body2" sx={{color:"grey"}}>
            <em>
              {byline}
            </em>
            {byline && (<span>&nbsp;|&nbsp;</span>)}
            {date}
        </MuiTypography>
    </p>
  )
}

const Article = ({article}) => {
    const articleLink = {
      href: (article.link && article.link.canonical) || "",
      title: (article.target && article.target.urlTitle) || ""
    }
    const articleLiveDate = (article.date && article.date.live && moment(article.date.live).format('MMMM DD, YYYY')) || ""
    const articleByline = (article.byline && article.byline.default) 
    ||
    (article.authors &&
      article.authors.length > 0 &&
      article.authors[0].name) || ""

    return(
        <MuiBox>

          <ArticleHeadine
            headline = {article.headline && article.headline.default}
            articleLink = {articleLink}
          />
       
          {article.standfirst && article.standfirst.default && (
            <ArticleStandfirst standfirst={article.standfirst.default}/>
          )}

          <ArticleFooter
            byline={articleByline}
            date={articleLiveDate}
          />
          
        </MuiBox>
    )
}

export default Article;
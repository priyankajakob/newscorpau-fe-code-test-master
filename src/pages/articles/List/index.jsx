import { useState, useEffect } from 'react';
import CurrentList from '../../../data/capi.json';
import './list.scss';

const ArticlesList = () => {
    const [ fullArticlesSet, setFullArticlesSet ] = useState({})
    const [ articlesList, setArticlesList ] = useState([])

    useEffect(()=>{
        setFullArticlesSet(CurrentList)
    },[])

    useEffect(() => {
        if (fullArticlesSet.hits > 0 && fullArticlesSet?.results) {
            setArticlesList(fullArticlesSet.results)
        }
    },[fullArticlesSet])


    return (
        <div>
            <h2> Listing Articles </h2>
            <div>
            { articlesList.map((article) => {
                console.log(article)
                const idd = article.related?.thumbnail?.default[0] || ""
                const thumbnailUrl = article.references[idd]?.link?.media
                return(
                  <div className="row" key={article.id}>
                    <div className="column">
                        <img alt="not found" src={thumbnailUrl}/>
                    </div>
                    
                    <div className="column"> 
                        <a href={article.link && article.link.canonical}>
                            <h4>{article.headline && article.headline.default}</h4>
                        </a>
                        { article.standfirst && article.standfirst.default && 
                            (<div dangerouslySetInnerHTML={{ __html: article.standfirst.default }} />)
                        }
                        <p>
                            <span> 
                            {
                                (article.byline && article.byline.default) 
                                || 
                                (article.authors && article.authors.length>0 && article.authors[0].name)
                            }
                            </span> 
                            &nbsp;|&nbsp;
                            <span> 
                                <em>{article.date && article.date.created}</em> 
                            </span>
                        </p>
                    </div>
                  </div>
                )}) 
            }
            </div>
        </div>
    )
}

export default ArticlesList
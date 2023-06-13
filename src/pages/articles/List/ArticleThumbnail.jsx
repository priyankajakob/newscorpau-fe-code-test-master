import { MuiBox } from "../../../components/atoms";
import { Thumbnail } from "../../../components/molecules";

const ArticleThumbnail = ({article}) => {
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
        return <Thumbnail image={image} />;
      };

    return(
        <MuiBox>{loadThumbnailImages(article)}</MuiBox>
    )
}

export default ArticleThumbnail;
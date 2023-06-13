import { MuiBox } from "../../../components/atoms";
import { Thumbnail } from "../../../components/molecules";

const ArticleThumbnail = ({image}) => {
    return(
        <MuiBox>
          <Thumbnail image={image} />
        </MuiBox>
    ) 
}

export default ArticleThumbnail;
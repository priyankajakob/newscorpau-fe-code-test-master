import { MuiBox } from '../atoms';

const NotFoundError = ({ content }) => {
    return(
            <MuiBox>
                <span>
                    { content }
                </span>
            </MuiBox>
    )
}

export default NotFoundError;
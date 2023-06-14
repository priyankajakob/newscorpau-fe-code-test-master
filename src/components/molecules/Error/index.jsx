import { MuiBox } from '../../atoms';
import './index.scss';

const Error = ({ content }) => {
    return(
            <MuiBox>
                <span className="error">
                    { content }
                </span>
            </MuiBox>
    )
}

export default Error;
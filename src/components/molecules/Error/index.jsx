import { MuiBox } from '../../atoms';

const Error = ({ content }) => {
    return(
            <MuiBox>
                <span>
                    { content }
                </span>
            </MuiBox>
    )
}

export default Error;
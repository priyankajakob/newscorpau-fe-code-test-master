import { MuiBox } from '../atoms'
import './Content.scss';

const Content = ({children}) => {
    return(
        <MuiBox className="content">
            {children}
        </MuiBox>
    )
}
export default Content;
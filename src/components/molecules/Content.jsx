import { MuiBox } from '../atoms'

const Content = ({children}) => {
    return(
        <MuiBox sx={{marginTop:"5rem", marginLeft:"3rem"}}>
            {children}
        </MuiBox>
    )
}
export default Content;
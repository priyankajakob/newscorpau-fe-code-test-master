import { NotFoundError } from '../../../components/molecules';
import { commonConstants } from '../../../constants'

const ErrorBoundary = () => {
    return(
        <NotFoundError content ={commonConstants.PAGE_404_ERROR}/>
    )
}

export default ErrorBoundary;
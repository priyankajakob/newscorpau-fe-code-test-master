import { Routes, Route } from 'react-router-dom';

import Articles from '../pages/articles/List';
import ErrorBoundary from './ErrorBoundary';

const Routing = () => {
    return(
            <Routes>
                <Route path="/" exact element={<Articles />}/>
                <Route path="/articles" element={<Articles/>}/>
                <Route path="*" element={<ErrorBoundary/>}/>
            </Routes>
    )
}

export default Routing;
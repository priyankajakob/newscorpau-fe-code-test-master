import { Routes, BrowserRouter, Route } from 'react-router-dom';

import Articles from '../pages/articles/List';
import ErrorBoundary from '../pages/errors/ErrorBoundary';

const Routing = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Articles />}/>
                <Route path="/articles" element={<Articles/>}/>
                <Route path="*" element={<ErrorBoundary/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Routing;
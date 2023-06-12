import { Routes, BrowserRouter, Route } from 'react-router-dom';

import Dummy from '../pages/dummy/Dummy';
import ErrorBoundary from '../pages/errors/ErrorBoundary';

const Routing = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Dummy/>}/>
                <Route path="*" element={<ErrorBoundary/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Routing;
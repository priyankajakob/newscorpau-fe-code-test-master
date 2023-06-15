import { BrowserRouter } from 'react-router-dom';
import Routing from '../routes';
import { Header } from '../components/molecules';

const App = () => {
  return (
    <>
      <Header headerLogoText="NewsAustralia"/>
      <BrowserRouter>
        <Routing/>
      </BrowserRouter>
    </>
    
  );
}

export default App;

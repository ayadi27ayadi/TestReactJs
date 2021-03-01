import logo from './logo.svg';
import './App.css';
import Accueil from '../src/component/Accueil/Accueil';
import IntegrationGraphique from '../src/component/IntegrationGraphique/IntegrationGraphique'
import ReactDOM from 'react-dom';
import { BrowserRouter  , Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
              <Route path="/" exact component={Accueil} />
              
            <Route path="/IntegrationGraphique"  component={IntegrationGraphique} />
              </BrowserRouter>

     
    </div>
  );
  
}

export default App;

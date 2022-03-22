import './App.css';
import Movies from './pages/Movies';
import BulletinBoard from './pages/BulletinBoard';
import FarmAnimals from './pages/FarmAnimals';
import Main from './pages/Main';
import Nav from './components/Nav';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/main">
            <Main />
          </Route>
          <Route path="/movies">
            <Movies />
          </Route>
          <Route path="/bulletinboard">
            <BulletinBoard />
          </Route>
          <Route path="/farmanimals">
            <FarmAnimals />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

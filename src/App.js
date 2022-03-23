import './App.css';
import Movies from './views/Movies';
import BulletinBoard from './views/BulletinBoard';
import FarmAnimals from './views/FarmAnimals';
import Main from './views/Main';
import Nav from './components/Nav';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/">
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

import { Route, Switch } from 'react-router-dom';
import './App.css';
import Explore from './components/Explore/Explore';
import Home from './components/Home/Home';
import MovieDetails from './components/MovieDetails/MovieDetails';
import NotFound from './components/NotFound/NotFound';

function App() {
    return (
        <div className="App">
            <Switch>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/explore">
                    <Explore />
                </Route>
                <Route path="/movidetails/:id">
                    <MovieDetails />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        </div>
    );
}

export default App;

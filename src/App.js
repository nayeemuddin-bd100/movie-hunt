import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import GlobalState from './context/GlobalState';

const Home = lazy(() => import('./components/Home/Home'));
const Explore = lazy(() => import('./components/Explore/Explore'));
const MovieDetails = lazy(() => import('./components/MovieDetails/MovieDetails'));
const NotFound = lazy(() => import('./components/NotFound/NotFound'));

function App() {
    return (
        <GlobalState className="App">
            <Switch>
                <ErrorBoundary>
                    <Suspense fallback={<h2>...Loading</h2>}>
                        <Route exact path="/home">
                            <Home />
                        </Route>
                        <Route exact path="/explore">
                            <Explore />
                        </Route>
                        <Route exact path="/movidetails/:id">
                            <MovieDetails />
                        </Route>
                        <Route exact path="/">
                            <Home />
                        </Route>
                    </Suspense>
                </ErrorBoundary>
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        </GlobalState>
    );
}

export default App;

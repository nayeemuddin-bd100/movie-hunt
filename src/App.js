import { Route, Switch } from 'react-router-dom';
import './App.css';
import Explore from './components/Explore/Explore';
import NotFound from './components/NotFound/NotFound';

function App() {
    return (
        <div className="App">
            <Switch>
                <Route path="/home">{/* <Home /> */}</Route>
                <Route exact path="/">
                    {/* <Home /> */}
                    <Explore />
                </Route>
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        </div>
    );
}

export default App;

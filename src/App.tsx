import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';


class App extends Component {
    render()
     {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/*" component={Home} />
                </Switch>
            </Router>
        );
    }
}


// App.get('*', (req, res) => { res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')); });

export default App;


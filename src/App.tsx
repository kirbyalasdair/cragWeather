import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.scss';
import Home from './pages/Home';
import Layout from './components/layout/Layout';

const App: React.FC = () => {
  return <Router>
    <Layout>
      <Switch >
        <Route exact path="/" component={Home}/>
      </Switch>
    </Layout>
  </Router>
}

export default App;

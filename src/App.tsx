import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { NavBar } from './components'
import {Home, Products, SignUp, Services} from './pages'

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" exact component={Services} />
          <Route path="/products" exact component={Products} />
          <Route path="/sign-up" exact component={SignUp} />

        </Switch>
      </div>
    </Router>
  )
}



export default App;

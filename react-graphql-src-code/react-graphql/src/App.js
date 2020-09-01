import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Show } from './components/Show';
import { Create } from './components/Create';
import { Edit } from './components/Edit';
import Navbar from './components/layout/Navbar';
// import store from './stores';
// import { Provider } from 'react-redux';

function App() {
  return (
    //<Provider store={store}>
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="py-3">
            <Switch>
              <Route exact path="/" component={Show} />
              <Route exact path="/contact/add" component={Create} />
              <Route exact path="/contact/edit/:id" component={Edit} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
    // </Provider>
  );
}

export default App;

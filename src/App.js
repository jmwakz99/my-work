import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'


import MainNavigation from './shared/components/Navigation/MainNavigation'
import HomePage from './pages/HomePage'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <MainNavigation />
      <main >
        <Switch>
          <Route path="/" exact>
            <HomePage />

          </Route>
          <Redirect to="/" />

        </Switch>
      </main>


    </BrowserRouter>

  );
}

export default App;

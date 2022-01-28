import React from 'react';
import { BrowserRouter as Route, Switch } from "react-router-dom";
import styled from 'styled-components';

import Header from './Header';
import BloomHeader from './BloomHeader';
import Login from './Login';
import PrivateRoute from './PrivateRoute';
import View from "./View"
import Logout from './Logout';


const App = () => {
  return (
    <AppContainer>
      <BloomHeader/>
      <Header/>
      <RouteContainer>

        <Switch>
          <PrivateRoute path="/logout"component={Logout}/>  
          <PrivateRoute path="/view"component={View}/>
          <Login path="/login" component={Login}/>
          <Login path="/" component={Login}/>
        </Switch>

      </RouteContainer>
    </AppContainer>
  )
}

export default App;

//Task List
//1. Create and import PrivateRoute component.
//2. Create a Route for Login pointing to '/login.'
//3. Create a PrivateRoute for View component point to '/view.'
//4. Create a PrivateRoute for Logout component pointing to '/logout.'


const AppContainer = styled.div`
  height: 100%;
`
const RouteContainer = styled.div`
  display: flex;
  height: 85%;
  align-items: center;
  flex-direction: column;
`

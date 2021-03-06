/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const AppWrapper = styled.div`
  text-align: center;
`

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - Jelpzone"
        defaultTitle="Jelpzone"
      >
        <meta name="description" content="Jelpzone application" />
      </Helmet>
      <MuiThemeProvider>
        <div className="container">

          <Header title={"JelpZone"} />

          <Switch>
            {/*<Route exact path="/" component={HomePage} />*/}
            <Route path="/login" component={LoginPage} />
            <Route path="" component={NotFoundPage} />
          </Switch>

          <Footer />

        </div>
      </MuiThemeProvider>
    </AppWrapper>
  );
}

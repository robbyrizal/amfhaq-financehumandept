import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import './App.scss';

const client = new ApolloClient({
  uri:'/graphql', //error proxy
  // uri:'http://localhost:5000/graphql',
  })
  
const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));

// Pages
const Login = React.lazy(() => import('./views/Pages/Login/Login'));
const Register = React.lazy(() => import('./views/Pages/Register'));
const Page404 = React.lazy(() => import('./views/Pages/Page404'));
const Page500 = React.lazy(() => import('./views/Pages/Page500'));
const Auth = React.lazy(() => import('./views/Pages/Login/Auth'));

class App extends Component {

  render() {
    return (
      <ApolloProvider client={client}>
        <HashRouter>
            <React.Suspense fallback={loading()}>
              <Switch>
                <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
                <Route exact path="/auth/login/:username&&:password" name="Auth Page" render={props => <Auth {...props}/>} />
                <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
                <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
                <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
                <Route path="/" name="Home" render={props => <DefaultLayout {...props}/>} />
                

              </Switch>
            </React.Suspense>
        </HashRouter>
      </ApolloProvider>
    );
  }
}

export default App;

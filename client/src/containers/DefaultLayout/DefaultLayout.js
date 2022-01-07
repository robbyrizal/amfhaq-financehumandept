import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import * as router from 'react-router-dom';
import { Container } from 'reactstrap';
import {Helmet} from "react-helmet";

import {
  AppAside,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppBreadcrumb2 as AppBreadcrumb,
  AppSidebarNav2 as AppSidebarNav,
} from '@coreui/react';
// sidebar nav config
import navigation from '../../_nav';
import navigationHRD from '../../_nav_HRD';
import navigationFinance from '../../_nav_Finance';
// routes config
import routes from '../../routes';

const DefaultAside = React.lazy(() => import('./DefaultAside'));
const DefaultFooter = React.lazy(() => import('./DefaultFooter'));
const DefaultHeader = React.lazy(() => import('./DefaultHeader'));
const Nav = React.lazy(() => import('../../_nav'));

class DefaultLayout extends Component {
  constructor(props) {
    super(props);

    
  const divisi = localStorage.getItem("divisi");
    this.state = {
      divisi : divisi,
    };
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  signOut(e) {
    e.preventDefault()
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    localStorage.removeItem("nama");
    localStorage.removeItem("jabatan");
    localStorage.removeItem("alamat");
    localStorage.removeItem("noHp");
    localStorage.removeItem("avatar");
    localStorage.removeItem("divisi");
    localStorage.removeItem("loggedIn");
    this.props.history.push('/login');
  }


  render() {
    const divisi = this.state.divisi;
    return (
      <div className="app">
        <Helmet>
                <title>AMF-HAQ - Finance Accounting dan Human Resource Development</title>
            </Helmet>
        <AppHeader fixed>
          <Suspense  fallback={this.loading()}>
            <DefaultHeader onLogout={e=>this.signOut(e)}/>
          </Suspense>
        </AppHeader>
        <div className="app-body">
          <AppSidebar fixed display="lg">
            <AppSidebarHeader />
            <AppSidebarForm />
            <Suspense>
            {divisi === "HRD" &&
        <AppSidebarNav navConfig={navigationHRD} {...this.props} router={router}/>
            }
            {divisi === "Finance Accounting" &&
        <AppSidebarNav navConfig={navigationFinance} {...this.props} router={router}/>
            }
            {divisi === "Admin" &&
        <AppSidebarNav navConfig={navigation} {...this.props} router={router}/>
            }
            
            </Suspense>
            <AppSidebarFooter />
            <AppSidebarMinimizer />
          </AppSidebar>
          <main className="main">
            <AppBreadcrumb appRoutes={routes} router={router}/>
            <Container fluid>
              <Suspense fallback={this.loading()}>
                <Switch>
                  {routes.map((route, idx) => {
                    return route.component ? (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={props => (
                          <route.component {...props} />
                        )} />
                    ) : (null);
                  })}
                  <Redirect from="/" to="/dashboard" />
                </Switch>
              </Suspense>
            </Container>
          </main>
          <AppAside fixed>
            <Suspense fallback={this.loading()}>
              <DefaultAside />
            </Suspense>
          </AppAside>
        </div>
        <AppFooter>
          <Suspense fallback={this.loading()}>
            <DefaultFooter />
          </Suspense>
        </AppFooter>
      </div>
    );
  }
}

export default DefaultLayout;

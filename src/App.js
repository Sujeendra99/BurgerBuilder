
import React, { useEffect, Suspense } from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Logout from './containers/Auth/Logout/Logout';
import { connect } from 'react-redux';
import * as actions from './store/actions/index';
//import React.lazy from './hoc/asynComponent/asynComponent';

const Checkout = React.lazy(() => {
  return import('./containers/Checkout/Checkout')
});
const Orders = React.lazy(() => {
  return import('./containers/Orders/Orders')
});
const Auth = React.lazy(() => {
  return import('./containers/Auth/Auth');
});
const App = props => {
  const { onTryAutoSignUp } = props;

  useEffect(() => {
    onTryAutoSignUp();
  }, [onTryAutoSignUp]);

  // state = {
  //   show: true
  // };
  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({ show: false });
  //   }, 5000);
  // }


  let routes = (
    <Switch>
      <Route path="/auth" render={(props) => <Auth {...props} />} />
      <Route path="/" exact component={BurgerBuilder} />
      <Redirect to="/" />
    </Switch>
  );
  if (props.isAuthenticated) {
    routes = (
      <Switch>
        <Route path="/checkout" render={(props) => <Checkout {...props} />} />
        <Route path="/orders" render={(props) => <Orders {...props} />} />
        <Route path="/logout" component={Logout} />
        <Route path="/auth" render={(props) => <Auth {...props} />} />
        <Route path="/" exact component={BurgerBuilder} />
        <Redirect to="/" />
      </Switch>);
  }
  return (
    //console.log(asyncAuth, asyncCheckout, asyncOrders),

    <div>
      <Layout>
        <Suspense fallback={<p>Loading...</p>}>
          {routes}
        </Suspense>
      </Layout>

    </div>

  );
}
const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};


const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignUp: () => dispatch(actions.authCheckState())
  };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

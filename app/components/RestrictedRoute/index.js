import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { authenticatedSelector } from 'services/session/selectors';

const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest);
  return React.createElement(component, finalProps);
};

const RestrictedRoute = ({ component, authenticated, location, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      authenticated ? (
        renderMergedProps(component, props, rest)
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: location },
          }}
        />
      )
    }
  />
);

RestrictedRoute.propTypes = {
  component: PropTypes.func.isRequired,
  authenticated: PropTypes.bool.isRequired,
  location: PropTypes.string.isRequired
};

function mapStateToProps(state) {
  return {
    authenticated: authenticatedSelector(state),
  };
}

export default connect(mapStateToProps)(RestrictedRoute);

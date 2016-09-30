import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { logOut } from 'actions/users';

const Navigation = ({ user, logOut }) => {
    return (
      <nav className='navigation' role="navigation">
        <Link to="/"
          className='item logo'
          activeClassName='active'>Ninja Ocean</Link>
          { user.authenticated ? (
            <Link onClick={logOut}
              className='item' to="/">Logout</Link>
          ) : (
            <Link className='item' to="/login">Log in</Link>
          )}
          <Link className='item' to="/dashboard">Dashboard</Link>
          <Link to="/about" className='item' activeClassName='active'>About</Link>
      </nav>
    );
};

Navigation.propTypes = {
  user: PropTypes.object,
  logOut: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps, { logOut })(Navigation);

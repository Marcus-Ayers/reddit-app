import React from 'react';
import './layout.scss';
const Layout = (props) => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand text-danger" href="/">Reddit</a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
              <button type="button" class="btn btn-outline-primary mr-4 login-btn">Log In</button>
              <button type="button" class="btn btn-primary signup-btn">Sign up</button>
              </li>
              </ul>
          </div>
        </div>
      </nav>
      {props.children}
      <footer className="p-3 bg-light">
        <div>
          <p className="me-3 mb-0 text-secondary">Reddit Clone</p>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default Layout;
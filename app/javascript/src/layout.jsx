import React from 'react';
import './layout.scss';

const LogoutButton = () => {
  const handleLogout = () => {
    fetch('/sessions', {
      method: 'DELETE',
      credentials: 'same-origin'
    })
    .then(response => {
      if (response.ok) {
        window.location.reload();
      } else {
        throw new Error('Failed to logout');
      }
    })
    .catch(error => {
      console.error(error);
    });
  };

  return (
    <button type="button" className="btn btn-outline-secondary mr-4" onClick={handleLogout}>Logout</button>
  );
};


const Layout = (props) => {
  
  const handleSignOut = () => {
    fetch('/sessions', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': document.querySelector('[name="csrf-token"]').content
      }
    })
    .then(response => {
      if (response.ok) {
        window.location.href = '/';
      }
    });
  }
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand navbar-light home-background">
        <div className="container-fluid">
        <img src="https://logodownload.org/wp-content/uploads/2018/02/reddit-logo-16.png" alt="Italian Trulli" className="logo"></img>

          <a className="navbar-brand text-danger" href="/">Reddit</a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a href={`/login`}>
              <button type="button" className="btn btn-outline-primary mr-4 login-btn">Log In</button>
              <button type="button" className="btn btn-primary signup-btn">Sign up</button>
                </a>
                <form action="/api/sessions" method="post">
                <button type="button" className="btn btn-outline-danger mr-4" onClick={handleSignOut}>Sign out</button>
            </form>

              </li>
              </ul>
          </div>
        </div>
      </nav>
      {props.children}
      <footer className="p-3 home-background">
        <div>
          <p className="me-3 mb-0 text-secondary">Reddit Clone</p>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default Layout;

import React from 'react';

function NavBar() {
  return (
    <nav className="navbar is-transparent">
      <div className="container">
        <div className="navbar-brand">
          <a href="/" className="navbar-item title is-unselectable my-name">
            Mike Griffith
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

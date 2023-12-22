import React from 'react';

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <span className="navbar-brand">Navbar</span>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <span className="nav-link">Home</span>
            </li>
            <li className="nav-item">
              <span className="nav-link">About</span>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Category
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><span className="dropdown-item">Action</span></li>
                <li><span className="dropdown-item">Another action</span></li>
                <li><hr className="dropdown-divider" /></li>
                <li><span className="dropdown-item">Something else here</span></li>
              </ul>
            </li>
            <li className="nav-item">
              <span className="nav-link disabled">Disabled</span>
            </li>
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

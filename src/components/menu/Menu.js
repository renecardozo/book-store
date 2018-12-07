import React from 'react';
import logo from '../../bootstrap-solid.svg'
import { Link } from 'react-router-dom'
const Menu = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="">
        </img>
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to='/'>
              <div className="nav-link">
                <button className="btn btn-outline-success" type="button">
                  {'See Books'}
                </button>
              </div>
            </Link>
          </li>
          <li className="nav-item">
            <Link to='/pricing'>
              <div className="nav-link">
                <button className="btn btn-outline-success" type="button">{'Pricing'}</button>
              </div>
            </Link>
          </li>
          <li className="nav-item">
            <Link to='/about'>
              <div className="nav-link">
                <button className="btn btn-outline-success" type="button">{'About Us'}</button>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Menu;
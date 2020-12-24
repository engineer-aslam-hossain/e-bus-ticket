import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import logo from '../../images/logo.png';
import { Link } from '@material-ui/core';

const Header = () => {
  return (
    <header className='header '>
      <div className='container px-0'>
        <Navbar expand='lg'>
          <Navbar.Brand>
            <Link to='/'>
              <img src={logo} alt='' className='logo img-fluid' />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav '>
            <Nav className='ml-auto justify-content-center align-items-center'>
              <Link to='/'>Dummy Header</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </header>
  );
};

export default Header;

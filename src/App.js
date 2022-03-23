import React from 'react';
import { useLocation } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { styled } from '@material-ui/core/styles';
import About from './About.js';
import Work from './Work.js';
import Contact from './Contact.js';
import Home from './Home.js';
import AppBar from '@material-ui/core/AppBar';
import { NavHashLink as Link } from 'react-router-hash-link';
import './App.css';
import FlockLogo from './img/flock_logo.png';

import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const ClearBar = styled(AppBar)({
  backgroundColor: 'transparent',
  border: 0,
  borderRadius: 3,
  boxShadow: 'none',
  color: 'black',
  height: 48,
  padding: '80px 10%',
  maxWidth: '100%',
  margin: '0',
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'row'
});

const NavLink = styled(Link)({
  fontSize: '16px',
  fontFamily: 'Poppins, sans-serif',
  fontWeight: '700',
  color: '#070A6D',
  letterSpacing: "1px",
  textDecoration: 'none',
  '&:hover': {
       opacity: 0.6
  },
  '&:active': {
    color: '#EF8B7C'
  },
  '&:focus': {
    color: '#EF8B7C'
  }
});

const routes = [
  { path: '/', name: '', Component: Home },
  { path: '/about', name: 'about', Component: About },
  { path: '/work', name: 'work', Component: Work },
  { path: '/contact', name: 'contact', Component: Contact },
]

export default function App() {
  return (
    <Router basename="/">
      <ClearBar position="fixed">
        <NavLink to="/"><img src={FlockLogo} height={'30px'} alt={"Flock Studio Sf Logo"} /></NavLink>
        <div className="nav">
            {routes.map(route => (
              <NavLink
                key={route.path}
                as={NavLink}
                to={route.path}
                activeClassName="active"
                activeStyle={{ color: '#EF8B7C' }}
                exact
              >
                {route.name}
              </NavLink>
            ))}
          </div>
      </ClearBar>
      <div className="div">
          {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={3000}
                  classNames="page"
                  unmountOnExit
                >
                  <div className="page">
                    <Component />
                  </div>
                </CSSTransition>
              )}
            </Route>
          ))}
        </div>
      
    </Router>
  );
}



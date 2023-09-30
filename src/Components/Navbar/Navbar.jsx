import React, { useState } from 'react'
import './navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
export default function Navbarr() {
  const [logoYPadding, setLogoYPadding] = useState(4)
  const [bgColor, setBgColor] = useState('rgba(65, 64, 64, 0.016)')
  const [navItemColor,setNavItemColor] =useState('#fff')
  const [logoSrc,setLogoSrc]=useState("img/logo.png.webp")
  window.document.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      setLogoYPadding(2)
      setBgColor('rgba(255,255,255,0.8)')
      setNavItemColor('#4c4c4c')
      setLogoSrc("img/logo2.png.webp")
    } else {
      setLogoYPadding(4)
      setBgColor('rgba(65, 64, 64, 0.016)')
      setNavItemColor('#fff')
      setLogoSrc("img/logo.png.webp")
    }
  })
  return (
    <>
      <Navbar expand="lg" id='navbar' style={{ background: bgColor }}>
        <Container>
          <Navbar.Brand href="#home" className={`navbar-logo-container py-${logoYPadding}`}>
            <img src={logoSrc} id='logo' alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse id="main-navbar">
            <Nav className="mx-auto">
              <Nav.Link  >
                <NavLink to={'/'} className={(item => {return (item.isActive ? 'nav-item px-3 active' : 'nav-item px-3')})} style={{color:navItemColor}} >HOME</NavLink>
              </Nav.Link>
              <Nav.Link >
                <NavLink to={'/menu'} className={(item => {return (item.isActive ? 'nav-item px-3 active' : 'nav-item px-3')})} style={{color:navItemColor}} >MENU</NavLink>
              </Nav.Link>
              <Nav.Link >
                <NavLink to={'/reservation'} className={(item => {return (item.isActive ? 'nav-item px-3 active' : 'nav-item px-3')})} style={{color:navItemColor}} >RESERVATION</NavLink>
              </Nav.Link>
              <Nav.Link >
                <NavLink to={'/gallary'} className={(item => {return (item.isActive ? 'nav-item px-3 active' : 'nav-item px-3')})} style={{color:navItemColor}}>GALLARY</NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to={'/about'} className={(item => {return (item.isActive ? 'nav-item px-3 active' : 'nav-item px-3')})} style={{color:navItemColor}} >ABOUT</NavLink>
              </Nav.Link>
              <Nav.Link >
                <NavLink to={'/blog'} className={(item => {return (item.isActive ? 'nav-item px-3 active' : 'nav-item px-3')})} style={{color:navItemColor}}>BLOG</NavLink>
              </Nav.Link>
              <Nav.Link >
                <NavLink to={'/contact'} className={(item => {return (item.isActive ? 'nav-item px-3 active' : 'nav-item px-3')})} style={{color:navItemColor}}>CONTACT</NavLink>
              </Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

import React, { useState } from 'react'
import './navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import store from '../../store';
export default function Navbarr() {
  const [logoYPadding, setLogoYPadding] = useState(4)
  const [bgColor, setBgColor] = useState('rgba(65, 64, 64, 0.016)')
  const [navItemColor,setNavItemColor] =useState('#fff')
  const [logoSrc,setLogoSrc]=useState("img/logo.png.webp")
  const navbarItems = store.navbarItems
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
              {navbarItems.map((navItem,index)=>(
                 <NavLink key={index} to={navItem.titleSrc} className={(item => {return (item.isActive ? 'nav-item px-3 active' : 'nav-item px-3')})} style={{color:navItemColor}} >{navItem.title}</NavLink>
              ))}
        
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

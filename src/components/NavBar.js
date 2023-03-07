import { Navbar, Nav, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
// import { HashLink } from 'react-router-hash-link';
import iconMago from "../assets/img/Mago.png";


export const NavBar = () =>{
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            }else {
                setScrolled(false)
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
          <Container>
            <Navbar.Brand href="/">
            <img src={iconMago} className="icon_mago" alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
              <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                <Nav.Link href="#aboutMe" className={activeLink === 'aboutMe' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('aboutMe')}>+ About me</Nav.Link>
                <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
              </Nav>
              <span className="navbar-text">
                <div className="social-icon">
                <a href="https://www.instagram.com/emabravii/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <rect x="4" y="4" width="16" height="16" rx="4" />
                  <circle cx="12" cy="12" r="3" />
                  <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                </svg></a>
                <a href="https://www.linkedin.com/in/emanuel-bravi-985141238/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-linkedin" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <rect x="4" y="4" width="16" height="16" rx="2" />
                  <line x1="8" y1="11" x2="8" y2="16" />
                  <line x1="8" y1="8" x2="8" y2="8.01" />
                  <line x1="12" y1="16" x2="12" y2="11" />
                  <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                </svg></a>
                <a href="https://github.com/magobcode" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                </svg></a>
                </div>
                  <a href="#connect"><button className="vvd"><span>Let’s Connect</span></button></a>
              </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    )
}
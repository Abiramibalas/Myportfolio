import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const styles = {
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 40px',
      backgroundColor: '#f5f5f5',
      borderBottom: '1px solid #ddd',
      fontFamily: 'Poppins, Segoe UI, sans-serif',
    },
    logo: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#333',
    },
    navLinks: {
      display: 'flex',
      gap: '20px',
    },
    link: {
      textDecoration: 'none',
      color: '#333',
      fontWeight: '500',
    },
    activeLink: {
      color: '#00bfa5',
      borderBottom: '2px solid #00bfa5',
      paddingBottom: '2px',
    },
  };

  return (
    <header style={styles.navbar}>
      <div style={styles.logo}>ABI</div>
      <nav style={styles.navLinks}>
        <NavLink to="/" style={styles.link} activeStyle={styles.activeLink}>Home</NavLink>
        <NavLink to="/about" style={styles.link} activeStyle={styles.activeLink}>About</NavLink>
        <NavLink to="/resume" style={styles.link} activeStyle={styles.activeLink}>Resume</NavLink>
        <NavLink to="/projects" style={styles.link} activeStyle={styles.activeLink}>Project</NavLink>
        <NavLink to="/internship" style={styles.link} activeStyle={styles.activeLink}>Internship</NavLink> 
        <NavLink to="/contact" style={styles.link} activeStyle={styles.activeLink}>Contact</NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
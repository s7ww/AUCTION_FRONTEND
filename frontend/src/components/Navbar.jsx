import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ user, handleLogout }) {
  // Default user if no user is provided
  const defaultUser = { name: "Guest", profileImage: "/user.png" };
  const currentUser = user || defaultUser;

  return (
    <header style={styles.header}>
      <h1>Auction App</h1>
      <nav style={styles.navbar}>
        {/* Navigation Links */}
        <div style={styles.linksContainer}>
          <Link to="/dashboard" style={styles.link}>Dashboard</Link>
          <Link to="/post-auction" style={styles.link}>Post Auction</Link>
          <Link to="/profile" style={styles.link}>Profile</Link>
          <Link to="/history" style={styles.link}>Bidding History</Link>
        </div>

        {/* User Section */}
        <div style={styles.userSection}>
          <img 
            src={currentUser.profileImage} 
            alt="User" 
            style={styles.userImage} 
            onError={(e) => { e.target.src = "/default-user.png"; }} 
          />
          <p style={styles.userName}>{currentUser.name}</p>
          
          {/* Signup & Signin Buttons Below Image */}
          <div style={styles.authButtons}>
            
          <Link to="/signup" style={styles.authLink}>Signup</Link>
            <Link to="/signin" style={styles.authLink}>Signin</Link>
          </div>

          
        </div>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    background: '#333',
    color: 'white',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    
  },
  navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  linksContainer: {
    display: 'flex',
    gap: '15px',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: '500',
  },
  userSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: '20px',
  },
  userImage: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '10px',
  },
  userName: {
    fontSize: '14px',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '5px',
  },
  authButtons: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
    marginBottom: '10px',
  },
  authLink: {
    background: '#007BFF',
    color: 'white',
    textDecoration: 'none',
    padding: '5px 10px',
    borderRadius: '5px',
    textAlign: 'center',
  },
  logoutButton: {
    background: 'red',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '14px',
    marginTop: '5px',
  }
};

export default Navbar;

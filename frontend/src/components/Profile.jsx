import React, { useState, useEffect } from 'react';

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data (Replace with actual API call)
    setUser({
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '+123 456 7890',
      address: '123 Main St, City, Country',
      profileImage: '/user.png', // Replace with actual image path
    });
  }, []);

  if (!user) {
    return <p>Loading profile...</p>;
  }

  return (
    <div style={styles.container}>
      <div style={styles.profileCard}>
        <img src={user.profileImage} alt="User" style={styles.profileImage} />
        <h2 style={styles.userName}>{user.name}</h2>
        <p style={styles.info}><strong>Email:</strong> {user.email}</p>
        <p style={styles.info}><strong>Phone:</strong> {user.phone}</p>
        <p style={styles.info}><strong>Address:</strong> {user.address}</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '90vh', // Reduced height to move content up
    background: '#f0f0f0',
  },
  profileCard: {
    background: 'white',
    padding: '25px',
    borderRadius: '12px',
    boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
    textAlign: 'center',
    width: '350px',
  },
  profileImage: {
    width: '150px', // Increased size
    height: '150px', // Increased size
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '15px',
  },
  userName: {
    marginBottom: '15px',
    fontSize: '24px', // Increased font size
    fontWeight: 'bold',
    color: '#333',
  },
  info: {
    fontSize: '18px', // Increased font size
    marginBottom: '8px',
    color: '#555',
  },
};

export default Profile;

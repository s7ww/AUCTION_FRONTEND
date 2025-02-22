import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Import Navbar
import Signup from './components/Signup';
import Signin from './components/Signin';
import Dashboard from './components/Dashboard';
import AuctionItem from './components/AuctionItem';
import PostAuction from './components/PostAuction';
import Landing from './components/Landing';
import Profile from './components/Profile';
import BiddingHistory from './components/BiddingHistory';
import './App.css';

function App() {
   // Authentication state
   const [isAuthenticated, setIsAuthenticated] = useState(false);
   const [user, setUser] = useState(null);

   // Check authentication status on component mount
   useEffect(() => {
     const token = localStorage.getItem('authToken');
     if (token) {
       setIsAuthenticated(true);
       // Fetch user details (replace with actual API call)
       setUser({
         name: 'John Doe',
         profileImage: '/user.png', // Replace with actual user image
       });
     }
   }, []);
 
   // Logout function
   const handleLogout = () => {
     localStorage.removeItem('authToken');
     setIsAuthenticated(false);
     setUser(null);
   };

  return (
    <Router>
      <div className="app">
        {/* Navbar Component */}
        <Navbar isAuthenticated={isAuthenticated} user={user} handleLogout={handleLogout} />
        
        <main>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/auction/:id" element={<AuctionItem />} />
            <Route path="/post-auction" element={<PostAuction />} />
            <Route path="/history" element={<BiddingHistory />} />
            <Route path="/profile" element={<Profile />} />
            
           
          </Routes>
        </main>

        <footer>
          <p>&copy; 2024 Auction App. All rights reserved.</p>
          <p>Welcome to the best place to buy and sell items through auctions!</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;

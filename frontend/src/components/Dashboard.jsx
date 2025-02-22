import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  const [items, setItems] = useState([]);
  const [sortBy, setSortBy] = useState("latest");

  useEffect(() => {
    // Sample auction items (replace with API data later)
    setItems([
      { 
        _id: '1', 
        itemName: 'Vintage Watch', 
        currentBid: 150, 
        deadline: '2025-03-01 18:00', 
        image: '/watch.jpg', 
        isClosed: false 
      },
      { 
        _id: '2', 
        itemName: 'Antique Vase', 
        currentBid: 300, 
        deadline: '2025-03-05 12:00', 
        image: '/vase.jpg', 
        isClosed: false 
      },
      { 
        _id: '3', 
        itemName: 'Gaming Laptop', 
        currentBid: 1200, 
        deadline: '2025-02-28 20:00', 
        image: '/laptop.jpg', 
        isClosed: true 
      },
    ]);
  }, []);

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
    console.log("Sorting by:", event.target.value);
  };

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h2>Auction Dashboard</h2>
        <select style={styles.dropdown} value={sortBy} onChange={handleSortChange}>
          <option value="latest">Latest</option>
          <option value="popular">Popular</option>
          <option value="ending-soon">Ending Soon</option>
          <option value="highest-bid">Highest Bid</option>
        </select>
      </div>

      <Link to="/post-auction">
        <button>Post New Auction</button>
      </Link>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '20px' }}>
        {items.map((item) => (
          <div key={item._id} style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '10px', textAlign: 'center' }}>
            <img src={item.image} alt={item.itemName} style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '10px' }} />
            <h3>{item.itemName}</h3>
            <p><strong>Current Bid:</strong> ${item.currentBid}</p>
            <p><strong>Deadline:</strong> {item.deadline}</p>
            <Link to={`/auction/${item._id}`}>
              <button style={{ backgroundColor: 'green', color: 'white', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer' }}>
                Place a Bid
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  dropdown: {
    padding: '5px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    cursor: 'pointer',
  },
};

export default Dashboard;

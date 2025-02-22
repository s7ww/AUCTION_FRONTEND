import React, { useState, useEffect } from 'react';

const BiddingHistory = () => {
  // Sample bidding history data
  const [bids, setBids] = useState([]);

  useEffect(() => {
    // Fetch bidding history (replace with actual API call)
    const sampleBids = [
      { id: 1, item: 'Vintage Watch', amount: 120, date: '2024-02-10', image: '/watch.jpg', status: 'Won' },
      { id: 2, item: 'Antique Vase', amount: 250, date: '2024-02-12', image: '/vase.jpg', status: 'Lost' },
      { id: 3, item: 'Laptop', amount: 800, date: '2024-02-15', image: '/laptop.jpg', status: 'Won' }
    ];
    setBids(sampleBids);
  }, []);

  return (
    <div style={styles.container}>
      <h2>Bidding History</h2>
      {bids.length > 0 ? (
        <table style={styles.table}>
          <thead>
            <tr>
              <th>Image</th>
              <th>Item</th>
              <th>Bid Amount ($)</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bids.map((bid) => (
              <tr key={bid.id}>
                <td>
                  <img src={bid.image} alt={bid.item} style={styles.image} />
                </td>
                <td>{bid.item}</td>
                <td>${bid.amount}</td>
                <td>{bid.date}</td>
                <td style={bid.status === 'Won' ? styles.won : styles.lost}>
                  {bid.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No bids placed yet.</p>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
  },
  image: {
    width: '50px',
    height: '50px',
    borderRadius: '5px',
    objectFit: 'cover',
  },
  won: {
    color: 'green',
    fontWeight: 'bold',
  },
  lost: {
    color: 'red',
    fontWeight: 'bold',
  }
};

export default BiddingHistory;

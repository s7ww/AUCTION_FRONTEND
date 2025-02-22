import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function PostAuction() {
  const [itemName, setItemName] = useState('');
  const [description, setDescription] = useState('');
  const [startingBid, setStartingBid] = useState('');
  const [closingTime, setClosingTime] = useState('');
  const [image, setImage] = useState(null); // Store image file
  const [preview, setPreview] = useState(null); // Preview image before upload
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file)); // Show preview
    }
  };

  const handlePostAuction = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('itemName', itemName);
    formData.append('description', description);
    formData.append('startingBid', Number(startingBid)); // Ensure number format
    formData.append('closingTime', closingTime);
    formData.append('image', image); // Append image file

    try {
      await axios.post('http://localhost:5001/auction', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }, // Required for file uploads
      });

      alert('Auction item posted!');
      navigate('/dashboard');
    } catch (err) {
      alert('Failed to post auction. Please try again.');
    }
  };

  return (
    <div className="form-container">
      <h2>Post New Auction</h2>
      <form onSubmit={handlePostAuction} encType="multipart/form-data">
        <input
          type="text"
          placeholder="Item Name"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          required
        />
        <textarea
          placeholder="Item Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
        <input
          type="number"
          placeholder="Starting Bid"
          value={startingBid}
          onChange={(e) => setStartingBid(e.target.value)}
          required
          min="0"
        />
        <input
          type="datetime-local"
          value={closingTime}
          onChange={(e) => setClosingTime(e.target.value)}
          required
        />
          
        <h3>Upload Item Image</h3>
        {/* Image Upload Section */}
        <input type="file" accept="image/*" onChange={handleImageChange} required />
        
        {/* Image Preview */}
        {preview && <img src={preview} alt="Preview" style={{ width: '200px', marginTop: '10px', borderRadius: '10px' }} />}

        <button type="submit">Post Auction</button>
      </form>
    </div>
  );
}

export default PostAuction;

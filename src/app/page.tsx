'use client'
import { useState } from 'react';

const Uploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [uploadData, setUploadData] = useState(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleUpload = async () => {
    try {
      if (!selectedFile) {
        console.error('No file selected');
        return;
      }

      const formData = new FormData();
      formData.append('image', selectedFile);

      // Upload image using fetch
      const uploadResponse = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!uploadResponse.ok) {
        // Handle non-2xx response
        console.log('Upload failed:', uploadResponse);
        return;
      }

      // Assuming the response is JSON
      const responseData = await uploadResponse.json();

      // Set the uploaded image and data for display
      setUploadedImage(responseData.image);
      setUploadData(responseData.filename);

      // Log the parsed response for debugging
      console.log('API Response:', responseData);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div>
      <h1>Image Uploader</h1>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Image</button>
        <div>
          <h2>Uploaded Image</h2>
          {uploadedImage && <img src={uploadedImage} alt="Uploaded" /> }
          {uploadData && (
            <div>
              <h2>Uploaded Data</h2>
              <p>Address: {uploadData.Address}</p>
              <p>Seller: {uploadData.Seller}</p>
              <p>Timestamp: {uploadData.Timestamp}</p>
              <p>Total Cost: {uploadData.Total_Cost}</p>
            </div>
          )}
        </div>
    </div>
  );
};

export default Uploader;

import React, { useState, useEffect } from "react";

// The main App component
function App() {
  // State to store the current dog image URL
  const [dogImage, setDogImage] = useState(null);

  // State to indicate whether the image is currently loading
  const [isLoading, setIsLoading] = useState(true);

  // Function to fetch a random dog image from the API
  const fetchDogImage = () => {
    setIsLoading(true); // Start loading
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json()) // Parse JSON from the response
      .then((data) => {
        setDogImage(data.message); // Set the dog image URL from the response
        setIsLoading(false); // Stop loading once image is fetched
      });
  };

  // useEffect hook to load an image on the initial render
  useEffect(() => {
    fetchDogImage(); // Fetch the first image when the component mounts
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div>
      <h1>Random Dog Viewer</h1>

      {/* Show loading message or image depending on isLoading state */}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <img src={dogImage} alt="A Random Dog" />
      )}

      <br />
      
      {/* Button to fetch a new dog image */}
      <button onClick={fetchDogImage}>Show New Dog</button>
    </div>
  );
}

export default App;
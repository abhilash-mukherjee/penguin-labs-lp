import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import backgroundImage from './assets/bg-img.png'; // Import your background image
import './App.css'; // Make sure your custom styles are defined here

function App() {
  return (
    <div className='h-screen bg-custom' style={{ backgroundImage: `url(${backgroundImage})` }}>
      {/* Your app content goes here */}
    </div>
  );
}

export default App;
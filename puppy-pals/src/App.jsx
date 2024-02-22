// 1. Import the `useState` Hook
import { useState } from 'react';

// 2. Accessing the `puppyList` Array
import { puppyList } from './data.js';
import './App.css';

function App() {
  // 4. Using the `useState` Hook with Default Value
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  // 3. Logging `puppyList` to the Console
  console.log(puppies);


  // 5. Handle Click Events
  function handleClick(puppyId) {
    setFeatPupId(puppyId);
  }

  return (
    <div className="App">
      {/* 6. Mapping Over the `puppies` Array */}
      {puppies.map(puppy => {
        return (
          // Using `key` prop for each puppy based on their unique id.
          <p key={puppy.id} onClick={() => handleClick(puppy.id)}>
          {puppy.name}
        </p>
        );
      })}
      
      {/* 7. Conditional Rendering Based on State */}
      {featPupId && <p>Featured Puppy ID: {featPupId}</p>}
    </div>
  );
}

export default App;

import React, { useState } from 'react'

function Character({person, planets}) { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  const [showHomeworld, setShowHomeworld] = useState(false)

  // ❗ Create a "toggle" click handler to show or remove the homeworld
  const toggleHomeworld = () => {
    setShowHomeworld(!showHomeworld)
  }

  return (
    <div className='character-card' onClick={toggleHomeworld}>
      <h3 className='character-name'>{person.name}</h3>
      { showHomeworld && (
        <p>Planet: 
          <span className='character-planet'> 
          { planets.find(( planet ) => planet.id === person.homeworld)?.name }
          </span>
        </p>
      )}
      
      {/* Use the same markup with the same attributes as in the mock */}
      <style>
        {`
          .character-planet {
            margin-left: 4px;
          }
        `}
      </style>
    </div>
  )
}

export default Character

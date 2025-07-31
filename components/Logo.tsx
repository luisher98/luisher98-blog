import React from 'react'

const Logo = () => {
  const colors = [
    '#6351ac', '#6a59b0', '#7160b4', '#7968b7', '#8070bb',
    '#8777bf', '#8e7fc3', '#9587c6', '#9c8eca', '#a496ce',
    '#ab9ed2', '#b2a5d5', '#b9add9'
  ]

  const text = 'LUIS HERNÁNDEZ'
  const letterSpacing = 12
  const startX = 10

  return (
    <div className="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 60" preserveAspectRatio="xMidYMid meet" className="h-8 w-auto">
        {text.split('').map((letter, index) => (
          <text
            key={index}
            x={startX + (index * letterSpacing)}
            y={letter === ' ' ? 0 : 35}
            fontSize="16"
            fontWeight="bold"
            fill={letter === ' ' ? 'transparent' : colors[index % colors.length]}
            fontFamily="Arial, sans-serif"
            textAnchor="middle"
          >
            {letter}
          </text>
        ))}
      </svg>
    </div>
  )
}

export default Logo 
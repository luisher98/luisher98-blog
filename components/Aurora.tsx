'use client'

import React from 'react'

interface AuroraProps {
  text: string
  size?: 'header' | 'hero'
  className?: string
}

const Aurora: React.FC<AuroraProps> = ({ text, size = 'hero', className = '' }) => {
  const sizeClass = size === 'header' ? 'aurora-title--header' : 'aurora-title--hero'
  const auroraClass = size === 'header' ? 'aurora--header' : 'aurora--hero'

  return (
    <div className={`aurora-content ${className}`}>
      <h1 className={`aurora-title ${sizeClass}`}>
        {text}
        <div className={`aurora ${auroraClass}`}>
          <div className="aurora__item"></div>
          <div className="aurora__item"></div>
          <div className="aurora__item"></div>
          <div className="aurora__item"></div>
        </div>
      </h1>
    </div>
  )
}

export default Aurora

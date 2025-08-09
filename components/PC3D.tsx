'use client'

import Spline from '@splinetool/react-spline'

interface PC3DProps {
  width?: number
  height?: number
  className?: string
}

export default function PC3D({ width = 500, height = 500, className = '' }: PC3DProps) {
  return (
    <div className={`${className} overflow-hidden`} style={{ width, height }}>
      <div
        style={{
          transform: 'scale(1.1)',
          transformOrigin: 'center center',
          width: '100%',
          height: '100%',
        }}
      >
        <Spline scene="https://prod.spline.design/l7pRLMljVdCmmgTv/scene.splinecode" />
      </div>
    </div>
  )
}

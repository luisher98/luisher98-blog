"use client"

import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

interface Cube3DProps {
  width?: number
  height?: number
  className?: string
}

export default function Cube3D({ width = 500, height = 500, className = '' }: Cube3DProps) {
  const mountRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const cubeRef = useRef<THREE.Mesh | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const mousePositionRef = useRef({ x: 0.5, y: 0.5 })

  useEffect(() => {
    if (!mountRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    sceneRef.current = scene

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    camera.position.z = 5
    cameraRef.current = camera

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: "high-performance"
    })
    renderer.setSize(width, height)
    renderer.setClearColor(0x000000, 0)
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    rendererRef.current = renderer

    mountRef.current.appendChild(renderer.domElement)

    // Cube geometry and material
    const geometry = new THREE.BoxGeometry(2, 2, 2)
    const material = new THREE.MeshPhongMaterial({ 
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.9,
      shininess: 100
    })
    
    const cube = new THREE.Mesh(geometry, material)
    cube.castShadow = true
    cube.receiveShadow = true
    cubeRef.current = cube
    scene.add(cube)

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.4)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
    directionalLight.position.set(5, 5, 5)
    directionalLight.castShadow = true
    directionalLight.shadow.mapSize.width = 2048
    directionalLight.shadow.mapSize.height = 2048
    scene.add(directionalLight)

    const pointLight = new THREE.PointLight(0x64748b, 0.6)
    pointLight.position.set(-5, -5, 5)
    scene.add(pointLight)

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)

      if (cubeRef.current) {
        // Make cube face towards mouse
        const mousePos = mousePositionRef.current
        const targetRotationX = (mousePos.y - 0.5) * 0.6
        const targetRotationY = (mousePos.x - 0.5) * 0.6
        
        cubeRef.current.rotation.x += (targetRotationX - cubeRef.current.rotation.x) * 0.1
        cubeRef.current.rotation.y += (targetRotationY - cubeRef.current.rotation.y) * 0.1
      }

      renderer.render(scene, camera)
    }

    animate()

    // Cleanup
    return () => {
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement)
      }
      
      renderer.dispose()
      geometry.dispose()
      material.dispose()
    }
  }, [width, height])

  // Separate useEffect for mouse tracking with throttling
  useEffect(() => {
    let animationFrameId: number | null = null

    const handleMouseMove = (event: MouseEvent) => {
      if (animationFrameId) return

      animationFrameId = requestAnimationFrame(() => {
        const x = event.clientX / window.innerWidth
        const y = event.clientY / window.innerHeight
        
        mousePositionRef.current = { x, y }
        animationFrameId = null
      })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [])

  return (
    <div 
      ref={mountRef} 
      className={`${className}`}
      style={{ width, height }}
    />
  )
}
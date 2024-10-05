'use client'

import React, { Suspense, useRef, useState, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Environment, Text, Float, PerspectiveCamera, Plane, Loader } from '@react-three/drei'
import * as THREE from 'three'
import { Button } from "@/components/ui/button"

function RestaurantModel() {
  const modelRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
    }
  })

  return (
    <group ref={modelRef} position={[0, -1, 0]} scale={[0.5, 0.5, 0.5]}>
      <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="#8B4513" /> {/* Brown color for a table-like object */}
      </mesh>
      <mesh position={[0, 1.5, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#FF6347" /> {/* Red color for a food-like object */}
      </mesh>
    </group>
  )
}

function FloatingText({ position, children }: { position: [number, number, number], children: React.ReactNode }) {
  return (
    <Float floatIntensity={0.5} rotationIntensity={0.5}>
      <Text
        position={position}
        fontSize={0.5}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        font="/fonts/Inter-Bold.woff"
      >
        {children}
      </Text>
    </Float>
  )
}

function InteractiveFloor() {
  const [hovered, setHovered] = useState(false)

  return (
    <Plane 
      args={[10, 10]} 
      rotation={[-Math.PI / 2, 0, 0]} 
      position={[0, -1.5, 0]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <meshStandardMaterial color={hovered ? "#2a2a2a" : "#1a1a1a"} />
    </Plane>
  )
}

function Scene() {
  const [activeCamera, setActiveCamera] = useState<'default' | 'closeup'>('default')
  const { camera } = useThree()
  const defaultPosition = new THREE.Vector3(5, 5, 5)
  const closeupPosition = new THREE.Vector3(2, 2, 2)

  useFrame(() => {
    const targetPosition = activeCamera === 'default' ? defaultPosition : closeupPosition
    camera.position.lerp(targetPosition, 0.05)
    camera.lookAt(0, 0, 0)
  })

  return (
    <>
      <PerspectiveCamera makeDefault position={[5, 5, 5]} fov={50} />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} castShadow />
      <Suspense fallback={null}>
        <RestaurantModel />
        <Environment preset="sunset" background />
      </Suspense>
      <FloatingText position={[0, 2, 0]}>Welcome to Our Restaurant</FloatingText>
      <FloatingText position={[2, 0, 2]}>Exquisite Cuisine</FloatingText>
      <FloatingText position={[-2, 0, -2]}>Unforgettable Atmosphere</FloatingText>
      <OrbitControls enableZoom={false} enablePan={false} />
      <InteractiveFloor />
      <mesh position={[0, 0, -3]} onClick={() => setActiveCamera(activeCamera === 'default' ? 'closeup' : 'default')}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color={activeCamera === 'default' ? "#ff0000" : "#00ff00"} />
      </mesh>
    </>
  )
}

export default function RestaurantScene() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-gray-900">
        <Loader />
      </div>
    )
  }

  return (
    <div className="w-full h-screen bg-gray-900 relative">
      <Canvas shadows>
        <Scene />
      </Canvas>
      <div className="absolute bottom-4 left-4 text-white text-sm">
        Click the sphere to toggle camera view
      </div>
      <Button 
        className="absolute top-4 right-4"
        onClick={() => window.location.href = '/menu'}
      >
        View Menu
      </Button>
    </div>
  )
}
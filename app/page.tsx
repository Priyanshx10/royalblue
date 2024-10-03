'use client'

import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Environment, Box } from '@react-three/drei'
import * as THREE from 'three'

function RestaurantModel() {
  const modelRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.2
    }
  })

  return (
    <Box ref={modelRef} args={[1, 1, 1]} scale={[0.5, 0.5, 0.5]}>
      <meshStandardMaterial color="hotpink" />
    </Box>
  )
}

export default function RestaurantScene() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [5, 5, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <Suspense fallback={null}>
          <RestaurantModel />
          <Environment preset="sunset" background />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  )
}
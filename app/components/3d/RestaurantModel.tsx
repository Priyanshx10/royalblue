'use client'

import {  Suspense, useRef } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

function RestaurantModel() {
  const gltf = useLoader(GLTFLoader, '/models/restaurant.glb')
  const modelRef = useRef<THREE.Group>()

  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.2
    }
  })

  return <primitive object={gltf.scene} ref={modelRef} scale={[0.5, 0.5, 0.5]} />
}

export default function RestaurantScene() {
  return (
    <Canvas camera={{ position: [5, 5, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <Suspense fallback={null}>
        <RestaurantModel />
        <Environment preset="sunset" background />
      </Suspense>
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  )
}
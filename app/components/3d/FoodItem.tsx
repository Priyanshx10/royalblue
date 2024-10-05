/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { Suspense, useRef } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

function FoodModel({ modelPath }: { modelPath: string }) {
  const gltf = useLoader(GLTFLoader, modelPath)
  const modelRef = useRef<THREE.Group>()

  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01
    }
  })

  return <primitive object={gltf.scene} ref={modelRef} scale={[0.5, 0.5, 0.5]} />
}

export default function FoodItem({ modelPath }: { modelPath: string }) {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <Suspense fallback={null}>
        <FoodModel modelPath={modelPath} />
      </Suspense>
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  )
}
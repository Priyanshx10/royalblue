import { useEffect, useState } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import * as THREE from 'three' 

export function use3DModel(path: string) {
  const [model, setModel] = useState<THREE.Group | null>(null)

  useEffect(() => {
    const loader = new GLTFLoader()
    loader.load(
      path,
      (gltf) => {
        setModel(gltf.scene)
      },
      undefined,
      (error) => {
        console.error('An error happened:', error)
      }
    )
  }, [path])

  return model
}
import { Canvas } from '@react-three/fiber'
import React from 'react'
import { Model } from './pikachu'

const Three05 = () => {
  return (
    <>
        <div className='h-screen'>
            <Canvas>
                <ambientLight intensity={5} />
                <Model />
            </Canvas>
        </div>
    </>
  )
}

export default Three05
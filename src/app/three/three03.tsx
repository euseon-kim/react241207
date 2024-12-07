import { PerspectiveCamera } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'
import * as THREE from 'three'

const Camera = () => {

    const cameraRef = useRef<THREE.PerspectiveCamera>(null);

    /*
        [ useFrame ]
         1초 25프레임 25FPS
         매 프레임마다 호출
         useEffect와 달리, 매 프레임마다 상태를 업데이트 해야 하는 경우에 사용

    */
    useFrame(()=>{
        if(cameraRef.current) {
            cameraRef.current.rotation.y += 0.1
        }
        
    })

    return (
        <PerspectiveCamera 
            ref={cameraRef}            
            makeDefault  // 기본 카메라
            position={[0,2,5]} // 카메라 위치
            rotation={[(-Math.PI/180)*10,0,0]}
            fov={75} // 시야각
            near={0.1} // 가까운 클리핑 거리
            far={1000} // 먼 클리핑 거리
        />
    )
}

const Three03 = () => {
  return (
    <>
        <div className='h-screen'>
            <Canvas>
                <ambientLight intensity={5} />

                <Camera/>
                
                <mesh position={[0,0,0]}>
                    <boxGeometry args={[1,1,1]}/>
                    <meshStandardMaterial color='red' />
                </mesh>
            </Canvas>
        </div>
    </>
  )
}

export default Three03
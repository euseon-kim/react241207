import { Plane, SpotLight, Text, useHelper } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { useReducer, useRef } from 'react'
import { PointLight } from 'three'
import * as THREE from 'three'

const Light =() => {
    const lightRef = useRef<THREE.DirectionalLight>(null);
    useHelper(
        lightRef as React.MutableRefObject<THREE.DirectionalLight>,
        THREE.DirectionalLightHelper, 
        1, // 헬퍼 크기
        0xff00ff // 헬퍼 색상
    )
    return (
        <directionalLight
            ref={lightRef}            
            position={[0,1,0]}
            intensity={10}
            castShadow
        />
    )
}

const Three02 = () => {
  return (
    <>
        <div style={{height:'100vh'}}>
            <Canvas>
                {/* 자연광 */}
                {/* <ambientLight intensity={3} /> */}

                {/* 점 조명(전구) */}
                {/* <pointLight 
                color={'#0000ff'}
                position={[0,1,0]}
                intensity={100}
                distance={10}
                castShadow
                receiveShadow
                /> */}

                {/* 원뿔 조명 */}
                <SpotLight 
                    position={[0,1,0]}
                    angle={(Math.PI/180 * 90)}
                    intensity={10}
                    penumbra={0.5}
                    castShadow
                    receiveShadow
                />

                <Light/>

                {/* 텍스트 */}
                <Text>HELLO</Text>
                {/* 평면 (바닥이나 벽) */}
                <Plane 
                args={[5,5]}
                rotation={[-Math.PI / 2,0,0]}
                position={[0,-0.5,0]}
                >
                    <meshStandardMaterial color='green'/>
                </Plane>
            </Canvas>
        </div>
    </>
  )
}

export default Three02
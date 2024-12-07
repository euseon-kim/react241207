import { Box, Cone, Cylinder, Environment, MeshTransmissionMaterial, OrbitControls, Sky, Sphere, Torus } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'

const Three01 = () => {
  return (
    <>
        <div style={{height:'100vh'}}>
            {/* Fiber의 핵심 컴포넌트, 3D 씬을 렌더링하는 공간제공 */}
            <Canvas>
                {/* 태양광 */}
                <ambientLight intensity={3} />
                {/* mesh : 3D 객체의 기본 단위 */}
                <mesh position={[-2,0,0]}>
                    {/* 반지름, x축 세그먼트수, y축 세그먼트수 */}
                    <sphereGeometry args={[1,30,30]}/>
                    <meshStandardMaterial color='red'/>
                </mesh>

                {/*
                    [drei 컴포넌트 ]
                    - mesh 래퍼가 필요 없음 (각 컴포넌트가 이미 mesh를 포함)
                    - Geometry, Material을 자동 생성
                    - custom Material을 자식으로 추가 가능
                    - position, rotation, scale 속성 직접 받을 수 있음
                    - arg prop을 통해 Geometry의 인수 전달 가능
                */}
                <Sphere position={[-4,0,0]} args={[1,8,8]}>
                <meshStandardMaterial color='red'/>
                </Sphere>

                <Cone position={[2,0,0]} args={[1,2,32]}>
                <meshStandardMaterial color='green'/>
                </Cone>

                <Box position={[0,0,0]} args={[1,1,1]}>
                <meshStandardMaterial color='orange'/>
                </Box>

                <Cylinder position={[0,0,-2]} args={[1,1,2,32]}>
                <meshStandardMaterial color='blue'/>
                </Cylinder>

                <Torus position={[0,0,-4]} args={[1,0.4,16,100]}>
                {/* <meshStandardMaterial color='yellow'/> */}
                {/* 더 복잡한 물리 기반 렌더링 지원 */}
                {/* <meshPhysicalMaterial 
                color='silver' 
                metalness={0.9}
                roughness={0.1}
                /> */}
                <MeshTransmissionMaterial 
                    transparent={true} // 투명도 활성화
                    opacity={0.8} // 투명도 조절
                />
                </Torus>
                {/* 카메라 조작 컴포넌트 */}
                <OrbitControls />
                {/* 배경 */}
                <Sky sunPosition={[100,20,100]} />
                {/* 주변환경 */}
                <Environment preset='city'/>

            </Canvas>
        </div>
    </>
  )
}

export default Three01
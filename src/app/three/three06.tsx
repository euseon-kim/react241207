import { Html, Scroll, ScrollControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { useRef } from 'react'

interface SceneProps {
    color : string;
}

const Scene = ({color} : SceneProps) => {
    const meshRef = useRef(null);

    return (
        <>
            <mesh position={[0,0,0]}>
                <boxGeometry args={[1,1,1]}/>
                <meshStandardMaterial color={color}/>
            </mesh>
        </>
    )
}

const Three06 = () => {
  return (
    <>
        <div className='w-full h-screen'>
            <Canvas>
                <ambientLight intensity={3}/>
                {/*
                    [scrollControls]
                    스크롤을 감지하는 컴포넌트
                    pages : 스크롤할 페이지 (섹션) 수 설정 (각 페이지의 높이는 뷰포트의 높이와 동일)
                    damping : 스크롤 반응의 부드러움

                */}
                <ScrollControls pages={3} damping={6}>
                    <Html fullscreen>
                        <div className='w-screen h-screen bg-yellow-500 flex items-center justify-center'>
                              div
                          </div>
                      </Html>

                      <Scene color='red' />
                      {/*
                        [Scroll]
                        컴포넌트의 자식들은 스크롤에 따라 업데이트
                      */}
                      <Scroll>
                          <Scene color='blue' />
                      </Scroll>
                  </ScrollControls>


            </Canvas>
        </div>
    </>
  )
}

export default Three06
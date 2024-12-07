import { useAnimations, useGLTF } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import React, { Suspense, useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

function Model(){
    const {scene, animations} = useGLTF('/Pikachu.glb')
    console.log(scene) // 모델에 대한 정보
    console.log(animations) // 애니메이션에 대한 정보

    const ref = useRef<THREE.Object3D>(null);
    const { actions } = useAnimations(animations, ref); // GLTF 모델에 포함된 애니메이션 제어가능
    console.log(actions)

    const [currentAnimation, setCurrentAnimation] = useState('WalkStanding');

    useEffect(()=>{
        actions[currentAnimation]?.fadeIn(0.5).play();
        setTimeout(()=>{
            setCurrentAnimation('Run')
        },5000)
        return () => {
            actions[currentAnimation]?.fadeOut(0.5).stop();
        }
    },[actions, currentAnimation])

    useFrame(()=>{
        if(ref.current) {
            ref.current.rotation.y += 0.1;
        }
        
    })

    /*
        [primitive]
        1. three.js 객체 직접 사용할 때 사용
        2. 복잡한 3D 모델 로드
        3. position, scale, rotation 프롭스로 전달 가능
        4. 최적화
        컴포넌트가 언마운트될 때 primitive는 자동으로 three.js 
        객체 정리
    */

    return (
        <primitive
            ref={ref}
            object={scene}
            onClick = {()=>{
                setCurrentAnimation('AttackTackle')
            }}
            position={[0,0,0]}
            scale={1}
        />
    );
}

const Three04 = () => {
  return (
    <>
        <div className='h-screen'>
            {/* 
                로드되는 동안 보여줄 컴포넌트
            */}
            <Suspense fallback={<span>Loading...</span>}>
                <Canvas>
                    <ambientLight intensity={5}/>
                    <Model />
                </Canvas>
            </Suspense>
        </div>
    </>
  )
}

export default Three04
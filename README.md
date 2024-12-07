# Three.js Fiber Drei

Three.js : 브라우저에서 3D 그래픽을 
쉽게 렌더링할 수 있게 도와주는 js 라이브러리

Fiber : Three.js 를 React 안에서 사용할 수 
있도록 도와주는 라이브러리  

Drei : Fiber를 기반으로 한 유틸리티 모음 라이브러리
(자주 사용되는 3D 기능들을 미리 컴포넌트로 만들어 놓음)

설치 :: npm i three @react-three/fiber @react-three/drei

# gltfjsx

glb 파일을 jsx/tsx 코드로 변환해주는 라이브러리

사용법 : npx gltfjsx glb파일위치 -o 출력위치
npx gltfjsx public/Pikachu.glb -o src/app/three/pikachu.tsx

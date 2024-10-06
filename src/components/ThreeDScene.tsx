import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const City = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Simple city representation */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="gray" />
      </mesh>
      <mesh position={[1.2, 0, 0]}>
        <boxGeometry args={[0.8, 1.5, 0.8]} />
        <meshStandardMaterial color="lightgray" />
      </mesh>
      <mesh position={[-1.2, 0, 0]}>
        <boxGeometry args={[0.7, 1.2, 0.7]} />
        <meshStandardMaterial color="darkgray" />
      </mesh>
    </group>
  );
};

const ThreeDScene: React.FC = () => {
  return (
    <div className="w-1/2 h-full">
      <Canvas camera={{ position: [0, 2, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <City />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default ThreeDScene;
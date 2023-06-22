import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  // Decal,
  // Float,
  OrbitControls,
  Preload,
  // useTexture,
} from '@react-three/drei';
import Loader from '../Loader';
import Ball from './Ball';



const BallCanvas = () => {
  return (
    <Canvas frameloop="always" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<Loader />}>
        <OrbitControls enableZoom={false} position={0} />
        <Ball />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;

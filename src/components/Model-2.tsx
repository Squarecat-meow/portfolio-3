import { useGSAP } from '@gsap/react';
import { useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import * as THREE from 'three';

gsap.registerPlugin(useGSAP, ScrollTrigger);

function ModelTwo() {
  const { scene } = useGLTF('/model-2.glb');
  const { camera } = useThree();
  const groupRef = useRef<THREE.Group>(null!);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#section-2',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
      },
    });

    tl.to(camera.position, {
      x: 10,
      z: 5,
      duration: 0.5,
      ease: 'none',
    });
  });

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();

    groupRef.current.rotation.y = Math.sin(time * 0.5) * 0.2;
  });

  return (
    <group ref={groupRef}>
      <primitive object={scene} scale={1.7} />;
    </group>
  );
}
useGLTF.preload('/model-2.glb');

export default ModelTwo;

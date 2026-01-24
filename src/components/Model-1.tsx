import { useGSAP } from '@gsap/react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import * as THREE from 'three';

gsap.registerPlugin(useGSAP, ScrollTrigger);

function ModelOne() {
  const { scene: scene1 } = useGLTF('/model-1.glb');
  const { scene: scene2 } = useGLTF('/model-2.glb');
  const { scene: scene3 } = useGLTF('/model-3.glb');
  const { scene: scene4 } = useGLTF('/model-4.glb');
  const outerRef = useRef<THREE.Group>(null!);
  const outer2Ref = useRef<THREE.Group>(null!);
  const inner1Ref = useRef<THREE.Group>(null!);
  const inner2Ref = useRef<THREE.Group>(null!);
  const inner3Ref = useRef<THREE.Group>(null!);
  const inner4Ref = useRef<THREE.Group>(null!);

  useGSAP(() => {
    gsap.fromTo(
      outerRef.current.position,
      {
        x: 4,
        y: 5,
        z: 0,
      },
      {
        x: 4,
        y: 0,
        z: 0,
        duration: 1.5,
        ease: 'power3.out',
      },
    );

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#main-container',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
      },
    });

    tl.to(inner1Ref.current.rotation, {
      y: Math.PI * 2,
      duration: 1,
      ease: 'power3.out',
    })
      .to(
        inner1Ref.current.scale,
        {
          x: 0,
          y: 0,
          z: 0,
          duration: 1,
          ease: 'power3.out',
        },
        '<',
      )
      .to(
        outerRef.current.position,
        {
          x: -3,
          y: 0,
          z: 3,
          duration: 1,
          ease: 'power3.out',
        },
        '<',
      )
      .fromTo(
        inner2Ref.current.scale,
        {
          x: 0,
          y: 0,
          z: 0,
        },
        {
          x: 2.5,
          y: 2.5,
          z: 2.5,
          duration: 1,
          ease: 'power3.out',
          onStart: () => {
            inner2Ref.current.visible = true;
          },
        },
        '<',
      )
      .to(
        inner2Ref.current.rotation,
        {
          y: Math.PI * 2,
          duration: 1,
          ease: 'power3.out',
        },
        '<',
      );

    tl.to(inner2Ref.current.rotation, {
      y: Math.PI * 2,
      duration: 1,
      ease: 'power3.out',
    })
      .to(
        outerRef.current.position,
        {
          x: -16,
          y: 1,
          z: 14,
          duration: 1,
          ease: 'power3.out',
        },
        '<',
      )
      .fromTo(
        inner3Ref.current.scale,
        {
          x: 0,
          y: 0,
          z: 0,
        },
        {
          x: 10,
          y: 10,
          z: 10,
          duration: 1,
          ease: 'power3.out',
          onStart: () => {
            inner3Ref.current.visible = true;
          },
        },
        '<',
      )
      .to(
        inner3Ref.current.position,
        {
          y: -8,
          z: 0.2,
          duration: 1,
          ease: 'power3.out',
        },
        '<',
      )
      .to(
        inner3Ref.current.rotation,
        {
          y: Math.PI * 2,
          duration: 1,
          ease: 'power3.out',
        },
        '<',
      );

    tl.to(inner3Ref.current.position, {
      y: -15,
      duration: 1,
      ease: 'power3.out',
      onStart: () => {
        inner4Ref.current.visible = true;
      },
    }).fromTo(
      inner4Ref.current.position,
      {
        x: -0.5,
        y: 10,
      },
      {
        x: -0.5,
        y: 0,
        duration: 1,
        ease: 'power3.out',
      },
      '<',
    );
  });

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();

    outerRef.current.rotation.y = Math.sin(time * 0.5) * 0.2;
    outer2Ref.current.position.y = Math.sin(time) * 0.2;
  });

  return (
    <>
      <group ref={outerRef}>
        <group ref={inner1Ref}>
          <primitive object={scene1} />;
        </group>
        <group ref={inner2Ref} visible={false}>
          <primitive object={scene2} rotation={[0, 7.7, 0]} />;
        </group>
      </group>
      <group ref={inner3Ref} visible={false}>
        <primitive object={scene3} rotation={[-0.9, 7.1, 0.5]} />;
      </group>
      <group ref={outer2Ref}>
        <group ref={inner4Ref} visible={false}>
          <primitive object={scene4} scale={2.7} rotation={[0, 45, 0]} />;
        </group>
      </group>
    </>
  );
}
useGLTF.preload('/model-1.glb');
useGLTF.preload('/model-2.glb');
useGLTF.preload('/model-3.glb');
useGLTF.preload('/model-4.glb');

export default ModelOne;

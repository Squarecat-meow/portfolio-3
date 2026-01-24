import { useGSAP } from '@gsap/react';
import { useProgress } from '@react-three/drei';
import gsap from 'gsap';
import { useState } from 'react';

function Splash() {
  const { progress } = useProgress();
  const [isMounted, setIsMounted] = useState(true);

  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.to('#loading-upper-background', {
        yPercent: -100,
        duration: 1.5,
        ease: 'expo.inOut',
        onComplete: () => setIsMounted(false),
      })
        .to(
          '#loading-lower-background',
          {
            yPercent: 100,
            duration: 1.5,
            ease: 'expo.inOut',
          },
          '<',
        )
        .to(
          '#loading-bar',
          {
            yPercent: 100,
            duration: 1.5,
            ease: 'expo.inOut',
          },
          '<',
        );
    },
    { dependencies: [isMounted], scope: '#main-container' },
  );

  return isMounted ? (
    <main className="absolute w-full h-screen inset-0 grid z-[3]">
      <div className="relative h-full">
        <div
          className="w-full h-1/2 bg-white z-20"
          id="loading-upper-background"
        />
        <div
          className="w-full h-1/2 bg-white z-20"
          id="loading-lower-background"
        >
          <div
            className={`border-b border-b-rose-400`}
            style={{ width: `${progress}%` }}
            id="loading-bar"
          />
        </div>
      </div>
    </main>
  ) : null;
}

export default Splash;

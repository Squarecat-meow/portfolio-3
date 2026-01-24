import { useGSAP } from '@gsap/react';
import { Canvas } from '@react-three/fiber';
import gsap from 'gsap';
import { Observer } from 'gsap/Observer';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { Suspense, useRef } from 'react';
import About from './components/About/About';
import Background from './components/Background';
import Contact from './components/Contact/Contact';
import Hero from './components/Hero/Hero';
import ModelOne from './components/Model-1';
import Navbar from './components/Navbar';
import Project from './components/Project/Project';
import Splash from './components/Splash';

gsap.registerPlugin(Observer, ScrollToPlugin);

function App() {
  const currentIdx = useRef(0);
  const isAnimating = useRef(false);
  const sections = ['#section-1', '#section-2', '#section-3', '#section-4'];

  useGSAP(() => {
    const goToSection = (idx: number) => {
      if (idx < 0 || idx >= sections.length || isAnimating.current) return;

      isAnimating.current = true;
      currentIdx.current = idx;

      gsap.to(window, {
        scrollTo: { y: sections[idx], autoKill: false },
        duration: 1,
        ease: 'power2.inOut',
        onComplete: () => {
          isAnimating.current = false;
        },
      });
    };

    Observer.create({
      target: 'window',
      type: 'wheel, touch',
      wheelSpeed: -1,
      onDown: () => goToSection(currentIdx.current - 1),
      onUp: () => goToSection(currentIdx.current + 1),
      tolerance: 10,
      preventDefault: true,
    });
  });

  return (
    <main id="main-container">
      <Splash />
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Contact />
      <div className="fixed inset-0 min-w-screen min-h-screen -z-[1]">
        <Canvas camera={{ position: [7, 0, 4], rotateY: 20, fov: 45 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={2.3} />
            <ModelOne />
          </Suspense>
        </Canvas>
      </div>
      <p className="fixed bottom-6 left-6 text-xs text-slate-400 tracking-[0.5em]">
        PORTFOLIO 2026
      </p>
      <Background />
    </main>
  );
}

export default App;

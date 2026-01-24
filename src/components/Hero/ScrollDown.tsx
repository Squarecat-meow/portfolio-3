import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ChevronDown } from 'lucide-react';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP);

function ScrollDown() {
  const arrowRef = useRef<SVGSVGElement>(null!);

  useGSAP(
    () => {
      gsap.from(arrowRef.current, {
        y: 5,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: 'power1.out',
      });
    },
    { scope: arrowRef },
  );

  return (
    <div className="mt-12 p-2 rounded-2xl border border-slate-500 grid place-items-center">
      <p className="text-xs text-slate-500">
        Scroll <br /> Down
      </p>
      <ChevronDown ref={arrowRef} size={16} />
    </div>
  );
}

export default ScrollDown;

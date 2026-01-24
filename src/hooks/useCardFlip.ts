import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useState } from 'react';

interface UseCardFlipOptions {
  duration?: number;
  ease?: string;
}

export function useCardFlip(options: UseCardFlipOptions = {}) {
  const { duration = 0.6, ease = 'expo.inOut' } = options;

  const [activeCardId, setActiveCardId] = useState<string | null>(null);
  const [showContent, setShowContent] = useState(false);
  const [startRect, setStartRect] = useState<DOMRect | null>(null);

  const { contextSafe } = useGSAP();

  const openCard = contextSafe((cardId: string) => {
    const thumbEl = document.getElementById(`thumb-${cardId}`);
    if (!thumbEl) return;

    const rect = thumbEl.getBoundingClientRect();
    setStartRect(rect);
    setActiveCardId(cardId);

    requestAnimationFrame(() => {
      const cardContainer = document.getElementById('modal-card');
      const cardFront = document.getElementById('card-front');
      const cardBack = document.getElementById('card-back');
      if (!cardContainer || !cardFront || !cardBack) return;

      gsap.set(cardContainer, {
        position: 'fixed',
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
        zIndex: 100,
        transformPerspective: 1500,
      });

      gsap.set(cardFront, {
        rotateY: 0,
        backfaceVisibility: 'hidden',
      });

      gsap.set(cardBack, {
        rotateY: -180,
        backfaceVisibility: 'hidden',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      });

      gsap.to(cardContainer, {
        top: '50%',
        left: '50%',
        xPercent: -50,
        yPercent: -50,
        width: '90vw',
        height: '90vh',
        duration,
        ease,
      });

      gsap.to(cardFront, {
        rotateY: 180,
        duration,
        ease: 'power2.inOut',
      });

      gsap.to(cardBack, {
        rotateY: 0,
        duration,
        ease: 'power2.inOut',
        onComplete: () => setShowContent(true),
      });

      gsap.fromTo(
        '#modal-overlay',
        { opacity: 0 },
        { opacity: 1, duration: 0.3 },
      );
    });
  });

  const closeCard = contextSafe(() => {
    if (!startRect) return;

    const cardContainer = document.getElementById('modal-card');
    const cardFront = document.getElementById('card-front');
    const cardBack = document.getElementById('card-back');
    if (!cardContainer || !cardFront || !cardBack) return;

    setShowContent(false);

    gsap.to('#modal-overlay', {
      opacity: 0,
      duration: 0.3,
    });

    gsap.to(cardFront, {
      rotateY: 0,
      duration,
      ease: 'power2.inOut',
    });

    gsap.to(cardBack, {
      rotateY: -180,
      duration,
      ease: 'power2.inOut',
    });

    gsap.to(cardContainer, {
      top: startRect.top,
      left: startRect.left,
      width: startRect.width,
      xPercent: 0,
      yPercent: 0,
      duration,
      ease,
      onComplete: () => {
        setActiveCardId(null);
        setStartRect(null);
      },
    });
  });

  return {
    activeCardId,
    showContent,
    openCard,
    closeCard,
    isOpen: activeCardId !== null,
  };
}

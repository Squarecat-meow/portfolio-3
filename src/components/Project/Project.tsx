import { createPortal } from 'react-dom';
import { useCardFlip } from '../../hooks/useCardFlip';
import Blog from './Blog';
import Keomoji from './Keomoji';
import NeoQuesdon from './NeoQuesdon';

interface CardData {
  id: string;
  title: string;
  image: string;
  content: React.ReactNode;
}

function Project() {
  const cards: CardData[] = [
    {
      id: 'neoquesdon',
      title: 'Neo-Quesdon',
      image: '/screenshots/Pasted-image.png',
      content: <NeoQuesdon />,
    },
    {
      id: 'blog',
      title: 'Personal Blog',
      image: '/screenshots/Pasted-image-5.png',
      content: <Blog />,
    },
    {
      id: 'keomoji',
      title: 'Custom Emoji Submission',
      image: '/screenshots/Pasted-image-9.png',
      content: <Keomoji />,
    },
  ];
  const { activeCardId, showContent, openCard, closeCard } = useCardFlip();

  const activeCard = cards.find((c) => c.id === activeCardId);

  return (
    <main
      id="section-3"
      className="relative min-h-screen w-full flex flex-col items-center"
    >
      <div className="flex flex-col items-center mb-0 lg:mb-4">
        <span className="text-xs text-slate-400 tracking-[0.5em] mb-4 mt-12 lg:mt-20">
          03 - PROJECT
        </span>
        <h1 className="text-5xl font-hangul-heading">지금까지 만든 것들</h1>
      </div>
      <ul className="flex flex-col lg:flex-row p-6 gap-4 lg:gap-12">
        {cards.map((card) => (
          <li key={card.id}>
            <h2 className="text-2xl font-heading mt-2 lg:mt-12">
              {card.title}
            </h2>
            <div className="relative w-fit">
              <img
                id={`thumb-${card.id}`}
                src={card.image}
                onClick={() => openCard(card.id)}
                className="w-sm cursor-pointer"
                style={{
                  visibility: activeCardId === card.id ? 'hidden' : 'visible',
                }}
              />
            </div>
          </li>
        ))}
      </ul>
      {activeCard &&
        createPortal(
          <div className="fixed inset-0 z-[99]">
            <div
              id="modal-overlay"
              className="absolute inset-0 bg-black/50"
              onClick={closeCard}
            />

            <div id="modal-card" style={{ transformStyle: 'preserve-3d' }}>
              <div id="card-front">
                <img src={activeCard.image} className="w-full h-auto" />
              </div>

              <div
                id="card-back"
                className="bg-white rounded-2xl shadow-2xl overflow-auto max-h-[80vh]"
              >
                {showContent && (
                  <div className="p-8">
                    <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {activeCard.content}
                    </section>
                    <button
                      onClick={closeCard}
                      className="mt-8 px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
                    >
                      닫기
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>,
          document.body,
        )}
    </main>
  );
}

export default Project;

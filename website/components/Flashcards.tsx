import React, { useState } from 'react'

interface Card {
  front: string
  back: string
  category?: string
}

interface FlashcardsProps {
  cards: Card[]
  title?: string
}

export function Flashcards({ cards, title }: FlashcardsProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [completedCards, setCompletedCards] = useState<Set<number>>(new Set())

  const currentCard = cards[currentIndex]
  const progress = ((currentIndex + 1) / cards.length) * 100

  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  const handleNext = () => {
    if (currentIndex < cards.length - 1) {
      setCompletedCards(prev => new Set([...prev, currentIndex]))
      setCurrentIndex(currentIndex + 1)
      setIsFlipped(false)
    }
  }

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
      setIsFlipped(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault()
      handleFlip()
    } else if (e.key === 'ArrowRight') {
      handleNext()
    } else if (e.key === 'ArrowLeft') {
      handlePrev()
    }
  }

  const markKnown = () => {
    setCompletedCards(prev => new Set([...prev, currentIndex]))
    handleNext()
  }

  return (
    <div className="flashcard-container">
      {title && <h2 className="flashcard-title">{title}</h2>}

      {/* Progress bar */}
      <div className="flashcard-progress">
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>
        <span className="progress-text">{currentIndex + 1} / {cards.length}</span>
      </div>

      {/* Card */}
      <div
        className={`flashcard ${isFlipped ? 'flipped' : ''}`}
        onClick={handleFlip}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="button"
        aria-label={isFlipped ? "Card back - click to flip" : "Card front - click to flip"}
      >
        <div className="flashcard-inner">
          <div className="flashcard-front">
            {currentCard.category && (
              <span className="card-category">{currentCard.category}</span>
            )}
            <p className="card-content">{currentCard.front}</p>
            <span className="flip-hint">Tap to reveal</span>
          </div>
          <div className="flashcard-back">
            <p className="card-content">{currentCard.back}</p>
            <span className="flip-hint">Tap to flip back</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flashcard-nav">
        <button
          className="nav-btn prev"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          ← Previous
        </button>

        <button className="nav-btn know" onClick={markKnown}>
          ✓ Got it!
        </button>

        <button
          className="nav-btn next"
          onClick={handleNext}
          disabled={currentIndex === cards.length - 1}
        >
          Next →
        </button>
      </div>

      {/* Keyboard hint */}
      <p className="keyboard-hint">
        Use <kbd>Space</kbd> to flip, <kbd>←</kbd> <kbd>→</kbd> to navigate
      </p>

      {/* Card dots */}
      <div className="card-dots">
        {cards.map((_, idx) => (
          <button
            key={idx}
            className={`dot ${idx === currentIndex ? 'active' : ''} ${completedCards.has(idx) ? 'completed' : ''}`}
            onClick={() => { setCurrentIndex(idx); setIsFlipped(false) }}
            aria-label={`Go to card ${idx + 1}`}
          />
        ))}
      </div>

      <style jsx>{`
        .flashcard-container {
          max-width: 600px;
          margin: 2rem auto;
          padding: 1rem;
        }

        .flashcard-title {
          text-align: center;
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          background: linear-gradient(135deg, #8B5CF6, #EC4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .flashcard-progress {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .progress-bar {
          flex: 1;
          height: 8px;
          background: #e5e7eb;
          border-radius: 4px;
          overflow: hidden;
        }

        :global(.dark) .progress-bar {
          background: #374151;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #8B5CF6, #EC4899);
          border-radius: 4px;
          transition: width 0.3s ease;
        }

        .progress-text {
          font-size: 0.875rem;
          color: #6b7280;
          min-width: 60px;
          text-align: right;
        }

        .flashcard {
          perspective: 1000px;
          cursor: pointer;
          margin-bottom: 1.5rem;
          outline: none;
        }

        .flashcard:focus {
          outline: none;
        }

        .flashcard:focus .flashcard-inner {
          box-shadow: 0 0 0 3px #8B5CF6;
        }

        .flashcard-inner {
          position: relative;
          width: 100%;
          min-height: 280px;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
          border-radius: 20px;
        }

        .flashcard.flipped .flashcard-inner {
          transform: rotateY(180deg);
        }

        .flashcard-front,
        .flashcard-back {
          position: absolute;
          width: 100%;
          height: 100%;
          min-height: 280px;
          backface-visibility: hidden;
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          box-sizing: border-box;
        }

        .flashcard-front {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .flashcard-back {
          background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
          color: white;
          transform: rotateY(180deg);
        }

        .card-category {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: rgba(255,255,255,0.2);
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .card-content {
          font-size: 1.25rem;
          text-align: center;
          line-height: 1.6;
          margin: 0;
          font-weight: 500;
        }

        .flip-hint {
          position: absolute;
          bottom: 1rem;
          font-size: 0.75rem;
          opacity: 0.7;
        }

        .flashcard-nav {
          display: flex;
          gap: 0.75rem;
          justify-content: center;
          margin-bottom: 1rem;
        }

        .nav-btn {
          padding: 0.75rem 1.25rem;
          border: none;
          border-radius: 10px;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .nav-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        .nav-btn.prev,
        .nav-btn.next {
          background: #f3f4f6;
          color: #374151;
        }

        :global(.dark) .nav-btn.prev,
        :global(.dark) .nav-btn.next {
          background: #374151;
          color: #f3f4f6;
        }

        .nav-btn.prev:hover:not(:disabled),
        .nav-btn.next:hover:not(:disabled) {
          background: #e5e7eb;
          transform: translateY(-1px);
        }

        :global(.dark) .nav-btn.prev:hover:not(:disabled),
        :global(.dark) .nav-btn.next:hover:not(:disabled) {
          background: #4b5563;
        }

        .nav-btn.know {
          background: linear-gradient(135deg, #10b981, #34d399);
          color: white;
        }

        .nav-btn.know:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.4);
        }

        .keyboard-hint {
          text-align: center;
          font-size: 0.75rem;
          color: #9ca3af;
          margin-bottom: 1rem;
        }

        .keyboard-hint kbd {
          background: #f3f4f6;
          padding: 0.15rem 0.4rem;
          border-radius: 4px;
          font-family: inherit;
          font-size: 0.7rem;
          border: 1px solid #e5e7eb;
        }

        :global(.dark) .keyboard-hint kbd {
          background: #374151;
          border-color: #4b5563;
        }

        .card-dots {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          border: none;
          background: #e5e7eb;
          cursor: pointer;
          transition: all 0.2s ease;
          padding: 0;
        }

        :global(.dark) .dot {
          background: #4b5563;
        }

        .dot.active {
          background: #8B5CF6;
          transform: scale(1.2);
        }

        .dot.completed {
          background: #10b981;
        }

        .dot:hover {
          transform: scale(1.3);
        }

        @media (max-width: 640px) {
          .flashcard-inner {
            min-height: 240px;
          }

          .flashcard-front,
          .flashcard-back {
            min-height: 240px;
            padding: 1.5rem;
          }

          .card-content {
            font-size: 1.1rem;
          }

          .flashcard-nav {
            flex-wrap: wrap;
          }

          .keyboard-hint {
            display: none;
          }
        }
      `}</style>
    </div>
  )
}

export function ViewToggle({
  mode,
  onToggle
}: {
  mode: 'reading' | 'flashcards'
  onToggle: (mode: 'reading' | 'flashcards') => void
}) {
  return (
    <div className="view-toggle">
      <button
        className={`toggle-btn ${mode === 'reading' ? 'active' : ''}`}
        onClick={() => onToggle('reading')}
      >
        📖 Reading
      </button>
      <button
        className={`toggle-btn ${mode === 'flashcards' ? 'active' : ''}`}
        onClick={() => onToggle('flashcards')}
      >
        🎴 Flashcards
      </button>

      <style jsx>{`
        .view-toggle {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 2rem;
          padding: 0.25rem;
          background: #f3f4f6;
          border-radius: 12px;
          width: fit-content;
        }

        :global(.dark) .view-toggle {
          background: #1f2937;
        }

        .toggle-btn {
          padding: 0.6rem 1.2rem;
          border: none;
          border-radius: 10px;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          background: transparent;
          color: #6b7280;
        }

        .toggle-btn.active {
          background: white;
          color: #111827;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }

        :global(.dark) .toggle-btn.active {
          background: #374151;
          color: #f9fafb;
        }

        .toggle-btn:hover:not(.active) {
          color: #374151;
        }

        :global(.dark) .toggle-btn:hover:not(.active) {
          color: #d1d5db;
        }
      `}</style>
    </div>
  )
}

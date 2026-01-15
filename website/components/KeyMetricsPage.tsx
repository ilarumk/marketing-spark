import React, { useState } from 'react'
import { Flashcards, ViewToggle } from './Flashcards'

const flashcardData = [
  {
    front: "What is REACH?",
    back: "The number of UNIQUE people who saw your content. If 1,000 different people saw your post, your reach is 1,000.",
    category: "Awareness"
  },
  {
    front: "What are IMPRESSIONS?",
    back: "The TOTAL number of times your content was displayed. If 1,000 people saw your post twice each, impressions = 2,000.",
    category: "Awareness"
  },
  {
    front: "What is ENGAGEMENT RATE?",
    back: "(Total Engagements ÷ Reach) × 100\n\nGood: 3-5%\nExcellent: 5%+\nExceptional: 10%+",
    category: "Engagement"
  },
  {
    front: "Which engagement metric is MOST valuable?",
    back: "SAVES and SHARES are most valuable!\n\nSaves = content worth revisiting\nShares = extends your reach for free\n\nLikes are the least meaningful.",
    category: "Engagement"
  },
  {
    front: "What is CTR (Click-Through Rate)?",
    back: "(Clicks ÷ Impressions) × 100\n\nGood CTR for organic social: 1-3%\n\nExample: 50 clicks ÷ 2,000 impressions = 2.5%",
    category: "Conversions"
  },
  {
    front: "High views but LOW completion rate means...",
    back: "Your HOOK is working (people click), but the content isn't keeping them.\n\nFix: Improve the middle and end of your content.",
    category: "Video"
  },
  {
    front: "Low views but HIGH completion rate means...",
    back: "Your content is GOOD, but it's not being discovered.\n\nFix: Work on thumbnails, titles, hashtags, and posting times.",
    category: "Video"
  },
  {
    front: "What does high BACK TAPS on Stories mean?",
    back: "People wanted to see your content AGAIN! This is a good sign - your content is worth rewatching.",
    category: "Stories"
  },
  {
    front: "Why shouldn't you obsess over follower count?",
    back: "10 engaged followers > 1,000 inactive ones\n\nQuality beats quantity. Focus on engagement rate, not raw numbers.",
    category: "Growth"
  },
  {
    front: "The 3-Second Rule for Videos",
    back: "If viewers leave in first 3 seconds → Your HOOK isn't working\n\nIf they leave in the middle → Your CONTENT needs work",
    category: "Video"
  },
  {
    front: "What's a CONVERSION?",
    back: "When someone takes the ACTION you wanted:\n\n• Clicked a link\n• Visited website\n• Made a purchase\n• Signed up\n• Attended event",
    category: "Conversions"
  },
  {
    front: "Why are SAVES so important on Instagram?",
    back: "Instagram's algorithm heavily weights saves!\n\nMore saves = shown to more people\n\nSaves signal that content is valuable enough to revisit.",
    category: "Engagement"
  }
]

export function KeyMetricsFlashcards() {
  return (
    <Flashcards
      cards={flashcardData}
      title="Key Metrics - Study Cards"
    />
  )
}

export function MetricsViewToggle({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<'reading' | 'flashcards'>('reading')

  return (
    <div>
      <ViewToggle mode={mode} onToggle={setMode} />

      {mode === 'reading' ? (
        <div>{children}</div>
      ) : (
        <Flashcards
          cards={flashcardData}
          title="Key Metrics - Study Cards"
        />
      )}
    </div>
  )
}

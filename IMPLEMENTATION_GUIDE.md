# OpenGate Learning - Implementation Guide

## Current Project: Marketing Spark

**Status:** Complete (v1)
**URL:** https://marketing-spark.vercel.app
**Structure:** Full-text lessons with optional flashcard toggle

---

## Future Courses: Duolingo-Style Approach

For future courses, implement a micro-learning format optimized for middle schoolers.

### Core Principles

1. **Bite-sized lessons** - 5-10 cards max per topic
2. **Mobile-first** - Swipe/tap interactions
3. **Gamification** - Streaks, XP, badges, levels
4. **Spaced repetition** - Cards return until mastered
5. **Instant feedback** - Got it / Need practice buttons
6. **Progress tracking** - Visual progress, daily goals

### Lesson Structure

```
Each Topic:
├── 5-10 flashcards (core content)
├── 1-2 quick quiz questions
├── 1 mini-activity (optional)
└── "Learn More" expandable (full text for depth)
```

### Card Types

| Type | Example |
|------|---------|
| Definition | "What is CTR?" → "Click-through rate: clicks ÷ impressions" |
| Formula | "Engagement Rate = ?" → "(Engagements ÷ Reach) × 100" |
| True/False | "Likes are the most valuable engagement" → "False - Saves and shares are more valuable" |
| Fill-in | "A good engagement rate is ___%" → "3-5%" |
| Scenario | "High views, low completion means..." → "Hook works, content doesn't keep them" |

### Gamification Features

- **XP Points:** 10 XP per card, 50 XP per completed lesson
- **Streaks:** Daily login bonus, streak freeze items
- **Levels:** Beginner → Explorer → Creator → Strategist → Expert
- **Badges:** "First Lesson", "7-Day Streak", "Module Master", etc.
- **Leaderboard:** Optional, class-based or global

### Technical Implementation

```
components/
├── FlashcardDeck.tsx      # Swipeable card stack
├── ProgressBar.tsx        # XP and level display
├── StreakCounter.tsx      # Daily streak tracker
├── QuizCard.tsx           # Interactive quiz
├── BadgeDisplay.tsx       # Achievement badges
└── Leaderboard.tsx        # Rankings

lib/
├── spaced-repetition.ts   # SM-2 algorithm for card scheduling
├── progress-store.ts      # Local storage for progress
└── xp-calculator.ts       # Points and leveling logic
```

### Data Model

```typescript
interface Card {
  id: string
  front: string
  back: string
  type: 'definition' | 'formula' | 'true-false' | 'fill-in' | 'scenario'
  difficulty: 1 | 2 | 3
  category: string
}

interface UserProgress {
  odifiedxp: number
  level: number
  streak: number
  lastActiveDate: string
  cardsLearned: string[]
  cardsDue: { cardId: string; dueDate: string; ease: number }[]
  badges: string[]
}
```

### Content Conversion

For each existing full-text lesson:
1. Extract 5-10 key concepts
2. Convert to card format
3. Add 1-2 quiz questions
4. Keep full text as "Learn More" section

---

## Platform Structure

```
opengatelearning.com/
├── /                           → Course catalog
├── /marketing-spark/           → Digital Marketing (current - full text)
├── /code-quest/                → Programming (future - Duolingo style)
├── /design-lab/                → Visual Design (future - Duolingo style)
└── /data-explorers/            → Data Basics (future - Duolingo style)
```

---

## Domain

**Registered:** opengatelearning.com (available as of Jan 2025)

---

## Tech Stack

- **Framework:** Next.js 14 + Nextra 3
- **Styling:** CSS-in-JS (styled-jsx)
- **Hosting:** Vercel (free tier)
- **Storage:** Local storage for progress (future: Supabase or Firebase for sync)

---

## Reference Inspiration

- Duolingo (gamification, streaks, bite-sized)
- Anki (spaced repetition algorithm)
- Brilliant (interactive visuals)
- Khan Academy (progress tracking, mastery)

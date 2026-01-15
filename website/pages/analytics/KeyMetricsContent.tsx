import React, { useState } from 'react'
import { Flashcards, ViewToggle } from '../../components/Flashcards'

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
    back: "(Total Engagements ÷ Reach) × 100\n\nGood: 3-5%  |  Excellent: 5%+  |  Exceptional: 10%+",
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

export default function KeyMetricsPage() {
  const [mode, setMode] = useState<'reading' | 'flashcards'>('reading')

  return (
    <div className="page-container">
      <ViewToggle mode={mode} onToggle={setMode} />

      {mode === 'flashcards' ? (
        <Flashcards cards={flashcardData} title="Key Metrics - Study Cards" />
      ) : (
        <ReadingContent />
      )}

      <style jsx>{`
        .page-container {
          max-width: 800px;
        }
      `}</style>
    </div>
  )
}

function ReadingContent() {
  return (
    <article className="reading-content">
      <h1>Key Metrics Explained</h1>

      <span className="badge badge-beginner">Beginner</span>

      <p>Let's break down the most important metrics and understand what each one really tells you about your content's performance.</p>

      <hr />

      <h2>The Big Three: Reach, Engagement, Conversions</h2>

      <p>Think of these as a funnel:</p>

      <pre className="code-block">{`         REACH
     (How many saw it?)
            ↓
       ENGAGEMENT
    (Did they interact?)
            ↓
      CONVERSIONS
   (Did they take action?)`}</pre>

      <hr />

      <h2>Reach & Impressions</h2>

      <h3>Reach</h3>
      <p>The number of <strong>unique people</strong> who saw your content.</p>
      <p>If 1,000 people saw your post, your reach is 1,000.</p>

      <h3>Impressions</h3>
      <p>The <strong>total number of times</strong> your content was displayed.</p>
      <p>If those 1,000 people saw your post twice on average, your impressions would be 2,000.</p>

      <h3>Why Both Matter</h3>
      <table>
        <thead>
          <tr><th>Metric</th><th>What It Tells You</th></tr>
        </thead>
        <tbody>
          <tr><td>High reach</td><td>You're getting in front of people</td></tr>
          <tr><td>High impressions vs. reach</td><td>Same people seeing it multiple times</td></tr>
          <tr><td>Low reach</td><td>Content isn't being distributed</td></tr>
        </tbody>
      </table>

      <div className="tip-box">
        <strong>Good to Know:</strong> Impressions are always equal to or higher than reach. If they're much higher, people are seeing your content repeatedly.
      </div>

      <hr />

      <h2>Engagement Metrics</h2>
      <p>Engagement shows if people cared enough to do something.</p>

      <h3>Likes (Hearts)</h3>
      <ul>
        <li><strong>What it means:</strong> Basic approval</li>
        <li><strong>How valuable:</strong> Low - easy to give</li>
        <li><strong>Good for:</strong> Quick gauge of content reception</li>
      </ul>

      <h3>Comments</h3>
      <ul>
        <li><strong>What it means:</strong> They took time to respond</li>
        <li><strong>How valuable:</strong> High - real engagement</li>
        <li><strong>Good for:</strong> Building community, getting feedback</li>
      </ul>

      <h3>Shares/Reposts</h3>
      <ul>
        <li><strong>What it means:</strong> They wanted others to see it</li>
        <li><strong>How valuable:</strong> Very high - extends your reach for free</li>
        <li><strong>Good for:</strong> Growing audience organically</li>
      </ul>

      <h3>Saves</h3>
      <ul>
        <li><strong>What it means:</strong> Content valuable enough to revisit</li>
        <li><strong>How valuable:</strong> Very high - signals quality</li>
        <li><strong>Good for:</strong> Understanding what people find useful</li>
      </ul>

      <div className="fun-fact">
        <strong>Save to Win:</strong> On Instagram, saves are weighted heavily by the algorithm. Content with lots of saves gets shown to more people.
      </div>

      <hr />

      <h2>Engagement Rate</h2>
      <p>This is the percentage of people who engaged with your content.</p>

      <h3>Basic Formula</h3>
      <pre className="code-block">Engagement Rate = (Total Engagements ÷ Reach) × 100</pre>

      <p><strong>Example:</strong></p>
      <ul>
        <li>500 total engagements (likes + comments + shares + saves)</li>
        <li>10,000 reach</li>
        <li>Engagement Rate = (500 ÷ 10,000) × 100 = 5%</li>
      </ul>

      <h3>What's a Good Engagement Rate?</h3>
      <table>
        <thead>
          <tr><th>Rate</th><th>Generally Means</th></tr>
        </thead>
        <tbody>
          <tr><td>1-2%</td><td>Average</td></tr>
          <tr><td>3-5%</td><td>Good</td></tr>
          <tr><td>5%+</td><td>Excellent</td></tr>
          <tr><td>10%+</td><td>Exceptional (or small audience)</td></tr>
        </tbody>
      </table>

      <p>Note: Smaller accounts often have higher rates because they have tighter communities.</p>

      <hr />

      <h2>Follower Metrics</h2>

      <h3>Follower Growth</h3>
      <ul>
        <li><strong>Followers gained:</strong> New people who followed you</li>
        <li><strong>Followers lost:</strong> People who unfollowed</li>
        <li><strong>Net change:</strong> Gained - Lost</li>
      </ul>

      <h3>Why People Unfollow</h3>
      <p>Don't panic about unfollows! People unfollow because:</p>
      <ul>
        <li>Content changed from what they expected</li>
        <li>They're cleaning up their feed</li>
        <li>They lost interest in the topic</li>
        <li>They were bots being cleaned up</li>
      </ul>

      <div className="important-box">
        <strong>Remember:</strong> 10 engaged followers are worth more than 1,000 who never interact. Don't obsess over the follower number.
      </div>

      <hr />

      <h2>Video Metrics</h2>
      <p>For TikTok, Reels, YouTube:</p>

      <h3>Views</h3>
      <p>How many times the video was watched.</p>

      <h3>Watch Time</h3>
      <p>Total minutes people spent watching.</p>

      <h3>Average Watch Duration</h3>
      <p>How long people watched on average.</p>

      <h3>Completion Rate</h3>
      <p>What percentage watched to the end.</p>

      <h3>Why Video Metrics Matter Differently</h3>
      <table>
        <thead>
          <tr><th>Metric</th><th>What It Tells You</th></tr>
        </thead>
        <tbody>
          <tr><td>High views, low completion</td><td>Hook works, but video loses them</td></tr>
          <tr><td>Low views, high completion</td><td>Content is good, but not being discovered</td></tr>
          <tr><td>High average watch time</td><td>Content is engaging</td></tr>
        </tbody>
      </table>

      <div className="tip-box">
        <strong>The 3-Second Rule:</strong> If people leave in the first 3 seconds, your hook isn't working. If they leave in the middle, your content needs work.
      </div>

      <hr />

      <h2>Conversion Metrics</h2>
      <p>Conversions measure if people took the action you wanted.</p>

      <h3>Examples of Conversions</h3>
      <ul>
        <li>Clicked a link</li>
        <li>Visited a website</li>
        <li>Made a purchase</li>
        <li>Signed up for email</li>
        <li>Attended an event</li>
      </ul>

      <h3>Click-Through Rate (CTR)</h3>
      <pre className="code-block">CTR = (Clicks ÷ Impressions) × 100</pre>

      <p><strong>Example:</strong></p>
      <ul>
        <li>50 link clicks</li>
        <li>2,000 impressions</li>
        <li>CTR = (50 ÷ 2,000) × 100 = 2.5%</li>
      </ul>

      <h3>What's a Good CTR?</h3>
      <p>For organic social media: 1-3% is good<br />For ads: Depends on platform and industry</p>

      <hr />

      <h2>Story Metrics</h2>
      <p>Stories have unique metrics:</p>
      <table>
        <thead>
          <tr><th>Metric</th><th>What It Means</th></tr>
        </thead>
        <tbody>
          <tr><td>Views</td><td>How many saw the story</td></tr>
          <tr><td>Exits</td><td>People who left without finishing</td></tr>
          <tr><td>Next story taps</td><td>Moved forward quickly</td></tr>
          <tr><td>Back taps</td><td>Wanted to see again (good!)</td></tr>
          <tr><td>Replies</td><td>Engaged enough to respond</td></tr>
          <tr><td>Link clicks</td><td>Took action</td></tr>
        </tbody>
      </table>

      <h3>Reading Story Metrics</h3>
      <ul>
        <li><strong>High exits</strong> = Story isn't interesting</li>
        <li><strong>High back taps</strong> = Content worth rewatching</li>
        <li><strong>High next taps</strong> = People moving through quickly (could be good or bad)</li>
      </ul>

      <hr />

      <h2>Common Mistakes with Metrics</h2>
      <table>
        <thead>
          <tr><th>Mistake</th><th>Why It's Wrong</th></tr>
        </thead>
        <tbody>
          <tr><td>Only looking at likes</td><td>Likes are the least meaningful engagement</td></tr>
          <tr><td>Checking too often</td><td>Creates anxiety, not insights</td></tr>
          <tr><td>Comparing to huge accounts</td><td>Different playing field</td></tr>
          <tr><td>Ignoring saves</td><td>One of the most valuable metrics</td></tr>
          <tr><td>Not tracking over time</td><td>One post doesn't show the pattern</td></tr>
        </tbody>
      </table>

      <hr />

      <h2>Activity: Calculate Engagement Rate</h2>

      <div className="activity-box">
        <strong>Practice Problem:</strong>

        <p>A Paws & Claws post got:</p>
        <ul>
          <li>120 likes</li>
          <li>15 comments</li>
          <li>5 shares</li>
          <li>25 saves</li>
          <li>Reach: 2,500</li>
        </ul>

        <p><strong>Calculate:</strong></p>
        <ol>
          <li>Total engagements: _______________</li>
          <li>Engagement rate (total ÷ reach × 100): _______________%</li>
          <li>Is this a good engagement rate? _______________</li>
        </ol>

        <hr />

        <p><strong>Answers:</strong></p>
        <ol>
          <li>120 + 15 + 5 + 25 = 165</li>
          <li>(165 ÷ 2,500) × 100 = 6.6%</li>
          <li>Yes! 6.6% is above average (3-5% is considered good)</li>
        </ol>
      </div>

      <hr />

      <h2>Next Up</h2>
      <p>Now that you understand the metrics, let's learn how to read actual reports.</p>
      <p><a href="/analytics/reading-reports">Continue to Reading Simple Reports →</a></p>

      <style jsx>{`
        .reading-content {
          line-height: 1.7;
        }

        h1 {
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }

        h2 {
          font-size: 1.5rem;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }

        h3 {
          font-size: 1.2rem;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
        }

        hr {
          border: none;
          border-top: 1px solid #e5e7eb;
          margin: 2rem 0;
        }

        :global(.dark) hr {
          border-color: #374151;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          margin: 1rem 0;
        }

        th, td {
          text-align: left;
          padding: 0.75rem;
          border: 1px solid #e5e7eb;
        }

        :global(.dark) th,
        :global(.dark) td {
          border-color: #374151;
        }

        th {
          background: #f9fafb;
          font-weight: 600;
        }

        :global(.dark) th {
          background: #1f2937;
        }

        .code-block {
          background: #1f2937;
          color: #e5e7eb;
          padding: 1rem;
          border-radius: 8px;
          overflow-x: auto;
          font-family: monospace;
        }

        ul, ol {
          padding-left: 1.5rem;
        }

        li {
          margin: 0.5rem 0;
        }

        .badge-beginner {
          display: inline-block;
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          background: #d1fae5;
          color: #065f46;
          margin-bottom: 1rem;
        }

        :global(.dark) .badge-beginner {
          background: #064e3b;
          color: #a7f3d0;
        }
      `}</style>
    </article>
  )
}

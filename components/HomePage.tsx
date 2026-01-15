import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const courses = [
  {
    id: 'marketing-spark',
    title: 'Marketing Spark',
    subtitle: 'Digital Marketing for Young Creators',
    description: 'Learn social media marketing, content creation, analytics, and advertising basics. Perfect for middle schoolers who want to help local businesses or start their own projects.',
    level: 'Beginner',
    duration: '6-8 weeks',
    color: 'from-purple-500 to-pink-500',
    available: true
  },
  {
    id: 'code-quest',
    title: 'Code Quest',
    subtitle: 'Programming Fundamentals',
    description: 'Start your coding journey with Python and web development basics. Build games, websites, and apps while learning computational thinking.',
    level: 'Beginner',
    duration: 'Coming Soon',
    color: 'from-blue-500 to-cyan-500',
    available: false
  },
  {
    id: 'design-lab',
    title: 'Design Lab',
    subtitle: 'Visual Design Basics',
    description: 'Learn the fundamentals of graphic design, color theory, and visual communication. Create logos, posters, and social media graphics.',
    level: 'Beginner',
    duration: 'Coming Soon',
    color: 'from-orange-500 to-yellow-500',
    available: false
  }
]

export default function HomePage() {
  return (
    <>
      <Head>
        <title>OpenGate Learning - Free Courses for Young Learners</title>
        <meta name="description" content="Free online courses designed for middle schoolers. Learn digital marketing, coding, design, and more." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="landing-page">
        {/* Hero Section */}
        <header className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="brand">OpenGate</span> Learning
            </h1>
            <p className="hero-subtitle">
              Free courses designed for young learners
            </p>
            <p className="hero-description">
              Practical skills for the real world. No experience needed.
            </p>
          </div>
        </header>

        {/* Courses Section */}
        <main className="courses-section">
          <h2 className="section-title">Available Courses</h2>

          <div className="courses-grid">
            {courses.map((course) => (
              <div key={course.id} className={`course-card ${!course.available ? 'coming-soon' : ''}`}>
                <div className={`course-header bg-gradient-to-br ${course.color}`}>
                  <span className="course-level">{course.level}</span>
                  <h3 className="course-title">{course.title}</h3>
                  <p className="course-subtitle">{course.subtitle}</p>
                </div>

                <div className="course-body">
                  <p className="course-description">{course.description}</p>

                  <div className="course-footer">
                    <span className="course-duration">{course.duration}</span>

                    {course.available ? (
                      <Link href={`/${course.id}`} className="course-button">
                        Start Learning
                      </Link>
                    ) : (
                      <span className="coming-soon-badge">Coming Soon</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>

        {/* About Section */}
        <section className="about-section">
          <h2 className="section-title">Why OpenGate?</h2>

          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">100%</div>
              <h3>Completely Free</h3>
              <p>No hidden costs, subscriptions, or paywalls. Ever.</p>
            </div>

            <div className="feature">
              <div className="feature-icon">12+</div>
              <h3>Made for Middle School</h3>
              <p>Age-appropriate content with real-world applications.</p>
            </div>

            <div className="feature">
              <div className="feature-icon">DIY</div>
              <h3>Learn by Doing</h3>
              <p>Hands-on projects and activities, not just reading.</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="landing-footer">
          <p>OpenGate Learning - Opening doors to knowledge</p>
        </footer>

        <style jsx>{`
          .landing-page {
            min-height: 100vh;
            background: linear-gradient(135deg, #f5f7fa 0%, #e4e8ec 100%);
          }

          :global(.dark) .landing-page {
            background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          }

          .hero {
            padding: 4rem 2rem;
            text-align: center;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
          }

          .hero-content {
            max-width: 800px;
            margin: 0 auto;
          }

          .hero-title {
            font-size: 3rem;
            font-weight: 800;
            margin-bottom: 0.5rem;
          }

          .brand {
            background: linear-gradient(90deg, #fff, #e0e7ff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .hero-subtitle {
            font-size: 1.5rem;
            opacity: 0.95;
            margin-bottom: 0.5rem;
          }

          .hero-description {
            font-size: 1.1rem;
            opacity: 0.85;
          }

          .courses-section {
            max-width: 1200px;
            margin: 0 auto;
            padding: 3rem 2rem;
          }

          .section-title {
            font-size: 2rem;
            font-weight: 700;
            text-align: center;
            margin-bottom: 2rem;
            color: #1f2937;
          }

          :global(.dark) .section-title {
            color: #f3f4f6;
          }

          .courses-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 2rem;
          }

          .course-card {
            background: white;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          :global(.dark) .course-card {
            background: #1f2937;
          }

          .course-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
          }

          .course-card.coming-soon {
            opacity: 0.7;
          }

          .course-header {
            padding: 2rem;
            color: white;
            position: relative;
          }

          .course-level {
            display: inline-block;
            background: rgba(255, 255, 255, 0.2);
            padding: 0.25rem 0.75rem;
            border-radius: 20px;
            font-size: 0.75rem;
            font-weight: 600;
            text-transform: uppercase;
            margin-bottom: 1rem;
          }

          .course-title {
            font-size: 1.75rem;
            font-weight: 700;
            margin-bottom: 0.25rem;
          }

          .course-subtitle {
            font-size: 1rem;
            opacity: 0.9;
          }

          .course-body {
            padding: 1.5rem 2rem 2rem;
          }

          .course-description {
            color: #4b5563;
            line-height: 1.6;
            margin-bottom: 1.5rem;
          }

          :global(.dark) .course-description {
            color: #9ca3af;
          }

          .course-footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .course-duration {
            font-size: 0.875rem;
            color: #6b7280;
            font-weight: 500;
          }

          .course-button {
            display: inline-block;
            padding: 0.75rem 1.5rem;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            text-decoration: none;
            border-radius: 8px;
            font-weight: 600;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
          }

          .course-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
          }

          .coming-soon-badge {
            padding: 0.5rem 1rem;
            background: #e5e7eb;
            color: #6b7280;
            border-radius: 8px;
            font-size: 0.875rem;
            font-weight: 500;
          }

          :global(.dark) .coming-soon-badge {
            background: #374151;
            color: #9ca3af;
          }

          .about-section {
            background: white;
            padding: 4rem 2rem;
          }

          :global(.dark) .about-section {
            background: #111827;
          }

          .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            max-width: 1000px;
            margin: 0 auto;
          }

          .feature {
            text-align: center;
            padding: 1.5rem;
          }

          .feature-icon {
            font-size: 2.5rem;
            font-weight: 800;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 1rem;
          }

          .feature h3 {
            font-size: 1.25rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
            color: #1f2937;
          }

          :global(.dark) .feature h3 {
            color: #f3f4f6;
          }

          .feature p {
            color: #6b7280;
          }

          :global(.dark) .feature p {
            color: #9ca3af;
          }

          .landing-footer {
            text-align: center;
            padding: 2rem;
            color: #6b7280;
            font-size: 0.875rem;
          }

          @media (max-width: 640px) {
            .hero-title {
              font-size: 2rem;
            }

            .hero-subtitle {
              font-size: 1.25rem;
            }

            .courses-grid {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </div>
    </>
  )
}

import React from 'react'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'
import Link from 'next/link'

const config: DocsThemeConfig = {
  logo: (
    <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <span style={{ fontWeight: 700, fontSize: '1.2rem', color: '#667eea' }}>OpenGate</span>
      <span style={{ fontWeight: 500, fontSize: '1rem', color: '#6b7280' }}>Learning</span>
    </Link>
  ),
  project: {
    link: 'https://github.com/ilarumk/marketing-spark',
  },
  docsRepositoryBase: 'https://github.com/ilarumk/marketing-spark',
  footer: {
    content: 'OpenGate Learning - Free courses for young learners',
  },
  head: function useHead() {
    const { title } = useConfig()
    const { route } = useRouter()

    let pageTitle = 'OpenGate Learning'

    if (route === '/') {
      pageTitle = 'OpenGate Learning - Free Courses for Young Learners'
    } else if (route.startsWith('/marketing-spark')) {
      pageTitle = title ? `${title} - Marketing Spark | OpenGate Learning` : 'Marketing Spark | OpenGate Learning'
    } else {
      pageTitle = title ? `${title} | OpenGate Learning` : 'OpenGate Learning'
    }

    return (
      <>
        <title>{pageTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content="Free online courses designed for middle schoolers. Learn digital marketing, coding, design, and more." />
        <meta name="description" content="Free online courses designed for middle schoolers. Learn digital marketing, coding, design, and more." />
        <link rel="icon" href="/favicon.ico" />
      </>
    )
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
  toc: {
    backToTop: true
  },
  color: {
    hue: 240,
    saturation: 70
  }
}

export default config

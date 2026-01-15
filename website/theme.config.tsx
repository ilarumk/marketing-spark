import React from 'react'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

const config: DocsThemeConfig = {
  logo: <span style={{ fontWeight: 700, fontSize: '1.2rem', color: '#8B5CF6' }}>Marketing Spark</span>,
  project: {
    link: 'https://github.com/ilarumk/marketing-spark',
  },
  docsRepositoryBase: 'https://github.com/ilarumk/marketing-spark',
  footer: {
    content: 'Marketing Spark - Digital Marketing for Young Creators',
  },
  head: function useHead() {
    const { title } = useConfig()
    const { route } = useRouter()

    const pageTitle = route === '/'
      ? 'Marketing Spark - Digital Marketing for Middle Schoolers'
      : `${title} - Marketing Spark`

    return (
      <>
        <title>{pageTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content="Learn digital marketing - a free course for middle schoolers" />
        <meta name="description" content="Learn digital marketing - a free course for middle schoolers" />
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
    hue: 280,
    saturation: 80
  }
}

export default config

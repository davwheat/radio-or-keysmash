import { useSiteMetadata } from '../hooks/useSiteMetadata'

interface SEOProps {
  title?: string
  description?: string
  pathname?: string
  children?: React.ReactNode
}

export function SEO({ title, description, pathname, children }: SEOProps) {
  const { title: defaultTitle, description: defaultDescription, siteUrl, twitterUsername } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ``}`,
    twitterUsername,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      {children}
    </>
  )
}

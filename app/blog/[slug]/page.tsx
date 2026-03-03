import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { getPostBySlug, getPostSlugs } from '@/content/blog'
import { appText } from '@/appText'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return { title: appText.metadata.blog.title }
  return {
    title: `${post.title} - Meridian S&O`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Back to blog */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-dark-text-secondary hover:text-dark-text transition-colors text-sm font-medium"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
        </div>

        <article>
          <header className="mb-10">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-xs uppercase tracking-wider text-dark-text-muted bg-dark-border px-2 py-1 rounded">
                {post.category}
              </span>
              <span className="text-xs text-dark-text-muted">{post.readTime}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-dark-text mb-4">
              {post.title}
            </h1>
            <p className="text-xl text-dark-text-secondary mb-4">{post.excerpt}</p>
            <div className="flex items-center gap-2 text-sm text-dark-text-muted">
              <span>{post.author}</span>
              <span>•</span>
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </time>
            </div>
          </header>

          <div className="prose prose-invert max-w-none">
            {post.body.split('\n\n').map((paragraph, i) => (
              <p key={i} className="text-base leading-[1.8] text-dark-text-muted mb-6">
                {paragraph.trim()}
              </p>
            ))}
          </div>
        </article>
      </div>
    </div>
  )
}

import { posts } from './posts'
import type { Post } from './types'

export type { Post } from './types'
export { posts }

/**
 * All posts, sorted by date descending (newest first).
 */
export function getPosts(): Post[] {
  return [...posts].sort((a, b) => (b.date > a.date ? 1 : -1))
}

/**
 * Single post by slug, or null if not found.
 */
export function getPostBySlug(slug: string): Post | null {
  return posts.find((p) => p.slug === slug) ?? null
}

/**
 * All post slugs. Use for generateStaticParams or sitemaps.
 */
export function getPostSlugs(): string[] {
  return posts.map((p) => p.slug)
}

/**
 * Blog post type. All posts in content/blog/posts.ts must match this shape.
 */
export type Post = {
  slug: string
  title: string
  excerpt: string
  date: string // ISO date (YYYY-MM-DD)
  author: string
  category: string
  readTime: string
  /** Full body content for the single-post page. Can be markdown or HTML later. */
  body: string
}

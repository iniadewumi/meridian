import Link from 'next/link'
import { Metadata } from 'next'
import { appText } from '@/appText'

export const metadata: Metadata = {
  title: appText.metadata.blog.title,
  description: appText.metadata.blog.description,
}

const { blog } = appText
const blogPosts = blog.posts
const categories = blog.categories

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            {blog.header.title}
          </h1>
          <p className="text-xl text-dark-text-secondary max-w-3xl">
            {blog.header.description}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                category === 'All'
                  ? 'bg-white text-black'
                  : 'bg-dark-surface text-dark-text-secondary hover:text-white border border-dark-border hover:border-dark-text-muted'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <Link
          href={`/blog/${blogPosts[0].slug}`}
          className="block bg-dark-surface border border-dark-border rounded-lg overflow-hidden mb-12 hover:border-dark-text-muted transition-all group"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            <div className="aspect-video bg-dark-border rounded-lg flex items-center justify-center">
              <span className="text-dark-text-muted text-sm">{blog.imagePlaceholders.featured}</span>
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs uppercase tracking-wider text-dark-text-muted bg-dark-border px-2 py-1 rounded">
                  {blogPosts[0].category}
                </span>
                <span className="text-xs text-dark-text-muted">{blogPosts[0].readTime}</span>
              </div>
              <h2 className="text-3xl font-bold mb-3 group-hover:text-dark-text-secondary transition-colors">
                {blogPosts[0].title}
              </h2>
              <p className="text-dark-text-secondary mb-4">{blogPosts[0].excerpt}</p>
              <div className="flex items-center gap-2 text-sm text-dark-text-muted">
                <span>{blogPosts[0].author}</span>
                <span>•</span>
                <time>{new Date(blogPosts[0].date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
              </div>
            </div>
          </div>
        </Link>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-dark-surface border border-dark-border rounded-lg overflow-hidden hover:border-dark-text-muted transition-all"
            >
              {/* Image Placeholder */}
              <div className="aspect-video bg-dark-border flex items-center justify-center">
                <span className="text-dark-text-muted text-sm">{blog.imagePlaceholders.post}</span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs uppercase tracking-wider text-dark-text-muted bg-dark-border px-2 py-1 rounded">
                    {post.category}
                  </span>
                  <span className="text-xs text-dark-text-muted">{post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-dark-text-secondary transition-colors">
                  {post.title}
                </h3>

                <p className="text-sm text-dark-text-secondary mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-2 text-xs text-dark-text-muted">
                  <span>{post.author}</span>
                  <span>•</span>
                  <time>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</time>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20 bg-dark-surface border border-dark-border rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">{blog.newsletter.title}</h2>
          <p className="text-lg text-dark-text-secondary mb-8 max-w-2xl mx-auto">
            {blog.newsletter.description}
          </p>
          <form className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder={blog.newsletter.placeholder}
              className="flex-1 bg-dark-bg border border-dark-border rounded-md px-4 py-3 text-white placeholder-dark-text-muted focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
              required
            />
            <button
              type="submit"
              className="btn-primary rounded-md px-6 whitespace-nowrap"
            >
              {blog.newsletter.button}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

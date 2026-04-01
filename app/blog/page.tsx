import Link from 'next/link'
import { Metadata } from 'next'
import { appText } from '@/appText'
import { getPosts, getCategories } from '@/content/blog'

export const metadata: Metadata = {
  title: appText.metadata.blog.title,
  description: appText.metadata.blog.description,
}

const { blog } = appText
const categories = getCategories()

export default function BlogPage() {
  const blogPosts = getPosts()
  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            {blog.header.title}
          </h1>
          <p className="text-xl text-dark-text-secondary max-w-3xl mx-auto">
            {blog.header.description}
          </p>
        </div>

        {/* Category filter — UI preserved for when posts exist (wire filter logic when needed) */}
        {blogPosts.length > 0 && (
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  category === 'All'
                    ? 'bg-dark-text-secondary text-dark-bg'
                    : 'bg-dark-surface text-dark-text-secondary hover:text-dark-text border border-dark-border hover:border-dark-text-muted'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {blogPosts.length === 0 && (
            <div className="md:col-span-2 rounded-lg border border-dashed border-dark-border bg-dark-surface/50 px-8 py-16 text-center">
              <h2 className="text-xl font-semibold text-dark-text mb-3">{blog.emptyState.title}</h2>
              <p className="text-dark-text-secondary max-w-lg mx-auto leading-relaxed">
                {blog.emptyState.description}
              </p>
            </div>
          )}

          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-dark-surface border border-dark-border rounded-lg overflow-hidden hover:border-dark-text-muted transition-all"
            >
              <div className="aspect-video bg-dark-border flex items-center justify-center">
                <div className="text-center px-6">
                  <div className="text-3xl font-bold mb-2">{post.title}</div>
                  <div className="text-sm text-dark-text-muted">{post.category}</div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <h2 className="text-2xl font-bold">{post.title}</h2>
                  <span className="text-xs uppercase tracking-wider text-dark-text-muted bg-dark-border px-2 py-1 rounded">
                    {post.readTime}
                  </span>
                </div>

                <p className="text-dark-text-secondary mb-6">{post.excerpt}</p>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <div className="text-base font-semibold">{post.author}</div>
                    <div className="text-xs text-dark-text-muted">Author</div>
                  </div>
                  <div>
                    <div className="text-base font-semibold">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </div>
                    <div className="text-xs text-dark-text-muted">Published</div>
                  </div>
                  <div>
                    <div className="text-base font-semibold">{post.category}</div>
                    <div className="text-xs text-dark-text-muted">Category</div>
                  </div>
                </div>

                <div className="mt-6 flex items-center text-sm text-dark-text-secondary group-hover:text-dark-text transition-colors">
                  <span>{blog.readMore}</span>
                  <svg
                    className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-dark-surface border border-dark-border rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">{blog.newsletter.title}</h2>
          <p className="text-lg text-dark-text-secondary mb-8 max-w-2xl mx-auto">
            {blog.newsletter.description}
          </p>
          <form className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder={blog.newsletter.placeholder}
              className="flex-1 bg-dark-bg border border-dark-border rounded-md px-4 py-3 text-dark-text placeholder-dark-text-muted focus:outline-none focus:ring-2 focus:ring-dark-text focus:border-transparent"
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

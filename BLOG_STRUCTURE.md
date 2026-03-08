# Blog structure

How the blog is organized and how to add or change posts.

## Where things live

| What | Location |
|------|----------|
| **Post content (source of truth)** | `content/blog/posts.ts` |
| **Types** | `content/blog/types.ts` |
| **Helpers** | `content/blog/index.ts` — `getPosts()`, `getPostBySlug(slug)`, `getPostSlugs()`, `getCategories()` |
| **Listing page** | `app/blog/page.tsx` — uses `getPosts()` and `appText.blog` for UI strings |
| **Single post page** | `app/blog/[slug]/page.tsx` — uses `getPostBySlug(slug)` |
| **UI strings** | `appText.ts` → `blog` (header, newsletter, imagePlaceholders). Categories are derived from posts via `getCategories()`. |

## Routes

- **`/blog`** — Blog index: featured post + grid, category filter, newsletter.
- **`/blog/[slug]`** — One post. Slug must match a `slug` in `content/blog/posts.ts` (e.g. `/blog/why-we-start-with-scope`).

## Adding a new post

1. Open `content/blog/posts.ts`.
2. Add a new object to the `posts` array with:
   - `slug` — URL path segment (lowercase, hyphens; e.g. `my-new-post`).
   - `title`, `excerpt`, `date` (YYYY-MM-DD), `author`, `category`, `readTime`, `body`.
3. The post will show on `/blog` and at `/blog/[your-slug]`. Categories are derived from posts; use an existing category or any new name and it will appear in the filter automatically.

## Post shape (`Post` type)

Defined in `content/blog/types.ts`. Each post has:

- **slug** — Unique, URL-safe (used in `/blog/[slug]`).
- **title** — Shown on listing and post page.
- **excerpt** — Short summary (listing and meta description).
- **date** — ISO date string (YYYY-MM-DD); used for ordering and display.
- **author** — Display name.
- **category** — Used for the filter; categories are derived from all posts via `getCategories()`.
- **readTime** — e.g. `"5 min read"`.
- **body** — Full content for the single-post page. Currently plain text; paragraphs are split on `\n\n`. You can later switch to Markdown/MDX if you add a parser.

## Extending the structure

- **Markdown/MDX**: Add a parser and store posts as `.md` or `.mdx` in e.g. `content/blog/posts/`, then load in `content/blog/index.ts`.
- **Filtering by category**: Listing page already has category buttons; wire them to state and filter `getPosts()` by `post.category`.
- **RSS / sitemap**: Use `getPostSlugs()` and `getPostBySlug()` to build URLs and metadata.

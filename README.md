# WildCraft Wood website

A fast, editable Astro website designed for Vercel's free hosting tier.

## 1. Upload to GitHub

Copy every file and folder in this project into the root of your GitHub repository, then commit the changes.

## 2. Deploy on Vercel

1. Open the Vercel dashboard.
2. Select **Add New → Project**.
3. Import your GitHub repository.
4. Vercel should detect **Astro** automatically.
5. Leave the default build settings and deploy.
6. In **Project → Settings → Domains**, add `wildcraftwood.com` and `www.wildcraftwood.com`.

## 3. Edit the main content

Open `src/data/site.ts` to change:

- site name, tagline, email, and social links
- featured furniture projects
- videos
- affiliate tool recommendations

### Add a YouTube video

Copy the video ID from the URL.

For `https://www.youtube.com/watch?v=ABC123`, use:

```ts
{
  title: 'Building a walnut table',
  description: 'A short description.',
  youtubeId: 'ABC123',
  date: '2026-08-01',
},
```

Add that object to the `videos` array in `src/data/site.ts`.

## 4. Add a journal article

Duplicate any file inside:

`src/data/content/journal/`

Rename it with lowercase words and hyphens, such as:

`finishing-a-walnut-table.md`

Edit the frontmatter and article text. Commit the file. Vercel will rebuild the site automatically.

## 5. Replace starter images

Add your optimized `.jpg`, `.webp`, `.png`, or `.svg` files to `public/images/`, then update image paths in `src/data/site.ts` or each Markdown article.

Recommended image widths:

- hero: 1800–2400 px
- project cards: 1200–1600 px
- article covers: 1600–2000 px

Use descriptive filenames such as `oregon-walnut-live-edge-table.webp`.

## 6. Local preview (optional)

Install Node.js, then run:

```bash
npm install
npm run dev
```

Open the local address shown in the terminal.

Before publishing affiliate links, replace all `#` URLs and confirm each merchant's rules. Keep disclosures prominent and accurate.

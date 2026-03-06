# Tahir Hassan — Portfolio

Personal portfolio and blog of **Tahir Hassan**, hosted on GitHub Pages at [tahirhassan.me](https://tahirhassan.me).

Built with [Jekyll](https://jekyllrb.com) and managed via [Decap CMS](https://decapcms.org).

---

## 🚀 Quick Start (Local Development)

**Prerequisites:** Ruby ≥ 2.7, Bundler

```bash
git clone https://github.com/studentCoder2874/studentCoder2874.github.io.git
cd studentCoder2874.github.io
bundle install
bundle exec jekyll serve
```

Open [http://localhost:4000](http://localhost:4000) in your browser.

---

## 📝 Adding Content

### New Blog Post

Create a file in `_posts/` following the naming convention:

```
_posts/YYYY-MM-DD-post-title.md
```

Required front matter:

```yaml
---
title: "My Post Title"
date: 2026-03-06
categories:
  - Category
tags:
  - tag1
  - tag2
excerpt: "A short summary of the post."
image: /assets/images/uploads/my-image.jpg
---

Post content goes here...
```

### New Project

Create a file in `_projects/`:

```
_projects/project-name.md
```

Required front matter:

```yaml
---
title: "Project Name"
description: "Short description of the project."
image: /assets/images/uploads/project-image.jpg
tags:
  - JavaScript
  - CSS
link: "https://live-demo-url.com"
github: "https://github.com/username/repo"
date: 2026-01-01
featured: true
---

Extended project description and details...
```

---

## 🎨 Customisation

### Update Personal Info

Edit `_config.yml`:

```yaml
author:
  name: Your Name
  email: your@email.com
  github: yourusername
  linkedin: yourlinkedin
  twitter: yourtwitter
```

### Change Colors

Edit the CSS custom properties at the top of `assets/css/style.css`:

```css
:root {
  --bg-primary: #0a192f;
  --accent: #64ffda;
  /* ... */
}
```

### Contact Form

Update the Formspree action URL in `contact.md`:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

Sign up at [formspree.io](https://formspree.io) to get your form ID.

---

## 🖥️ CMS (Decap CMS)

The site includes [Decap CMS](https://decapcms.org) for in-browser content management.

**Access the CMS:** Visit `/admin` on your live site (requires GitHub authentication).

The CMS allows you to:
- Create and edit **blog posts**
- Create and edit **projects**
- Edit the **About** and **Contact** pages
- Upload images to `assets/images/uploads/`

**Configuration:** `admin/config.yml`

> **Note:** The CMS uses GitHub as the backend, so you must be logged in to GitHub and have write access to the repository.

---

## 📁 Project Structure

```
├── _config.yml          # Jekyll configuration
├── CNAME                # Custom domain: tahirhassan.me
├── Gemfile              # Ruby dependencies
├── index.html           # Home page
├── about.md             # About page
├── projects.md          # Projects listing
├── blog.md              # Blog listing
├── contact.md           # Contact page
├── 404.html             # 404 error page
├── _includes/           # Reusable HTML partials
├── _layouts/            # Page layout templates
├── _projects/           # Project markdown files
├── _posts/              # Blog post markdown files
├── assets/
│   ├── css/style.css    # All styles
│   ├── js/main.js       # All JavaScript
│   └── images/uploads/  # CMS media uploads
└── admin/               # Decap CMS files
    ├── index.html
    └── config.yml
```

---

## 📦 Plugins Used

- `jekyll-feed` — RSS feed at `/feed.xml`
- `jekyll-seo-tag` — SEO meta tags
- `jekyll-sitemap` — Sitemap at `/sitemap.xml`

All plugins are supported by GitHub Pages.

---

## 📄 License

MIT — feel free to fork and use for your own portfolio!
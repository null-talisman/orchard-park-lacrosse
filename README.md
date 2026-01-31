# 🥍 Orchard Park Lacrosse Website

A modern, easy-to-maintain website for Orchard Park Lacrosse built with Astro and Decap CMS.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📁 Project Structure

```
orchard-park-lacrosse/
├── public/
│   ├── admin/           # Decap CMS admin interface
│   ├── images/          # Uploaded images
│   └── favicon.svg
├── src/
│   ├── components/      # Reusable UI components
│   ├── content/         # Content managed by CMS
│   │   ├── announcements/  # News & announcements (markdown)
│   │   ├── events/         # Schedule events (JSON)
│   │   ├── programs/       # Program details (markdown)
│   │   └── settings/       # Site settings
│   ├── layouts/         # Page layouts
│   ├── pages/           # Site pages
│   └── styles/          # Global styles
└── package.json
```

## ✏️ Content Management (For Coaches)

### Accessing the Admin Panel

1. Go to `https://your-site.netlify.app/admin`
2. Log in with your email (you'll receive a magic link)
3. Edit content using the visual editor

### What You Can Edit

| Section | Description |
|---------|-------------|
| 📢 **Announcements** | News, updates, and important notices |
| 📅 **Schedule & Events** | Games, practices, tournaments, meetings |
| 🥍 **Programs** | Program descriptions and registration status |
| ⚙️ **Site Settings** | Contact info and social links |

### Adding New Content

#### New Announcement
1. Click "📢 Announcements" in the sidebar
2. Click "New Announcement"
3. Fill in title, date, and content
4. Set "Priority" to "high" for important announcements
5. Click "Publish"

#### New Event
1. Click "📅 Schedule & Events"
2. Click "Add Events" to add a new event
3. Fill in event details (title, date, time, location, type)
4. Click "Publish"

#### Updating Programs
1. Click "🥍 Programs"
2. Select the program to edit
3. Toggle "Registration Open?" when registration opens/closes
4. Update dates, costs, and details as needed
5. Click "Publish"

## 🌐 Deployment

This site is designed to be deployed on **Netlify** (free tier is plenty).

### Initial Setup

1. Push this repo to GitHub
2. Create a Netlify account at [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repo
5. Netlify will auto-detect Astro settings
6. Click "Deploy"

### Enable CMS Authentication

1. In Netlify, go to Site Settings → Identity
2. Click "Enable Identity"
3. Under Registration, select "Invite only"
4. Under Services → Git Gateway, click "Enable Git Gateway"
5. Go to Identity tab and invite users (coaches) by email

### Custom Domain (Optional)

1. Go to Site Settings → Domain management
2. Add your custom domain
3. Netlify will provide SSL automatically

## 🛠️ Development

### Tech Stack

- **[Astro](https://astro.build)** - Fast static site generator
- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS
- **[Decap CMS](https://decapcms.org)** - Git-based content management

### Local Development with CMS

To test the CMS locally:

1. Uncomment `local_backend: true` in `public/admin/config.yml`
2. Run `npx decap-server` in one terminal
3. Run `npm run dev` in another terminal
4. Go to `http://localhost:4321/admin`

### Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |

## 📝 Adding New Pages

1. Create a new `.astro` file in `src/pages/`
2. Import and use the `Layout` component
3. Add the page to navigation in `src/components/Navigation.astro`

## 🎨 Customization

### Colors

Edit colors in `src/styles/global.css`:

```css
@theme {
  --color-quaker-green: #1B4D3E;
  --color-quaker-gold: #D4AF37;
  /* ... */
}
```

### Fonts

The site uses:
- **Oswald** - Headings
- **Source Sans 3** - Body text

Change fonts in `src/styles/global.css`.

## 📧 Contact Form

The contact form uses [Formspree](https://formspree.io). To set up:

1. Create a free Formspree account
2. Create a new form
3. Replace `YOUR_FORM_ID` in `src/pages/contact.astro`

## 🆘 Support

For technical issues, contact the site developer.

For content questions, see the "Content Management" section above.

---

Built with ❤️ for Orchard Park Lacrosse

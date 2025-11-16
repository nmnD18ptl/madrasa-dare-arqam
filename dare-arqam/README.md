# Jamia Dar-E-Arqam Karoshi Website

A modern, professional landing page for Jamia Dar-E-Arqam Karoshi, a residential Islamic educational institution (madrasa) in Karoshi, managed by Ulunuha Educational Trust.

## Features

- 🎨 Modern, responsive design with Islamic geometric patterns
- 🌍 Bilingual support (English/Urdu)
- 📱 Mobile-first responsive layout
- ⚡ Smooth animations using Framer Motion
- 🎯 SEO optimized with meta tags and structured data
- ♿ Accessibility features (WCAG 2.1 Level AA)
- 🕌 Prayer times widget
- 📸 Image gallery
- 💬 Testimonials section
- 📢 News & announcements
- 📝 Contact and admission forms

## Tech Stack

- **React 19** with **TypeScript**
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Icons** for iconography
- **React Router DOM** (for future expansion)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd dare-arqam
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The website will open at [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Deployment

### Deploy to GitHub Pages

1. **Create a GitHub repository** (if you haven't already)

2. **Update homepage in package.json**:
   ```json
   "homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO_NAME"
   ```
   Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your GitHub details.

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Push code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

5. **Deploy to GitHub Pages**:
   ```bash
   npm run deploy
   ```

6. **Enable GitHub Pages** (if needed):
   - Go to repository **Settings** → **Pages**
   - Select **gh-pages** branch as source
   - Click **Save**

Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`

**For detailed instructions, see [GITHUB_PAGES_DEPLOYMENT.md](./GITHUB_PAGES_DEPLOYMENT.md)**

### Alternative: Deploy to Vercel

For faster deployment and automatic updates:
1. Push code to GitHub
2. Import repository on [vercel.com](https://vercel.com)
3. Deploy automatically

**For detailed instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)**

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.tsx       # Navigation header with language toggle
│   └── Footer.tsx       # Footer with contact info
├── sections/           # Main page sections
│   ├── Hero.tsx        # Hero banner
│   ├── About.tsx       # About section
│   ├── TarbiyatPolicy.tsx  # Tarbiyat policy with expandable cards
│   ├── EducationPrograms.tsx
│   ├── Facilities.tsx
│   ├── Admissions.tsx
│   ├── Contact.tsx
│   ├── PrayerTimes.tsx
│   ├── Testimonials.tsx
│   ├── Gallery.tsx
│   └── Announcements.tsx
├── types/              # TypeScript type definitions
│   └── index.ts
├── App.tsx             # Main app component
└── index.tsx           # Entry point
```

## Customization

### Updating Contact Information

Update contact details in:
- `src/components/Footer.tsx`
- `src/sections/Contact.tsx`
- `src/components/Header.tsx`

Replace placeholder phone numbers and emails with actual contact information.

### Adding Images

1. Add images to the `public/` folder
2. Update image paths in `src/sections/Gallery.tsx`
3. Replace placeholder image URLs with actual image paths

### Prayer Times

Update prayer times in `src/sections/PrayerTimes.tsx`. For production, integrate with a prayer times API such as:
- Aladhan API (https://aladhan.com/prayer-times-api)
- IslamicFinder API

### Google Maps

Replace the placeholder map in `src/sections/Contact.tsx` with an embedded Google Map:

```tsx
<iframe
  src="YOUR_GOOGLE_MAPS_EMBED_URL"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
/>
```

## Color Scheme

The website uses a custom Islamic color palette defined in `tailwind.config.js`:

- **Islamic Green**: `#1B5E20` (primary)
- **Islamic Gold**: `#FFA726` (accent)
- Additional shades are defined in the Tailwind config

## Language Support

The website supports bilingual content (English/Urdu). To add new translations:

1. Update content objects in each section component
2. Add corresponding Urdu translations following the existing pattern

## SEO Features

- Meta tags for social sharing (Open Graph, Twitter Cards)
- Structured data (JSON-LD) for search engines
- Semantic HTML structure
- Accessibility attributes

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2024 Jamia Dar-E-Arqam Karoshi. All rights reserved.

## Contact

For inquiries about this website or the institution:
- Email: info@jamiadarqamkaroshi.com
- Phone: +91 70229 18777

---

**Managed by Ulunuha Educational Trust**

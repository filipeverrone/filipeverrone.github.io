# GitHub Pages Setup Guide

This document helps you configure your personal GitHub Pages website with your actual credentials and information.

## Required Updates

### 1. Academic Identifiers (IMPORTANT!)

Replace the placeholder values with your actual identifiers in the following files:

#### In `index.html`:
- Line ~99: Replace `3722805482215586` with your actual Lattes CV ID
  - Find your ID at: http://lattes.cnpq.br/
  - Example: `http://lattes.cnpq.br/1234567890123456`
  
- Line ~103: Replace `0000-0002-5077-0666` with your actual ORCID
  - Find your ID at: https://orcid.org/
  - Example: `https://orcid.org/0000-0001-2345-6789`

#### In `about.html`:
- Line ~156: Replace `3722805482215586` with your actual Lattes CV ID
- Line ~157: Replace `0000-0002-5077-0666` with your actual ORCID

### 2. Repository Name in Meta Tags

If your repository is named differently than `filipeverrone.github.io`, update these files:

- `index.html` - Line 10: `YOUR_REPO_NAME`
- `about.html` - Line 10: `YOUR_REPO_NAME`
- `projects.html` - Line 10: `YOUR_REPO_NAME`

If using the standard `username.github.io` format, you can remove `/YOUR_REPO_NAME/` entirely.

### 3. Profile Image (Optional)

Add a profile image or logo:
1. Create an `assets/img/` directory
2. Add your image as `og-image.png` (1200x630px recommended for social media)
3. This image will appear when sharing your site on social media

## Site Structure

```
filipeverrone.github.io/
├── index.html          # Homepage with professional overview
├── about.html          # Detailed background and credentials
├── projects.html       # Project showcase
├── publications.html   # Academic publications (template)
├── assets/
│   ├── css/
│   │   └── style.css   # Main stylesheet with modern design
│   └── js/
│       └── main.js     # Interactive features
└── blog/
    └── index.html      # Blog (optional)
```

## Features Implemented

### Modern Design
- ✅ Dark theme with gradient backgrounds
- ✅ Smooth transitions and hover effects
- ✅ Responsive design for mobile/tablet/desktop
- ✅ Professional badges (GitHub, LinkedIn, Lattes, ORCID)
- ✅ Modern card-based layouts

### Content Sections
- ✅ Professional identity (Skyone + UPM positions)
- ✅ Education timeline with degrees
- ✅ Technical skills showcase
- ✅ Project cards with tags
- ✅ Social/academic links

### Styling Enhancements
- ✅ Gradient text effects on headings
- ✅ Card hover animations
- ✅ Badge integration with shields.io
- ✅ Timeline for education/experience
- ✅ Skill category grid

## Customization Tips

### Adding Projects
Edit `projects.html` and add new `<article class="card">` blocks:

```html
<article class="card">
  <h2 class="card-title">Your Project Name</h2>
  <p class="card-text">Project description here.</p>
  <p class="card-meta">
    <span class="pill">Technology</span>
    <span class="pill">Another Tag</span>
  </p>
  <p class="card-links">
    <a href="URL">Link</a>
  </p>
</article>
```

### Changing Colors
Edit `assets/css/style.css` in the `:root` section (lines 2-17):

```css
:root{
  --accent:#7aa2ff;     /* Primary accent color */
  --accent2:#9be7ff;    /* Secondary accent */
  --bg:#0b1020;         /* Background color */
  /* ... other variables */
}
```

### Adding More Badges
Use shields.io to create custom badges:
https://shields.io/

Example badge code:
```html
<a href="YOUR_URL" class="badge-link" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/Label-Text-COLOR?style=for-the-badge&logo=LOGO" alt="Alt Text">
</a>
```

## GitHub Pages Deployment

1. Push your changes to GitHub
2. Go to repository Settings → Pages
3. Set source to "main" branch, root directory
4. Your site will be live at: `https://filipeverrone.github.io/`

## SEO & Social Media

The site includes:
- Open Graph tags for social media sharing
- Twitter Card metadata
- Structured data (JSON-LD) for search engines
- Semantic HTML for accessibility

## Support

For issues or questions about the template structure, refer to:
- [GitHub Pages Documentation](https://docs.github.com/pages)
- [Shields.io Badge Documentation](https://shields.io/)

---

**Next Steps:**
1. ⚠️ Update 3722805482215586 and 0000-0002-5077-0666 placeholders
2. Add your profile image to `assets/img/og-image.png`
3. Review and customize content in all pages
4. Test responsive design on different devices
5. Deploy to GitHub Pages

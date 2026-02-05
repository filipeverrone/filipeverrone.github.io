# Filipe Verrone de Lima - Personal Website

[![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-Live-success?style=for-the-badge&logo=github)](https://filipeverrone.github.io)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-filipevlima-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/filipevlima)

Professional portfolio and academic profile showcasing my work as a Software Engineer at Skyone and PhD researcher at Universidade Presbiteriana Mackenzie (UPM).

## 🌟 Features

- **Modern Dark Theme** - Professional design with gradient backgrounds and smooth animations
- **Responsive Layout** - Optimized for desktop, tablet, and mobile devices
- **Professional Badges** - Integrated GitHub, LinkedIn, Lattes CV, and ORCID badges
- **Project Showcase** - Card-based layout highlighting technical work and research
- **Academic Profile** - Detailed education timeline, research interests, and publications
- **SEO Optimized** - Open Graph tags, structured data, and social media integration

## 📋 Content Sections

### Homepage (`index.html`)
- Professional overview and current positions
- Social/academic badges (GitHub, LinkedIn, Lattes, ORCID)
- Quick links to main sections
- Highlights panel

### About Page (`about.html`)
- Comprehensive biography
- Education timeline (PhD, MSc, BSc, Technical)
- Professional experience at Skyone
- Technical skills showcase
- Research interests
- Academic profile links

### Projects Page (`projects.html`)
- K3s Tutorial - Kubernetes deployment guide
- Medical imaging ML pipeline (PhD research)
- Production ML systems work
- Personal website project
- Open-source contributions section

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3 (modern features), Vanilla JavaScript
- **Styling**: Custom CSS with CSS variables, gradients, and animations
- **Icons**: Shields.io badges, Font Awesome compatible
- **Hosting**: GitHub Pages
- **SEO**: Open Graph, Twitter Cards, JSON-LD structured data

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/filipeverrone/filipeverrone.github.io.git
   cd filipeverrone.github.io
   ```

2. **Update your credentials** (IMPORTANT!)
   - Open `SETUP.md` for detailed instructions
   - Replace `3722805482215586` with your actual Lattes CV ID
   - Replace `0000-0002-5077-0666` with your actual ORCID
   - Update meta tags with your repository name

3. **Customize content**
   - Edit HTML files with your information
   - Modify `assets/css/style.css` for styling changes
   - Refer to `BADGES.md` for badge customization

4. **Deploy to GitHub Pages**
   - Push changes to your repository
   - Enable GitHub Pages in repository Settings → Pages
   - Set source to "main" branch

## 📚 Documentation

- **[SETUP.md](SETUP.md)** - Complete setup guide and configuration instructions
- **[BADGES.md](BADGES.md)** - Badge customization examples and resources

## 🎨 Customization

### Colors
Edit CSS variables in `assets/css/style.css`:
```css
:root {
  --accent: #7aa2ff;      /* Primary accent */
  --accent2: #9be7ff;     /* Secondary accent */
  --bg: #0b1020;          /* Background */
  /* ... */
}
```

### Adding Projects
Add new project cards in `projects.html`:
```html
<article class="card">
  <h2 class="card-title">Project Name</h2>
  <p class="card-text">Description</p>
  <p class="card-meta">
    <span class="pill">Technology</span>
  </p>
  <p class="card-links">
    <a href="URL">Link</a>
  </p>
</article>
```

## 📊 Site Structure

```
filipeverrone.github.io/
├── index.html              # Homepage
├── about.html              # About/Bio page
├── projects.html           # Projects showcase
├── publications.html       # Publications (template)
├── README.md              # This file
├── SETUP.md               # Setup instructions
├── BADGES.md              # Badge examples
├── assets/
│   ├── css/
│   │   └── style.css      # Main stylesheet
│   └── js/
│       └── main.js        # Interactive features
└── blog/
    └── index.html         # Blog (optional)
```

## 🔗 Links

- **Website**: https://filipeverrone.github.io
- **GitHub**: [@filipeverrone](https://github.com/filipeverrone)
- **LinkedIn**: [filipevlima](https://www.linkedin.com/in/filipevlima)

## 📝 License

This project is open source and available for personal use. Feel free to fork and customize for your own portfolio.

## 🤝 Contributing

This is a personal portfolio site, but suggestions and improvements are welcome! Feel free to open an issue or submit a pull request.

---

**Built with ❤️ using HTML, CSS, and JavaScript**

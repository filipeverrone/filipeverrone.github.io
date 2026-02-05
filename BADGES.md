# Badge Customization Guide

This file contains ready-to-use badge codes and examples for your GitHub Pages.

## Your Current Badges

### GitHub Badge
```html
<img src="https://img.shields.io/badge/GitHub-filipeverrone-181717?style=for-the-badge&logo=github" alt="GitHub">
```

### LinkedIn Badge
```html
<img src="https://img.shields.io/badge/LinkedIn-filipevlima-0A66C2?style=for-the-badge&logo=linkedin" alt="LinkedIn">
```

### Lattes CV Badge
```html
<img src="https://img.shields.io/badge/Lattes-CV-00599C?style=for-the-badge&logo=academia" alt="Lattes CV">
```

### ORCID Badge
```html
<img src="https://img.shields.io/badge/ORCID-A6CE39?style=for-the-badge&logo=orcid&logoColor=white" alt="ORCID">
```

## Additional Academic Badges

### Google Scholar
```html
<a href="https://scholar.google.com/citations?user=YOUR_ID" class="badge-link" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/Google_Scholar-4285F4?style=for-the-badge&logo=google-scholar&logoColor=white" alt="Google Scholar">
</a>
```

### ResearchGate
```html
<a href="https://www.researchgate.net/profile/YOUR_PROFILE" class="badge-link" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/ResearchGate-00CCBB?style=for-the-badge&logo=researchgate&logoColor=white" alt="ResearchGate">
</a>
```

### arXiv
```html
<a href="https://arxiv.org/search/?searchtype=author&query=YOUR_NAME" class="badge-link" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/arXiv-B31B1B?style=for-the-badge&logo=arxiv&logoColor=white" alt="arXiv">
</a>
```

## Technology Stack Badges

### Python
```html
<img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python">
```

### PyTorch
```html
<img src="https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white" alt="PyTorch">
```

### TensorFlow
```html
<img src="https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white" alt="TensorFlow">
```

### Kubernetes
```html
<img src="https://img.shields.io/badge/Kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white" alt="Kubernetes">
```

### Docker
```html
<img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker">
```

### FastAPI
```html
<img src="https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white" alt="FastAPI">
```

### React
```html
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React">
```

### Node.js
```html
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js">
```

### TypeScript
```html
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
```

## Stats Badges (GitHub Profile)

### GitHub Stats
```html
<img src="https://github-readme-stats.vercel.app/api?username=filipeverrone&show_icons=true&theme=tokyonight" alt="GitHub Stats">
```

### Top Languages
```html
<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=filipeverrone&layout=compact&theme=tokyonight" alt="Top Languages">
```

### GitHub Streak
```html
<img src="https://github-readme-streak-stats.herokuapp.com/?user=filipeverrone&theme=tokyonight" alt="GitHub Streak">
```

## Custom Badge Format

Create your own badges at https://shields.io/

Format:
```
https://img.shields.io/badge/LABEL-MESSAGE-COLOR?style=STYLE&logo=LOGO&logoColor=LOGOCOLOR
```

Parameters:
- `LABEL`: Left side text
- `MESSAGE`: Right side text
- `COLOR`: Hex color (without #) or named color
- `style`: flat, flat-square, plastic, for-the-badge, social
- `logo`: Logo name from Simple Icons (https://simpleicons.org/)
- `logoColor`: Logo color (hex or named)

### Examples

```html
<!-- Custom with hex color -->
<img src="https://img.shields.io/badge/Custom-Badge-FF6B6B?style=for-the-badge" alt="Custom">

<!-- With logo -->
<img src="https://img.shields.io/badge/AWS-Certified-FF9900?style=for-the-badge&logo=amazon-aws&logoColor=white" alt="AWS">

<!-- Dynamic count -->
<img src="https://img.shields.io/github/followers/filipeverrone?style=for-the-badge&logo=github" alt="Followers">
```

## Adding Badges to Your Site

### In HTML Files
Wrap badges in anchor tags with the `badge-link` class:

```html
<div class="social-badges">
  <a href="YOUR_URL" class="badge-link" target="_blank" rel="noopener noreferrer">
    <img src="BADGE_URL" alt="DESCRIPTION">
  </a>
</div>
```

### Styling
Badges automatically inherit styling from the `.badge-link` class in `style.css`:
- Hover effect: slight lift and opacity change
- Height: 28px
- Border radius: 6px
- Smooth transitions

## Badge Colors Reference

Common brand colors (in hex):
- GitHub: `181717`
- LinkedIn: `0A66C2`
- Twitter: `1DA1F2`
- Python: `3776AB`
- JavaScript: `F7DF1E`
- Docker: `2496ED`
- Kubernetes: `326CE5`
- VS Code: `007ACC`

## Resources

- Shields.io: https://shields.io/
- Simple Icons (logos): https://simpleicons.org/
- GitHub README Stats: https://github.com/anuraghazra/github-readme-stats
- Color Picker: https://htmlcolorcodes.com/

---

Remember to test all links after adding new badges!

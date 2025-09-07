# DrewpyProfile Portfolio Site

A professional portfolio website built with Docusaurus, featuring a custom homepage showcasing network security expertise and professional accomplishments.

## 🚀 Quick Start

### Prerequisites
- Node.js (version 18.0 or above)
- Yarn package manager

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/drewpypro/drewpypro.github.io.git
   cd drewpypro.github.io
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

3. **Start development server**
   ```bash
   yarn start
   ```
   
   This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

4. **View the site**
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build for Production

### Build the site
```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Serve locally (optional)
```bash
yarn serve
```

## 🎨 Site Features

- **Custom Homepage**: Professional portfolio layout with multiple sections
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Navy Blue Theme**: Professional color scheme with dark mode support
- **Sections Include**:
  - Professional overview and experience
  - Technical expertise showcase
  - Professional highlights and achievements
  - Current learning initiatives
  - Interests and passions
  - Professional certifications
  - Collaboration interests

## 🛠️ Technology Stack

- **Framework**: Docusaurus v3
- **Styling**: CSS Modules with custom responsive design
- **Package Manager**: Yarn
- **Deployment**: GitHub Pages ready

## 📁 Project Structure

```
drewpypro.github.io/
├── src/
│   ├── css/
│   │   └── custom.css          # Global styles and theme
│   └── pages/
│       ├── index.js            # Main homepage component
│       └── index.module.css    # Homepage-specific styles
├── static/
│   └── img/                    # Static images and assets
├── docusaurus.config.js        # Docusaurus configuration
└── package.json               # Dependencies and scripts
```

## 🎯 Customization

To adapt this site for your own portfolio:

1. **Update personal information** in `src/pages/index.js`
2. **Replace images** in `static/img/` directory
3. **Modify colors** in `src/css/custom.css`
4. **Update site metadata** in `docusaurus.config.js`

## 📦 Available Scripts

- `yarn start` - Start development server
- `yarn build` - Build for production
- `yarn serve` - Serve production build locally
- `yarn clear` - Clear Docusaurus cache

## 🚀 Deployment

This site is configured for GitHub Pages deployment. The build artifacts will be generated in the `build/` directory.

---

Built with ❤️ using Docusaurus and deployed on GitHub Pages.
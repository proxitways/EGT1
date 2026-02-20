# GlobalForm - Static Company Formation Website

A professional, fully static company formation website built with pure HTML, CSS, and JavaScript. No build process required - ready for immediate deployment to GitHub Pages, Netlify, or any static hosting service.

## 🚀 Features

- **5 Country Pages**: UK, USA, Saudi Arabia, Qatar, and India
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile
- **No Dependencies**: Pure HTML/CSS/JavaScript - no frameworks or build tools
- **Fast Loading**: Optimized for performance with minimal file sizes
- **Interactive Elements**: Accordions, smooth scrolling, form validation
- **Professional Design**: Modern emerald green theme with Inter font
- **GitHub Pages Ready**: Deploy in minutes

## 📁 File Structure

```
static-site/
├── index.html              # Home page
├── uk.html                 # UK country detail page
├── usa.html                # USA country detail page
├── saudi-arabia.html       # Saudi Arabia country detail page
├── qatar.html              # Qatar country detail page
├── india.html              # India country detail page
├── css/
│   └── styles.css          # All styling
├── js/
│   ├── data.js             # Country data, FAQs, services
│   └── app.js              # Interactive functionality
└── README.md               # This file
```

## 🎯 Quick Start

### Local Development

1. Simply open `index.html` in your browser
2. Or use a local server:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   
   # Node.js
   npx serve
   ```
3. Visit `http://localhost:8000`

### Deploy to GitHub Pages

1. **Create a new GitHub repository**

2. **Push this code to the repository:**
   ```bash
   cd static-site
   git init
   git add .
   git commit -m "Initial commit: GlobalForm static website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main` / `root`
   - Click Save

4. **Your site will be live at:**
   ```
   https://YOUR_USERNAME.github.io/YOUR_REPO/
   ```

### Deploy to Netlify

1. **Drag and Drop:**
   - Go to [Netlify](https://app.netlify.com/)
   - Drag the `static-site` folder into the deployment zone
   - Done! Your site is live

2. **Or use Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   cd static-site
   netlify deploy --prod
   ```

### Deploy to Vercel

```bash
npm install -g vercel
cd static-site
vercel --prod
```

## 🎨 Customization

### Change Colors

Edit `css/styles.css` and modify the CSS variables:

```css
:root {
  --primary-color: #10b981;      /* Main emerald green */
  --primary-dark: #059669;       /* Darker shade */
  --primary-light: #d1fae5;      /* Light background */
}
```

### Update Content

Edit the data in `js/data.js`:
- Country information (features, requirements, pricing, etc.)
- FAQ questions and answers
- Services list
- Statistics

### Modify Forms

Forms currently store submissions in localStorage (demo mode). To connect to a real backend:

**Option 1: Use Formspree (Recommended)**

1. Sign up at [Formspree.io](https://formspree.io/)
2. Get your form endpoint
3. Update form action in each HTML file:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

**Option 2: Use Google Forms**

1. Create a Google Form
2. Get the form action URL
3. Map form fields to Google Form fields

**Option 3: Custom Backend**

Modify `js/app.js` in the `initForms()` function to POST to your API endpoint.

## 📝 Form Handling

Current behavior:
- Forms validate required fields
- Data is stored in browser localStorage
- Success toast notification is shown
- Form is reset after submission

To view stored submissions:
```javascript
// Open browser console and run:
JSON.parse(localStorage.getItem('inquiries'))
```

## 🛠️ Technical Details

- **Pure HTML5**: Semantic markup for better SEO
- **Modern CSS**: Flexbox, Grid, CSS Variables
- **Vanilla JavaScript**: No jQuery or frameworks
- **Responsive Design**: Mobile-first approach
- **Accessibility**: ARIA labels, keyboard navigation
- **SEO Optimized**: Meta tags, semantic structure

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Troubleshooting

**Forms not working?**
- Check browser console for JavaScript errors
- Ensure all JS files are loading correctly
- Verify localStorage is enabled in browser

**Styles not loading?**
- Check that `css/styles.css` path is correct
- Verify the Google Fonts API is accessible
- Check browser console for CSS loading errors

**Smooth scrolling not working?**
- Check that `js/app.js` is loaded
- Verify anchor IDs match href attributes
- Ensure DOMContentLoaded event is firing

## 📧 Support

For issues or questions, contact: info@globalform.com

## 📄 License

© 2024 GlobalForm. All rights reserved.

## 🚀 Next Steps

1. **Customize branding** - Update logo, colors, company name
2. **Connect forms** - Integrate with Formspree or your backend
3. **Add analytics** - Include Google Analytics or similar
4. **SEO optimization** - Add meta descriptions, structured data
5. **Performance** - Optimize images, add lazy loading
6. **Content** - Replace placeholder content with real data

---

**Built with ❤️ using pure HTML, CSS, and JavaScript**

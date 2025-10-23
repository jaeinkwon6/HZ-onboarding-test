# Nordnet Mobile App

A beautiful mobile account selection interface with comprehensive design system, built with HTML, CSS, Tailwind, and Nordnet Sans Mono typography.

## Features

- 🎨 **Design System**: Complete typography system extracted from Figma
- 📱 **Mobile-First**: Optimized mobile interface with native-like experience
- 🔤 **Custom Typography**: Self-hosted Nordnet Sans Mono font (works offline)
- ⚡ **Fast Loading**: All assets hosted locally, no external dependencies
- 🎯 **Tailwind Integration**: Design tokens compatible with Tailwind CSS
- ✨ **Comprehensive Documentation**: Full design system guide with examples

## Pages

- **src/index.html**: Mobile account selection interface
- **src/account-alias.html**: Account alias configuration page
- **design-system/typography-demo.html**: Complete typography showcase with all 21+ styles
- **design-system/shadow-demo.html**: Interactive shadow system showcase
- **design-system/components-demo.html**: Complete component showcase (buttons, inputs, dropdowns, cards, badges, etc.)
- **design-system/DESIGN-SYSTEM.md**: Complete design system documentation (all-in-one)

## Design System

The project includes a complete design system with:
- **9 font sizes**: From H1 (40px) to Graph (10px)
- **3 font weights**: Regular (400), Bold (700), ExtraBold (800)
- **21+ typography styles**: Headlines, subtitles, body text, and specialized text
- **3-level shadow system**: Low, Medium, High elevation for depth and hierarchy
- **Design tokens**: CSS variables for easy customization
- **Complete components**: Buttons, inputs, dropdowns, cards, badges, progress bars
- **In-label pattern**: Floating labels for inputs and dropdowns (from Figma)
- **Color palette**: Text and background colors from Figma
- **Dark mode**: Full dark mode support for all components

### Components

- **Buttons**: Primary, secondary, tertiary, sell, icon buttons with multiple sizes
- **Inputs**: Text fields with floating labels, currency suffix, error/success states
- **Dropdowns**: Single & multi-select with floating labels, radio/checkboxes (from Figma)
- **Cards**: Selectable cards with badges, radio buttons, and multiple states
- **Badges**: Development badges, icon badges, status badges
- **Progress Bars**: Multi-step progress indicators with navigation controls
- **Labels**: Status labels with various semantic colors

View the complete design system in `design-system/DESIGN-SYSTEM.md` (includes typography, shadows, components, quick reference) or see it in action at:
- `design-system/typography-demo.html` - Typography showcase
- `design-system/shadow-demo.html` - Shadow system
- `design-system/components-demo.html` - All components (buttons, inputs, dropdowns, cards, badges, progress, labels)

## Getting Started

### Option 1: Direct Browser Opening
Simply open `src/index.html` in your web browser.

### Option 2: Local Development Server
1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser to `http://localhost:3000`

## File Structure

```
├── src/                    # Project files
│   ├── index.html          # Main account selection page
│   ├── account-alias.html  # Account alias page
│   └── styles.css          # Component-specific styles
├── design-system/          # Design system files
│   ├── design-system.css   # Complete design system CSS
│   ├── DESIGN-SYSTEM.md    # Complete documentation (all-in-one)
│   ├── DESIGN-SYSTEM-STATUS.md    # → Redirects to DESIGN-SYSTEM.md
│   ├── TYPOGRAPHY-QUICK-REFERENCE.md # → Redirects to DESIGN-SYSTEM.md
│   ├── SHADOW-SYSTEM.md    # → Redirects to DESIGN-SYSTEM.md
│   ├── typography-demo.html # Typography showcase
│   ├── shadow-demo.html    # Shadow system showcase
│   └── components-demo.html # Complete component showcase
├── Asset/
│   └── nordnet-sans-mono/  # Self-hosted font files
│       ├── nordnet-sans-mono-regular.woff2
│       ├── nordnet-sans-mono-bold.woff2
│       └── nordnet-sans-mono-extrabold.woff2
├── package.json            # Project configuration
└── README.md              # This file
```

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Custom styles, animations, and design tokens
- **Tailwind CSS**: Utility-first CSS framework (via CDN)
- **Nordnet Sans Mono**: Self-hosted custom font (woff2/woff)
- **SVG Icons**: Scalable vector graphics
- **Figma**: Design system source

## Using the Design System

### Quick Start

```html
<!-- Include design system CSS -->
<link rel="stylesheet" href="styles.css">
<link rel="stylesheet" href="../design-system/design-system.css">

<!-- Use typography classes -->
<h1 class="typography-h1">Page Title</h1>
<p class="typography-primary">Body text</p>
<p class="typography-secondary text-weak">Secondary text</p>
```

### Typography Classes

| Class | Size | Use Case |
|-------|------|----------|
| `typography-h1` | 40px | Main page titles |
| `typography-h2` | 32px | Section titles |
| `typography-h3` | 28px | Subsection titles |
| `typography-subtitle1` | 24px | Large emphasis |
| `typography-subtitle2` | 20px | Medium emphasis |
| `typography-primary` | 16px | Main body text |
| `typography-secondary` | 14px | Supporting text |
| `typography-tertiary` | 12px | Small text/captions |
| `typography-graph` | 10px | Graph labels |

Each class has `-bold` and `-extrabold` variants (e.g., `typography-primary-bold`).

### Shadow Classes

| Class | Elevation | Use Case |
|-------|-----------|----------|
| `shadow-low` | Low | Subtle depth, resting cards |
| `shadow-medium` | Medium | Default cards, interactive elements |
| `shadow-high` | High | Elevated UI, modals, dropdowns |

### Design Tokens (CSS Variables)

```css
/* Use design tokens in custom CSS */
.custom-text {
    font-size: var(--font-size-subtitle1);
    line-height: var(--line-height-subtitle1);
    color: var(--color-text-default);
    font-weight: var(--font-weight-bold);
}
```

### Tailwind Integration

```html
<!-- Use custom font sizes with Tailwind -->
<h1 class="text-h1 font-extrabold">Headline</h1>
<p class="text-primary font-regular text-default">Body text</p>
```

## Customization

### Typography
Modify design tokens in `design-system/design-system.css`:
```css
:root {
    --font-size-h1: 48px;  /* Change heading size */
    --color-text-default: #000000;  /* Change text color */
}
```

### Colors
- Update color variables in `:root`
- Modify Tailwind color config in HTML
- Use `.text-default` and `.text-weak` utility classes

### Components
- Pre-defined component styles: `.card-title`, `.button-text`, `.label-text`
- Customize in `design-system/design-system.css` under "Component-Specific Styles"

### Documentation
- **Complete Guide**: `design-system/DESIGN-SYSTEM.md` (includes everything)
- **Quick Reference**: See Appendix A in DESIGN-SYSTEM.md
- **Shadow System**: See Shadow System section in DESIGN-SYSTEM.md
- **Implementation Status**: See Appendix C in DESIGN-SYSTEM.md

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this template for your projects!

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

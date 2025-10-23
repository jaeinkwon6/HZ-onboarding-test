# Nordnet Design System

Complete design system with typography, shadows, colors, and utilities - all in one place.

## 📦 Installation

Include the design system CSS in your HTML:

```html
<!-- Include font files first -->
<link rel="stylesheet" href="../src/styles.css">
<!-- Include design system -->
<link rel="stylesheet" href="design-system.css">
```

## 🎨 Design Tokens

### Typography Scale

#### Headlines
| Class | Font Size | Line Height | Weight | Use Case |
|-------|-----------|-------------|---------|----------|
| `typography-h1` | 40px | 48px | 800 (ExtraBold) | Main page titles |
| `typography-h2` | 32px | 40px | 800 (ExtraBold) | Section titles |
| `typography-h2-bold` | 32px | 40px | 700 (Bold) | Section titles (lighter) |
| `typography-h3` | 28px | 32px | 800 (ExtraBold) | Subsection titles |
| `typography-h3-bold` | 28px | 32px | 700 (Bold) | Subsection titles (lighter) |

#### Subtitles
| Class | Font Size | Line Height | Weight | Use Case |
|-------|-----------|-------------|---------|----------|
| `typography-subtitle1` | 24px | 28px | 800 (ExtraBold) | Large emphasis text |
| `typography-subtitle1-bold` | 24px | 28px | 700 (Bold) | Large emphasis text (lighter) |
| `typography-subtitle2` | 20px | 24px | 800 (ExtraBold) | Medium emphasis text |
| `typography-subtitle2-bold` | 20px | 24px | 700 (Bold) | Medium emphasis text (lighter) |

#### Body Text
| Class | Font Size | Line Height | Weight | Use Case |
|-------|-----------|-------------|---------|----------|
| `typography-primary` | 16px | 24px | 400 (Regular) | Main body text |
| `typography-primary-bold` | 16px | 24px | 700 (Bold) | Emphasized body text |
| `typography-primary-extrabold` | 16px | 24px | 800 (ExtraBold) | Strong emphasis |
| `typography-secondary` | 14px | 20px | 400 (Regular) | Secondary body text |
| `typography-secondary-bold` | 14px | 20px | 700 (Bold) | Emphasized secondary text |
| `typography-secondary-extrabold` | 14px | 20px | 800 (ExtraBold) | Strong emphasis |
| `typography-tertiary` | 12px | 16px | 400 (Regular) | Small text, captions |
| `typography-tertiary-bold` | 12px | 16px | 700 (Bold) | Emphasized small text |
| `typography-tertiary-extrabold` | 12px | 16px | 800 (ExtraBold) | Strong emphasis |

#### Specialized
| Class | Font Size | Line Height | Weight | Use Case |
|-------|-----------|-------------|---------|----------|
| `typography-graph` | 10px | 14px | 400 (Regular) | Graph labels, tiny text |
| `typography-graph-bold` | 10px | 14px | 700 (Bold) | Emphasized graph labels |
| `typography-graph-extrabold` | 10px | 14px | 800 (ExtraBold) | Strong emphasis |

### Color System

Our color system is organized into semantic categories that provide consistent meaning across the interface. Each category includes multiple variants for different use cases and states.

#### Neutral Colors
Base colors for text, backgrounds, borders, and icons.

**Text Colors:**
```css
var(--color-text-default)    /* #1c1c1c - Primary text */
var(--color-text-weak)       /* #6e6e6e - Secondary text */
var(--color-text-medium)     /* #ffffff - Medium emphasis */
var(--color-text-strong)     /* #ffffff - High emphasis */
var(--color-text-disabled)   /* #9e9e9e - Disabled state */
var(--color-text-focus)      /* #1c1c1c - Focus state */
var(--color-text-inactive)   /* #9e9e9e - Inactive state */
```

**Background Colors:**
```css
var(--color-bg-default)      /* #ffffff - Default background */
var(--color-bg-weak)         /* #ffffff - Subtle background */
var(--color-bg-medium)       /* #f5f5f5 - Medium background */
var(--color-bg-strong)       /* #f5f5f5 - Strong background */
var(--color-bg-hover)        /* #f5f5f599 - Hover state */
var(--color-bg-disabled)     /* #eeeeee - Disabled state */
var(--color-bg-skeleton)     /* #eeeeee - Loading state */
var(--color-bg-active)       /* #ffffff - Active state */
var(--color-bg-inactive)     /* #e0e0e0 - Inactive state */
var(--color-bg-select)       /* #ffffff - Selected state */
var(--color-bg-focus)        /* #1c1c1c - Focus state */
var(--color-bg-focus-hover)  /* #262626 - Focus hover */
var(--color-bg-focus-pressed)/* #333333 - Focus pressed */
var(--color-bg-badge)        /* #333333 - Badge background */
```

**Border Colors:**
```css
var(--color-border-default)  /* #bdbdbd - Default border */
var(--color-border-weak)     /* #eeeeee - Subtle border */
var(--color-border-medium)   /* #e0e0e0 - Medium border */
var(--color-border-strong)   /* #f5f5f5 - Strong border */
var(--color-border-active)   /* #1c1c1c - Active border */
var(--color-border-hover)    /* #6e6e6e - Hover border */
var(--color-border-disabled) /* #eeeeee - Disabled border */
```

#### Action Colors
Primary interactive colors for buttons, links, and interactive elements.

**Action Background Colors:**
```css
var(--color-action-bg-default)  /* #336bff - Primary action */
var(--color-action-bg-weak)     /* #eaf0ff - Subtle action */
var(--color-action-bg-medium)   /* #adc4ff - Medium action */
var(--color-action-bg-strong)   /* #1f4099 - Strong action */
var(--color-action-bg-hover)    /* #2650bf - Hover state */
var(--color-action-bg-pressed)  /* #1f4099 - Pressed state */
var(--color-action-bg-brand)    /* #00c8f5 - Brand action */
```

#### Semantic Colors
Colors that convey specific meanings and states.

**Positive Colors (Success, Growth):**
```css
var(--color-positive-bg-default) /* #41a21a - Success */
var(--color-positive-bg-weak)    /* #edfae8 - Subtle success */
var(--color-positive-bg-medium)  /* #85da62 - Medium success */
var(--color-positive-bg-strong)  /* #41a21a - Strong success */
var(--color-positive-bg-status)  /* #51cb20 - Status success */
var(--color-positive-bg-brand)   /* #d2f500 - Brand success */
```

**Negative Colors (Loss, Decline):**
```css
var(--color-negative-bg-default) /* #cc2269 - Negative */
var(--color-negative-bg-weak)    /* #f6e7ee - Subtle negative */
var(--color-negative-bg-medium)  /* #cc2269 - Medium negative */
var(--color-negative-bg-strong)  /* #ac135a - Strong negative */
var(--color-negative-bg-hover)   /* #ac135a - Hover state */
var(--color-negative-bg-pressed) /* #78013a - Pressed state */
```

**Error Colors:**
```css
var(--color-error-bg-default)    /* #ff4733 - Error */
var(--color-error-bg-weak)       /* #ffecea - Subtle error */
var(--color-error-bg-medium)     /* #cc3929 - Medium error */
var(--color-error-bg-hover)      /* #cc3929 - Hover state */
var(--color-error-bg-pressed)    /* #992b1f - Pressed state */
```

**Warning Colors:**
```css
var(--color-warning-bg-default)  /* #e6bb00 - Warning */
var(--color-warning-bg-weak)     /* #fffae5 - Subtle warning */
var(--color-warning-bg-medium)   /* #fff3bd - Medium warning */
var(--color-warning-bg-strong)   /* #ffcf00 - Strong warning */
```

**Accent Colors:**
```css
var(--color-accent-bg-default)   /* #009087 - Accent */
var(--color-accent-bg-weak)      /* #e5fdfc - Subtle accent */
var(--color-accent-bg-strong)    /* #00605a - Strong accent */
var(--color-accent-bg-brand)     /* #00f0e1 - Brand accent */
```

#### Graph Colors
Specialized colors for data visualization and charts.

```css
var(--color-graph-positive)      /* #41a21a - Positive data */
var(--color-graph-negative)      /* #cc2269 - Negative data */
var(--color-graph-neutral)       /* #ffffff - Neutral data */
var(--color-graph-main)          /* #336bff - Primary data */
var(--color-graph-first)         /* #e6bb00 - First series */
var(--color-graph-second)        /* #cc2269 - Second series */
var(--color-graph-third)         /* #41a21a - Third series */
var(--color-graph-fourth)        /* #d2f500 - Fourth series */
var(--color-graph-fifth)         /* #00605a - Fifth series */
var(--color-graph-sixth)         /* #cc3929 - Sixth series */
var(--color-graph-seventh)       /* #00c8f5 - Seventh series */
var(--color-graph-eighth)        /* #bdbdbd - Eighth series */
```

#### Premium Badge Colors
Special colors for premium features and status indicators.

```css
var(--color-premium-badge-gold)      /* #e0c276 - Gold premium */
var(--color-premium-badge-platinum)  /* #6e6e6e - Platinum premium */
var(--color-premium-badge-black)     /* #1c1c1c - Black premium */
var(--color-premium-badge-signature) /* #1196a9 - Signature premium */
```

#### Gold Colors
Special brand colors for premium features.

```css
var(--color-gold-500)  /* #e0c276 - Gold 500 */
var(--color-gold-600)  /* #c3a760 - Gold 600 */
var(--color-gold-700)  /* #a68c4b - Gold 700 */
var(--color-gold-800)  /* #897239 - Gold 800 */
```

### Shadow System

Our shadow system provides consistent elevation and depth across the interface.

**Shadow Variables:**
```css
var(--shadow-low)      /* Low elevation - subtle depth */
var(--shadow-medium)   /* Medium elevation - moderate depth */
var(--shadow-high)     /* High elevation - strong depth */
```

**Shadow Components:**
```css
/* Low Shadow */
var(--shadow-low-blur-a)     /* 2px - Primary blur */
var(--shadow-low-blur-b)     /* 20px - Secondary blur */
var(--shadow-low-color-a)    /* #00000014 - Primary shadow color */
var(--shadow-low-color-b)    /* #0000000a - Secondary shadow color */

/* Medium Shadow */
var(--shadow-medium-blur-a)  /* 2px - Primary blur */
var(--shadow-medium-blur-b)  /* 20px - Secondary blur */
var(--shadow-medium-color-a) /* #0000001f - Primary shadow color */
var(--shadow-medium-color-b) /* #0000000f - Secondary shadow color */
```

## 🛠 Utility Classes

### Text Colors
```html
<p class="text-default">Default text color</p>
<p class="text-weak">Weak/secondary text color</p>
```

### Font Weights
```html
<span class="font-regular">Regular weight (400)</span>
<span class="font-bold">Bold weight (700)</span>
<span class="font-extrabold">Extra bold weight (800)</span>
```

### Backgrounds
```html
<div class="bg-default">White background</div>
<div class="bg-neutral">Light gray background</div>
```

### Shadows
```html
<div class="shadow-low">Low elevation shadow</div>
<div class="shadow-medium">Medium elevation shadow</div>
<div class="shadow-high">High elevation shadow</div>
```

## 🎨 Shadow System

The design system includes a three-level elevation system for creating depth and visual hierarchy.

### Shadow Levels

| Class | Elevation | Use Case | CSS Value |
|-------|-----------|----------|-----------|
| `shadow-low` | Low | Subtle depth, resting cards | 2px border + 24px halo (8%, 4% opacity) |
| `shadow-medium` | Medium | Default cards, interactive elements | 2px border + 24px halo (12%, 6% opacity) |
| `shadow-high` | High | Elevated cards, modals, dropdowns | 8px border + 24px halo (12%, 8% opacity) |

### Usage Examples

```html
<!-- Low elevation - Subtle cards -->
<div class="shadow-low bg-white p-4 rounded-lg">
    <p>Low elevation card</p>
</div>

<!-- Medium elevation - Standard cards -->
<div class="shadow-medium bg-white p-4 rounded-lg">
    <p>Medium elevation card</p>
</div>

<!-- High elevation - Modal or dropdown -->
<div class="shadow-high bg-white p-4 rounded-lg">
    <p>High elevation card</p>
</div>
```

### Shadow Composition

Each shadow is composed of two layers:
1. **Border Shadow**: Subtle crisp edge (2px or 8px blur)
2. **Halo Shadow**: Soft ambient shadow (24px blur)

This creates a natural, depth-based shadow similar to Material Design elevation.

### Using with Tailwind

```html
<!-- Combine with Tailwind utilities -->
<div class="shadow-medium rounded-xl p-6 hover:shadow-high transition-shadow">
    Interactive card with hover effect
</div>
```

### Custom Shadows with CSS Variables

```css
.custom-card {
    box-shadow: var(--shadow-medium);
    transition: box-shadow 0.3s ease;
}

.custom-card:hover {
    box-shadow: var(--shadow-high);
}
```

## 🧩 Component Styles

### Badges

Badges label, mark, or accent specific features or products. The badge system includes three main types:

#### Development Badges (Circular Icon Badges)
Small circular badges with icons for labeling features or content.

```html
<!-- Positive Badge -->
<span class="badge-dev badge-dev-l badge-positive">
    <div class="badge-icon">
        <svg viewBox="0 0 24 24" fill="none">
            <path d="M7 14L12 9L17 14" stroke="currentColor" stroke-width="2"/>
        </svg>
    </div>
</span>

<!-- Negative Badge -->
<span class="badge-dev badge-dev-m badge-negative">
    <div class="badge-icon">
        <svg viewBox="0 0 24 24" fill="none">
            <path d="M7 10L17 14" stroke="currentColor" stroke-width="2"/>
        </svg>
    </div>
</span>

<!-- Call to Action Badge -->
<span class="badge-dev badge-dev-s badge-cta">
    <div class="badge-icon">
        <svg viewBox="0 0 24 24" fill="none">
            <path d="M7 14L12 9L17 14" stroke="currentColor" stroke-width="2"/>
        </svg>
    </div>
</span>
```

**Sizes:**
- `badge-dev-l` - Large (40px diameter)
- `badge-dev-m` - Medium (24px diameter)
- `badge-dev-s` - Small (16px diameter)

**Variants:**
- `badge-positive` - Teal background (#0db4bf) with white icon
- `badge-negative` - Coral background (#ff4d6b) with white icon
- `badge-cta` - Black background (#1c1c1c) with white icon

#### Icon Badges
Circular badges for displaying icons or status indicators.

```html
<!-- With SVG Icon -->
<span class="badge badge-l badge-success">
    <div class="badge-status-icon">
        <svg viewBox="0 0 24 24" fill="none">
            <polyline points="20 6 9 17 4 12" stroke="currentColor" stroke-width="2"/>
        </svg>
    </div>
</span>

<!-- With Text -->
<span class="badge badge-m badge-info">
    <div class="badge-status-icon">i</div>
</span>
```

**Sizes:**
- `badge-xl` - Extra Large (80px)
- `badge-l` - Large (48px)
- `badge-m` - Medium (40px)
- `badge-s` - Small (32px)

#### Status Badges
Pre-styled badges for common status indicators.

```html
<!-- Success -->
<span class="badge badge-l badge-success">
    <div class="badge-status-icon">
        <svg viewBox="0 0 24 24" fill="none">
            <polyline points="20 6 9 17 4 12" stroke="currentColor" stroke-width="2"/>
        </svg>
    </div>
</span>

<!-- Pending -->
<span class="badge badge-m badge-pending">
    <div class="badge-status-icon">
        <svg viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
            <polyline points="12 6 12 12 16 14" stroke="currentColor" stroke-width="2"/>
        </svg>
    </div>
</span>

<!-- Error -->
<span class="badge badge-m badge-error">
    <div class="badge-status-icon">
        <svg viewBox="0 0 24 24" fill="none">
            <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" stroke-width="2"/>
            <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" stroke-width="2"/>
        </svg>
    </div>
</span>

<!-- Warning -->
<span class="badge badge-m badge-warning">
    <div class="badge-status-icon">
        <svg viewBox="0 0 24 24" fill="none">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" stroke="currentColor" stroke-width="2"/>
            <line x1="12" y1="9" x2="12" y2="13" stroke="currentColor" stroke-width="2"/>
            <line x1="12" y1="17" x2="12.01" y2="17" stroke="currentColor" stroke-width="2"/>
        </svg>
    </div>
</span>

<!-- Information -->
<span class="badge badge-s badge-info">
    <div class="badge-status-icon">
        <svg viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
            <line x1="12" y1="16" x2="12" y2="12" stroke="currentColor" stroke-width="2"/>
            <line x1="12" y1="8" x2="12.01" y2="8" stroke="currentColor" stroke-width="2"/>
        </svg>
    </div>
</span>

<!-- Quit/Exit -->
<span class="badge badge-s badge-quit">
    <div class="badge-status-icon">
        <svg viewBox="0 0 24 24" fill="none">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" stroke="currentColor" stroke-width="2"/>
            <polyline points="16 17 21 12 16 7" stroke="currentColor" stroke-width="2"/>
            <line x1="21" y1="12" x2="9" y2="12" stroke="currentColor" stroke-width="2"/>
        </svg>
    </div>
</span>
```

**Status Colors (Updated from Figma):**
| Variant | Background | Use Case |
|---------|------------|----------|
| `badge-success` | Green (#41a21a) | Completed, approved, positive |
| `badge-pending` | Yellow (#e6bb00) | In progress, waiting |
| `badge-error` | Red (#ff4733) | Failed, rejected, error |
| `badge-warning` | Yellow (#e6bb00) | Caution, attention needed |
| `badge-info` | Teal (#009087) | Information, help |
| `badge-quit` | Light gray (#f5f5f5) | Exit, close |

**Development Badge Colors:**
| Variant | Background | Use Case |
|---------|------------|----------|
| `badge-positive` | Green (#41a21a) | Positive development state |
| `badge-negative` | Pink (#cc2269) | Negative development state |
| `badge-cta` | Black (#1c1c1c) | Call-to-action state |

**Badge Demo:** See `design-system/badge-demo.html` for all badge variants.

### Buttons

Buttons are interactive elements used for user actions and navigation. They come in various types, sizes, and states to accommodate different use cases.

#### Button Types

**Primary Buttons**
Primary buttons are used for the main action on a page or within a section.

```html
<!-- Basic Primary Button -->
<button class="btn btn-primary btn-default">Button</button>

<!-- Primary Button with Left Icon -->
<button class="btn btn-primary btn-default">
    <div class="btn-icon">
        <svg viewBox="0 0 24 24" fill="none">
            <line x1="12" y1="5" x2="12" y2="19" stroke="currentColor" stroke-width="2"/>
            <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" stroke-width="2"/>
        </svg>
    </div>
    Button
</button>

<!-- Primary Button with Right Icon -->
<button class="btn btn-primary btn-default">
    Button
    <div class="btn-icon">
        <svg viewBox="0 0 24 24" fill="none">
            <polyline points="9 18 15 12 9 6" stroke="currentColor" stroke-width="2"/>
        </svg>
    </div>
</button>
```

**Sell Buttons**
Sell buttons are used for selling actions, typically with a coral/red color scheme.

```html
<!-- Sell Button -->
<button class="btn btn-sell btn-default">Sell</button>
```

**Secondary Buttons**
Secondary buttons are used for secondary actions or when you need multiple buttons in a group.

```html
<!-- Secondary Button -->
<button class="btn btn-secondary btn-default">Button</button>

<!-- Secondary Button with Icon -->
<button class="btn btn-secondary btn-default">
    <div class="btn-icon">
        <svg viewBox="0 0 24 24" fill="none">
            <line x1="12" y1="5" x2="12" y2="19" stroke="currentColor" stroke-width="2"/>
            <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" stroke-width="2"/>
        </svg>
    </div>
    Button
</button>
```

**Tertiary Buttons**
Tertiary buttons are used for less prominent actions, typically with transparent backgrounds.

```html
<!-- Tertiary Button -->
<button class="btn btn-tertiary btn-default">Button</button>

<!-- Tertiary Button with Icon -->
<button class="btn btn-tertiary btn-default">
    <div class="btn-icon">
        <svg viewBox="0 0 24 24" fill="none">
            <line x1="12" y1="5" x2="12" y2="19" stroke="currentColor" stroke-width="2"/>
            <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" stroke-width="2"/>
        </svg>
    </div>
    Button
</button>
```

#### Button Sizes

- `btn-small` (32px height) - For compact interfaces
- `btn-default` (40px height) - Standard size for most use cases
- `btn-large` (48px height) - For prominent actions

#### Button States

**Default State**
```html
<button class="btn btn-primary btn-default">Button</button>
```

**Hover State**
Hover states are automatically applied via CSS.

**Pressed State**
Pressed states are automatically applied via CSS.

**Disabled State**
```html
<button class="btn btn-primary btn-default" disabled>Disabled</button>
```

**Loading State**
```html
<button class="btn btn-primary btn-default btn-loading">Loading</button>
```

#### Button Colors

**Primary Buttons:**
- Background: #1c1c1c (black)
- Text: #ffffff (white)
- Hover: #2a2a2a (darker black)
- Pressed: #0f0f0f (darkest black)

**Sell Buttons:**
- Background: #ff4d6b (coral)
- Text: #ffffff (white)
- Hover: #ff6b7d (lighter coral)
- Pressed: #e63e5a (darker coral)

**Secondary Buttons:**
- Background: #f5f5f5 (light gray)
- Text: #1c1c1c (black)
- Hover: #e8e8e8 (darker gray)
- Pressed: #d9d9d9 (darkest gray)

**Tertiary Buttons:**
- Background: transparent
- Text: #148097 (teal)
- Hover: rgba(20, 128, 151, 0.1) (light teal overlay)
- Pressed: rgba(20, 128, 151, 0.2) (darker teal overlay)

**Disabled Buttons:**
- Background: #eeeeee (light gray)
- Text: #9e9e9e (medium gray)

#### Usage Guidelines

- Use primary buttons for the main action on a page
- Use sell buttons specifically for selling actions
- Use secondary buttons for secondary actions or when grouping multiple buttons
- Use tertiary buttons for less prominent actions
- Always provide clear, descriptive button text
- Use icons to enhance button meaning when appropriate
- Ensure buttons have sufficient contrast and are accessible
- Use loading states for actions that take time to complete
- Disable buttons when actions are not available

**Button Demo:** See `design-system/button-demo.html` for all button variants.

#### Icon Buttons
Icon-only buttons for navigation and actions without text labels.

```html
<!-- Back Button -->
<button class="btn-icon-only btn-icon-default">
    <div class="btn-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"></path>
        </svg>
    </div>
</button>

<!-- Close Button -->
<button class="btn-icon-only btn-icon-default">
    <div class="btn-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
    </div>
</button>
```

**Icon Button Sizes (Matching Figma Specifications):**
- `btn-icon-xs` (24px) - Extra small for minimal interfaces
- `btn-icon-small` (28px) - Small for compact interfaces
- `btn-icon-medium` (32px) - Medium for standard use
- `btn-icon-default` (40px) - Default size for most use cases
- `btn-icon-large` (48px) - Large for prominent actions

**Important:** Always include a size class (e.g., `btn-icon-default`) with `btn-icon-only` to ensure proper sizing.

**Icon Button Features:**
- Fully circular design (50% border-radius) - matching Figma design exactly
- Follows secondary button color scheme (mono tone)
- Proper hover and active states matching other buttons
- Proper focus states for accessibility
- Dark mode support
- Consistent icon sizing within buttons

**Icon Button Colors:**
- Background: #f5f5f5 (light gray) - matches secondary button
- Text: #1c1c1c (black) - matches secondary button text
- Hover: #e8e8e8 (darker gray) - matches secondary button hover
- Pressed: #d9d9d9 (darkest gray) - matches secondary button pressed
- Disabled: #eeeeee (light gray) - matches disabled button

### Progress Bar Components

Progress bars show completion status across multiple steps in a process. They support 2-4 steps and include navigation controls.

#### Basic Progress Bar

```html
<!-- 4 Steps Progress Bar -->
<div class="progress-container">
    <div class="progress-step progress-filled"></div>
    <div class="progress-step progress-filled"></div>
    <div class="progress-step"></div>
    <div class="progress-step"></div>
</div>

<!-- 3 Steps Progress Bar -->
<div class="progress-container">
    <div class="progress-step progress-filled"></div>
    <div class="progress-step"></div>
    <div class="progress-step"></div>
</div>

<!-- 2 Steps Progress Bar -->
<div class="progress-container">
    <div class="progress-step progress-filled"></div>
    <div class="progress-step"></div>
</div>
```

#### Progress Bar with Controls

```html
<div class="progress-bar-with-controls">
    <!-- Back Button -->
    <button class="btn-icon-only btn-icon-default">
        <div class="btn-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"></path>
            </svg>
        </div>
    </button>
    
    <!-- Progress Steps -->
    <div class="progress-container">
        <div class="progress-step progress-filled"></div>
        <div class="progress-step progress-filled"></div>
        <div class="progress-step"></div>
        <div class="progress-step"></div>
    </div>
    
    <!-- Close Button -->
    <button class="btn-icon-only btn-icon-default">
        <div class="btn-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
        </div>
    </button>
</div>
```

**Progress Bar Classes:**
- `progress-container` - Container for progress steps
- `progress-step` - Individual progress step
- `progress-filled` - Completed/filled step
- `progress-bar-with-controls` - Full progress bar with navigation buttons

**Progress Bar Sizes:**
- `progress-small` (2px height) - Subtle progress indication
- `progress-default` (4px height) - Standard size
- `progress-large` (6px height) - Prominent progress indication

**Progress Bar Features:**
- Configurable steps (2-4, default 4)
- Smooth transitions between states
- Dark mode support
- Accessible focus states
- Consistent with design system colors

**Progress Bar Demo:** See `design-system/progress-bar-demo.html` for all variants and configurations.

### Input Components

Input components sourced directly from Figma with floating labels, comprehensive state management, and clean visual design.

#### Basic Input Structure

```html
<!-- Basic Input -->
<div class="input-container">
    <div class="input-wrapper">
        <div class="input-field">
            <div style="display: flex; flex-direction: column; width: 100%;">
                <span class="input-field-label">Label</span>
                <span class="input-field-value">Input</span>
            </div>
        </div>
    </div>
</div>
```

#### Currency Input Variant

```html
<!-- Input with Currency Suffix -->
<div class="input-container">
    <div class="input-wrapper">
        <div class="input-field" style="flex-direction: row; align-items: flex-end;">
            <div style="display: flex; flex-direction: column; flex: 1;">
                <span class="input-field-label">Label</span>
                <span class="input-field-value">Input</span>
            </div>
            <span class="input-suffix">SEK</span>
        </div>
    </div>
</div>
```

#### Input States

**Error State**
```html
<div class="input-container">
    <div class="input-wrapper input-error">
        <div class="input-field">
            <div style="display: flex; flex-direction: column; width: 100%;">
                <span class="input-field-label">Label</span>
                <span class="input-field-value">Input</span>
            </div>
        </div>
    </div>
    <div class="input-helper input-helper-error">
        <svg class="input-helper-icon" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="8" r="7" stroke="#cc2269" stroke-width="1.5" fill="none"/>
            <path d="M8 4v4.5" stroke="#cc2269" stroke-width="1.5" stroke-linecap="round"/>
            <circle cx="8" cy="11" r="0.5" fill="#cc2269"/>
        </svg>
        <span class="input-helper-text">Error message</span>
    </div>
</div>
```

**Success State**
```html
<div class="input-container">
    <div class="input-wrapper input-success">
        <div class="input-field">
            <div style="display: flex; flex-direction: column; width: 100%;">
                <span class="input-field-label">Label</span>
                <span class="input-field-value">Input</span>
            </div>
        </div>
    </div>
    <div class="input-helper input-helper-success">
        <svg class="input-helper-icon" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="8" r="7" stroke="#41a21a" stroke-width="1.5" fill="none"/>
            <path d="M5 8l2 2 4-4" stroke="#41a21a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span class="input-helper-text">Success message</span>
    </div>
</div>
```

**Disabled State**
```html
<div class="input-container">
    <div class="input-wrapper input-disabled">
        <div class="input-field">
            <div style="display: flex; flex-direction: column; width: 100%;">
                <span class="input-field-label">Label</span>
                <span class="input-field-value">Input</span>
            </div>
        </div>
    </div>
</div>
```

#### Input Classes

**Container Classes:**
- `.input-container` - Outer container for the input system
- `.input-wrapper` - Main input wrapper with background and border
- `.input-field` - Inner field container

**State Modifiers:**
- `.input-error` - Error state with red border
- `.input-success` - Success state
- `.input-disabled` - Disabled state with reduced opacity

**Text Classes:**
- `.input-field-label` - Label text (12px, tertiary)
- `.input-field-value` - Input value text (14px, secondary)
- `.input-suffix` - Suffix text like currency (14px, bold)

**Helper Classes:**
- `.input-helper` - Helper text container
- `.input-helper-error` - Error helper variant
- `.input-helper-success` - Success helper variant
- `.input-helper-icon` - Icon in helper text (16x16px)
- `.input-helper-text` - Helper text content

#### Design Specifications

**Dimensions:**
- Height: 56px
- Border Radius: 8px
- Padding: 14px 12px
- Gap: 4px (between wrapper and helper text)

**Typography:**
- Label: 12px / 16px (Tertiary, Regular)
- Input Value: 14px / 20px (Secondary, Regular)
- Suffix: 14px / 20px (Secondary, Bold)
- Helper Text: 12px / 16px (Tertiary, Regular)

**Colors:**
- Background: #f5f5f5 (neutral/background/medium)
- Label: #6e6e6e (neutral/text/weak)
- Input Text: #1c1c1c (neutral/text/default)
- Error Border: #cc2269 (negative/border/default)
- Error Text: #cc2269 (negative/text/default)
- Success Icon: #41a21a (positive/icon/default)
- Disabled Background: #eeeeee (neutral/background/disabled)
- Disabled Text: #9e9e9e (neutral/text/disabled)

**Interaction States:**
- Default: No border (transparent)
- Hover: #e0e0e0 border (neutral/border/medium)
- Focus: #1c1c1c border (neutral/border/active)
- Error: #cc2269 border (negative/border/default)
- Success: No border (transparent)

#### Input Features

- **Floating Labels**: Labels appear above the input value
- **Clean Design**: Minimal, modern aesthetic matching Figma
- **State Management**: Comprehensive error and success states
- **Currency Support**: Built-in suffix support for currency values
- **Dark Mode**: Full dark mode support
- **Accessibility**: Proper focus states and semantic HTML
- **Helper Text**: Support for error and success messages with icons

#### Usage Guidelines

- Use floating labels for all inputs
- Always provide clear, descriptive labels
- Use error states with helpful error messages
- Use success states sparingly for important validations
- Include currency suffix for monetary inputs
- Ensure proper focus states for accessibility
- Use helper text to guide users and provide feedback
- Disable inputs when actions are not available

**Input Demo:** See `design-system/input-demo.html` for all input variants and interactive examples.

### Card Components

Selectable cards with badges, content, and comprehensive state management for user interaction. Designed for selection interfaces like account setup, product choices, or option selection.

#### Basic Card Structure

```html
<!-- Basic Selectable Card -->
<div class="card-selectable">
    <div class="card-badge">ISK</div>
    <div class="card-content">
        <div class="card-selectable-title">Title_Label</div>
        <div class="card-selectable-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit praesent scelerisque.
        </div>
    </div>
    <div class="card-radio">
        <svg class="card-radio-check" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 6L5 9L10 3" stroke="white" stroke-width="2" 
                  stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </div>
</div>
```

#### Card States

**Default State**
```html
<div class="card-selectable">
    <!-- Card content -->
</div>
```

**Selected State**
```html
<div class="card-selectable card-selected">
    <!-- Card content with blue border and checkmark -->
</div>
```

**Error State**
```html
<div class="card-selectable card-error">
    <!-- Card content with red border -->
</div>
```

**Disabled States**
```html
<!-- Unselected Disabled -->
<div class="card-selectable card-disabled">
    <!-- Card content greyed out, not interactive -->
</div>

<!-- Selected Disabled -->
<div class="card-selectable card-selected card-disabled">
    <!-- Card content greyed out with checkmark, not interactive -->
</div>
```

**Focus State**
```html
<div class="card-selectable card-focus" tabindex="0">
    <!-- Card content with focus outline ring -->
</div>
```

#### Card Classes

**Container Classes:**
- `.card-selectable` - Base card class with flexbox layout
- `.card-badge` - Circular badge/avatar on the left (48px)
- `.card-content` - Content container for title and description
- `.card-radio` - Radio button indicator on the right (24px)
- `.card-radio-check` - Checkmark SVG (hidden by default)

**State Modifiers:**
- `.card-selected` - Selected state with blue border and filled radio
- `.card-focus` - Focus state with outline ring
- `.card-error` - Error state with red border
- `.card-disabled` - Disabled state (greyed out, not interactive)

**Text Classes:**
- `.card-selectable-title` - Card title (16px, bold)
- `.card-selectable-description` - Card description (12px, regular, weak color)

#### Design Specifications

**Dimensions:**
- Width: 100% (max-width: 424px)
- Padding: 16px
- Border Radius: 8px
- Gap between elements: 12px
- Border: 1px solid

**Badge:**
- Size: 48px × 48px
- Border Radius: 50% (circular)
- Background: #333333 (neutral/background/badge)
- Text: 12px, ExtraBold, white, uppercase

**Radio Button:**
- Size: 24px × 24px
- Border: 2px solid
- Border Radius: 50% (circular)
- Checkmark: 12px × 12px white SVG

**Typography:**
- Title: 16px / 24px (Primary, Bold)
- Description: 12px / 16px (Tertiary, Regular, Weak color)

**Colors:**

*Default State:*
- Border: #bdbdbd (neutral/border/default)
- Background: #ffffff (neutral/background/default)

*Hover State:*
- Border: #6e6e6e (neutral/border/hover)
- Shadow: Medium elevation

*Focus State:*
- Border: #bdbdbd (neutral/border/default)
- Outline: 2px solid #bdbdbd, 2px offset

*Selected State:*
- Border: #336bff (action/border/default)
- Radio Background: #336bff (action/background/default)
- Radio Border: #336bff (action/border/default)
- Checkmark: White, visible

*Selected Hover:*
- Border: #2650bf (action/border/hover)
- Radio Background: #2650bf (action/background/hover)

*Selected Focus:*
- Border: #336bff (action/border/default)
- Outline: 2px solid #d6e1ff (action/border/focus), 2px offset

*Error State:*
- Border: #cc2269 (negative/border/default)
- Radio Border: #cc2269 (negative/border/default)

*Disabled State:*
- Border: #eeeeee (neutral/border/disabled)
- Badge Background: #eeeeee (neutral/background/disabled)
- Badge Text: #9e9e9e (neutral/text/disabled)
- Title: #9e9e9e (neutral/text/disabled)
- Description: #9e9e9e (neutral/text/disabled)
- Radio Border: #eeeeee (neutral/border/disabled)
- Radio Background: #eeeeee (neutral/background/disabled)

#### Card Features

- **Badge Display**: Circular badge for icons, logos, or currency codes
- **Flexible Content**: Title and description with proper text hierarchy
- **Radio Selection**: Visual radio button with animated checkmark
- **Multiple States**: Default, hover, focus, selected, error, and disabled states
- **Keyboard Navigation**: Proper focus states for accessibility
- **Dark Mode**: Full dark mode support
- **Responsive**: Flexible width with max-width constraint
- **Smooth Transitions**: All state changes are animated

#### Usage Guidelines

- Use for selection interfaces where users choose between options
- Include a badge/icon to make cards visually distinctive
- Keep titles concise and descriptions informative
- Use selected state to show current selection
- Use error state to indicate validation issues
- Disable cards that are temporarily unavailable
- Ensure keyboard navigation works with focus states
- Group related cards together in forms or wizards

**Card Demo:** See `design-system/components-demo.html` for all card variants and interactive examples.

### Dropdown Components

Dropdown components with floating labels, following the same in-label pattern as input fields. Sourced directly from Figma with comprehensive state management and support for both single and multi-select modes.

#### Basic Dropdown Structure

```html
<!-- Basic Single-Select Dropdown -->
<div class="dropdown-container">
    <div class="dropdown-wrapper" id="dropdown1">
        <div class="dropdown-field">
            <span class="dropdown-field-label">Country</span>
            <div class="dropdown-field-value"></div>
            <div class="dropdown-arrow">
                <svg viewBox="0 0 16 16" fill="none">
                    <path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
        <div class="dropdown-menu">
            <div class="dropdown-menu-item" data-value="sweden">
                <span>Sweden</span>
                <div class="dropdown-radio">
                    <div class="dropdown-radio-check"></div>
                </div>
            </div>
            <div class="dropdown-menu-item" data-value="norway">
                <span>Norway</span>
                <div class="dropdown-radio">
                    <div class="dropdown-radio-check"></div>
                </div>
            </div>
        </div>
    </div>
</div>
```

#### Multi-Select Dropdown

```html
<!-- Multi-Select Dropdown with Checkboxes -->
<div class="dropdown-container">
    <div class="dropdown-wrapper has-value" id="dropdown2">
        <div class="dropdown-field">
            <span class="dropdown-field-label">Languages</span>
            <div class="dropdown-field-value">Swedish, English</div>
            <div class="dropdown-arrow">
                <svg viewBox="0 0 16 16" fill="none">
                    <path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
        <div class="dropdown-menu">
            <div class="dropdown-menu-item dropdown-item-selected" data-value="swedish">
                <span>Swedish</span>
                <div class="dropdown-checkbox">
                    <svg class="dropdown-checkbox-check" width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6L5 9L10 3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="dropdown-menu-item dropdown-item-selected" data-value="english">
                <span>English</span>
                <div class="dropdown-checkbox">
                    <svg class="dropdown-checkbox-check" width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6L5 9L10 3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
        </div>
    </div>
</div>
```

#### Dropdown States

**Empty State (Label Centered)**
```html
<div class="dropdown-container">
    <div class="dropdown-wrapper">
        <div class="dropdown-field">
            <span class="dropdown-field-label">Select an option</span>
            <div class="dropdown-field-value"></div>
            <div class="dropdown-arrow">
                <!-- Arrow SVG -->
            </div>
        </div>
        <div class="dropdown-menu">
            <!-- Menu items -->
        </div>
    </div>
</div>
```

**Selected State (Label Floats Up)**
```html
<div class="dropdown-container">
    <div class="dropdown-wrapper has-value">
        <div class="dropdown-field">
            <span class="dropdown-field-label">Country</span>
            <div class="dropdown-field-value">Sweden</div>
            <!-- Arrow -->
        </div>
        <!-- Menu -->
    </div>
</div>
```

**Error State**
```html
<div class="dropdown-container">
    <div class="dropdown-wrapper has-value dropdown-error">
        <div class="dropdown-field">
            <span class="dropdown-field-label">Country</span>
            <div class="dropdown-field-value">Invalid option</div>
            <!-- Arrow -->
        </div>
        <!-- Menu -->
    </div>
    <div class="dropdown-helper dropdown-helper-error">
        <svg class="dropdown-helper-icon" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="8" r="7" stroke="#cc2269" stroke-width="1.5" fill="none"/>
            <path d="M8 4v4.5" stroke="#cc2269" stroke-width="1.5" stroke-linecap="round"/>
            <circle cx="8" cy="11" r="0.5" fill="#cc2269"/>
        </svg>
        <span class="dropdown-helper-text">Please select a valid option</span>
    </div>
</div>
```

**Success State**
```html
<div class="dropdown-container">
    <div class="dropdown-wrapper has-value dropdown-success">
        <div class="dropdown-field">
            <span class="dropdown-field-label">Country</span>
            <div class="dropdown-field-value">Sweden</div>
            <!-- Arrow -->
        </div>
        <!-- Menu -->
    </div>
    <div class="dropdown-helper dropdown-helper-success">
        <svg class="dropdown-helper-icon" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="8" r="7" stroke="#41a21a" stroke-width="1.5" fill="none"/>
            <path d="M5 8l2 2 4-4" stroke="#41a21a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span class="dropdown-helper-text">Valid selection</span>
    </div>
</div>
```

**Disabled State**
```html
<div class="dropdown-container">
    <div class="dropdown-wrapper has-value dropdown-disabled">
        <div class="dropdown-field">
            <span class="dropdown-field-label">Country</span>
            <div class="dropdown-field-value">Sweden</div>
            <!-- Arrow -->
        </div>
    </div>
</div>
```

**Open State**
```html
<div class="dropdown-container">
    <div class="dropdown-wrapper has-value dropdown-open">
        <div class="dropdown-field">
            <span class="dropdown-field-label">Country</span>
            <div class="dropdown-field-value">Sweden</div>
            <!-- Arrow (rotated) -->
        </div>
        <div class="dropdown-menu dropdown-menu-open">
            <!-- Menu items visible -->
        </div>
    </div>
</div>
```

#### Dropdown Classes

**Container Classes:**
- `.dropdown-container` - Outer container for the dropdown system
- `.dropdown-wrapper` - Main dropdown wrapper with background and border
- `.dropdown-field` - Inner field container
- `.dropdown-menu` - Dropdown menu overlay

**State Modifiers:**
- `.has-value` - Applied when an option is selected (floats label up)
- `.dropdown-open` - Applied when dropdown menu is open (rotates arrow)
- `.dropdown-error` - Error state with red border
- `.dropdown-success` - Success state
- `.dropdown-disabled` - Disabled state (greyed out, not interactive)

**Text & Display Classes:**
- `.dropdown-field-label` - Floating label text (12px when active, 14px when centered)
- `.dropdown-field-value` - Selected value display (14px, secondary)
- `.dropdown-arrow` - Arrow icon container (rotates on open)

**Menu Classes:**
- `.dropdown-menu-open` - Applied to menu to make it visible
- `.dropdown-menu-item` - Individual menu item
- `.dropdown-item-selected` - Selected menu item
- `.dropdown-radio` - Radio button for single-select
- `.dropdown-radio-check` - Radio button checkmark (visible when selected)
- `.dropdown-checkbox` - Checkbox for multi-select
- `.dropdown-checkbox-check` - Checkbox checkmark (visible when selected)

**Helper Classes:**
- `.dropdown-helper` - Helper text container
- `.dropdown-helper-error` - Error helper variant
- `.dropdown-helper-success` - Success helper variant
- `.dropdown-helper-icon` - Icon in helper text (16x16px)
- `.dropdown-helper-text` - Helper text content

#### Design Specifications

**Dimensions:**
- Height: 56px (same as input fields)
- Border Radius: 8px
- Padding: 10px 12px
- Gap: 4px (between wrapper and helper text)

**Typography:**
- Label (centered): 14px / 20px (Secondary, Regular)
- Label (floating): 12px / 16px (Tertiary, Regular)
- Selected Value: 14px / 20px (Secondary, Regular)
- Menu Items: 14px / 20px (Secondary, Regular)
- Helper Text: 12px / 16px (Tertiary, Regular)

**Colors:**
- Background: #f5f5f5 (neutral/background/medium)
- Label: #6e6e6e (neutral/text/weak)
- Value Text: #1c1c1c (neutral/text/default)
- Selected Item: #336bff (action/text/default)
- Error Border: #cc2269 (negative/border/default)
- Error Text: #cc2269 (negative/text/default)
- Success Icon: #41a21a (positive/icon/default)
- Disabled Background: #eeeeee (neutral/background/disabled)
- Disabled Text: #9e9e9e (neutral/text/disabled)

**Menu:**
- Background: #ffffff (neutral/background/default)
- Border: #e0e0e0 (neutral/border/medium)
- Shadow: High elevation (8px blur + 24px halo)
- Max Height: 280px (scrollable)
- Padding: 8px
- Item Padding: 12px
- Item Border Radius: 4px
- Item Hover: #f5f5f5 (neutral/background/medium)

**Radio/Checkbox:**
- Size: 20px × 20px
- Border: 2px solid #bdbdbd (neutral/border/default)
- Selected Border: #336bff (action/border/default)
- Selected Background: #336bff (action/background/default)
- Check Color: White
- Radio Check Size: 8px (inner circle)
- Checkbox Check Size: 12px (checkmark SVG)

**Interaction States:**
- Default: No border (transparent)
- Hover: #e0e0e0 border (neutral/border/medium)
- Open: #bdbdbd border (neutral/border/default)
- Error: #cc2269 border (negative/border/default)
- Success: No border (transparent)

#### Dropdown Features

- **Floating Labels**: Labels float up when an option is selected (same as input fields)
- **Single Select**: Radio buttons for single selection
- **Multi-Select**: Checkboxes for multiple selections
- **Clean Design**: Minimal, modern aesthetic matching input fields
- **State Management**: Comprehensive error, success, and disabled states
- **Dark Mode**: Full dark mode support
- **Accessibility**: Proper keyboard navigation and focus states
- **Helper Text**: Support for error and success messages with icons
- **Smooth Animations**: Arrow rotation and label float animations
- **Scrollable Menu**: Supports long lists with max-height and scroll

#### JavaScript Integration

```javascript
// Basic dropdown functionality
document.querySelectorAll('.dropdown-wrapper').forEach(dropdown => {
    const menu = dropdown.querySelector('.dropdown-menu');
    const valueDisplay = dropdown.querySelector('.dropdown-field-value');
    const items = dropdown.querySelectorAll('.dropdown-menu-item');
    
    // Toggle dropdown
    dropdown.addEventListener('click', (e) => {
        if (dropdown.classList.contains('dropdown-disabled')) return;
        
        // Close other dropdowns
        document.querySelectorAll('.dropdown-wrapper').forEach(d => {
            if (d !== dropdown) {
                d.classList.remove('dropdown-open');
                d.querySelector('.dropdown-menu').classList.remove('dropdown-menu-open');
            }
        });
        
        // Toggle current
        dropdown.classList.toggle('dropdown-open');
        menu.classList.toggle('dropdown-menu-open');
        e.stopPropagation();
    });
    
    // Handle item selection
    items.forEach(item => {
        item.addEventListener('click', (e) => {
            e.stopPropagation();
            
            const isMultiSelect = item.querySelector('.dropdown-checkbox') !== null;
            
            if (isMultiSelect) {
                // Multi-select: toggle selection
                item.classList.toggle('dropdown-item-selected');
                
                const selectedItems = Array.from(dropdown.querySelectorAll('.dropdown-menu-item.dropdown-item-selected'))
                    .map(i => i.querySelector('span').textContent);
                
                valueDisplay.textContent = selectedItems.join(', ');
                dropdown.classList.toggle('has-value', selectedItems.length > 0);
            } else {
                // Single-select: clear others and select this
                items.forEach(i => i.classList.remove('dropdown-item-selected'));
                item.classList.add('dropdown-item-selected');
                
                valueDisplay.textContent = item.querySelector('span').textContent;
                dropdown.classList.add('has-value');
                
                // Close menu
                dropdown.classList.remove('dropdown-open');
                menu.classList.remove('dropdown-menu-open');
            }
        });
    });
});

// Close on outside click
document.addEventListener('click', () => {
    document.querySelectorAll('.dropdown-wrapper').forEach(d => {
        d.classList.remove('dropdown-open');
        d.querySelector('.dropdown-menu').classList.remove('dropdown-menu-open');
    });
});
```

#### Usage Guidelines

- Use floating labels for all dropdowns (consistent with input fields)
- Always provide clear, descriptive labels
- Use radio buttons for single-select dropdowns
- Use checkboxes for multi-select dropdowns
- Use error states with helpful error messages
- Use success states sparingly for important validations
- Ensure proper focus states for accessibility
- Use helper text to guide users and provide feedback
- Disable dropdowns when actions are not available
- Close dropdown menu after single-select item click
- Keep multi-select menu open until user clicks outside

**Dropdown Demo:** See `design-system/components-demo.html` (Dropdowns section) for all dropdown variants and interactive examples.

## 🌙 Dark Mode Support

The design system includes comprehensive dark mode support. Enable dark mode by adding `data-theme="dark"` to the `<body>` element.

### Enabling Dark Mode

```html
<body data-theme="dark">
    <!-- Your content -->
</body>
```

### Dark Mode Features

- **Automatic Color Switching**: All components automatically adapt to dark mode
- **Consistent Contrast**: Maintains accessibility standards in both modes
- **Component Support**: All components (buttons, cards, progress bars, typography) support dark mode
- **Easy Toggle**: Simple JavaScript implementation for theme switching

### Dark Mode Colors

```css
/* Dark Mode Color Variables */
--dark-bg-default: #1c1c1c;      /* Dark background */
--dark-bg-neutral: #2a2a2a;      /* Dark neutral background */
--dark-text-default: #ffffff;    /* Light text */
--dark-text-weak: #b3b3b3;       /* Muted text */
--dark-progress-bg: #404040;     /* Dark progress background */
--dark-progress-fill: #ffffff;   /* Light progress fill */
```

### Theme Toggle Implementation

```javascript
// Simple theme toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        body.removeAttribute('data-theme');
    } else {
        body.setAttribute('data-theme', 'dark');
    }
});
```

## 📱 Tailwind Integration

The design system includes Tailwind-compatible font sizes:

```html
<!-- Using Tailwind classes -->
<h1 class="text-h1 font-extrabold">Headline</h1>
<h2 class="text-h2 font-extrabold">Subheading</h2>
<p class="text-primary font-regular">Body text</p>
<p class="text-secondary font-bold text-weak">Secondary text</p>

<!-- Combining with Tailwind utilities -->
<div class="text-subtitle1 font-bold text-neutral-text mb-4">
    Section Title
</div>
```

## 🎭 Complete Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Design System Example</title>
    <link rel="stylesheet" href="../src/styles.css">
    <link rel="stylesheet" href="design-system.css">
</head>
<body>
    <!-- Page Header -->
    <header>
        <h1 class="typography-h1">Welcome to Nordnet</h1>
        <p class="typography-secondary text-weak">
            Start investing today
        </p>
    </header>

    <!-- Content Section -->
    <section>
        <h2 class="typography-h2">Choose Your Account</h2>
        
        <div class="card shadow-high bg-default">
            <h3 class="card-title">Depot Account</h3>
            <p class="card-description">
                Buy and manage stocks, ETFs, and other investments.
            </p>
        </div>

        <button class="button-text bg-neutral-text text-white">
            Continue
        </button>
    </section>
</body>
</html>
```

## 📊 Typography Hierarchy

```
H1 (40px/48px)     ← Main page title
  └─ H2 (32px/40px)    ← Section titles
      └─ H3 (28px/32px)    ← Subsections
          └─ Subtitle 1 (24px/28px)  ← Large emphasis
              └─ Subtitle 2 (20px/24px)  ← Medium emphasis
                  └─ Primary (16px/24px)  ← Main body text
                      └─ Secondary (14px/20px)  ← Supporting text
                          └─ Tertiary (12px/16px)  ← Small text/captions
                              └─ Graph (10px/14px)  ← Minimal text/labels
```

## 🚀 Best Practices

1. **Use semantic HTML**: Prefer `<h1>`, `<h2>`, etc. with typography classes
2. **Consistent hierarchy**: Follow the typography scale for visual hierarchy
3. **Color contrast**: Use `text-weak` for secondary information
4. **Weight variation**: Use different weights for emphasis within the same size
5. **Mobile responsive**: The system includes mobile-optimized sizes
6. **Accessibility**: All text meets WCAG AA contrast requirements

## 🔧 Customization

To customize the design system, modify the CSS variables in `:root`:

```css
:root {
    --font-size-h1: 48px;  /* Increase heading size */
    --color-text-default: #000000;  /* Pure black text */
}
```

## 📝 Notes

- All fonts are self-hosted in the `Asset/nordnet-sans-mono/` directory
- Works offline and on IP servers without internet
- Compatible with Tailwind CSS
- Mobile-responsive with adjusted sizes on small screens
- Font weights: Regular (400), Bold (700), ExtraBold (800)

---

## Appendix A — Quick Reference

### Common Classes

```html
<!-- Headlines -->
<h1 class="typography-h1">Main Title</h1>          <!-- 40px/48px, ExtraBold -->
<h2 class="typography-h2">Section Title</h2>        <!-- 32px/40px, ExtraBold -->
<h3 class="typography-h3">Subsection</h3>           <!-- 28px/32px, ExtraBold -->

<!-- Body Text -->
<p class="typography-primary">Main text</p>         <!-- 16px/24px, Regular -->
<p class="typography-secondary">Secondary</p>       <!-- 14px/20px, Regular -->
<p class="typography-tertiary">Small text</p>       <!-- 12px/16px, Regular -->

<!-- Emphasis -->
<span class="typography-primary-bold">Bold</span>   <!-- 16px, Bold 700 -->
<span class="typography-primary-extrabold">Strong</span> <!-- 16px, ExtraBold 800 -->

<!-- Color -->
<p class="text-default">Primary color</p>           <!-- #1c1c1c -->
<p class="text-weak">Secondary color</p>            <!-- #6e6e6e -->
```

### Size Scale

| Class Base | Size | Line Height | Weight Options |
|-----------|------|-------------|----------------|
| `typography-h1` | 40px | 48px | ExtraBold (800) |
| `typography-h2` | 32px | 40px | ExtraBold, Bold |
| `typography-h3` | 28px | 32px | ExtraBold, Bold |
| `typography-subtitle1` | 24px | 28px | ExtraBold, Bold |
| `typography-subtitle2` | 20px | 24px | ExtraBold, Bold |
| `typography-primary` | 16px | 24px | Regular, Bold, ExtraBold |
| `typography-secondary` | 14px | 20px | Regular, Bold, ExtraBold |
| `typography-tertiary` | 12px | 16px | Regular, Bold, ExtraBold |
| `typography-graph` | 10px | 14px | Regular, Bold, ExtraBold |

### Variants

Add `-bold` or `-extrabold` suffix to classes with multiple weights:

```html
<!-- H2 variants -->
<h2 class="typography-h2">ExtraBold (default)</h2>
<h2 class="typography-h2-bold">Bold</h2>

<!-- Body text variants -->
<p class="typography-primary">Regular (default)</p>
<p class="typography-primary-bold">Bold</p>
<p class="typography-primary-extrabold">ExtraBold</p>
```

### Component Styles

```html
<!-- Card -->
<h3 class="card-title">Card Title</h3>               <!-- 14px/20px, Bold -->
<p class="card-description">Description</p>          <!-- 12px/16px, Regular, Weak -->

<!-- Button -->
<button class="button-text">Button</button>         <!-- 16px/24px, Bold -->

<!-- Label -->
<label class="label-text">LABEL</label>             <!-- 12px/16px, Bold, Weak -->
```

### CSS Variables Quick Lookup

```css
/* Font Sizes */
var(--font-size-h1)          /* 40px */
var(--font-size-primary)     /* 16px */
var(--font-size-tertiary)    /* 12px */

/* Line Heights */
var(--line-height-h1)        /* 48px */
var(--line-height-primary)   /* 24px */

/* Font Weights */
var(--font-weight-regular)   /* 400 */
var(--font-weight-bold)      /* 700 */
var(--font-weight-extrabold) /* 800 */

/* Colors */
var(--color-text-default)    /* #1c1c1c */
var(--color-text-weak)       /* #6e6e6e */

/* Shadows */
var(--shadow-low)            /* Subtle elevation */
var(--shadow-medium)         /* Default elevation */
var(--shadow-high)           /* Strong elevation */
```

### Common Patterns

#### Page Header
```html
<h1 class="typography-h1">Page Title</h1>
<p class="typography-secondary text-weak">Subtitle or description</p>
```

#### Section
```html
<h2 class="typography-h2">Section Title</h2>
<p class="typography-primary">Main content goes here.</p>
```

#### Card
```html
<div class="card">
  <h3 class="card-title">Card Title</h3>
  <p class="card-description">Card description text</p>
</div>
```

#### Emphasis in Text
```html
<p class="typography-primary">
  This is normal text with <span class="typography-primary-bold">bold emphasis</span> 
  and <span class="typography-primary-extrabold">extra bold emphasis</span>.
</p>
```

### Shadow Elevation

```html
<!-- Low - Subtle depth -->
<div class="shadow-low">Resting card</div>

<!-- Medium - Default cards -->
<div class="shadow-medium">Standard card</div>

<!-- High - Elevated UI -->
<div class="shadow-high">Modal or dropdown</div>
```

#### Shadow Specs
- **Low**: 2px border + 24px halo (8%, 4% opacity)
- **Medium**: 2px border + 24px halo (12%, 6% opacity)
- **High**: 8px border + 24px halo (12%, 8% opacity)

### Quick Tips

1. **Default weight**: Most classes default to their most common weight
2. **Line heights**: Automatically set for optimal readability
3. **Color utility**: Use `text-weak` for secondary/metadata text
4. **Responsive**: Sizes adjust automatically on mobile
5. **Offline-ready**: All fonts are self-hosted

---

## Appendix B — Shadow System Details

### Shadow Specifications

#### Low Elevation
```css
box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.08), 0px 0px 24px 0px rgba(0,0,0,0.04);
```

**Composition:**
- Border: 2px blur, Black 8% opacity
- Halo: 24px blur, Black 4% opacity

**Usage:**
- Resting cards
- Subtle depth
- Non-interactive elements

**Class:** `.shadow-low`

#### Medium Elevation
```css
box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.12), 0px 0px 24px 0px rgba(0,0,0,0.06);
```

**Composition:**
- Border: 2px blur, Black 12% opacity
- Halo: 24px blur, Black 6% opacity

**Usage:**
- Standard cards
- Interactive elements
- Default elevation

**Class:** `.shadow-medium`

#### High Elevation
```css
box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.12), 0px 0px 24px 0px rgba(0,0,0,0.08);
```

**Composition:**
- Border: 8px blur, Black 12% opacity
- Halo: 24px blur, Black 8% opacity

**Usage:**
- Modals
- Dropdowns
- Floating UI elements
- Elevated states

**Class:** `.shadow-high`

### Design Principles

#### Two-Layer System
Each shadow uses two layers for realistic depth:

1. **Border Shadow** (Small blur): Creates a crisp edge
2. **Halo Shadow** (Large blur): Creates ambient depth

This mimics real-world lighting and creates more natural shadows than single-layer alternatives.

#### Progressive Elevation
Shadows increase in:
- **Opacity**: More opacity = closer to viewer
- **Blur**: Larger blur on border = higher elevation
- **Contrast**: Border and halo opacity increase together

### Common Patterns

#### Card with Hover Effect
```html
<div class="shadow-low hover:shadow-high transition-shadow duration-300">
    Hover to elevate
</div>
```

#### Modal Overlay
```html
<div class="shadow-high bg-white rounded-xl p-6">
    Modal content
</div>
```

#### Nested Elevation
```html
<div class="shadow-medium bg-white p-6">
    <div class="shadow-low bg-neutral-100 p-4">
        Nested element
    </div>
</div>
```

### Technical Details

#### Color Values
- Base color: Black (#000000)
- Opacity levels: 4%, 6%, 8%, 12%

#### Blur Values
- Border shadows: 2px or 8px
- Halo shadows: 24px (consistent)

#### Spread
- All shadows: 0px spread (natural falloff)

#### Offset
- X: 0px (centered)
- Y: 0px (no directional bias)

---

## Appendix C — Implementation Status

### Current Status

| File | Design System CSS | Font Loading | Typography Applied |
|------|------------------|--------------|-------------------|
| `src/index.html` | ✅ Included | ✅ Nordnet Sans Mono | ✅ Via Tailwind + Body default |
| `src/account-alias.html` | ✅ Included | ✅ Nordnet Sans Mono | ✅ Via Tailwind + Body default |
| `design-system/typography-demo.html` | ✅ Included | ✅ Nordnet Sans Mono | ✅ Full typography classes |

### How Typography is Applied

Both pages use the design system in **two ways**:

#### 1. Automatic Font Loading (Body Default)
```css
/* From design-system.css */
body {
    font-family: 'Nordnet Sans Mono', -apple-system, BlinkMacSystemFont, sans-serif;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
}
```
✅ This applies automatically to all text in both pages.

#### 2. Tailwind Custom Sizes
Both pages use Tailwind classes with custom font sizes from the design system:
```html
<h1 class="font-extrabold text-2xl">
<!-- text-2xl = 24px, which maps to our subtitle1 size -->
```

### Current Typography Usage

#### `src/index.html`
```html
Line 110-111: <h1 class="font-extrabold text-2xl leading-7">
              Choose your starting accounts
              
Line 113:     <p class="font-regular text-sm leading-5 text-neutral-text-weak">
              Set up your main accounts now...
              
Line 129-130: <h3 class="font-bold text-sm leading-5">
              Depot account
              
Line 132:     <p class="font-regular text-xs leading-4 text-neutral-text-weak">
              Buy and manage stocks...
```

#### `src/account-alias.html`
```html
Line 94-96:   <h1 class="font-extrabold text-2xl leading-7">
              Name your accounts
              
Line 97-99:   <p class="font-regular text-sm leading-5 text-neutral-text-weak">
              Add more personalised names...
              
Line 113-114: <label class="font-regular text-xs leading-4 text-neutral-text-weak">
              Account name
```

### Two Approaches to Using the Design System

You can use either approach - both are valid:

#### Approach 1: Tailwind Utility Classes (Current)
```html
<h1 class="font-extrabold text-2xl leading-7 text-neutral-text">
    Choose your starting accounts
</h1>
<p class="font-regular text-sm leading-5 text-neutral-text-weak">
    Set up your main accounts now.
</p>
```
✅ Pros: Flexible, uses existing Tailwind workflow
✅ Works with Tailwind's responsive utilities
✅ Currently used in both files

#### Approach 2: Typography Classes (Alternative)
```html
<h1 class="typography-subtitle1">
    Choose your starting accounts
</h1>
<p class="typography-secondary text-weak">
    Set up your main accounts now.
</p>
```
✅ Pros: Semantic, self-documenting, easier to maintain
✅ Matches design system documentation
✅ Used in `typography-demo.html`

### Typography Mapping

Current Tailwind classes map to design system sizes:

| Current HTML | Tailwind Size | Design System Equivalent | Actual Size |
|--------------|---------------|-------------------------|-------------|
| `text-2xl` | 24px | `typography-subtitle1` | 24px/28px |
| `text-sm` | 14px | `typography-secondary` | 14px/20px |
| `text-xs` | 12px | `typography-tertiary` | 12px/16px |
| `text-base` | 16px | `typography-primary` | 16px/24px |

### What's Working

1. **✅ Font Family**: Nordnet Sans Mono loads on all pages
2. **✅ Font Weights**: Regular (400), Bold (700), ExtraBold (800) available
3. **✅ Offline Ready**: Works without internet (no Google Fonts)
4. **✅ IP Server Ready**: All assets are local
5. **✅ Consistent Sizing**: Both pages use similar font sizes
6. **✅ Color System**: Using design tokens (`neutral-text`, `neutral-text-weak`)

### Current vs Recommended

#### Current Implementation (Both Pages)
```html
<h1 class="font-extrabold text-2xl leading-7 text-neutral-text mb-3">
    Choose your starting accounts
</h1>
```

#### Alternative with Typography Classes
```html
<h1 class="typography-subtitle1 mb-3">
    Choose your starting accounts
</h1>
```

#### Mixed Approach (Best of Both)
```html
<h1 class="typography-subtitle1 mb-3 hover:text-blue-500">
    Choose your starting accounts
</h1>
<!-- Typography class for base styling, Tailwind for utilities -->
```

### Recommendations

#### Option A: Keep Current Approach ✅
- Both pages already work correctly
- Font is loading properly
- Sizes are consistent
- **Action Required**: None - it works!

#### Option B: Switch to Typography Classes
- More semantic and maintainable
- Better matches documentation
- **Action Required**: Replace Tailwind font classes with typography classes

#### Option C: Mixed Approach (Recommended)
- Use typography classes for base text styles
- Keep Tailwind for layout, spacing, colors
- Example:
  ```html
  <h1 class="typography-h2 mb-4 text-center">Title</h1>
  <p class="typography-primary text-weak mt-2">Description</p>
  ```

### Font Loading Verification

To verify fonts are loading correctly:

1. **Open Developer Tools** (F12)
2. **Go to Network tab**
3. **Filter by "Font"**
4. **Refresh page**
5. **Look for**: `nordnet-sans-mono-*.woff2` files

Expected files:
- ✅ `nordnet-sans-mono-regular.woff2`
- ✅ `nordnet-sans-mono-bold.woff2`
- ✅ `nordnet-sans-mono-extrabold.woff2`

### Design System Files

All files properly linked:

```html
<!-- In both index.html and account-alias.html -->
<link rel="stylesheet" href="styles.css">        <!-- Font @font-face -->
<link rel="stylesheet" href="../design-system/design-system.css"> <!-- Typography system -->
```

### Conclusion

**Status**: ✅ **FULLY APPLIED**

Both `src/index.html` and `src/account-alias.html` are successfully using the Nordnet Design System:
- ✅ Custom font (Nordnet Sans Mono) is loading
- ✅ Font weights are properly configured
- ✅ Typography sizes match the design system
- ✅ Works offline and on IP servers
- ✅ No external font dependencies

The current implementation uses **Tailwind utility classes**, which is a valid approach. The design system provides **typography classes** as an alternative, but both methods work correctly.

---

## 📚 Resources

- **Typography Demo**: `design-system/typography-demo.html`
- **Shadow Demo**: `design-system/shadow-demo.html`
- **Badge Demo**: `design-system/badge-demo.html`
- **Button Demo**: `design-system/button-demo.html`
- **Font Files**: `Asset/nordnet-sans-mono/`
- **Main App**: `src/index.html`

---

**Version**: 1.0  
**Last Updated**: October 2025  
**Font Family**: Nordnet Sans Mono  
**Source**: Figma Design System
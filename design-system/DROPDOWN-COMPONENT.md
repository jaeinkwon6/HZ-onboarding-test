# Dropdown Component

✅ **Created from Figma Design** - Complete dropdown component following the design system rules and in-label pattern.

## Overview

The dropdown component follows the same **in-label pattern** as the input field component:
- Label starts centered vertically
- Label floats up and becomes smaller when an item is selected
- Uses the `has-value` class to manage the floating state

## Files Created/Updated

### 1. CSS Component (`design-system/design-system.css`)
- ✅ Added section 13: "DROPDOWN COMPONENTS (FROM FIGMA)"
- ✅ Complete dropdown styling with floating labels
- ✅ Single-select (radio buttons) and multi-select (checkboxes)
- ✅ Error, success, disabled, and open states
- ✅ Dark mode support
- ✅ Helper text support with icons

### 2. Components Demo Page (`design-system/components-demo.html`)
- ✅ Integrated into main components showcase
- ✅ Navigation item in sidebar under "Components"
- ✅ Interactive demo with all dropdown states
- ✅ Basic states (empty, selected, disabled)
- ✅ Error and success states with helper text
- ✅ Multi-select dropdown with checkboxes
- ✅ Interactive examples with working JavaScript
- ✅ Code examples for each variant

### 3. Documentation (`design-system/DESIGN-SYSTEM.md`)
- ✅ Complete dropdown component section
- ✅ Usage guidelines
- ✅ Design specifications
- ✅ JavaScript integration examples
- ✅ All state examples (empty, selected, error, success, disabled, open)

### 4. Updated README (`README.md`)
- ✅ Added dropdown component to pages list
- ✅ Added dropdown to components section
- ✅ Updated file structure

## Key Features

### In-Label Pattern
- Label centered when empty
- Label floats up when `has-value` class is added
- Same behavior as input fields
- Smooth transitions

### States
- ✅ Empty (label centered)
- ✅ Selected (label floated)
- ✅ Open (menu visible, arrow rotated)
- ✅ Error (red border, error icon, helper text)
- ✅ Success (helper text with checkmark)
- ✅ Disabled (greyed out, not clickable)

### Selection Modes
- ✅ Single-select with radio buttons
- ✅ Multi-select with checkboxes
- ✅ Selected items show in blue with filled radio/checkbox

### Design Specifications
- **Height**: 56px (same as input fields)
- **Border Radius**: 8px
- **Background**: #f5f5f5 (neutral/background/medium)
- **Label Font**: 14px centered, 12px floating
- **Value Font**: 14px / 20px (Secondary, Regular)
- **Menu Shadow**: High elevation (8px blur + 24px halo)
- **Max Height**: 280px (scrollable)

## Component Structure

```html
<div class="dropdown-container">
    <div class="dropdown-wrapper" [has-value] [dropdown-open] [dropdown-error] [dropdown-disabled]>
        <div class="dropdown-field">
            <span class="dropdown-field-label">Label</span>
            <div class="dropdown-field-value">Selected Value</div>
            <div class="dropdown-arrow">
                <!-- Arrow SVG -->
            </div>
        </div>
        <div class="dropdown-menu" [dropdown-menu-open]>
            <div class="dropdown-menu-item" [dropdown-item-selected]>
                <span>Item Text</span>
                <!-- Radio or Checkbox -->
            </div>
        </div>
    </div>
    <!-- Optional helper text -->
    <div class="dropdown-helper dropdown-helper-error">
        <!-- Error/success icon and text -->
    </div>
</div>
```

## CSS Classes

### Container & Wrapper
- `.dropdown-container` - Outer container
- `.dropdown-wrapper` - Main dropdown box
- `.dropdown-field` - Inner field container

### States
- `.has-value` - Label floated up (when selected)
- `.dropdown-open` - Menu visible, arrow rotated
- `.dropdown-error` - Error state (red border)
- `.dropdown-success` - Success state
- `.dropdown-disabled` - Disabled state

### Display Elements
- `.dropdown-field-label` - Floating label
- `.dropdown-field-value` - Selected value display
- `.dropdown-arrow` - Arrow icon (rotates on open)

### Menu
- `.dropdown-menu` - Menu overlay
- `.dropdown-menu-open` - Visible menu state
- `.dropdown-menu-item` - Menu item
- `.dropdown-item-selected` - Selected item

### Radio/Checkbox
- `.dropdown-radio` - Radio button (single-select)
- `.dropdown-radio-check` - Radio checkmark
- `.dropdown-checkbox` - Checkbox (multi-select)
- `.dropdown-checkbox-check` - Checkbox checkmark SVG

### Helper Text
- `.dropdown-helper` - Helper container
- `.dropdown-helper-error` - Error variant
- `.dropdown-helper-success` - Success variant
- `.dropdown-helper-icon` - Icon (16x16px)
- `.dropdown-helper-text` - Text content

## Usage Examples

### Basic Single-Select
```html
<div class="dropdown-container">
    <div class="dropdown-wrapper" id="myDropdown">
        <div class="dropdown-field">
            <span class="dropdown-field-label">Country</span>
            <div class="dropdown-field-value"></div>
            <div class="dropdown-arrow">
                <svg viewBox="0 0 16 16" fill="none">
                    <path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="1.5"/>
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
        </div>
    </div>
</div>
```

### Multi-Select
```html
<div class="dropdown-container">
    <div class="dropdown-wrapper" id="myMultiDropdown">
        <div class="dropdown-field">
            <span class="dropdown-field-label">Languages</span>
            <div class="dropdown-field-value"></div>
            <div class="dropdown-arrow">
                <svg viewBox="0 0 16 16" fill="none">
                    <path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="1.5"/>
                </svg>
            </div>
        </div>
        <div class="dropdown-menu">
            <div class="dropdown-menu-item" data-value="swedish">
                <span>Swedish</span>
                <div class="dropdown-checkbox">
                    <svg class="dropdown-checkbox-check" width="12" height="12" viewBox="0 0 12 12">
                        <path d="M2 6L5 9L10 3" stroke="currentColor" stroke-width="2"/>
                    </svg>
                </div>
            </div>
        </div>
    </div>
</div>
```

### With Error State
```html
<div class="dropdown-container">
    <div class="dropdown-wrapper dropdown-error has-value">
        <!-- Dropdown content -->
    </div>
    <div class="dropdown-helper dropdown-helper-error">
        <svg class="dropdown-helper-icon" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="8" r="7" stroke="#cc2269" stroke-width="1.5"/>
            <path d="M8 4v4.5" stroke="#cc2269" stroke-width="1.5"/>
            <circle cx="8" cy="11" r="0.5" fill="#cc2269"/>
        </svg>
        <span class="dropdown-helper-text">Please select a valid option</span>
    </div>
</div>
```

## JavaScript Integration

The components demo includes complete JavaScript for:
- Toggle dropdown menu on click
- Close other dropdowns when one opens
- Handle single-select item clicks (close after selection)
- Handle multi-select item clicks (keep open)
- Update value display
- Add/remove `has-value` class automatically
- Close dropdown when clicking outside

See `components-demo.html` (in the `initializePageScripts()` method) for the complete JavaScript implementation.

## Testing the Component

1. Open `design-system/components-demo.html` in your browser
2. Navigate to "Dropdowns" in the sidebar
3. Test the following:
   - ✅ Click dropdown to open/close
   - ✅ Label floats up when item selected
   - ✅ Arrow rotates when open
   - ✅ Single-select closes after selection
   - ✅ Multi-select stays open
   - ✅ Click outside to close
   - ✅ Error state shows red border
   - ✅ Helper text displays correctly

## Design System Integration

The dropdown component is fully integrated into the design system:

1. **Same pattern as inputs**: Uses identical in-label behavior
2. **Design tokens**: Uses all design system CSS variables
3. **Typography**: Uses typography scale (Secondary 14px, Tertiary 12px)
4. **Colors**: Uses design system color palette
5. **Shadows**: Uses high elevation shadow for menu
6. **Dark mode**: Full support with proper theming
7. **Accessibility**: Focus states and keyboard navigation ready

## Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

## Next Steps

To use the dropdown in your application:

1. Include `design-system/design-system.css` in your HTML
2. Copy the HTML structure from `components-demo.html` (Dropdowns section)
3. Add the JavaScript initialization code (see components-demo.html)
4. Customize items, labels, and states as needed

## Related Components

- **Input Fields**: `design-system/DESIGN-SYSTEM.md` (Input Components section)
- **Cards**: `design-system/DESIGN-SYSTEM.md` (Card Components section)
- **Buttons**: `design-system/DESIGN-SYSTEM.md` (Button Components section)

---

**Created**: October 2025  
**Source**: Figma Design System  
**Pattern**: In-label (floating label)  
**Demo**: `design-system/components-demo.html` (Dropdowns section)  
**Documentation**: `design-system/DESIGN-SYSTEM.md`


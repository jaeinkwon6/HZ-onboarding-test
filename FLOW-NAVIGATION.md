# Onboarding Flow Navigation

This document outlines the complete onboarding flow with all pages properly linked.

## Flow Structure

All pages now have a **fixed height of 812px** to match mobile device specifications.

### Complete Flow Order

1. **intro.html** → Welcome/Landing page
   - → **onboarding.html**

2. **onboarding.html** → Account type selection
   - → **index.html**

3. **index.html** → Choose starting accounts (Depot/Savings)
   - → **account-alias.html**

4. **account-alias.html** → Name your accounts
   - → **personal-details.html**

5. **personal-details.html** → Personal information form
   - → **birth-details.html**

6. **birth-details.html** → Birth date and place
   - → **contact-info.html**

7. **contact-info.html** → Contact information
   - → **address-lookup.html**

8. **address-lookup.html** ✨ *NEW* → Address search
   - → **us-tax-liability.html** (or skip option)

9. **us-tax-liability.html** ✨ *NEW* → US tax liability question
   - → **citizenship.html**

10. **citizenship.html** ✨ *NEW* → Citizenship selection
    - → **tax-id.html**

11. **tax-id.html** ✨ *NEW* → Tax ID entry
    - → **KYC-1.html** (KYC flow starts)

### KYC Flow (Additional Verification)

12. **KYC-1.html** 🆕 → Average deposit question
    - → **KYC-2.html**

13. **KYC-2.html** 🆕 → Occupation selection
    - → **KYC-3.html**

14. **KYC-3.html** 🆕 → Transfer amount
    - → **KYC-4.html**

15. **KYC-4.html** 🆕 → Initial deposit
    - → **KYC-5.html**

16. **KYC-5.html** 🆕 → Withdrawals per year
    - → **KYC-6.html**

17. **KYC-6.html** 🆕 → Purpose of account
    - → **KYC-7.html**

18. **KYC-7.html** 🆕 → Origination of deposit (multi-select with "Next" button)
    - → **KYC-8.html**

19. **KYC-8.html** 🆕 → Politically exposed person (PEP) question
    - → **KYC-9.html**

20. **KYC-9.html** 🆕 → Own fund verification
    - → **dashboard.html** (onboarding completion)

21. **dashboard.html** 🆕 → Post-onboarding dashboard
    - Overview page with account setup progress
    - Main landing page after completing KYC

## New Pages Created

All new pages follow your design system and have fixed 812px height:

### 1. address-lookup.html
- **Purpose**: German address search
- **Features**: 
  - Search input with icon
  - Disabled continue button (enables on input)
  - "I live outside of Germany" skip link
- **Progress**: Step 1 (56% on second bar)
- **Next**: us-tax-liability.html

### 2. us-tax-liability.html
- **Purpose**: US tax liability question
- **Features**:
  - Large US flag icon centered
  - Two action buttons (Yes/No)
  - Clear question and explanation
- **Progress**: Step 1 (68% on second bar)
- **Next**: citizenship.html

### 3. citizenship.html
- **Purpose**: Citizenship selection
- **Features**:
  - Selected country card with flag (Germany)
  - Remove button
  - "Add another country" option
- **Progress**: Step 2 (12% on second bar)
- **Next**: tax-id.html

### 4. tax-id.html
- **Purpose**: Tax ID entry
- **Features**:
  - Country card with tax input field
  - Optional tax ID input
  - "Add another country" option
- **Progress**: Step 2 (75% on second bar)
- **Next**: KYC-1.html

### KYC Pages (Know Your Customer)

### 5. KYC-1.html
- **Purpose**: Average deposit per year
- **Features**: 
  - 5 selection options for deposit amounts
  - Single-select interaction
  - Auto-navigation on selection
- **Progress**: Step 2 (12.5% on second bar)
- **Next**: KYC-2.html

### 6. KYC-2.html
- **Purpose**: Main occupation
- **Features**:
  - 7 occupation options
  - Single-select interaction
  - Auto-navigation on selection
- **Progress**: Step 2 (25% on second bar)
- **Next**: KYC-3.html

### 7. KYC-3.html
- **Purpose**: Transfer amount at opening
- **Features**:
  - 6 amount range options
  - Single-select interaction
  - Auto-navigation on selection
- **Progress**: Step 2 (37.5% on second bar)
- **Next**: KYC-4.html

### 8. KYC-4.html
- **Purpose**: Initial deposit amount
- **Features**:
  - 6 amount range options
  - Single-select interaction
  - Auto-navigation on selection
- **Progress**: Step 2 (50% on second bar)
- **Next**: KYC-5.html

### 9. KYC-5.html
- **Purpose**: Withdrawal frequency per year
- **Features**:
  - 4 frequency options
  - Single-select interaction
  - Auto-navigation on selection
- **Progress**: Step 2 (62.5% on second bar)
- **Next**: KYC-6.html

### 10. KYC-6.html
- **Purpose**: Purpose of account
- **Features**:
  - 7 purpose options
  - Single-select interaction
  - Auto-navigation on selection
- **Progress**: Step 2 (75% on second bar)
- **Next**: KYC-7.html

### 11. KYC-7.html
- **Purpose**: Source of funds (multi-select)
- **Features**:
  - 11 source options
  - Multi-select interaction
  - Scrollable content
  - Fixed "Next" button at bottom
  - Button enables when at least one option selected
- **Progress**: Step 2 (87.5% on second bar)
- **Next**: KYC-8.html

### 12. KYC-8.html
- **Purpose**: Politically exposed person (PEP) verification
- **Features**:
  - 2 options (Yes/No)
  - Information link about PEP
  - Single-select interaction
  - Auto-navigation on selection
- **Progress**: Step 3 (fully filled), Step 4 empty
- **Next**: KYC-9.html

### 13. KYC-9.html
- **Purpose**: Own funds verification
- **Features**:
  - 2 options (Yes/No)
  - Single-select interaction
  - Auto-navigation on selection
- **Progress**: Step 3 (partial 12.5%)
- **Next**: dashboard.html

### 14. dashboard.html
- **Purpose**: Post-onboarding dashboard (Start page)
- **Features**:
  - Get started widget with 25% progress
  - 3 setup steps (Deposit funds, Discover investments, Move savings)
  - Accounts overview section
  - Monthly savings widget
  - Shortcuts section (Deposit, Monthly savings, Withdraw, Open account)
  - Bottom tab navigation (Holdings, Watchlists, Discover, Feed, Market)
  - Search bar and menu in header
- **Type**: Main dashboard page (no progress bar)
- **Next**: End of onboarding flow


## Progress Bar System

All pages use a 4-step progress bar:
- **Step 1 (filled)**: Always shown
- **Step 2 (partial)**: Varies by page (12% to 87.5%)
- **Step 3 (empty)**: Future steps
- **Step 4 (empty)**: Future steps

## Design System Compliance

✅ All pages use:
- Nordnet Sans Mono font
- Design system CSS variables
- Tailwind CSS for utilities
- Fixed 812px height
- Consistent status bar and home indicator
- Progress bar with controls (back/close buttons)
- Proper button styles from design system

## Navigation Controls

Each page includes:
- **Back button** (left) → Goes to previous page
- **Close button** (right) → Returns to index.html
- **Continue/Action buttons** → Proceed to next step
- **Skip options** (where applicable)

## Mobile Specifications

- **Width**: 375px (max-width)
- **Height**: 812px (fixed)
- **Status bar**: 54px
- **Progress header**: 48px
- **Home indicator**: 24px
- **Content area**: Flexible (with overflow-y-auto)

## Files Updated

### New Files Created
1. `src/address-lookup.html`
2. `src/us-tax-liability.html`
3. `src/citizenship.html`
4. `src/tax-id.html`
5. `src/KYC-1.html` 🆕
6. `src/KYC-2.html` 🆕
7. `src/KYC-3.html` 🆕
8. `src/KYC-4.html` 🆕
9. `src/KYC-5.html` 🆕
10. `src/KYC-6.html` 🆕
11. `src/KYC-7.html` 🆕
12. `src/KYC-8.html` 🆕
13. `src/KYC-9.html` 🆕
14. `src/dashboard.html` 🆕

### Existing Files Updated (Fixed Height)
1. `src/index.html` → 812px
2. `src/account-alias.html` → 812px
3. `src/personal-details.html` → 812px
4. `src/birth-details.html` → 812px
5. `src/contact-info.html` → 812px
6. `src/intro.html` → 812px
7. `src/onboarding.html` → 812px

All pages now have consistent 812px fixed height! 🎉


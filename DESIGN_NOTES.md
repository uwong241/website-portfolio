# DESIGN NOTES

## 1. Visual Identity

Tone:
- High readability 70-80%
- Warm neutral vs cool beige
- Typography-driven motion
- No white plate over images
- Light source: 5500K low-key

Typography Solution:
- Typography: Inter + JetBrains Mono
- Inter elegant for display
- JetBrains Mono for math/code
- Heading scale: 600-900; body: 300-400
- Line-height: 1.6 body, 1.25 headings
- Spacing tight but breathable

Color Strategy:
- Monochrome background
- Chromatic shift via text and accent (3% acute)
- No purple/blue gradients

---

## 2. Font System

Fonts:
- Display: Inter (Google Fonts)
- UI/Body: Inter
- Mono: JetBrains Mono

Scale:
- h1: 3.5rem / 600
- h2: 2.75rem / 500
- h3: 1.75rem / 400
- h4: 1.25rem / 500
- body: 1rem / 400
- small: 0.875rem / 300

Letter Spacing:
- Headings: -0.02em
- Body: 0.01em

Paragraph Width:
- Max: 40em (640px)
- Two-column body text

---

## 3. Spacing & Grid

Spacing Unit: 0.5rem (8px)

Components:
- Elements: 4x, 6x, 8x, 12x
- Sections: 24x vertical

Grid:
- Container: 1280px max
- Tablet: 768px min
- Mobile: 100%
- Columns: 12 (<desktop), 8 (<tablet), 4 (mobile)

---

## 4. Color Palette

Light Mode:
- Background: #FAFAFA
- Surface: #FFFFFF
- Text Primary: #111111
- Text Secondary: #666666
- Accent: #2563EB (Blue 600)
- Lines: #E5E7EB

Dark Mode:
- Background: #0A0A0A
- Surface: #1A1A1A
- Text Primary: #FAFAFA
- Text Secondary: #A3A3A3
- Accent: #60A5FA

Constraints:
- WCAG AA: 4.5:1 (normal), 3:1 (large)

---

## 5. Components

Buttons:
- Primary: Solid accent
- Secondary: Outline
- Ghost: Fill 30% on hover
- Size: 0.75rem padding, 12px radius

Cards:
- Border: 1px solid
- Hover: subtle glow (very mild)
- Spacing: 1-0 ratio

Forms:
- Labels: Small + bold
- Inputs: Clean line
- Focus: Ring 2px, same as accent
- Consistent sizing

Navigation:
- Sticky hero
- Secondary (projects)
- Mobile drawer minimal

Footer:
- Multi-column
- Light spacing

---

## 6. Animations

Guidelines:
- Duration: 0.3s
- Easing: ease-out
- Respect: prefers-reduced-motion
- Never forced

Scroll Reveal:
- Stagger: 0.2s per element
- Effect: fade-up
- Trigger: IntersectionObserver

Hover Effects:
- Instant
- Opacity +/- 20%
- No flipping/fluid transforms

Loading:
- No skeleton
- Simple placeholder content
- Aim: 100ms initial

Transitions:
- Smooth 150ms
- Navigation
- Theme toggle

---

## 7. Responsive Strategy

Breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: 1024px+

Mobile First:
- Base styles for mobile
- Extend for tablet/desktop

Grid Adaptation:
- Mobile: 1 column
- Tablet: 2-3 columns
- Desktop: 3-4 columns
- Project showcases: asymmetric

Platform Constraints:
- No horizontal scroll
- Touch targets: min 44px
- Typography: readable scales

---

## 8. Accessibility

Semantic HTML:
- correct headings
- nav > ul > li

Focus States:
- Visible ring (2px)
- Same as accent
- Keyboard navigation

Contrast:
- WCAG AA compliant
- Orchestrated checks

Reduced Motion:
- Respect media query
- No motion allowed in denied mode

A11y Testing:
- Lighthouse accessibility
- Keyboard-only testing
- Screen reader paths

---

## 9. Performance

Image Strategy:
- WebP for modern support
- AVIF for fallback
- Lazy loading
- Next-gen formats
- Responsive sizes

Font Loading:
- Preload key fonts
- Display swap
- System font fallback

Code Size:
- Minify JS/CSS
- Remove unused code
- Tree-shake

Rendering:
- CSS containment
- GPU acceleration
- Layout thrashing minimized

Bundle:
- No unnecessary dependencies
- Tree-shaking
- Code splitting

---

## 10. Quality Standards

Every component:
- Follows design system
- Accessible (keyboard + screen reader)
- Responsive in all breakpoints
- Consistent spacing
- Clear visual hierarchy

Projects:
- Showcase narrative
- Metrics believable
- Screenshots optimized
- Context provided

---

**Status**: Design system documented. Ready for implementation in iteration 1.

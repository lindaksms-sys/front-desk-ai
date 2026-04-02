

## Plan: Add scroll-in animations to landing page sections

### Approach

Create a reusable `ScrollReveal` wrapper component that uses the Intersection Observer API to detect when a section enters the viewport, then applies a fade-up animation. Wrap each section (except Hero, which is already visible on load) in this component.

### Changes

**1. Create `src/components/ScrollReveal.tsx`**
- A wrapper component using `useEffect` + `IntersectionObserver`
- Starts with `opacity-0 translate-y-8`, transitions to `opacity-100 translate-y-0` when visible
- Uses `threshold: 0.1` and `once` behavior (no re-hiding on scroll up)
- Configurable delay prop for staggering if needed

**2. Update `src/pages/Index.tsx`**
- Import `ScrollReveal`
- Wrap each section (ProblemSection through FooterSection) in `<ScrollReveal>`
- Hero stays unwrapped (immediately visible)

No tailwind config changes needed — uses inline transition classes (`transition-all duration-700 ease-out`).


# AGENTS.md — Project Guidelines

**Стек:** Astro 6, React 19, HeroUI v3, Tailwind CSS v4, TypeScript strict, Biome, Bun

---

## 🎯 HeroUI v3 Rules (CRITICAL)

### ❌ NEVER (v2 patterns)
```tsx
// NO Provider needed in v3
import { HeroUIProvider } from "@heroui/react";
// import { motion } from "framer-motion";  // ❌ NOT USED - use GSAP instead

<HeroUIProvider>
  <Card title="Product" description="A great product" />
</HeroUIProvider>;
```

### ✅ ALWAYS (v3 patterns)
```tsx
// No Provider, compound components
import { Card } from "@heroui/react";

<Card>
  <Card.Header>
    <Card.Title>Product</Card.Title>
    <Card.Description>A great product</Card.Description>
  </Card.Header>
  <Card.Content>Content here</Card.Content>
</Card>
```

| Feature | v2 (DO NOT USE) | v3 (USE THIS) |
|---------|-----------------|---------------|
| Provider | `<HeroUIProvider>` required | **No Provider** |
| Animations | `framer-motion` | **GSAP** (custom) / CSS-based |
| Component API | Flat props `<Card title="x">` | Compound `<Card><Card.Header>` |
| Styling | Tailwind v3 + `@heroui/theme` | Tailwind v4 + `@heroui/styles` |
| Packages | `@heroui/system`, `@heroui/theme` | `@heroui/react`, `@heroui/styles` |

### Core Principles
- **Semantic variants** (`primary`, `secondary`, `tertiary`, `danger`, `ghost`, `outline`) over visual descriptions
- **Composition over configuration** (compound components)
- **CSS variable-based theming** with `oklch` color space
- **BEM naming** for predictable styling
- **Use `onPress`**, not `onClick` for accessibility

### Installation Verification
```bash
# Already in package.json:
# "@heroui/react": "^3.1.0"
# "@heroui/styles": "^3.1.0"
# "tailwindcss": "^4.3.0"
```

```css
/* src/styles/global.css - CORRECT ORDER */
@import "tailwindcss";
@import "@heroui/styles";

@theme inline {
  --font-sans: var(--font-manrope);
  --font-heading: var(--font-sora);
}
```

---

## 🏗️ Vercel Composition Patterns

### Architecture Rules (HIGH)

#### `architecture-avoid-boolean-props`
```tsx
// ❌ BAD - Boolean prop proliferation
<Button isLoading isDisabled isFullWidth variant="primary" size="lg" />

// ✅ GOOD - Composition
<Button>
  <Button.Spinner />
  <Button.Text>Submit</Button.Text>
</Button>
```

#### `architecture-compound-components`
```tsx
// ✅ Compound pattern with shared context
const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="card">{children}</div>
);
Card.Header = ({ children }) => <div className="card-header">{children}</div>;
Card.Title = ({ children }) => <h3 className="card-title">{children}</h3>;
Card.Description = ({ children }) => <p className="card-desc">{children}</p>;
Card.Content = ({ children }) => <div className="card-content">{children}</div>;
Card.Footer = ({ children }) => <div className="card-footer">{children}</div>;

// Usage
<Card>
  <Card.Header>
    <Card.Title>Title</Card.Title>
    <Card.Description>Desc</Card.Description>
  </Card.Header>
  <Card.Content>Body</Card.Content>
</Card>
```

### State Management (MEDIUM)

#### `state-decouple-implementation`
```tsx
// Provider is the ONLY place that knows how state is managed
const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  // ... implementation hidden
  
  return (
    <FormContext.Provider value={{ values, setValues, errors, setErrors }}>
      {children}
    </FormContext.Provider>
  );
};
```

#### `state-context-interface`
```tsx
// Generic interface for dependency injection
interface FormContextValue<T> {
  values: T;
  setValues: (v: T | ((prev: T) => T)) => void;
  errors: Partial<Record<keyof T, string>>;
  setErrors: (e: Partial<Record<keyof T, string>>) => void;
  validate: () => boolean;
}
```

#### `state-lift-state`
```tsx
// Move state to provider for sibling access
<TabsProvider defaultValue="tab1">
  <Tabs.List>
    <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
    <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content value="tab1">Content 1</Tabs.Content>
  <Tabs.Content value="tab2">Content 2</Tabs.Content>
</TabsProvider>
```

### Implementation Patterns (MEDIUM)

#### `patterns-explicit-variants`
```tsx
// ❌ BAD - Boolean modes
<Card isFeatured isCompact isBordered />

// ✅ GOOD - Explicit variant components
<Card variant="featured" size="compact" bordered />
// or separate components
<FeaturedCard />
<CompactCard />
<BorderedCard />
```

#### `patterns-children-over-render-props`
```tsx
// ❌ BAD - Render props
<DataTable renderRow={row => <CustomRow data={row} />} />

// ✅ GOOD - Children composition
<DataTable>
  <DataTable.Row>
    <DataTable.Cell>Cell 1</DataTable.Cell>
  </DataTable.Row>
</DataTable>
```

### React 19 APIs (MEDIUM) — Project uses React 19

#### `react19-no-forwardref`
```tsx
// ❌ BAD - forwardRef
const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <input ref={ref} {...props} />;
});

// ✅ GOOD - Use ref as prop (React 19)
const Input = ({ ref, ...props }: InputProps & { ref?: Ref<HTMLInputElement> }) => {
  return <input ref={ref} {...props} />;
};

// ✅ GOOD - use() instead of useContext()
const value = use(Context); // Not useContext(Context)
```

---

## 🎨 Frontend Design Principles

### Design Thinking
1. **Purpose** — What problem? Who uses it?
2. **Tone** — Pick extreme: brutal minimal, maximalist, retro-futuristic, organic, luxury, playful, editorial, brutalist, art deco, soft, industrial
3. **Constraints** — Framework, performance, accessibility
4. **Differentiation** — One unforgettable thing

### Aesthetics Guidelines

| Aspect | Guideline |
|--------|-----------|
| **Typography** | Avoid Inter/Roboto/Arial. Distinctive display + refined body font. Current: Manrope + Sora ✓ |
| **Color** | Cohesive palette, CSS variables. Dominant + sharp accents. No timid palettes. |
| **Motion** | **GSAP** for complex animations (scroll, timeline, FLIP). CSS-first for simple transitions. One orchestrated page load > scattered micro-interactions. Scroll/hover surprises. |
| **Spatial** | Asymmetry, overlap, diagonal flow, grid-breaking, generous space OR controlled density. |
| **Backgrounds** | Atmosphere/depth: gradient meshes, noise, geometric patterns, layered transparencies, shadows, borders, grain. |

### ❌ NEVER (Generic AI aesthetics)
- Overused fonts (Inter, Roboto, Space Grotesk, Arial)
- Cliched purple gradients on white
- Predictable layouts
- Cookie-cutter components without context

---

## 📋 Project-Specific Rules

### Component Structure
```
src/components/
├── ui/                    # Reusable HeroUI wrappers
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Form.tsx
│   └── index.ts
├── landing/
│   ├── sections/          # Page sections (Hero, Products, etc.)
│   ├── Header.tsx
│   ├── HeaderNav.tsx      # ✅ Fix: use HeroUI Dropdown
│   ├── ThemeToggle.tsx    # ✅ Fix: implement theme switching
│   └── ...
└── layout/
    └── Layout.astro
```

### Data Separation
```ts
// src/data/forms.ts, products.ts, features.ts, etc.
export const contactFormFields = [
  { name: "firstName", label: "First name", required: true },
  { name: "lastName", label: "Last name", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "message", label: "Message", type: "textarea", required: true, minLength: 10 },
];
```

### TypeScript
- Strict mode ✓
- `verbatimModuleSyntax` ✓
- Path aliases `@/*` ✓
- No `any`, explicit interfaces for all data

### Tailwind CSS v4
- Use `@theme inline` for design tokens
- CSS variables for fonts/colors
- No `@apply` in component styles (use utility classes)

### Biome
- Indent: tabs
- Line width: 100
- Quotes: double
- Trailing commas: all
- Semicolons: asNeeded
- Organize imports: on

---

## ✅ Definition of Done

- [ ] TypeScript strict: no errors (`bunx astro check`)
- [ ] Biome: no lint errors (`bun run lint`)
- [ ] Build succeeds (`bun run build`)
- [ ] Accessibility: axe-core 0 critical/high
- [ ] HeroUI v3 patterns used (compound, semantic variants, onPress)
- [ ] Composition patterns applied (no boolean prop proliferation)
- [ ] Design: distinctive, not generic AI aesthetic
- [ ] Tests pass (when added)

---

## 🎬 GSAP Animation Guidelines

**Пакет:** `gsap` + `@gsap/react` (React 19 compatible)

### Installation
```bash
bun add gsap @gsap/react
```

### Core Principles

| Principle | Description |
|-----------|-------------|
| **CSS-first** | Simple transitions (hover, focus, enter/exit) — Tailwind `transition-*` |
| **GSAP for complex** | Scroll-triggered, timelines, FLIP, morphing, stagger, scroll-linked |
| **Performance** | `gsap.config({ force3D: true, autoSleep: 60 })` |
| **Accessibility** | Respect `prefers-reduced-motion` — `gsap.globalTimeline.timeScale(0)` |

### React 19 Integration

```tsx
// src/components/ui/Animated.tsx
"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ✅ GOOD: useGSAP auto-cleans on unmount (React 19)
export function FadeInUp({ children, delay = 0, ...props }: { children: React.ReactNode; delay?: number } & React.HTMLAttributes<HTMLElement>) {
  const ref = useGSAP((context) => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;
    
    context.safe(() => {
      gsap.from(context.safeSelector(), {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay,
        scrollTrigger: {
          trigger: context.safeSelector(),
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    });
  }, []);

  return <div ref={ref} {...props}>{children}</div>;
}
```

### ScrollTrigger Patterns

```tsx
// Staggered reveal on scroll
useGSAP(() => {
  gsap.from(".stagger-item", {
    y: 40,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".stagger-container",
      start: "top 80%",
    },
  });
}, []);

// Pin section while animating inner content
useGSAP(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".pin-section",
      start: "top top",
      end: "+=200%",
      pin: true,
      scrub: 1,
    },
  });
  
  tl.to(".element-1", { y: -100, opacity: 0 })
    .to(".element-2", { scale: 1.2 }, "<")
    .to(".element-3", { rotation: 360 }, "<");
}, []);
```

### FLIP Animations (Layout Transitions)

```tsx
import { Flip } from "gsap/Flip";

gsap.registerPlugin(Flip);

// Animate between layout states (e.g., grid ↔ list, reorder)
function reorderItems(newOrder: Item[]) {
  const state = Flip.getState(".flip-item");
  
  // Update React state (DOM changes)
  setItems(newOrder);
  
  // Next frame: animate from previous state
  requestAnimationFrame(() => {
    Flip.from(state, {
      duration: 0.5,
      ease: "power2.inOut",
      stagger: 0.05,
      absolute: true, // for flex/grid reordering
    });
  });
}
```

### Timelines for Complex Sequences

```tsx
// Hero page load sequence
useGSAP(() => {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) return;
  
  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
  
  tl.from(".hero-title", { y: 50, opacity: 0, duration: 1 })
    .from(".hero-subtitle", { y: 30, opacity: 0, duration: 0.8 }, "-=0.6")
    .from(".hero-cta", { y: 20, opacity: 0, duration: 0.6, stagger: 0.1 }, "-=0.4")
    .from(".hero-visual", { scale: 0.95, opacity: 0, duration: 1 }, "-=0.8");
}, []);
```

### GSAP + HeroUI Components

```tsx
// Animate HeroUI modal/drawer open/close
import { Modal } from "@heroui/react";
import { useGSAP } from "@gsap/react";

function AnimatedModal({ isOpen, onClose, children }) {
  const modalRef = useGSAP((context) => {
    if (!isOpen) return;
    
    context.safe(() => {
      gsap.from(context.safeSelector(".modal-content"), {
        scale: 0.95,
        opacity: 0,
        duration: 0.25,
        ease: "power2.out",
      });
      gsap.from(context.safeSelector(".modal-overlay"), {
        opacity: 0,
        duration: 0.2,
      });
    });
  }, [isOpen]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div ref={modalRef} className="modal-content">
        {children}
      </div>
    </Modal>
  );
}
```

### Reduced Motion Handling

```tsx
// src/hooks/useReducedMotion.ts
import { useEffect, useState } from "react";

export function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(media.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, []);
  
  return reduced;
}

// Usage
function AnimatedComponent() {
  const reduced = useReducedMotion();
  
  useGSAP(() => {
    if (reduced) return; // Skip all GSAP animations
    // ... animation code
  }, [reduced]);
}
```

### Performance Checklist

- [ ] Register plugins once: `gsap.registerPlugin(ScrollTrigger, Flip, Draggable)`
- [ ] Use `context.safe()` + `context.safeSelector()` in `useGSAP` for auto-cleanup
- [ ] Kill ScrollTriggers on unmount (auto with `useGSAP`)
- [ ] Batch DOM reads/writes: `gsap.set()` / `gsap.to()` not in loops
- [ ] `will-change: transform, opacity` on animated elements (CSS)
- [ ] Avoid animating `width`/`height`/`top`/`left` — use `transform`

### Package.json
```json
{
  "dependencies": {
    "gsap": "^3.12.5",
    "@gsap/react": "^2.1.1"
  }
}
```

---

## 🔗 Key References

- HeroUI v3 docs: `https://heroui.com/docs/react/components/{component}.mdx`
- Tailwind v4: `https://tailwindcss.com/docs`
- GSAP docs: `https://gsap.com/docs/v3/`
- GSAP React: `https://gsap.com/docs/v3/Plugins/ScrollTrigger/`
- Vercel React patterns: This file + `skill://vercel-composition-patterns`
- Web guidelines: `skill://web-design-guidelines` (invoke: "review my UI")
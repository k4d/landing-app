# AGENTS.md — Руководство по проекту

**Стек:** Astro 7, React 19, HeroUI v3, Tailwind CSS v4, TypeScript strict (закреплён на 6.x), Biome, Bun

---

## 🎯 Правила HeroUI v3 (КРИТИЧНО)

### ❌ НИКОГДА (паттерны v2)
```tsx
// Провайдер в v3 не нужен
// import { HeroUIProvider } from "@heroui/react";
// import { motion } from "framer-motion";  // ❌ НЕ используется — вместо него GSAP

<HeroUIProvider>
  <Card title="Product" description="A great product" />
</HeroUIProvider>;
```

### ✅ ВСЕГДА (паттерны v3)
```tsx
// Без провайдера, составные компоненты
import { Card } from "@heroui/react";

<Card>
  <Card.Header>
    <Card.Title>Product</Card.Title>
    <Card.Description>A great product</Card.Description>
  </Card.Header>
  <Card.Content>Content here</Card.Content>
</Card>
```

| Возможность | v2 (НЕ использовать) | v3 (ИСПОЛЬЗОВАТЬ) |
|---------|-----------------|---------------|
| Провайдер | `<HeroUIProvider>` обязателен | **Не нужен** |
| Анимации | `framer-motion` | **GSAP** (свои) / на базе CSS |
| API компонента | Плоские пропсы `<Card title="x">` | Составные `<Card><Card.Header>` |
| Стилизация | Tailwind v3 + `@heroui/theme` | Tailwind v4 + `@heroui/styles` |
| Пакеты | `@heroui/system`, `@heroui/theme` | `@heroui/react`, `@heroui/styles` |

### Базовые принципы
- **Семантические варианты** (`primary`, `secondary`, `tertiary`, `danger`, `ghost`, `outline`) вместо визуальных описаний
- **Композиция важнее конфигурации** (составные компоненты)
- **Темизация на CSS-переменных** в пространстве `oklch`
- **BEM-именование** для предсказуемых стилей
- **Используйте `onPress`, а не `onClick`** — для доступности

### Проверка установки
```bash
# Уже в package.json:
# "astro": "^7.3.8", "@astrojs/react": "^7.0.1"
# "@heroui/react": "^3.2.6"
# "@heroui/styles": "^3.2.6"
# "tailwindcss": "^4.3.3", "@tailwindcss/vite": "^4.3.3"
```

```css
/* src/styles/global.css — ПРАВИЛЬНЫЙ ПОРЯДОК */
@import "tailwindcss";
@import "@heroui/styles";

@theme inline {
  --font-sans: var(--font-manrope);
  --font-heading: var(--font-sora);
}
```

---

## 🏗️ Паттерны композиции

### Архитектурные правила (ВЫСОКИЙ приоритет)

#### `architecture-avoid-boolean-props`
```tsx
// ❌ ПЛОХО — булевых пропсов становится слишком много
<Button isLoading isDisabled isFullWidth variant="primary" size="lg" />

// ✅ ХОРОШО — композиция
<Button>
  <Button.Spinner />
  <Button.Text>Submit</Button.Text>
</Button>
```

#### `architecture-compound-components`
```tsx
// ✅ Составной паттерн с общим контекстом
const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="card">{children}</div>
);
Card.Header = ({ children }) => <div className="card-header">{children}</div>;
Card.Title = ({ children }) => <h3 className="card-title">{children}</h3>;
Card.Description = ({ children }) => <p className="card-desc">{children}</p>;
Card.Content = ({ children }) => <div className="card-content">{children}</div>;
Card.Footer = ({ children }) => <div className="card-footer">{children}</div>;

// Использование
<Card>
  <Card.Header>
    <Card.Title>Title</Card.Title>
    <Card.Description>Desc</Card.Description>
  </Card.Header>
  <Card.Content>Body</Card.Content>
</Card>
```

### Управление состоянием (СРЕДНИЙ приоритет)

#### `state-decouple-implementation`
```tsx
// Провайдер — ЕДИНСТВЕННОЕ место, которое знает, как хранится состояние
const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  // ... реализация скрыта

  return (
    <FormContext.Provider value={{ values, setValues, errors, setErrors }}>
      {children}
    </FormContext.Provider>
  );
};
```

#### `state-context-interface`
```tsx
// Универсальный интерфейс для внедрения зависимостей
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
// Поднятие состояния в провайдер для доступа между «островами»
<TabsProvider defaultValue="tab1">
  <Tabs.List>
    <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
    <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content value="tab1">Content 1</Tabs.Content>
  <Tabs.Content value="tab2">Content 2</Tabs.Content>
</TabsProvider>
```

### Паттерны реализации (СРЕДНИЙ приоритет)

#### `patterns-explicit-variants`
```tsx
// ❌ ПЛОХО — булевы режимы
<Card isFeatured isCompact isBordered />

// ✅ ХОРОШО — явные варианты компонента
<Card variant="featured" size="compact" bordered />
// или отдельные компоненты
<FeaturedCard />
<CompactCard />
<BorderedCard />
```

#### `patterns-children-over-render-props`
```tsx
// ❌ ПЛОХО — render props
<DataTable renderRow={row => <CustomRow data={row} />} />

// ✅ ХОРОШО — композиция через children
<DataTable>
  <DataTable.Row>
    <DataTable.Cell>Cell 1</DataTable.Cell>
  </DataTable.Row>
</DataTable>
```

### API React 19 (СРЕДНИЙ приоритет) — в проекте React 19

#### `react19-no-forwardref`
```tsx
// ❌ ПЛОХО — forwardRef
const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <input ref={ref} {...props} />;
});

// ✅ ХОРОШО — ref как проп (React 19)
const Input = ({ ref, ...props }: InputProps & { ref?: Ref<HTMLInputElement> }) => {
  return <input ref={ref} {...props} />;
};

// ✅ ХОРОШО — use() вместо useContext()
const value = use(Context); // а не useContext()
```

---

## 🎨 Принципы дизайна интерфейса

### Дизайн-мышление
1. **Назначение** — какую задачу решает? Кто использует?
2. **Тон** — выберите крайность: брутальный минимализм, максимализм, ретро-футуризм, органика, люкс, игривость, редакционный стиль, брутализм, ар-деко, мягкость, индустриальность
3. **Ограничения** — фреймворк, производительность, доступность
4. **Отличие** — одна незабывающая деталь

### Эстетические ориентиры

| Аспект | Рекомендация |
|--------|-----------|
| **Типографика** | Избегайте Inter/Roboto/Arial. Характерный дисплейный + утончённый основной шрифт. Сейчас: Manrope + Sora ✓ |
| **Цвет** | Единая палитра на CSS-переменных. Доминирующий цвет + резкие акценты. Без робких/нерешительных палитр. |
| **Движение** | **GSAP** — для сложной анимации (скролл, таймлайны, FLIP). CSS в первую очередь — для простых переходов. Один оркестрованный вход на страницу лучше разбросанных микровзаимодействий. Сюрпризы на скролле/hover. |
| **Пространство** | Асимметрия, наложение, диагональный поток, ломка сетки, щедрое пространство ЛИБО контролируемая плотность. |
| **Фоны** | Атмосфера/глубина: градиентные сетки, шум, геометрические паттерны, слои прозрачности, тени, границы, зерно. |

### ❌ НИКОГДА (типичная «ИИ»-эстетика)
- Затасканные шрифты (Inter, Roboto, Space Grotesk, Arial)
- Клише «фиолетовый градиент на белом»
- Предсказуемые лейауты
- Шаблонные компоненты без контекста

---

## 📋 Правила, специфичные для проекта

### Структура компонентов
```
src/components/
├── ui/                    # Переиспользуемые обёртки HeroUI
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Form.tsx
│   └── index.ts
├── landing/
│   ├── sections/          # Секции страницы (Hero, Products и т.д.)
│   ├── Header.tsx
│   ├── HeaderNav.tsx      # ✅ Исправить: использовать HeroUI Dropdown
│   ├── ThemeToggle.tsx    # ✅ Исправить: реализовать переключение темы
│   └── ...
└── layout/
    └── Layout.astro
```

### Разделение данных
```ts
// src/data/forms.ts, products.ts, features.ts и т.д.
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
- No `any`, явные интерфейсы для всех данных
- TS закреплён на **6.x**: нативный TS 7 пока несовместим с `astro check` (`@astrojs/language-server`) — не поднимать до 7 без поддержки в Astro (`withastro/roadmap#1321`)

### Tailwind CSS v4
- Используйте `@theme inline` для токенов дизайна
- CSS-переменные для шрифтов/цветов
- Без `@apply` в стилях компонентов (используйте утилиты)

### Biome
- Indent: tabs
- Line width: 100
- Quotes: double
- Trailing commas: all
- Semicolons: asNeeded
- Organize imports: on

---

## ✅ Критерии готовности

- [ ] Строгий TypeScript: нет ошибок (`bunx astro check`)
- [ ] Biome: нет ошибок линтера (`bun run lint`)
- [ ] Сборка проходит (`bun run build`)
- [ ] Доступность: axe-core — 0 критичных/высоких
- [ ] Используются паттерны HeroUI v3 (составные компоненты, семантические варианты, `onPress`)
- [ ] Применяются паттерны композиции (нет размножения булевых пропсов)
- [ ] Дизайн: характерный, не типовая «ИИ»-эстетика
- [ ] Тесты проходят (когда добавлены)

---

## 🎬 Руководство по анимациям GSAP

**Пакеты:** `gsap` + `@gsap/react` (совместимы с React 19)

### Установка
```bash
bun add gsap @gsap/react
```

### Базовые принципы

| Принцип | Описание |
|-----------|-------------|
| **CSS в первую очередь** | Простые переходы (hover, focus, появление/исчезновение) — Tailwind `transition-*` |
| **GSAP для сложного** | Scroll-триггеры, таймлайны, FLIP, морфинг, stagger, привязка к скроллу |
| **Производительность** | `gsap.config({ force3D: true, autoSleep: 60 })` |
| **Доступность** | Уважайте `prefers-reduced-motion` — `gsap.globalTimeline.timeScale(0)` |

### Интеграция с React 19

```tsx
// src/components/ui/Animated.tsx
"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ✅ ХОРОШО: useGSAP сам очищает при размонтировании (React 19)
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

### Паттерны ScrollTrigger

```tsx
// Последовательное появление при скролле
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

// Фиксация секции при анимации внутреннего контента
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

### FLIP-анимации (переходы лейаута)

```tsx
import { Flip } from "gsap/Flip";

gsap.registerPlugin(Flip);

// Анимация между состояниями лейаута (напр. сетка ↔ список, переупорядочивание)
function reorderItems(newOrder: Item[]) {
  const state = Flip.getState(".flip-item");

  // Обновляем состояние React (меняется DOM)
  setItems(newOrder);

  // Следующий кадр: анимируем от предыдущего состояния
  requestAnimationFrame(() => {
    Flip.from(state, {
      duration: 0.5,
      ease: "power2.inOut",
      stagger: 0.05,
      absolute: true, // для flex/grid-переупорядочивания
    });
  });
}
```

### Таймлайны сложных последовательностей

```tsx
// Последовательность загрузки Hero
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

### GSAP + компоненты HeroUI

```tsx
// Анимация открытия/закрытия модалки/шторки HeroUI
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

### Учёт prefers-reduced-motion

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

// Использование
function AnimatedComponent() {
  const reduced = useReducedMotion();

  useGSAP(() => {
    if (reduced) return; // Пропускаем все GSAP-анимации
    // ... код анимации
  }, [reduced]);
}
```

### Чек-лист производительности

- [ ] Регистрируйте плагины один раз: `gsap.registerPlugin(ScrollTrigger, Flip, Draggable)`
- [ ] Используйте `context.safe()` + `context.safeSelector()` в `useGSAP` для автоочистки
- [ ] Уничтожайте ScrollTrigger при размонтировании (авто с `useGSAP`)
- [ ] Группируйте чтение/запись DOM: `gsap.set()` / `gsap.to()` не в циклах
- [ ] `will-change: transform, opacity` на анимируемых элементах (CSS)
- [ ] Не анимируйте `width`/`height`/`top`/`left` — используйте `transform`

### package.json
```json
{
  "dependencies": {
    "gsap": "^3.12.5",
    "@gsap/react": "^2.1.1"
  }
}
```

---

## 🔗 Полезные ссылки

- Документация HeroUI v3: `https://heroui.com/docs/react/components/{component}.mdx`
- Документация Tailwind v4: `https://tailwindcss.com/docs`
- Документация GSAP: `https://gsap.com/docs/v3/`
- GSAP React: `https://gsap.com/docs/v3/Plugins/ScrollTrigger/`
- Паттерны Vercel/React: этот файл + `skill://vercel-composition-patterns`
- Веб-рекомендации: `skill://web-design-guidelines` (вызов: «review my UI»)
- Руководство по апгрейду Astro: `https://docs.astro.build/en/guides/upgrade-to/v7/`

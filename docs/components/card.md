# Card Component

## Overview

A versatile container component for grouping related content. The Card automatically adapts its internal spacing to the user's screen size via the Tally density system.

## Sub-components

| Component | Purpose |
|-----------|---------|
| `Card` | Outer container (border, background, shadow) |
| `CardHeader` | Title area with vertical spacing |
| `CardTitle` | `<h3>` heading |
| `CardDescription` | Muted subtitle text |
| `CardContent` | Main body area |
| `CardFooter` | Bottom row (e.g. buttons) |

## Density Support

### Auto-detection (recommended — zero config)

Card spacing adapts to the viewport via CSS custom properties and media queries. No prop needed, no JavaScript re-render, no hydration flash.

```tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/Card/Card";

<Card>
  <CardHeader>
    <CardTitle>Energy Dashboard</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Your monthly usage statistics</p>
  </CardContent>
</Card>
```

| Viewport | Density | Card padding | Header gap |
|----------|---------|-------------|------------|
| ≥ 2 560 px (4K) | Comfortable | 32 px | 8 px |
| 1 920 – 2 559 px | Normal | 24 px | 6 px |
| < 1 920 px (laptop) | Compact | 16 px | 4 px |

### Explicit density override

Lock a specific density mode for testing or design reasons:

```tsx
<Card density="compact">
  <CardContent>Always uses compact spacing</CardContent>
</Card>
```

The `density` prop sets scoped CSS custom properties on the element so all children (CardHeader, CardContent, etc.) inherit the override automatically.

### Custom styling (still works)

className overrides continue to work exactly as before:

```tsx
<Card className="bg-blue-50 border-blue-200">
  <CardContent>Custom styled card</CardContent>
</Card>

<CardHeader className="px-4 py-4 space-y-0">
  {/* Overrides the density-based padding */}
</CardHeader>
```

## How It Works

1. **Base classes** use Tailwind density utilities (e.g. `p-density-xl`, `space-y-density-sm`)
2. These utilities resolve to CSS custom properties (`var(--tally-spacing-xl)`, etc.)
3. The variables are defined in `app/density.css` with `@media` breakpoints
4. When a `density` prop is passed, `getDensityCSS()` injects inline style overrides that scope the CSS variables to that Card and its descendants

## Migration Notes

**No changes required to existing Card usage.** All existing Cards automatically gain density-adaptive spacing. The component API is fully backward-compatible:

- No new required props
- className overrides still work
- style prop still works
- All existing sub-components unchanged

## Files

| File | Role |
|------|------|
| `components/Card/Card.tsx` | Design system Card (used by all pages) |
| `components/ui/card.tsx` | Primitive Card (uses semantic color tokens) |
| `app/density.css` | CSS custom properties + media queries |
| `lib/density-tokens.ts` | Token definitions + pure helpers |

## Demo

Visit `/foundation/density` → **Card Component — Density Comparison** section to see all three modes side-by-side plus an auto-detect test card.

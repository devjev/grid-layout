# Grid App Shell

A small React app shell that demonstrates **native CSS responsive layout** end to
end — no layout library. It puts all three resize tools in play at once:

1. **`clamp()` / `minmax()`** — fluid sizing _within_ a layout, so you don't reach
   for a breakpoint just to resize something.
2. **Media queries** — rearrange the _top-level shell_ by redrawing
   `grid-template-areas` (the shell responds to the window).
3. **Container queries** — a component that adapts to _its own slot's_ width, so
   the same component lays itself out differently depending on where it's dropped.

## Run it

```bash
npm install
npm run dev      # start the dev server (Vite prints the local URL)
npm run build    # type-check + production build
npm run preview  # serve the production build locally
```

## Where each technique lives

| Technique                       | File                              | What to look for                                                    |
| ------------------------------- | --------------------------------- | ------------------------------------------------------------------- |
| `clamp()` fluid type            | `src/index.css`                   | the `--step-*` scale on `:root`                                     |
| `minmax()` flexing track        | `src/App.module.css`              | `grid-template-columns: minmax(180px, 240px) 1fr` (+ the card grid) |
| Media query + `grid-template-areas` | `src/App.module.css`          | the `@media (max-width: 768px)` block redrawing the area map         |
| Container query                 | `src/components/Card.module.css`  | `container-type: inline-size` + the `@container` rule               |
| Container query _units_ (`cqi`) | `src/components/Card.module.css`  | the card title sized with `clamp(..., 5cqi, ...)` — type scales to its slot |

## What to try in the browser

- **Resize the window across ~768px.** The shell collapses from two columns to one,
  and the sidebar drops _below_ main — a reorder driven purely by redrawing the
  `grid-template-areas` map, with no change to the React markup.
- **Resize between ~769px and wide.** The sidebar column flexes between 180–240px
  (`minmax()`) and the headings scale smoothly (`clamp()`), all without a breakpoint.
- **Compare the cards at one fixed window width.** The cards in `main` render
  side-by-side while the _identical_ `Card` in the sidebar stacks — because each card
  responds to its own container's width, not the viewport. That's the container query.
  The card title also scales with its container (`cqi` units), so the same component's
  type is larger in the wide area and smaller in the narrow sidebar.

## Stack

Vite + React + TypeScript, styles in CSS Modules. Container queries key off the
container's name/type rather than a class, so CSS Module scoping doesn't interfere.

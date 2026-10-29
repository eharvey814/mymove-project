# MYMOVE

**Movement That Fits The Moment.** MYMOVE suggests quick, simple movement based on how much time you have, how you feel, and where you are.

Live site: https://eharvey814.github.io/mymove-project/

## Pages
| Page | File |
|---|---|
| Home | `index.html` |
| Tell Us About You | `preferences.html` |
| Here's Your Move | `suggestion.html` |
| Movement (timer) | `activity.html` |
| Nice Work | `completion.html` |
| How It Works / About / Contact | `how-it-works.html`, `about.html`, `contact.html` |

## CSS organization
Styles follow a layered folder structure with **BEM** class names (`.block__element--modifier`).

```
css/
  main.css          ← the only file linked from HTML; imports everything in order
  base/             tokens.css (brand colors, type, spacing), reset.css, typography.css
  layout/           layout.css (containers, sections, grids, split layouts)
  components/       one file per reusable block: button, chip, card, stepper, timer, ...
  pages/            small page-specific arrangements of components
  utilities/        single-purpose helpers, loaded last
```

- **Design tokens** in `base/tokens.css` hold every brand value (Dusty Blue, Terracotta, Soft Cream, Charcoal, Deep Teal, Deep Terracotta; Roboto + Montserrat), so changes happen in one place.
- **Mobile first:** base styles target phones, then `@media (min-width: 700px)` for tablet and `@media (min-width: 1100px)` for desktop.
- **State classes** use an `is-` prefix (`is-open`, `is-hidden`, `is-active`) and are toggled by JavaScript.
- **Adding a page:** create `css/pages/<page>.css` and add one `@import` line to `main.css`.
- **Adding a component:** create `css/components/<name>.css` with BEM classes and import it.

## JavaScript
`js/main.js` is shared by every page. Each `<body>` has a `data-page` attribute, and only that page's code runs. Data passes between pages with `sessionStorage`.

### Step animations and timing
- Each move lists its `steps`, the animation for each step (`gifs`), and optional `timing`:
  `{ reps: 10 }` plays exactly 10 reps, `{ seconds: 20 }` lasts 20 seconds, and `{ sides: 2 }` splits a step between both sides.
  Steps without a fixed count share the remaining time. `repeat: true` runs circuits in rounds.
- Animations are frame sheets in `assets/moves/` (described in `js/animations.js`). The Movement page draws the frame for the
  exact elapsed time, so reps match the timer, nothing moves before Start, and Pause freezes the figure.
- When the minutes chosen equal the number of steps, every step lasts exactly one minute and counted reps are spread
  evenly across that minute. `{ rotate: 30 }` switches between several animations every 30 seconds (Dance Break).
- The timer is based on the system clock, so it stays accurate even if the browser slows a background tab.
  Drag the timer ring (or use the arrow keys on it) to rewind or skip ahead.

## Assets
Logo, submarks, favicon, and a line-icon sprite (`assets/icons.svg`) are SVG. Exercise animations are illustrated in the MYMOVE brand style. Photography: via Pexels

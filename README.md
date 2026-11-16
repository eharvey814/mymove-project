# MYMOVE

**Movement That Fits The Moment.**

**Live site:** https://eharvey814.github.io/mymove-project/

MYMOVE is a web app that helps people fit quick, approachable movement into their day. Many people want to be more active but don't know where to start or feel like they don't have enough time. MYMOVE takes the guesswork out of deciding what to do: answer a few quick questions, get one movement suggestion that fits your moment, and follow along with an illustrated guide.

Created by Erika Harvey for the MMC6936 Capstone Project.

## Goals

- **Make movement approachable.** Every activity uses simple, low-impact motions and no equipment, so beginners can follow along.
- **Fit real life.** Suggestions match the time you have, how you feel, and where you are: home, outside, work or school, or the gym.
- **Encourage, never intimidate.** A calm brand, a friendly tone, and the reminder that even small steps can make a difference.

## Features

- **Three quick questions, plus one optional:** time (5, 10, 15, or 30 minutes), mood, place, and an optional intensity (Any, Easy, Moderate, Challenging).
- **14 activities** with their own photos, step lists, and levels. **Try Another** suggests a different match.
- **Illustrated step-by-step guide:** an animated figure demonstrates each step in time with the timer. It counts reps, switches sides, and shows a countdown for timed steps like a 20-second plank.
- **Timer that fits your time:** the number of movements adjusts to the minutes you choose, and every session ends on its last movement exactly at 0:00. Start, pause, reset, or drag the timer ring to rewind or skip ahead.
- **Nice Work summary:** see your time, level, and place, rate how the move felt, and view your moves from this session.
- **Responsive and accessible:** designed mobile-first for phones, tablets, and desktops, with keyboard support and screen reader labels.

## How to use it

1. Open the live site and select **Find My Move** (or **Get Started**).
2. Answer the three questions, and the optional intensity question if you like.
3. Review your suggested move, or select **Try Another**.
4. Select **Let's Go**, then **Start**, and follow the guide.
5. Select **End Move** when you're done, and rate how it felt.

## Running it locally

MYMOVE is plain HTML, CSS, and JavaScript, so there is nothing to install or build.

1. Clone the repository:git clone https://github.com/eharvey814/mymove-project.git
2. Open the folder in Visual Studio Code.
3. Right-click `index.html` and choose **Open with Live Server** (requires the Live Server extension).

Use Live Server rather than opening the file directly, because the pages load their animations and styles from other files.

## Project structure

index.html Home
preferences.html Tell Us About You (the questions)
suggestion.html Here’s Your Move
activity.html Movement (animated guide and timer)
completion.html Nice Work
how-it-works.html How It Works
about.html About
contact.html Contact
css/
styles.css the combined stylesheet the pages load (generated; do not edit directly)
main.css the list of source CSS files, in order
base/ layout/ components/ pages/ utilities/ the organized source CSS files (BEM class names)
js/
main.js all app logic and the 14 activities
animations.js frame counts and timing for each animation
assets/
moves/ animation frame sheets (.webp), one per movement
images/ photos (moves/ holds one photo per activity)
icons.svg, logo.svg, submark.svg, favicon.svg
tools/
build-css.html rebuilds css/styles.css after CSS edits


## Contributing

Suggestions and improvements are welcome. Please open an issue to share an idea or report a bug, or fork the repository and open a pull request.

**Editing styles**
1. Edit the source file in `css/base`, `css/layout`, `css/components`, `css/pages`, or `css/utilities`.
2. Open `tools/build-css.html` with Live Server and select **Build and download styles.css**.
3. Save the download over `css/styles.css`. Your changes won't appear on the site until you do this.

Brand colors, fonts, and spacing live in `css/base/tokens.css`, so they can be changed in one place.

**Adding or changing an activity**
- Each activity is an entry in the `moves` list at the top of `js/main.js`, with its title, level, moods, places, steps, animations (`gifs`, one per step), and photo.
- Optional `timing` sets exact counts or lengths for a step: `{ reps: 10 }` plays 10 reps, `{ seconds: 20 }` lasts 20 seconds and shows a countdown, and `{ sides: 2 }` splits a step between both sides.
- Animations must already exist in `assets/moves` and be listed in `js/animations.js`.
- Keep activity photos about 1000 pixels wide and under about 150 KB so pages load quickly.

**After any change**
- Increase the `ASSET_VERSION` number near the top of `js/main.js`, so browsers load the new files instead of old saved copies.
- Test the full flow on a phone-sized screen and a desktop before pushing.

## Testing

- **Lighthouse (mobile):** Accessibility, Best Practices, and SEO score 90–100. Performance scores in the 90s on most pages. The Movement page scores lower because it loads the step animations, which are a key feature.
- **Manual testing:** every user flow was tested, along with attempts to break the app, such as skipping questions, opening pages out of order, double-clicking buttons, using only the keyboard, and very small screens.

## Data and privacy

MYMOVE has no accounts and no database. Your answers and session history are saved only in your browser for the current session and are cleared when you close it.

## Credits

- Activity and page photos: [Pexels](https://www.pexels.com) (free to use).
- Fonts: Roboto and Montserrat via [Google Fonts](https://fonts.google.com).
- Exercise animations and brand identity: created for MYMOVE in the MYMOVE brand style.

## Disclaimer

MYMOVE offers general movement ideas, not medical advice. Listen to your body, move within your comfort level, and check with a healthcare provider if you have health concerns.

## Future plans

- More activities and routines.
- A way to note physical limitations and get suggestions that avoid certain movements.
- Progress tracking across sessions.
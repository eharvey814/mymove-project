/* =========================================================
   MYMOVE - main.js
   Shared by every page. Each <body> has a data-page attribute,
   and only that page's code runs. Styling hooks follow the BEM
   class names in /css (state classes use the is- prefix).
   ========================================================= */

/* ---------- 1. Move data ---------- */
const moves = [
  { id: 1, title: "Box Breathing Stretch", level: "Easy", moods: ["stressed"], places: ["home", "work", "outside"],
    photo: "box-breathing.jpg", photoAlt: "Woman sitting calmly at home with her eyes closed, breathing slowly", photoPosition: "50% 30%",
    description: "Slow stretching paired with box breathing to release tension.",
    steps: ["Box breathing: in for 4, hold 4, out for 4, hold 4", "Shoulder rolls, 10 forward and 10 backward", "Slow neck rolls, each direction",
            "Reach overhead and side bend, one arm at a time", "Chest opener: clasp your hands behind you", "Upper back stretch",
            "Overhead triceps stretch, each side", "Standing quad stretch, each side", "Calf and hamstring stretch, each side",
            "Finish with 5 slow breaths"],
    gifs: ["box-breathing", "shoulder-rolls", "neck-rolls", "side-bend", "chest-opener", "upper-back-stretch",
           "triceps-stretch", "quad-stretch", "calf-hamstring-stretch", "slow-breaths"],
    timing: [{ reps: 4 }, { reps: 10, sides: 2, mode: "reverse", startReversed: true, labels: ["Forward", "Backward"] }, null, null,
             null, null, { sides: 2 }, { sides: 2 }, { sides: 2 }, { reps: 5 }],
    shortList: [0, 1, 2, 3, 9, 4, 5, 6, 7, 8],
    even: true },
  { id: 2, title: "Desk Reset", level: "Easy", moods: ["low-energy", "stressed"], places: ["work"],
    photo: "../desk-stretch.jpg", photoAlt: "Woman stretching her arms overhead at a colorful desk",
    description: "Stand up, loosen your shoulders, and break up your sitting time.",
    steps: ["Stand and reach overhead, holding 10 seconds each time", "Shoulder rolls, 10 forward and 10 backward", "Slow head rolls, each direction",
            "Seated spinal twist, each side", "Calf raises at your desk", "10 desk push-ups", "Overhead triceps stretch, each side",
            "Standing side stretch, one arm at a time", "Take 5 deep breaths", "Chest opener: clasp your hands behind you", "Walk to refill your water"],
    gifs: ["reach-overhead", "shoulder-rolls", "neck-rolls", "seated-twist", "calf-raises", "desk-push-ups", "triceps-stretch",
           "side-bend", "slow-breaths", "chest-opener", "walk-bottle"],
    timing: [{ seconds: 60 }, { reps: 10, sides: 2, mode: "reverse", startReversed: true, labels: ["Forward", "Backward"] }, null, { sides: 2 },
             null, { reps: 10 }, { sides: 2 }, null, { reps: 5 }, null, null],
    shortList: [0, 1, 3, 4, 10, 8, 2, 5, 6, 9, 7],
    even: true },
  { id: 3, title: "Brisk Walk", level: "Moderate", moods: ["energized", "motivated"], places: ["outside", "work"],
    photo: "brisk-walk.jpg", photoAlt: "Man walking briskly along a sunny outdoor path", photoPosition: "43% 45%",
    description: "Put your energy to use with a quick-paced walk.",
    steps: ["Start at an easy pace for 1 minute", "Pick up to a brisk pace", "Swing your arms", "Slow down for the last minute"],
    gifs: ["walk-easy", "walk-brisk", "walk-arm-swing", "walk-slow"],
    timing: [{ seconds: 60 }, null, null, { seconds: 60 }] },
  { id: 4, title: "Wake-Up Flow", level: "Easy", moods: ["low-energy"], places: ["home", "gym"],
    photo: "wake-up-flow.jpg", photoAlt: "Older man stretching his arms forward in a bright living room", photoPosition: "60% 45%",
    description: "Gentle moves that raise your heart rate a little and wake you up.",
    steps: ["March in place", "Arm circles, forward and backward", "Standing knee hugs", "10 slow squats", "Reach up, then touch your toes"],
    gifs: ["march-in-place", "arm-circles", "knee-hugs", "slow-squats", "reach-and-touch-toes"],
    timing: [null, null, null, { reps: 10 }, null] },
  { id: 5, title: "Bodyweight Circuit", level: "Challenging", moods: ["energized", "motivated"], places: ["home", "gym"],
    photo: "bodyweight-circuit.jpg", photoAlt: "Man doing a lunge in a brick-walled studio", photoPosition: "50% 12%",
    description: "A no-equipment circuit. Repeat the round until time runs out.",
    steps: ["10 squats", "10 push-ups (knees OK)", "10 lunges each leg", "20-second plank", "Rest 30 seconds with deep breaths, then repeat"],
    gifs: ["squats", "push-ups", "lunges", "plank", "slow-breaths"],
    timing: [{ reps: 10 }, { reps: 10 }, { reps: 10, sides: 2 }, { seconds: 20 }, { seconds: 30 }],
    repeat: true, circuit: true },
  { id: 6, title: "Unwind Walk", level: "Easy", moods: ["stressed", "low-energy"], places: ["outside"],
    photo: "unwind-walk.jpg", photoAlt: "Smiling woman walking down a sunny park path", photoPosition: "46% 45%",
    description: "An easy walk outside. Focus on what you see and hear.",
    steps: ["Walk at a relaxed pace", "Name 5 things you can see", "Name 3 things you can hear", "Take 5 slow breaths before heading back"],
    gifs: ["walk-easy", "walk-look", "walk-listen", "slow-breaths"],
    timing: [null, null, null, { reps: 5 }] },
  { id: 7, title: "Cardio Boost", level: "Moderate", moods: ["energized", "motivated"], places: ["work", "outside", "gym"],
    photo: "cardio-boost.jpg", photoAlt: "Man doing a high knee drive in his living room", photoPosition: "51% 50%",
    description: "A quick, low-impact cardio session you can do anywhere. No stairs or equipment needed.",
    steps: ["March in place", "Step jacks", "Standing knee drives, each side", "Butt kicks", "Slow march to cool down"],
    gifs: ["march-in-place", "step-jacks", "knee-drives", "butt-kicks", "march-slow"],
    timing: [null, null, { sides: 2 }, null, null] },
  { id: 8, title: "Gentle Mobility", level: "Easy", moods: ["low-energy", "stressed"], places: ["home", "gym"],
    photo: "gentle-mobility.jpg", photoAlt: "Two women resting in child’s pose on yoga mats", photoPosition: "55% 55%",
    description: "Slow, easy movements on a mat to loosen up stiff spots.",
    steps: ["Cat-cow, 10 times", "Hip flexor stretch, each side", "Seated side stretch, each side", "Seated forward fold", "Child's pose for 5 breaths"],
    gifs: ["cat-cow", "hip-flexor-stretch", "seated-side-stretch", "seated-forward-fold", "childs-pose"],
    timing: [{ reps: 10 }, { sides: 2 }, { sides: 2 }, null, { reps: 5 }] },
  { id: 9, title: "Incline Walk", level: "Moderate", moods: ["motivated", "low-energy"], places: ["gym"],
    photo: "incline-walk.jpg", photoAlt: "Person walking on a treadmill in a bright gym", photoPosition: "50% 55%",
    description: "A steady treadmill walk that builds up the incline. Low impact, good effort.",
    steps: ["Treadmill walk at an easy pace", "Raise the incline a few levels", "Raise the incline a few more levels", "Hold a steady pace", "Lower the incline to cool down"],
    gifs: ["treadmill-flat", "treadmill-incline-press", "treadmill-incline-press-more", "treadmill-incline", "treadmill-cool-down"] },
  { id: 10, title: "Park Bench Workout", level: "Moderate", moods: ["energized", "motivated"], places: ["outside"],
    photo: "park-bench-workout.jpg", photoAlt: "Woman doing incline push-ups on a wooden bench outdoors", photoPosition: "58% 55%",
    description: "Use a bench or low wall for a quick strength session.",
    steps: ["Step-ups, 10 each leg", "Incline push-ups, 10", "Bench dips, 10", "Walk for 1 minute and repeat"],
    gifs: ["bench-step-ups", "bench-incline-push-ups", "bench-dips", "walk-easy"],
    timing: [{ reps: 10, sides: 2 }, { reps: 10 }, { reps: 10 }, { seconds: 60 }],
    repeat: true, circuit: true },
  { id: 11, title: "Hallway Walk & Stretch", level: "Easy", moods: ["low-energy"], places: ["work"],
    photo: "hallway-walk.jpg", photoAlt: "Two coworkers talking as they walk down an office hallway", photoPosition: "56% 50%",
    description: "Laps around the building with a few easy stretches.",
    steps: ["Walk lap(s) of your floor or building", "Take the stairs one flight (no stairs? Keep walking at a faster pace)",
            "Standing side stretch, one arm at a time", "Standing quad stretch, each side", "Upper back stretch"],
    gifs: ["walk-easy", "stairs-up", "side-bend", "quad-stretch", "upper-back-stretch"],
    timing: [null, null, null, { sides: 2 }, null] },
  { id: 12, title: "Stretch & Breathe", level: "Easy", moods: ["stressed"], places: ["gym"],
    photo: "stretch-and-breathe.jpg", photoAlt: "Woman lying on a yoga mat with her eyes closed, breathing slowly", photoPosition: "46% 50%",
    description: "Use a mat and a quiet corner to stretch and slow your breathing.",
    steps: ["Lie on your back and breathe slowly", "Knee-to-chest hold, each side", "Supine twist, each side", "Hamstring stretch, each side"],
    gifs: ["lie-and-breathe", "knee-to-chest", "supine-twist", "hamstring-stretch"],
    timing: [null, { sides: 2 }, { sides: 2 }, { sides: 2 }] },
  { id: 13, title: "Dance Break", level: "Moderate", moods: ["energized", "motivated"], places: ["home"],
    photo: "dance-break.jpg", photoAlt: "Cheerful older woman dancing in her living room", photoPosition: "50% 35%",
    description: "Put on your favorite songs and keep moving until time is up.",
    steps: ["Pick 2-3 upbeat songs", "Move however feels good", "Keep moving between songs", "Slow down with stretches"],
    gifs: ["pick-songs",
           ["dance-step-touch", "dance-sway", "dance-groove", "dance-march-clap"],
           ["dance-groove", "dance-march-clap", "dance-step-touch", "dance-sway"],
           ["shoulder-rolls", "neck-rolls", "slow-breaths", "side-bend", "arm-swings"]],
    timing: [{ seconds: 60 }, { rotate: 30 }, { rotate: 30 }, { rotate: 30 }] },
  { id: 14, title: "Fresh Air Stretch", level: "Easy", moods: ["low-energy"], places: ["outside"],
    photo: "fresh-air-stretch.jpg", photoAlt: "Woman stretching her arms overhead on a sunny forest path", photoPosition: "30% 45%",
    description: "Step outside for light stretching and slow, deep breaths.",
    steps: ["Stand tall and take 5 deep breaths", "Arm swings: open wide, then hug across", "Gentle side bends, one arm at a time",
            "Slow walk for a few minutes", "Calf and hamstring stretch, each side"],
    gifs: ["slow-breaths", "arm-swings", "side-bend", "walk-slow", "calf-hamstring-stretch"],
    timing: [{ reps: 5 }, null, null, null, { sides: 2 }] }
];

/* Names shown for animations that rotate inside one step (Dance Break) */
const ANIM_LABELS = {
  "dance-step-touch": "Step touch", "dance-sway": "Sway and wave", "dance-groove": "Raise the roof",
  "dance-march-clap": "March and clap", "shoulder-rolls": "Shoulder rolls", "neck-rolls": "Neck rolls",
  "slow-breaths": "Deep breaths", "side-bend": "Side stretch", "arm-swings": "Arm swings"
};

/* Bump this number whenever the animations change, so browsers load the new versions instead of cached ones */
const ASSET_VERSION = "16";

/* How the data works for each move:
   photo  = the move's photo in assets/images/moves/ (shown on Here's Your Move), photoAlt = its description
   steps  = what to do, in order
   gifs   = the animation for each step (a frame sheet in assets/moves/, described in js/animations.js)
   timing = optional, one entry per step: { reps: 10 } plays exactly 10 reps, { seconds: 20 } lasts 20 seconds
            and shows a countdown,
            { sides: 2 } splits the step between both sides (the animation is mirrored for side 2;
            mode: "reverse" plays it backward instead, e.g. shoulder rolls the other way;
            startReversed: true starts with the backward version; labels names each side, e.g. ["Forward", "Backward"]),
            { rotate: 30 } switches between a list of animations every 30 seconds.
            Steps without a fixed count or length share the rest of the time.
            When the minutes chosen equal the number of steps, every step gets exactly one minute
            and counted reps are spread evenly across that minute.
   even = true shares the time evenly across the steps so they fill the whole session without repeating
          (steps with a set length, like a 1-minute reach, keep it). Counted steps fill longer time with sets.
   repeat + circuit = true runs the list in whole rounds (Bodyweight Circuit, Park Bench). Every move,
          circuit or not, ends on its last movement exactly when the timer ends.
   shortList = which steps to keep, in priority order, when a move has more steps than minutes chosen
               (a 5-minute Desk Reset uses 5 of its 8 movements). */

const placeLabels = { home: "Home", outside: "Outside", work: "Work/School", gym: "Gym" };
const moodLabels = { "low-energy": "Low energy", stressed: "Stressed", energized: "Energized", motivated: "Motivated" };

/* ---------- 2. Helpers ---------- */
function saveData(key, value) { sessionStorage.setItem(key, JSON.stringify(value)); }
function loadData(key) {
  try {
    const text = sessionStorage.getItem(key);
    return text ? JSON.parse(text) : null;
  } catch (error) {
    return null; // damaged saved data is treated as missing
  }
}
/* Only accept answers the app actually offers (guards against old or hand-edited saved data) */
const TIME_OPTIONS = [5, 10, 15, 30];
function loadPreferences() {
  const prefs = loadData("preferences");
  if (!prefs || !TIME_OPTIONS.includes(Number(prefs.time)) || !moodLabels[prefs.mood] || !placeLabels[prefs.place]) return null;
  return { time: Number(prefs.time), mood: prefs.mood, place: prefs.place };
}
/* The saved move must be one of the app's moves; always use the latest version of it */
function loadCurrentMove() {
  const saved = loadData("currentMove");
  return (saved && moves.find(m => m.id === saved.id)) || null;
}
function formatTime(totalSeconds) {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0");
}
function findMatches(mood, place) {
  let matches = moves.filter(m => m.moods.includes(mood) && m.places.includes(place));
  if (matches.length === 0) matches = moves.filter(m => m.moods.includes(mood));
  return matches;
}
function pickRandom(list, skipId) {
  const choices = list.filter(m => m.id !== skipId);
  return choices.length ? choices[Math.floor(Math.random() * choices.length)] : null;
}
function show(el) { el.classList.remove("is-hidden"); }
function hide(el) { el.classList.add("is-hidden"); }

/* Single-choice button groups (preferences and rating). Selected state uses aria-pressed,
   which the CSS styles in Terracotta. */
function setupOptionGroup(groupName, onSelect, preselect) {
  const buttons = document.querySelectorAll(`[data-group="${groupName}"] .option`);
  buttons.forEach(button => {
    if (preselect !== undefined && button.dataset.value === String(preselect)) button.setAttribute("aria-pressed", "true");
    button.addEventListener("click", () => {
      buttons.forEach(b => b.setAttribute("aria-pressed", "false"));
      button.setAttribute("aria-pressed", "true");
      onSelect(button.dataset.value);
    });
  });
}

/* ---------- 3. Navigation menu (phones and tablets) ---------- */
function initNav() {
  const toggle = document.querySelector(".site-header__toggle");
  const menu = document.getElementById("site-menu");
  if (!toggle || !menu) return;
  toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && menu.classList.contains("is-open")) {
      menu.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.focus();
    }
  });
}

/* ---------- 4. Tell Us About You ---------- */
function initPreferencesPage() {
  const saved = loadPreferences() || {};
  const choices = { time: saved.time || null, mood: saved.mood || null, place: saved.place || null };
  const error = document.getElementById("formError");
  const done = document.getElementById("allAnswered");

  function updateSummary() {
    document.querySelector('[data-summary="time"]').textContent = choices.time ? choices.time + " min" : "Time";
    document.querySelector('[data-summary="mood"]').textContent = choices.mood ? moodLabels[choices.mood] : "Feeling";
    document.querySelector('[data-summary="place"]').textContent = choices.place ? placeLabels[choices.place] : "Place";
    const complete = choices.time && choices.mood && choices.place;
    complete ? show(done) : hide(done);
    if (complete) error.textContent = "";
    const line = document.getElementById("summaryText");
    const parts = [choices.time && choices.time + " min", choices.mood && moodLabels[choices.mood], choices.place && placeLabels[choices.place]].filter(Boolean);
    line.textContent = parts.length ? parts.join(" · ") : "Answer all three questions";
    line.classList.toggle("is-complete", Boolean(complete));
  }

  setupOptionGroup("time", v => { choices.time = Number(v); updateSummary(); }, choices.time);
  setupOptionGroup("mood", v => { choices.mood = v; updateSummary(); }, choices.mood);
  setupOptionGroup("place", v => { choices.place = v; updateSummary(); }, choices.place);
  updateSummary();

  document.getElementById("findMove").addEventListener("click", () => {
    if (!choices.time || !choices.mood || !choices.place) {
      error.textContent = "Answer all three questions to find your move.";
      return;
    }
    saveData("preferences", choices);
    saveData("currentMove", pickRandom(findMatches(choices.mood, choices.place)));
    window.location.href = "suggestion.html";
  });
}

/* ---------- 5. Here's Your Move ---------- */
/* Show the move's own photo; if the file is missing, fall back to the default MYMOVE photo */
function showMovePhoto(move) {
  const img = document.getElementById("moveImage");
  if (!img || !move.photo) return;
  img.onerror = () => {
    img.onerror = null;
    img.src = "assets/images/desk-stretch.jpg";
    img.alt = "Woman stretching her arms overhead at a colorful desk";
    img.style.objectPosition = "52% 38%";
  };
  img.src = `assets/images/moves/${move.photo}`;
  img.alt = move.photoAlt || "";
  img.style.objectPosition = move.photoPosition || "50% 40%";
}

function initSuggestionPage() {
  const prefs = loadPreferences();
  let move = loadCurrentMove();
  if (!prefs || !move) { show(document.getElementById("missingData")); return; }

  function render() {
    document.getElementById("moveTitle").textContent = move.title;
    document.getElementById("moveTime").textContent = prefs.time + " minutes";
    document.getElementById("moveLevel").textContent = move.level;
    document.getElementById("movePlace").textContent = placeLabels[prefs.place];
    document.getElementById("moveDescription").textContent = move.description;
    showMovePhoto(moves.find(m => m.id === move.id) || move);
    const list = document.getElementById("stepPreview");
    list.innerHTML = "";
    // Show only the movements that fit the time chosen
    const planned = planMove(moves.find(m => m.id === move.id) || move, prefs.time);
    planned.steps.forEach(step => {
      const li = document.createElement("li");
      li.className = "step-list__item";
      li.textContent = step;
      list.appendChild(li);
    });
  }
  document.getElementById("matchText").textContent =
    `${prefs.time} min · ${moodLabels[prefs.mood]} · ${placeLabels[prefs.place]}`;
  render();
  show(document.getElementById("suggestion"));

  document.getElementById("tryAnother").addEventListener("click", () => {
    const next = pickRandom(findMatches(prefs.mood, prefs.place), move.id);
    const message = document.getElementById("suggestionMessage");
    if (!next) { message.textContent = "This is the only move that matches your answers."; return; }
    message.textContent = "";
    move = next;
    saveData("currentMove", move);
    render();
  });
}

/* ---------- 6. Movement ---------- */

/* Match the number of movements to the time: if a move has more steps than minutes chosen,
   keep the highest-priority steps (in their original order), one per minute. */
function planMove(move, minutes) {
  if (!move.shortList || move.steps.length <= minutes) return move;
  const keep = move.shortList.slice(0, minutes).sort((a, b) => a - b);
  const pick = list => (list ? keep.map(i => list[i]) : list);
  return { ...move, steps: pick(move.steps), gifs: pick(move.gifs), timing: pick(move.timing) };
}

/* Turn a move into a timed plan. Steps with a count or length get exactly that long
   (10 reps x the length of one rep); the other steps share the remaining time.
   Circuits (repeat: true) run the list again in rounds until the timer ends. */
function buildSchedule(move, totalSeconds) {
  const timing = move.timing || [];
  // When the minutes chosen equal the number of steps, each step gets exactly one minute
  const oneMinuteEach = !move.circuit && totalSeconds === move.steps.length * 60;
  const steps = move.steps.map((text, index) => {
    const t = timing[index] || {};
    const entry = move.gifs ? move.gifs[index] : null;
    const anims = Array.isArray(entry) ? entry : (entry ? [entry] : []);
    const first = ANIMS[anims[0]];
    const sides = t.sides || 1;
    let fixed = null;
    if (oneMinuteEach) fixed = 60;
    else if (t.seconds) fixed = t.seconds;
    else if (t.reps && first && !move.even) fixed = t.reps * sides * first.cycle;
    return { index, text, anims, rotate: t.rotate || 0, reps: t.reps || 0, sides, mode: t.mode || "mirror",
             startReversed: Boolean(t.startReversed), labels: t.labels || null, countdown: Boolean(t.seconds), fixed };
  });
  const sum = list => list.reduce((total, value) => total + value, 0);
  let lengths, rounds = 1;

  if (move.circuit) {
    // Circuits run a whole number of rounds. Timed steps (a 20-second plank) keep their length;
    // the other steps stretch or shrink slightly so the last round ends exactly when the timer does.
    const natural = steps.map(step => (step.fixed !== null ? step.fixed : 60));
    const roundLength = sum(natural);
    rounds = Math.max(1, Math.round(totalSeconds / roundLength));
    const perRound = totalSeconds / rounds;
    const timed = sum(steps.map((step, i) => (step.countdown ? natural[i] : 0)));
    const adjustable = roundLength - timed;
    const scale = adjustable > 0 ? (perRound - timed) / adjustable : 0;
    lengths = scale > 0.4
      ? natural.map((length, i) => (steps[i].countdown ? length : length * scale))
      : natural.map(length => length * (perRound / roundLength));
  } else {
    // One pass through the list. Steps without a set length share the remaining time;
    // if everything is set, all steps scale together so the list fills the time exactly.
    const fixedTotal = sum(steps.map(step => step.fixed || 0));
    const flexible = steps.filter(step => step.fixed === null).length;
    const share = flexible ? Math.max(0, (totalSeconds - fixedTotal) / flexible) : 0;
    lengths = steps.map(step => (step.fixed !== null ? step.fixed : share));
    const planned = sum(lengths);
    if (planned > 0 && Math.abs(planned - totalSeconds) > 0.01) lengths = lengths.map(length => length * (totalSeconds / planned));
  }

  // Lay the steps end to end; the final step always finishes exactly at the end of the timer
  const plan = [];
  let time = 0;
  for (let round = 1; round <= rounds; round++) {
    steps.forEach((step, i) => {
      const length = lengths[i];
      if (length <= 0) return;
      plan.push({ ...step, start: time, end: time + length, length, round });
      time += length;
    });
  }
  plan[plan.length - 1].end = totalSeconds;
  // Counted steps fill their time: whole sets at a natural pace (e.g. 3 sets of 10 push-ups),
  // or one set spread evenly (5 breaths in one minute = 12 seconds each)
  plan.forEach(seg => {
    if (!seg.reps) return;
    const natural = seg.reps * seg.sides * (ANIMS[seg.anims[0]] ? ANIMS[seg.anims[0]].cycle : seg.length);
    seg.sets = Math.max(1, Math.round(seg.length / natural));
    seg.repLength = seg.length / (seg.sets * seg.reps * seg.sides);
  });
  return plan;
}

function initActivityPage() {
  const prefs = loadPreferences();
  const saved = loadCurrentMove();
  if (!prefs || !saved) { show(document.getElementById("missingData")); return; }
  // Keep only the movements that fit the time chosen
  const move = planMove(saved, prefs.time);
  show(document.getElementById("activity"));
  document.getElementById("activityTitle").textContent = move.title;

  const total = prefs.time * 60;
  const plan = buildSchedule(move, total);
  const anim = setupAnimation();

  // Step list
  const list = document.getElementById("stepList");
  const items = move.steps.map(step => {
    const li = document.createElement("li");
    li.className = "step-list__item";
    li.innerHTML = "<span></span>";
    li.firstChild.textContent = step;
    list.appendChild(li);
    return li;
  });

  const ring = document.getElementById("timerRing");
  const circumference = 2 * Math.PI * 44;
  ring.style.strokeDasharray = circumference;
  const display = document.getElementById("timerDisplay");
  const message = document.getElementById("timerMessage");
  const startBtn = document.getElementById("startTimer");
  const pauseBtn = document.getElementById("pauseTimer");
  document.getElementById("timerTotal").textContent = "of " + formatTime(total);

  // The clock: elapsed time comes from the system clock, so the timer stays accurate
  // even if the browser slows down a background tab
  let elapsedMs = 0;
  let runningSince = null;
  let state = "ready"; // ready | running | paused | done
  const now = () => Math.min(total * 1000, elapsedMs + (runningSince !== null ? performance.now() - runningSince : 0));

  function segmentAt(seconds) {
    return plan.find(seg => seconds < seg.end) || plan[plan.length - 1];
  }

  function render() {
    const ms = now();
    const seconds = ms / 1000;
    const remaining = Math.max(0, Math.ceil(total - seconds));
    display.textContent = formatTime(remaining);
    // The line grows clockwise from the top as time passes; the circle rides on its leading end
    // The line grows clockwise from the top; a short teal tail shows right away, with the circle on its leading end
    const shown = Math.max(seconds / total, 0.02);
    ring.style.strokeDashoffset = circumference * (1 - shown);
    const angle = shown * 2 * Math.PI;
    knob.setAttribute("cx", 50 + 44 * Math.cos(angle));
    knob.setAttribute("cy", 50 + 44 * Math.sin(angle));
    scrub.setAttribute("aria-valuemax", total);
    scrub.setAttribute("aria-valuenow", Math.round(seconds));
    scrub.setAttribute("aria-valuetext", `${formatTime(remaining)} remaining`);

    const seg = segmentAt(seconds);
    const local = Math.max(0, seconds - seg.start);
    items.forEach((li, i) => {
      li.classList.toggle("step-list__item--done", i < seg.index);
      li.classList.toggle("step-list__item--current", i === seg.index);
      const tag = li.querySelector(".step-list__now");
      if (i === seg.index && !tag) li.insertAdjacentHTML("beforeend", '<span class="step-list__now">NOW</span>');
      if (i !== seg.index && tag) tag.remove();
    });
    document.getElementById("stepCount").textContent =
      `Step ${seg.index + 1} of ${items.length}` + (move.repeat && seg.round > 1 ? ` · Round ${seg.round}` : "");
    const next = plan[plan.indexOf(seg) + 1];
    if (anim) anim.draw(seg, local, state, next);
  }

  // Drag the ring (or use the arrow keys on it) to rewind or skip ahead
  const scrub = document.getElementById("timerScrub");
  const knob = document.getElementById("timerKnob");
  function seekTo(seconds) {
    seconds = Math.max(0, Math.min(total, seconds));
    elapsedMs = seconds * 1000;
    if (runningSince !== null) runningSince = performance.now();
    if (state === "ready" && seconds > 0) state = "paused";
    if (state === "done" && seconds < total) state = "paused";
    if (seconds >= total) { finish(); return; }
    if (state === "paused") message.textContent = "Paused. Press Start to continue.";
    setButtons(); render();
  }
  function seekFromPointer(event) {
    const box = scrub.getBoundingClientRect();
    const dx = event.clientX - (box.left + box.width / 2);
    const dy = event.clientY - (box.top + box.height / 2);
    let fraction = Math.atan2(dx, -dy) / (2 * Math.PI);
    if (fraction < 0) fraction += 1;
    // don't jump from the end to the start (or back) when dragging past 12 o'clock
    const current = now() / 1000 / total;
    if (Math.abs(fraction - current) > 0.5) fraction = current > 0.5 ? 1 : 0;
    seekTo(fraction * total);
  }
  scrub.addEventListener("pointerdown", event => {
    scrub.setPointerCapture(event.pointerId);
    scrub.classList.add("is-dragging");
    seekFromPointer(event);
  });
  scrub.addEventListener("pointermove", event => { if (scrub.hasPointerCapture(event.pointerId)) seekFromPointer(event); });
  scrub.addEventListener("pointerup", event => { scrub.releasePointerCapture(event.pointerId); scrub.classList.remove("is-dragging"); });
  scrub.addEventListener("keydown", event => {
    const step = { ArrowRight: 5, ArrowUp: 5, ArrowLeft: -5, ArrowDown: -5, PageUp: 60, PageDown: -60 }[event.key];
    if (step !== undefined) { event.preventDefault(); seekTo(now() / 1000 + step); }
    if (event.key === "Home") { event.preventDefault(); seekTo(0); }
    if (event.key === "End") { event.preventDefault(); seekTo(total); }
  });

  function tick() {
    render();
    if (runningSince === null) return;
    if (now() >= total * 1000) { finish(); return; }
    requestAnimationFrame(tick);
  }
  function setButtons() {
    const running = state === "running";
    pauseBtn.classList.toggle("is-active", running);
    startBtn.classList.toggle("is-active", !running);
    startBtn.disabled = running || state === "done";
  }
  function start() {
    if (state === "running" || state === "done") return;
    state = "running";
    runningSince = performance.now();
    message.textContent = "";
    setButtons();
    requestAnimationFrame(tick);
  }
  function pause() {
    if (state !== "running") return;
    elapsedMs = now(); runningSince = null; state = "paused";
    message.textContent = "Paused.";
    setButtons(); render();
  }
  function finish() {
    elapsedMs = total * 1000; runningSince = null; state = "done";
    message.textContent = "Time’s up! Select End Move to finish.";
    setButtons(); render();
  }
  function reset() {
    elapsedMs = 0; runningSince = null; state = "ready";
    message.textContent = "";
    setButtons(); render();
  }

  startBtn.addEventListener("click", start);
  pauseBtn.addEventListener("click", pause);
  document.getElementById("resetTimer").addEventListener("click", reset);
  document.getElementById("panelStart").addEventListener("click", start);
  // There are two End Move buttons: one under the timer (desktop) and one after the steps (phones/tablets)
  let ended = false;
  document.querySelectorAll('[data-action="end-move"]').forEach(button => {
    button.addEventListener("click", () => {
      if (ended) return; // a double-click saves the session only once
      const moved = Math.floor(now() / 1000);
      if (moved < 1) { message.textContent = "Press Start to begin your move first."; return; }
      ended = true;
      document.querySelectorAll('[data-action="end-move"]').forEach(b => { b.disabled = true; });
      runningSince = null;
      const history = loadData("history") || [];
      history.push({ title: move.title, secondsMoved: moved, level: move.level, place: prefs.place, rating: null });
      saveData("history", history);
      window.location.href = "completion.html";
    });
  });

  setButtons();
  render();
}

/* Step animation panel. Each animation is a sheet of frames (see js/animations.js).
   The frame shown is worked out from the timer, so reps line up exactly with the clock:
   nothing moves before Start, Pause freezes the frame, and counted steps show exactly that many reps. */
function setupAnimation() {
  const player = document.getElementById("videoPlayer");
  const canvas = document.getElementById("stepCanvas");
  const label = document.getElementById("videoLabel");
  const caption = document.getElementById("videoCredit");
  const startPrompt = document.getElementById("panelStart");
  const countBadge = document.getElementById("repCount");
  const countdown = document.getElementById("stepCountdown");
  const countdownNum = document.getElementById("stepCountdownNum");
  const countdownLabel = document.getElementById("stepCountdownLabel");
  if (typeof ANIMS === "undefined" || !canvas) return null;
  const ctx = canvas.getContext("2d");
  player.classList.add("media__video--gif");
  const sheets = {};
  function sheet(name) {
    if (!sheets[name]) {
      const img = new Image();
      img.src = `assets/moves/${name}.webp?v=${ASSET_VERSION}`;
      sheets[name] = img;
    }
    return sheets[name];
  }

  function animFor(seg, local) {
    if (seg.rotate && seg.anims.length > 1) return seg.anims[Math.floor(local / seg.rotate) % seg.anims.length];
    return seg.anims[0];
  }

  function frameInfo(seg, local) {
    const name = animFor(seg, local);
    const a = ANIMS[name];
    const cycle = seg.repLength || a.cycle;
    let phase = (local % cycle) / cycle;
    let side = 0, rep = 0;
    let set = 1;
    if (seg.reps) {
      const perSet = seg.reps * seg.sides;
      const totalReps = perSet * (seg.sets || 1);
      const k = Math.floor(local / cycle);
      if (k >= totalReps) { phase = 0; rep = seg.reps; side = seg.sides - 1; set = seg.sets || 1; }
      else { const inSet = k % perSet; set = Math.floor(k / perSet) + 1; rep = (inSet % seg.reps) + 1; side = Math.floor(inSet / seg.reps); }
    } else if (seg.sides === 2) {
      side = local >= seg.length / 2 ? 1 : 0;
    }
    // "reverse" plays the animation backward on one side (e.g. shoulder rolls forward vs. backward)
    const reverse = seg.mode === "reverse" && (side === 1) !== seg.startReversed;
    const mirror = side === 1 && seg.mode !== "reverse" ? (a.mirror === "vertical" ? "vertical" : "horizontal") : null;
    if (reverse) phase = (1 - phase) % 1;
    return { name, a, phase, rep, side, mirror, set };
  }

  function drawFrame(name, phase, mirror) {
    const img = sheet(name);
    if (!img.complete || !img.naturalWidth) { img.onload = () => drawFrame(name, phase, mirror); return; }
    const a = ANIMS[name];
    const exact = phase * a.frames;
    const i = Math.floor(exact) % a.frames;
    const j = (i + 1) % a.frames;
    const blend = exact - Math.floor(exact);
    const { cols, width, height } = ANIM_SHEET;
    ctx.save();
    if (mirror === "horizontal") { ctx.translate(canvas.width, 0); ctx.scale(-1, 1); }
    if (mirror === "vertical") { ctx.translate(0, canvas.height); ctx.scale(1, -1); }
    ctx.globalAlpha = 1;
    ctx.drawImage(img, (i % cols) * width, Math.floor(i / cols) * height, width, height, 0, 0, canvas.width, canvas.height);
    if (blend > 0.01) { // blend toward the next frame for smoother motion
      ctx.globalAlpha = blend;
      ctx.drawImage(img, (j % cols) * width, Math.floor(j / cols) * height, width, height, 0, 0, canvas.width, canvas.height);
    }
    ctx.restore();
  }

  return {
    draw(seg, local, state, next) {
      if (!seg.anims.length || !ANIMS[seg.anims[0]]) { label.textContent = "Animation coming soon"; return; }
      if (next) next.anims.forEach(sheet); // load the next animations ahead of time
      seg.anims.forEach(sheet);
      const info = state === "ready" ? { name: seg.anims[0], phase: 0, rep: 0, side: 0, mirror: null } : frameInfo(seg, local);
      drawFrame(info.name, info.phase, info.mirror);
      canvas.hidden = false;
      // Screen readers hear which step the figure is showing
      const description = `Animated figure demonstrating: ${seg.text}`;
      if (canvas.getAttribute("aria-label") !== description) canvas.setAttribute("aria-label", description);

      const prefix = { ready: "UP FIRST", running: "NOW", paused: "PAUSED", done: "DONE" }[state];
      label.textContent = `${prefix} · ${seg.text}`;
      label.parentElement.title = seg.text;
      // Counter badge: "3 of 10", plus the side or direction for two-sided steps
      const parts = [];
      if (seg.reps && seg.sets > 1) parts.push(`Set ${state === "ready" ? 1 : info.set} of ${seg.sets}`);
      if (seg.reps) parts.push(`${state === "ready" ? 0 : Math.max(1, info.rep)} of ${seg.reps}`);
      if (seg.sides === 2) parts.push(seg.labels ? seg.labels[info.side] : `Side ${info.side + 1}`);
      if (seg.rotate && seg.anims.length > 1) parts.push(ANIM_LABELS[info.name] || "");
      countBadge.textContent = parts.join(" · ");
      countBadge.hidden = parts.length === 0;

      // Timed steps (like a 20-second plank) count down in the corner
      if (seg.countdown) {
        const left = Math.max(0, Math.ceil(seg.end - seg.start - local));
        countdownNum.textContent = left >= 60 ? formatTime(left).replace(/^0/, "") : left;
        countdownLabel.textContent = left >= 60 ? "left" : (left === 1 ? "second left" : "seconds left");
        countdown.classList.toggle("is-final", state === "running" && left <= 3);
        countdown.classList.toggle("is-below-badge", !countBadge.hidden);
        countdown.hidden = false;
      } else {
        countdown.hidden = true;
      }
      startPrompt.hidden = state === "running" || state === "done";
      startPrompt.querySelector("span").textContent = state === "paused" ? "Paused · press Start to resume" : "Press Start to begin";
      caption.innerHTML = next && next.index !== seg.index ? "Up next: <strong></strong>" : "Last step: you’ve got this.";
      if (next && next.index !== seg.index) caption.querySelector("strong").textContent = next.text;
    }
  };
}

/* ---------- 7. Nice Work ---------- */
function initCompletionPage() {
  const saved = loadData("history");
  const history = Array.isArray(saved)
    ? saved.filter(s => s && typeof s.title === "string" && Number.isFinite(s.secondsMoved) && placeLabels[s.place])
    : [];
  if (history.length === 0) { show(document.getElementById("missingData")); return; }
  const latest = history[history.length - 1];
  show(document.getElementById("summary"));
  document.getElementById("summaryTitle").textContent = latest.title;
  document.getElementById("summaryDuration").textContent = formatTime(latest.secondsMoved);
  document.getElementById("summaryLevel").textContent = latest.level;
  document.getElementById("summaryPlace").textContent = placeLabels[latest.place];

  const list = document.getElementById("historyList");
  function renderHistory() {
    list.innerHTML = "";
    history.slice().reverse().forEach(s => {
      const li = document.createElement("li");
      li.className = "history__item";
      li.innerHTML = `<img class="history__mark" src="assets/submark.svg" alt="">
        <div><p class="history__title"></p><p class="history__meta"></p></div>`;
      li.querySelector(".history__title").textContent = s.title;
      li.querySelector(".history__meta").textContent = `${formatTime(s.secondsMoved)} · ${placeLabels[s.place]}`;
      if (s.rating) {
        const pill = document.createElement("span");
        pill.className = "chip history__rating " + (s.rating === "Great" ? "chip--pill-terracotta" : "chip--pill-blue");
        pill.textContent = s.rating;
        li.appendChild(pill);
      }
      list.appendChild(li);
    });
  }
  setupOptionGroup("rating", value => {
    latest.rating = value;
    saveData("history", history);
    document.getElementById("ratingMessage").innerHTML =
      '<svg class="icon" aria-hidden="true"><use href="assets/icons.svg#check"></use></svg>Saved to this session';
    renderHistory();
  }, latest.rating || undefined);
  if (latest.rating) document.getElementById("ratingMessage").textContent = "Saved to this session";

  const toggle = document.getElementById("toggleHistory");
  toggle.addEventListener("click", () => {
    const hidden = list.classList.toggle("is-hidden");
    toggle.setAttribute("aria-expanded", String(!hidden));
    toggle.querySelector("span").textContent = hidden ? "View My Moves" : "Hide My Moves";
  });
  renderHistory();
}

/* ---------- 8. Run ---------- */
initNav();
const page = document.body.dataset.page;
if (page === "preferences") initPreferencesPage();
if (page === "suggestion") initSuggestionPage();
if (page === "activity") initActivityPage();
if (page === "completion") initCompletionPage();

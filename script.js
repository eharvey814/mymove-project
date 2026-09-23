/* =========================================================
   MYMOVE - script.js
   One script shared by every page. Each page's <body> has a
   data-page attribute, and only that page's code runs.
   ========================================================= */


/* ---------- 1. Move data ----------
   Each move lists the moods and places it fits.
   Duration comes from the user's time choice, not the move. */

const moves = [
    {
        id: 1, title: "Box Breathing Stretch", level: "Easy",
        moods: ["stressed"], places: ["home", "work", "outside"],
        description: "Slow stretching paired with box breathing to release tension.",
        steps: ["Sit or stand tall", "Breathe in for 4, hold 4, out 4, hold 4", "Slow neck rolls", "Reach overhead and side bend", "Finish with 5 slow breaths"]
    },
    {
        id: 2, title: "Desk Reset", level: "Easy",
        moods: ["low-energy", "stressed"], places: ["work"],
        description: "Stand up, loosen your shoulders, and break up your sitting time.",
        steps: ["Stand and reach overhead", "Shoulder rolls, 10 each way", "Seated spinal twist", "Calf raises at your desk", "Walk to refill your water"]
    },
    {
        id: 3, title: "Brisk Walk", level: "Moderate",
        moods: ["energized", "motivated"], places: ["outside", "work"],
        description: "Put your energy to use with a quick-paced walk.",
        steps: ["Start at an easy pace for 1 minute", "Pick up to a brisk pace", "Swing your arms", "Slow down for the last minute"]
    },
    {
        id: 4, title: "Wake-Up Flow", level: "Easy",
        moods: ["low-energy"], places: ["home", "gym"],
        description: "Gentle moves that raise your heart rate a little and wake you up.",
        steps: ["March in place", "Arm circles", "Hip circles", "10 slow squats", "Reach and touch toes"]
    },
    {
        id: 5, title: "Bodyweight Circuit", level: "Challenging",
        moods: ["energized", "motivated"], places: ["home", "gym"],
        description: "A no-equipment circuit. Repeat the round until time runs out.",
        steps: ["10 squats", "10 push-ups (knees OK)", "10 lunges each leg", "20-second plank", "Rest 30 seconds and repeat"]
    },
    {
        id: 6, title: "Unwind Walk", level: "Easy",
        moods: ["stressed", "low-energy"], places: ["outside"],
        description: "An easy walk outside. Focus on what you see and hear.",
        steps: ["Walk at a relaxed pace", "Name 5 things you can see", "Name 3 things you can hear", "Take 5 slow breaths before heading back"]
    },
    {
        id: 7, title: "Stair Intervals", level: "Challenging",
        moods: ["energized", "motivated"], places: ["work", "outside", "gym"],
        description: "Short bursts on stairs with walking recovery in between.",
        steps: ["Walk one flight to warm up", "Climb at a quick pace", "Walk back down slowly", "Repeat climb and recover", "Stretch your calves to finish"]
    },
    {
        id: 8, title: "Gentle Mobility", level: "Easy",
        moods: ["low-energy", "stressed"], places: ["home", "gym"],
        description: "Slow joint movements to loosen up stiff spots.",
        steps: ["Cat-cow, 10 times", "Hip flexor stretch each side", "Thread the needle each side", "Child's pose for 5 breaths"]
    },
    {
        id: 9, title: "Incline Walk", level: "Moderate",
        moods: ["motivated", "low-energy"], places: ["gym"],
        description: "A steady walk on a treadmill incline. Low impact, good effort.",
        steps: ["Walk flat for 2 minutes", "Raise the incline a few levels", "Hold a steady pace", "Lower the incline to cool down"]
    },
    {
        id: 10, title: "Park Bench Workout", level: "Moderate",
        moods: ["energized", "motivated"], places: ["outside"],
        description: "Use a bench or low wall for a quick strength session.",
        steps: ["Step-ups, 10 each leg", "Incline push-ups, 10", "Bench dips, 10", "Walk for 1 minute and repeat"]
    },
    {
        id: 11, title: "Hallway Walk & Stretch", level: "Easy",
        moods: ["low-energy"], places: ["work"],
        description: "A lap around the building with a stretch at the end.",
        steps: ["Walk a lap of your floor or building", "Take the stairs one flight", "Doorway chest stretch", "Standing quad stretch each side"]
    },
    {
        id: 12, title: "Stretch & Breathe", level: "Easy",
        moods: ["stressed"], places: ["gym"],
        description: "Use a mat and a quiet corner to stretch and slow your breathing.",
        steps: ["Lie on your back and breathe slowly", "Knee-to-chest each side", "Supine twist each side", "Hamstring stretch each side"]
    },
    {
        id: 13, title: "Dance Break", level: "Moderate",
        moods: ["energized", "motivated"], places: ["home"],
        description: "Put on your favorite songs and keep moving until time is up.",
        steps: ["Pick 2-3 upbeat songs", "Move however feels good", "Keep moving between songs", "Slow down with a stretch at the end"]
    }
];

// Friendly labels for values stored in data-value attributes
const placeLabels = { home: "Home", outside: "Outside", work: "Work/School", gym: "Gym" };


/* ---------- 2. Helpers ---------- */

// sessionStorage only stores text, so convert to and from JSON
function saveData(key, value) {
    sessionStorage.setItem(key, JSON.stringify(value));
}

function loadData(key) {
    const text = sessionStorage.getItem(key);
    return text ? JSON.parse(text) : null;
}

// Turn seconds into "mm:ss"
function formatTime(totalSeconds) {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return String(minutes).padStart(2, "0") + ":" + String(seconds).padStart(2, "0");
}

// Find every move that matches the user's mood and place.
// If nothing matches both, fall back to mood only.
function findMatches(mood, place) {
    let matches = moves.filter(move => move.moods.includes(mood) && move.places.includes(place));

    if (matches.length === 0) {
        matches = moves.filter(move => move.moods.includes(mood));
    }

    return matches;
}

// Pick a random move from a list, skipping one id if given
function pickRandom(list, skipId) {
    const choices = list.filter(move => move.id !== skipId);
    if (choices.length === 0) return null;
    return choices[Math.floor(Math.random() * choices.length)];
}

// Make a group of buttons act like single-choice options.
// onSelect runs with the clicked button's data-value.
function setupOptionGroup(groupName, onSelect) {
    const buttons = document.querySelectorAll(`[data-group="${groupName}"] .option`);

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            buttons.forEach(btn => {
                btn.classList.remove("selected");
                btn.setAttribute("aria-pressed", "false");
            });

            button.classList.add("selected");
            button.setAttribute("aria-pressed", "true");
            onSelect(button.dataset.value);
        });
    });
}

// Show the "go back and choose" message and hide the main content
function showMissingData(contentId) {
    document.getElementById("missingData").classList.remove("hidden");
    document.getElementById(contentId).classList.add("hidden");
}


/* ---------- 3. Preferences page (move.html) ---------- */

function initPreferencesPage() {
    const choices = { time: null, mood: null, place: null };

    setupOptionGroup("time", value => choices.time = Number(value));
    setupOptionGroup("mood", value => choices.mood = value);
    setupOptionGroup("place", value => choices.place = value);

    document.getElementById("findMove").addEventListener("click", () => {
        const error = document.getElementById("formError");

        if (!choices.time || !choices.mood || !choices.place) {
            error.textContent = "Answer all three questions to find your move.";
            return;
        }

        error.textContent = "";

        const matches = findMatches(choices.mood, choices.place);
        const move = pickRandom(matches);

        saveData("preferences", choices);
        saveData("currentMove", move);

        window.location.href = "suggestion.html";
    });
}


/* ---------- 4. Suggestion page (suggestion.html) ---------- */

function initSuggestionPage() {
    const preferences = loadData("preferences");
    let move = loadData("currentMove");

    if (!preferences || !move) {
        showMissingData("suggestion");
        document.querySelector(".button-row").classList.add("hidden");
        return;
    }

    function showMove() {
        document.getElementById("moveTitle").textContent = move.title;
        document.getElementById("moveDescription").textContent = move.description;
        document.getElementById("moveTime").textContent = preferences.time + " minutes";
        document.getElementById("movePlace").textContent = placeLabels[preferences.place];
        document.getElementById("moveLevel").textContent = move.level;
        document.getElementById("suggestion").classList.remove("hidden");
    }

    showMove();

    document.getElementById("tryAnother").addEventListener("click", () => {
        const matches = findMatches(preferences.mood, preferences.place);
        const next = pickRandom(matches, move.id);
        const message = document.getElementById("suggestionMessage");

        if (!next) {
            message.textContent = "This is the only move that matches your answers. Change your answers to see others.";
            return;
        }

        message.textContent = "";
        move = next;
        saveData("currentMove", move);
        showMove();
    });
}


/* ---------- 5. Movement page (movement.html) ---------- */

function initMovementPage() {
    const preferences = loadData("preferences");
    const move = loadData("currentMove");

    if (!preferences || !move) {
        showMissingData("activity");
        return;
    }

    document.getElementById("activity").classList.remove("hidden");
    document.getElementById("activityTitle").textContent = move.title;

    // Build the step checklist
    const stepList = document.getElementById("stepList");
    move.steps.forEach((step, index) => {
        const item = document.createElement("li");
        const label = document.createElement("label");
        const checkbox = document.createElement("input");

        checkbox.type = "checkbox";
        checkbox.id = "step" + index;
        label.htmlFor = checkbox.id;
        label.textContent = step;

        item.append(checkbox, label);
        stepList.appendChild(item);
    });

    // Timer: counts down from the time the user picked
    const totalSeconds = preferences.time * 60;
    let remaining = totalSeconds;
    let intervalId = null;

    const display = document.getElementById("timerDisplay");
    const timerMessage = document.getElementById("timerMessage");
    display.textContent = formatTime(remaining);

    function stopTimer() {
        clearInterval(intervalId);
        intervalId = null;
    }

    document.getElementById("startTimer").addEventListener("click", () => {
        if (intervalId || remaining === 0) return; // already running or finished

        timerMessage.textContent = "";
        intervalId = setInterval(() => {
            remaining--;
            display.textContent = formatTime(remaining);

            if (remaining === 0) {
                stopTimer();
                timerMessage.textContent = "Time's up! Select End Move to finish.";
            }
        }, 1000);
    });

    document.getElementById("pauseTimer").addEventListener("click", () => {
        if (intervalId) {
            stopTimer();
            timerMessage.textContent = "Paused.";
        }
    });

    document.getElementById("resetTimer").addEventListener("click", () => {
        stopTimer();
        remaining = totalSeconds;
        display.textContent = formatTime(remaining);
        timerMessage.textContent = "";
    });

    // End Move: save this session to history, then go to the completion page
    document.getElementById("endMove").addEventListener("click", () => {
        stopTimer();

        const stepsDone = stepList.querySelectorAll("input:checked").length;

        const session = {
            title: move.title,
            secondsMoved: totalSeconds - remaining,
            stepsDone: stepsDone,
            stepsTotal: move.steps.length,
            place: preferences.place,
            rating: null
        };

        const history = loadData("history") || [];
        history.push(session);
        saveData("history", history);

        window.location.href = "complete.html";
    });
}


/* ---------- 6. Completion page (complete.html) ---------- */

function initCompletePage() {
    const history = loadData("history");

    if (!history || history.length === 0) {
        showMissingData("summary");
        return;
    }

    const latest = history[history.length - 1];

    document.getElementById("summary").classList.remove("hidden");
    document.getElementById("summaryTitle").textContent = "You finished " + latest.title + ".";
    document.getElementById("summaryDuration").textContent = formatTime(latest.secondsMoved);
    document.getElementById("summarySteps").textContent = latest.stepsDone + " of " + latest.stepsTotal;
    document.getElementById("summaryPlace").textContent = placeLabels[latest.place];

    // Save the "How did it feel?" answer to the latest session
    setupOptionGroup("rating", value => {
        latest.rating = value;
        saveData("history", history);
        document.getElementById("ratingMessage").textContent = "Saved.";
        showHistory();
    });

    function showHistory() {
        const list = document.getElementById("historyList");
        list.innerHTML = "";

        history.forEach(session => {
            const item = document.createElement("li");
            let text = session.title + " - " + formatTime(session.secondsMoved) + " at " + placeLabels[session.place];
            if (session.rating) text += " (" + session.rating + ")";
            item.textContent = text;
            list.appendChild(item);
        });
    }

    showHistory();
}


/* ---------- 7. Run the code for the current page ---------- */

const page = document.body.dataset.page;

if (page === "preferences") initPreferencesPage();
if (page === "suggestion") initSuggestionPage();
if (page === "movement") initMovementPage();
if (page === "complete") initCompletePage();
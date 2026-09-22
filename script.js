let selectedTime = null;
let selectedMood = null;
let selectedLocation = null;

// Select an option
document.querySelectorAll(".time").forEach(button => {
    button.addEventListener("click", () => {
        selectedTime = button.dataset.value;

        document.querySelectorAll(".time").forEach(btn => {
            btn.classList.remove("selected");
        });

        button.classList.add("selected");
    });
});

document.querySelectorAll(".mood").forEach(button => {
    button.addEventListener("click", () => {
        selectedMood = button.dataset.value;

        document.querySelectorAll(".mood").forEach(btn => {
            btn.classList.remove("selected");
        });

        button.classList.add("selected");
    });
});

document.querySelectorAll(".location").forEach(button => {
    button.addEventListener("click", () => {
        selectedLocation = button.dataset.value;

        document.querySelectorAll(".location").forEach(btn => {
            btn.classList.remove("selected");
        });

        button.classList.add("selected");
    });
});


// Find a movement recommendation
document.getElementById("findMove").addEventListener("click", () => {

    if (!selectedTime || !selectedMood || !selectedLocation) {
        alert("Please answer all three questions.");
        return;
    }

    let moveTitle = "";
    let moveDescription = "";

    if (selectedMood === "stressed" && selectedLocation === "home") {
        moveTitle = "10-Minute Stress Reset";
        moveDescription = "Try gentle stretching and box breathing exercises to help release tension and reset your energy.";
    }

    else if (selectedMood === "tired" && selectedLocation === "work") {
        moveTitle = "5-Minute Desk Movement";
        moveDescription = "Stand up, stretch, walk around, and complete a few simple movements to break up your workday.";
    }

    else if (selectedMood === "energized" && selectedLocation === "outside") {
        moveTitle = "20-Minute Outdoor Walk";
        moveDescription = "Take advantage of your energy with a brisk walk outside.";
    }

    else if (selectedMood === "unmotivated") {
        moveTitle = "5-Minute Get Moving";
        moveDescription = "Start small with five minutes of simple movement. The goal is simply to get started.";
    }

    else if (selectedTime === "5") {
        moveTitle = "5-Minute Movement Break";
        moveDescription = "Take five minutes to stretch, walk, or complete a few simple bodyweight movements.";
    }

    else if (selectedTime === "10") {
        moveTitle = "10-Minute Movement Break";
        moveDescription = "Use ten minutes to walk, stretch, or complete a short movement activity.";
    }

    else {
        moveTitle = "20-Minute Movement Session";
        moveDescription = "You have some extra time! Try a walk, mobility routine, or short workout that gets you moving.";
    }

    document.getElementById("moveTitle").textContent = moveTitle;
    document.getElementById("moveDescription").textContent = moveDescription;

    document.getElementById("result").classList.remove("hidden");
});

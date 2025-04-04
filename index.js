// Select the input field for setting the timer duration
const durationInput = document.querySelector("#duration");

// Select the start and pause buttons
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

// Select the SVG circle element (used for visual countdown)
const circle = document.querySelector("circle");

// Calculate the perimeter of the circle using the formula: circumference = 2 * π * radius
const perimeter = circle.getAttribute("r") * 2 * Math.PI;

// Set the stroke-dasharray to the perimeter so that the entire stroke is initially visible
circle.setAttribute("stroke-dasharray", perimeter);

let duration; // This variable will store the total duration of the timer

// Create a new Timer instance and define callback functions
const timer = new Timer(durationInput, startButton, pauseButton, {
  // Callback function when the timer starts
  onStart(totalDuration) {
    duration = totalDuration; // Store the total duration for later calculations
  },

  // Callback function for each tick (update)
  onTick(timeRemaining) {
    // Update the stroke-dashoffset to visually represent the remaining time
    circle.setAttribute(
      "stroke-dashoffset",
      (perimeter * timeRemaining) / duration - perimeter
    );
  },

  // Callback function when the timer completes
  onComplete() {
    console.log("Timer is completed"); // Log a message when the countdown ends
  },
});

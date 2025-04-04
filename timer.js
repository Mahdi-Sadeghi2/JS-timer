class Timer {
  constructor(durationInput, startButton, pauseButton, callbacks) {
    // Store references to the DOM elements
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    // If callbacks are provided, store them
    if (callbacks) {
      this.onStart = callbacks.onStart; // Called when the timer starts
      this.onTick = callbacks.onTick; // Called on each tick/update
      this.onComplete = callbacks.onComplete; // Called when the timer completes
    }

    // Attach event listeners to the buttons
    this.startButton.addEventListener("click", this.start);
    this.pauseButton.addEventListener("click", this.pause);
  }

  // Starts the timer
  start = () => {
    // Call the onStart callback if it exists, passing the total duration
    if (this.onStart) {
      this.onStart(this.timeRemaining);
    }

    // Run the first tick immediately
    this.tick();

    // Set an interval to call tick() every 50ms
    this.interval = setInterval(this.tick, 50);
  };

  // Pauses the timer
  pause = () => {
    clearInterval(this.interval); // Stop the interval
  };

  // Handles the countdown logic
  tick = () => {
    if (this.timeRemaining <= 0) {
      // If time is up, stop the timer and call onComplete if it exists
      this.pause();
      if (this.onComplete) {
        this.onComplete();
      }
    } else {
      // Reduce time by 0.05 seconds (since interval runs every 50ms)
      this.timeRemaining = this.timeRemaining - 0.05;

      // Call the onTick callback if it exists
      if (this.onTick) {
        this.onTick(this.timeRemaining);
      }
    }
  };

  // Getter for retrieving the remaining time from the input field
  get timeRemaining() {
    return parseFloat(this.durationInput.value);
  }

  // Setter for updating the input field with the remaining time
  set timeRemaining(time) {
    this.durationInput.value = time.toFixed(2); // Format time to 2 decimal places
  }
}

# Timer App

A simple countdown timer implemented using JavaScript, HTML, and SVG animations. The timer visually represents the remaining time using an animated circle and allows users to start and pause the countdown.

# Features

Start and pause functionality.

Animated circular countdown using SVG.

Customizable duration input.

Callback functions for timer events (start, tick, complete).

# Technologies Used

HTML

CSS

JavaScript (ES6+)

SVG for visual representation

Installation

No installation is required. Simply clone the repository and open the index.html file in a browser.

# Open index.html in a browser

# Usage

Enter the desired duration in the input field.

Click the "Start" button to begin the countdown.

Click the "Pause" button to stop the timer temporarily.

The animated circle visually decreases as time elapses.

When the timer reaches zero, a message is logged to the console.

# Code Overview

Timer Class

The Timer class handles the countdown logic:

start(): Begins the countdown and triggers the onStart callback.

pause(): Pauses the countdown.

tick(): Updates the remaining time and triggers onTick.

get timeRemaining(): Retrieves the current timer value from the input.

set timeRemaining(time): Updates the input field with the formatted time.

# Circle Animation

The stroke of an SVG circle is animated by modifying stroke-dashoffset to visually represent the time remaining.

# Contributing

Feel free to submit pull requests or report issues. Contributions are welcome!

# License

This project is open-source and available under the MIT License.

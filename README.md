# QuizQuest Developer Documentation

QuizQuest is a modern client-side JavaScript quiz application. Designed with interactive layout parameters, the application features customizable configuration controls (category selection, query length, and difficulty ranges), timer-driven gameplay loops, active score computations, and high-performance metrics dashboard screens upon completion.

---

## Directory Structure

This repository contains the following structural layout:
* index.html - Houses the welcome screen configuration forms, quiz gameplay cards, timers, and results panels.
* CSS/styles.css - Contains custom glassmorphism styles, blurred background blobs, responsive positioning, and animation keyframes.
* JS/app.js - Coordinates welcome form submissions, initiates core game cycles, tracks progress, and sets up state listeners.
* JS/state.js - Represents the data model, storing question arrays, correct answer arrays, score counts, and performance logs.
* JS/ui.js - Updates text nodes and progress indicators, controls loading views, manages timer displays, and handles theme transitions.

---

## Architectural Flow & Communication Diagram

```
[ Welcome Form Setup ] ──► [ JS/app.js ] ──► [ JS/state.js ] ──► [ Fetch Questions ]
                                │                  │
                                ▼                  ▼
[ Timer Events ] ◄──────► [ JS/ui.js ] ◄───── (Score Updates)
 (Run Countdown)           (Update DOM views & Results Cards)
```

---

## Module Specifications

### 1. Game Controller (JS/app.js)
Coordinates welcome configuration selections and starts core gameplay cycles. Triggers answer reviews, manages transitions between questions, checks if final limits have been hit, and prompts calculations for results summaries.

### 2. State & Scoring Model (JS/state.js)
Maintains current state values in memory:
* Question datasets: Stores array structures representing currently loaded quiz parameters.
* Scoring logic: Increments right answers, calculates speed/time bonus scores, and logs mistake categories.
* State Resets: Methods to flush active memory when starting a new quiz.

### 3. Rendering Engine (JS/ui.js)
Dynamically updates HTML layout blocks:
* Question cards: Inserts active questions, shuffling answer options to prevent order bias.
* Countdown timer: Triggers UI visual clocks and flashes alarms when time runs out.
* Final stats screen: Renders progress percentages, correct/incorrect splits, and logs performance.

---

## Technical Features & Implementation Details

* Glassmorphism Design: Custom styling details, including high-blur layers, thin translucent container borders, and glowing base elements.
* Theme Engine: Toggles visual assets and theme variables between light and dark configurations.
* Fisher-Yates Shuffle: Implements array shufflers to randomize choices on card initialization.

---

## Local Development & Setup

### Prerequisites
A modern browser and a command-line interface.

### Running Locally
1. Navigate to the project root directory:
   ```bash
   cd "Quiz App"
   ```
2. Start a simple web server:
   ```bash
   python -m http.server 8000
   ```
3. Open a browser and navigate to `http://localhost:8000`.

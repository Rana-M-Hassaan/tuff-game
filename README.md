# Catch the Thief 🕵️‍♂️❌🔴

A simple, fast-paced 2D evasion game built with **p5.js**. Track down the stealthy thief while steering completely clear of the dangerous red penalty enemy before your time runs out!

---

## 🎮 Gameplay & Rules

* **Catch the Thief (Black Character):** Click on the dark ghost silhouette to increase your total score by **+1 point**. Every catch forces it to teleport instantly to a random spot on the screen.
* **Avoid the Red Enemy (Crimson Character):** Clicking this trap target penalizes you immediately, subtracting **-2 points** from your overall score.
* **The Clock is Ticking:** You have exactly **30 seconds** on the match timer. The game ends automatically once the timer hits zero.

---

## ✨ Design & Features

* **Dynamic Atmospheric Grid:** The playground features an ambient cybernetic alignment grid background that subtly shifts tone as daylight fades away over the course of your run.
* **Jitter Physics:** Both entities utilize continuous random jitter paths to make hitting your targets erratic and engaging.
* **Canvas Boundary Clamping:** Characters remain perfectly bound inside the gameplay canvas using automatic coordinate tracking boundaries so they never drift off-screen.
* **State Management System:** Smooth transitions handle your game workflow effortlessly across 'start', 'play', and 'over' screens without requiring additional interface code libraries.

---

## 🛠️ Code Structure Overview

The source file is organized into clear functional loops and structures:
* **Global Configuration Variables:** Manages game attributes seamlessly such as `score`, match `state`, countdown `duration`, and coordinate objects tracking coordinates for your targets.
* **`setup()` Loop:** Handles project initialization by constructing the default 480x360 canvas space and fetching the base system tracking time via `millis()`.
* **`draw()` Loop:** Runs continuously to update interface text displays, keep time values current, process character movement paths, and control background tint gradients.
* **`drawGhost()` & `drawEnemy()`:** Dedicated drawing blocks that handle layout rendering and styling parameters for target vectors.
* **`mousePressed()` Loop:** Manages exact collision hit detection using standard distance calculators to evaluate target clicks.

---

## 🎛️ Controls

* **Left Mouse Button (Click):** Select items on the main menu, hit targets during the game loop, or restart from the Game Over screen.
# tuff-game

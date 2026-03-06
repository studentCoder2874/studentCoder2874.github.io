---
title: "Weather Dashboard"
description: "A real-time weather dashboard that fetches data from a public API and displays current conditions, hourly forecasts, and 7-day outlooks."
image: /assets/images/uploads/weather-dashboard.png
tags:
  - JavaScript
  - API
  - CSS
  - HTML
link: ""
github: "https://github.com/studentCoder2874"
date: 2025-11-01
featured: false
---

## Overview

A browser-based weather dashboard that uses the OpenWeatherMap API to display current weather conditions and forecasts. Users can search for any city worldwide.

## Features

- **City Search** — Search for weather in any city
- **Current Conditions** — Temperature, humidity, wind speed, UV index
- **7-Day Forecast** — Daily forecast cards
- **Responsive Design** — Works on desktop and mobile
- **Unit Toggle** — Switch between Celsius and Fahrenheit

## Tech Stack

- Vanilla JavaScript (ES6+)
- OpenWeatherMap API
- HTML5 & CSS3
- Local Storage for recent searches

## Challenges

Working with asynchronous API calls and handling various error states (invalid city, network errors) was an interesting challenge. I also implemented a debounced search to avoid excessive API calls.

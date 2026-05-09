# 🐒 Monkey the Monk

> From monkey to monk, one video a day.

A personal YouTube playlist scheduler that turns your saved playlists into a structured daily learning routine. Add any YouTube playlist, set how many videos you want to watch per day, and the app builds your schedule automatically.

## Features

- Add multiple YouTube playlists
- Set daily video frequency per playlist
- Auto-assigns videos to calendar days
- Daily checklist to tick off completed videos
- Missed videos auto-reschedule to the next day at midnight
- Calendar view to see your full schedule
- Goals page with streak, weekly and long-term progress
- Export and import your data to migrate between browsers
- Everything saved locally — no login, no database

## Tech Stack

- Pure HTML, CSS, JavaScript
- YouTube Data API v3
- Vercel Serverless Functions (to keep API key hidden)
- localStorage for data persistence

## Setup

1. Clone the repo
2. Add your YouTube Data API v3 key to Vercel environment variables as `YOUTUBE_API_KEY`
3. Deploy to Vercel
4. Open the app and start adding playlists

## Why the name?

Students are generally monkeys — distracted, jumping between videos, no structure. This app turns them into monks — focused, one video at a time, every single day.

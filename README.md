# 📊 ShiftLog

A single-file web app for tracking part-time/shift work across multiple jobs — log hours, auto-calculate wages (including night-shift bonuses), track recurring bills, estimate take-home pay after tax, and export a print-ready timesheet PDF. Built bilingual (English / Japanese) and works fully offline, since everything is stored locally in the browser.

## ✨ Features

**Works (jobs)**
- Add multiple workplaces, each with its own hourly rate, transport allowance, and color tag
- Per-work night-shift rate is calculated and shown automatically

**Shifts**
- Log a single shift or batch-add the same shift across several picked dates (via a mini calendar picker)
- Break time is deducted automatically from worked hours
- Live earnings preview as you fill in the form (hours, wage, transport, total)
- **Night-shift bonus** — minutes worked inside a configurable night window (default 22:00–06:00) are automatically paid at a bonus rate (default +25%), with the affected minutes called out per shift

**Monthly**
- Calendar view of the month with a chart toggle between earnings and hours per day
- Per-work breakdown table and filtering by work

**Bills**
- Track recurring monthly bills by category (housing, electric, gas, water, internet, phone, insurance, other)
- Automatic monthly/annual totals

**Tax**
- Simple tax calculator: income tax rate, social insurance %, and flat deductions
- Calculate for all time, this month, this year, or a custom date range
- Per-work breakdown of gross/tax/net

**Summary**
- A "waterfall" view of gross income → tax → bills → final take-home pay for a selected period
- Filterable by work, with a note that tax is applied per work once monthly wages cross a configurable threshold (¥70,000 by default — aligned with Japanese part-time tax rules)

**Timesheet PDF**
- Generates a landscape A4 timesheet for a chosen work + month: daily clock-in/out, hours, breaks, overtime (over 8h/day), pay, a legend, and a supervisor signature/stamp box — ready to print or submit at work

**Data & backup**
- All data lives in the browser's IndexedDB — works completely offline, no account required
- Export/import a full JSON backup
- Export shifts as CSV
- Optional **Google Drive sync** — sign in with Google to back up and restore your data from Drive on any device

**Other**
- Bilingual UI — English / 日本語, switchable in Settings
- Dark and light themes
- Configurable currency symbol

## 🛠 Tech stack

- Vanilla HTML/CSS/JS — single file, no framework, no build step
- **IndexedDB** for all local data (works, shifts, bills, settings)
- **Google Identity Services (GIS)** + Google Drive API for optional cloud backup
- **pdf-lib** / **fontkit** — loaded for PDF/font handling (see [Known issues](#-known-issues) below)
- Fonts: [Syne](https://fonts.google.com/specimen/Syne) and [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono), via Google Fonts CDN

## 🚀 Setup

The app works immediately with no setup — just open `index.html` in a browser, or host it on any static site host (GitHub Pages, Netlify, Vercel, etc.). All core features (works, shifts, bills, tax, summary, CSV/JSON backup) run with zero configuration.

**Optional: Google Drive sync**

The sign-in button uses a hardcoded demo OAuth client ID, which won't work for your own deployment. To enable Drive sync:
1. Create a project in the [Google Cloud Console](https://console.cloud.google.com/) and enable the **Google Drive API**.
2. Create an OAuth 2.0 Client ID (Web application), and add your site's URL to the authorized origins.
3. In `index.html`, replace the `GOOGLE_CLIENT_ID` constant with your own client ID.

If you skip this, everything still works — you just won't have the "Save to Drive / Load from Drive" option, and can rely on the JSON export/import backup instead.

## ⚠️ Known issues

- **Timesheet PDF generation expects `window.jspdf` (the [jsPDF](https://github.com/parallax/jsPDF) library), but only `pdf-lib` and `fontkit` are loaded via `<script>` tags.** As-is, clicking "Generate Timesheet PDF" will show a "PDF library not loaded yet" error indefinitely. To fix, add the jsPDF UMD build before the closing `</head>` (or before the main script), e.g.:
  ```html
  <script src="https://unpkg.com/jspdf@latest/dist/jspdf.umd.min.js"></script>
  ```
  All other features are unaffected by this.

## 📱 Usage

1. **Works** — add each job with its hourly rate, transport allowance, and a color.
2. **Shifts** — pick a work, set the date(s), start/end time, and break minutes; check the live earnings preview, then save.
3. **Monthly** — review the calendar and chart for any month.
4. **Bills** — add your recurring monthly expenses.
5. **Tax** — set your tax rate, social insurance %, and deductions to estimate withholding.
6. **Summary** — see your real take-home pay for any period after tax and bills.
7. Use **Settings (⚙)** to switch language/theme, set the currency symbol, configure the night-bonus window, back up your data, or sign in to Google Drive.

## ⚙️ Customization ideas

- Adjust the default night-bonus window/percentage (`nightStart`, `nightEnd`, `nightPct` in Settings) to match your local labor rules.
- Change the monthly-wage tax threshold (currently ¥70,000) if it doesn't match your situation.
- Swap the `--accent` / `--purple` / `--green` CSS variables to retheme the app.


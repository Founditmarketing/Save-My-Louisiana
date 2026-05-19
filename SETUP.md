# Save My Louisiana — Backend Setup Guide

## PRIORITY 1: Google Sheets (Do This Today)

### Step 1 — Create a Google Sheet

1. Go to [sheets.google.com](https://sheets.google.com) and create a new blank spreadsheet
2. Name it **"SML Supporters"**
3. Copy the **Sheet ID** from the URL:
   ```
   https://docs.google.com/spreadsheets/d/**COPY_THIS_PART**/edit
   ```

---

### Step 2 — Create a Google Cloud Service Account (10 min)

1. Go to [console.cloud.google.com](https://console.cloud.google.com)
2. Create a **New Project** → name it "Save My Louisiana"
3. Go to **APIs & Services → Library** → search "Google Sheets API" → **Enable it**
4. Go to **APIs & Services → Credentials → Create Credentials → Service Account**
   - Name: `sml-sheets-writer`
   - Role: **Editor**
5. Click the new service account → **Keys tab → Add Key → Create New Key → JSON**
6. A `.json` file will download — **keep this safe, do not share it**

---

### Step 3 — Share the Sheet with your Service Account

1. Open the JSON key file you downloaded
2. Find the `client_email` field (looks like `sml-sheets-writer@your-project.iam.gserviceaccount.com`)
3. Open your Google Sheet → **Share** → paste that email → give **Editor** access

---

### Step 4 — Encode the Key & Add to Vercel

```bash
# In your terminal, encode the JSON key file:
base64 < /path/to/your-key.json | tr -d '\n'
```

Copy the output. Then in **Vercel → Project Settings → Environment Variables**, add:

| Variable | Value |
|---|---|
| `GOOGLE_SPREADSHEET_ID` | the Sheet ID from Step 1 |
| `GOOGLE_SERVICE_ACCOUNT_JSON` | the base64 output from above |

> **For local testing** — add these same values to `.env.local` in the project root.

---

## PRIORITY 2: Sanity CMS (When Ready)

### Step 1 — Create a Sanity Account + Project

```bash
# From the project root:
cd studio
npm install
npx sanity init
```

- Choose "Create new project"
- Dataset: `production`
- Note your **Project ID** shown after setup

### Step 2 — Deploy the Studio

```bash
cd studio
npm run deploy
```

The client will get a URL like `your-project.sanity.studio` — share this with them.

### Step 3 — Add Env Vars to Vercel

| Variable | Value |
|---|---|
| `VITE_SANITY_PROJECT_ID` | from sanity.io/manage |
| `VITE_SANITY_DATASET` | `production` |

### Step 4 — Invite the Client to Sanity

1. Go to [sanity.io/manage](https://sanity.io/manage)
2. Select your project → **Members → Invite**
3. Set role to **Editor** (can update content but cannot change schema or delete the project)

---

## PRIORITY 3: Resend Email (At Launch)

1. Create account at [resend.com](https://resend.com)
2. Add & verify your domain: `savemylouisiana.org`
3. Create an API key
4. Add to Vercel env vars:

| Variable | Value |
|---|---|
| `RESEND_API_KEY` | `re_xxxxxxxxxxxx` |
| `RESEND_FROM_EMAIL` | `info@savemylouisiana.org` |

Emails will start sending automatically — no code changes needed.

---

## What the Client Can Edit (in Sanity)

| Field | Where It Appears |
|---|---|
| GoFundMe URL | Donate page — updates live instantly |
| Campaign Title | Donate page banner |
| Campaign Description | Donate page banner |
| Fundraising Goal | Donate page banner |
| Articles & News | Future /news page |
| Committee Hearing Videos | Future /news page |

## What the Client Can See (in Google Sheet)

Every form submission from the website appears as a new row with:
- Timestamp (Central Time)
- Full Name, Email, Phone
- Parish
- Message
- Source URL
- Status (defaults to "New")

They can sort, filter, and export this data anytime. They cannot see or change the API credentials.

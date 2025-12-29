# Ecobank 

*Automatically synced with your [v0.dev](https://v0.dev) deployments*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/jamesstandards-projects/v0-ecobank)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.dev-black?style=for-the-badge)](https://v0.dev/chat/projects/4gDNuzS1gxC)

## Overview

This repository will stay in sync with your deployed chats on [v0.dev](https://v0.dev).
Any changes you make to your deployed app will be automatically pushed to this repository from [v0.dev](https://v0.dev).

## Deployment

Your project is live at:

**[https://vercel.com/jamesstandards-projects/v0-ecobank](https://vercel.com/jamesstandards-projects/v0-ecobank)**

## Build your app

Continue building your app on:

**[https://v0.dev/chat/projects/4gDNuzS1gxC](https://v0.dev/chat/projects/4gDNuzS1gxC)**

## Twilio / SMS configuration 🔧

This project includes server API routes that can send SMS using Twilio. For security, credentials must be provided via environment variables. Do NOT commit credentials to the repository or store them in source control.

1. Create a local file called `.env.local` in the project root (this repo already ignores `.env*`).
2. Add the following environment variables (use the real values you received from Twilio):

```text
TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
TWILIO_AUTH_TOKEN=your_auth_token_here
TWILIO_PHONE_NUMBER=+12203008040
```

3. Restart the dev server after adding `.env.local`.

For production (Vercel, Netlify, etc.) add these same variables to your project's environment variables/secrets using your provider's dashboard (e.g., Vercel > Project > Settings > Environment Variables).

If you need to verify the configuration locally, you can:

- Use the server verification endpoint (does not send a message):

  ```bash
  curl -X GET "http://localhost:3000/api/sms/verify"
  ```

  A successful response will return account details (sid/friendlyName/status).

- Or send a real test SMS from your development machine using the included script (requires `.env.local` with Twilio creds):

  ```bash
  # install dev deps if needed
  pnpm install # or npm install

  # copy .env.example to .env.local and set your real creds
  cp .env.example .env.local
  # then run (example):
  node scripts/twilio-test.js "+12203008040" "Hello from v0-ecobank"
  ```

> Tip: Keep credentials in deployment secrets (GitHub Actions / Vercel) and never paste them into PRs or issue trackers.

## How It Works

1. Create and modify your project using [v0.dev](https://v0.dev)
2. Deploy your chats from the v0 interface
3. Changes are automatically pushed to this repository
4. Vercel deploys the latest version from this repository

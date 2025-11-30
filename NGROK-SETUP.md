# ngrok Setup Guide

## Quick Start

### Option 1: Using the Helper Script
```bash
./start-ngrok.sh
```

### Option 2: Manual Setup

1. **Start your local development server:**
   ```bash
   npm run dev
   ```
   This starts the server on `http://localhost:3000`

2. **Start ngrok in a new terminal:**
   ```bash
   ./ngrok http 3000
   ```

3. **Get your public URL:**
   - ngrok will display a forwarding URL like: `https://abc123.ngrok.io`
   - You can also visit `http://127.0.0.1:4040` to see the ngrok web interface
   - Share the `https://` URL with anyone!

## Authentication (Required for ngrok v3+)

If you see an authentication error, you need to:

1. **Sign up for free:** https://dashboard.ngrok.com/signup
2. **Get your authtoken:** https://dashboard.ngrok.com/get-started/your-authtoken
3. **Configure ngrok:**
   ```bash
   ./ngrok config add-authtoken YOUR_AUTHTOKEN_HERE
   ```

## Sharing Your Project

Once ngrok is running, you'll get a URL like:
- `https://abc123-def456.ngrok-free.app` (free tier)
- Share this URL with anyone - they can access your local server!

## Accessing Specific Pages

Your project structure allows direct access to pages:
- Main page: `https://your-ngrok-url.ngrok-free.app/src/validation-1b.html`
- Design system: `https://your-ngrok-url.ngrok-free.app/design-system/components-demo.html`
- Any file in `src/`: `https://your-ngrok-url.ngrok-free.app/src/FILENAME.html`

## Stopping ngrok

Press `Ctrl+C` in the terminal where ngrok is running.

## Troubleshooting

- **Port already in use:** Make sure port 3000 isn't being used by another app
- **Authentication error:** Follow the authentication steps above
- **Connection refused:** Make sure `npm run dev` is running first


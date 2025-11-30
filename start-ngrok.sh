#!/bin/bash

# ngrok Setup and Start Script
# This script helps you share your local development server via ngrok

echo "🚀 Starting ngrok tunnel..."

# Check if ngrok is authenticated
if [ ! -f ~/.ngrok2/ngrok.yml ] && [ ! -f ~/Library/Application\ Support/ngrok/ngrok.yml ]; then
    echo ""
    echo "⚠️  ngrok requires authentication."
    echo "📝 To get started:"
    echo "   1. Sign up at https://dashboard.ngrok.com/signup (free)"
    echo "   2. Get your authtoken from https://dashboard.ngrok.com/get-started/your-authtoken"
    echo "   3. Run: ./ngrok config add-authtoken YOUR_TOKEN"
    echo ""
    read -p "Press Enter after you've added your authtoken, or Ctrl+C to cancel..."
fi

# Start the local dev server in background if not running
if ! pgrep -f "live-server" > /dev/null; then
    echo "📦 Starting local development server on port 3000..."
    npm run dev > /dev/null 2>&1 &
    sleep 2
fi

# Start ngrok
echo "🌐 Starting ngrok tunnel to http://localhost:3000"
echo "📋 Your public URL will be shown below:"
echo ""
./ngrok http 3000


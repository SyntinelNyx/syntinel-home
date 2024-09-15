#!/usr/bin/env bash

read -p "Enter Discord Webhook URL: " DISCORD_WEBHOOK_URL

if [ -z "$DISCORD_WEBHOOK_URL" ]; then
  echo "Error: Discord Webhook URL cannot be empty."
  exit 1
fi

# Replace <YOUR_DISCORD_WEBHOOK_URL> in compose.yaml with the provided URL
sed -i 's|<YOUR_DISCORD_WEBHOOK_URL>|'"$DISCORD_WEBHOOK_URL"'|' compose.yaml

docker compose up --build -d
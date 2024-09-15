# Syntinel Home Page

### Local Development

Create a file called `.env` and copy the content from `.env.example` over, and replace the environment variables with your own env variables.

```
npm install
npm run dev
```

### Manual Setup & Deployment

Create a file called `.env` and copy the content from `.env.example` over, and replace the environment variables with your own env variables.

```
npm install
npm run build
npm run start
```

### Docker Deployment

```
docker build -t syntinel-home .
docker run -it -d -p 3000:3000 --name syntinel-home -e DISCORD_WEBHOOK_URL="<YOUR_DISCORD_WEBHOOK_URL>" syntinel-home:latest
```

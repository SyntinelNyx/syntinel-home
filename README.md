# Syntinel Home Page

### Local Development

```
npm install
npm run dev
```

### Manual Setup & Deployment

```
npm install
npm run build
node .next/standalone/server.js
```

### Docker Deployment

```
docker build -t syntinel-home .
docker run --rm -ti -p 3000:3000 --name syntinel-home
```

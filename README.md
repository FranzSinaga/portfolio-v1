# portfolio-v1

Franz Sinaga's personal portfolio site — built with [Next.js](https://nextjs.org/) (Pages Router), TypeScript, and Tailwind CSS.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm start` — serve the production build
- `npx next lint` — lint

## Deployment

`.drone.yml` builds the `Dockerfile` (Next.js `standalone` output) on push to `master` and deploys it via `docker-compose` over SSH.

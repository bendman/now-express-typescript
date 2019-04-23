# Now + Express + Typescript

This example shows a Node server running Express, written in Typescript and deployable to Now or Locally.

There are a few URLs that are worth visiting:

- `/`: serves immediately
- `/other-routes`: serves immediately
- `/other-routes/slow`: serves after 5 seconds using `async/await`
- `/other-routes/fast`: serves immediately

## Running Locally (Development)

1. Clone the repo
2. Install dependencies (`npm install`)
3. Run the project in Typescript (`npm run dev`)

## Running Locally (Production)

1. Clone the repo
2. Install dependencies (`npm install`)
3. Compile and run the project as Javascript (`npm start`)

## Deploying to now

1. Clone the repo
2. Install dependencies (`npm install`)
3. Compile the Typescript (`npm run build`)
4. Deploy to now (`now`)
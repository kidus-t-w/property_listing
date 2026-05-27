import setup from '../src/index';

// The setup function returns a fully configured Express app (including DB connection)
const appPromise = setup();

// Vercel expects a default export that is a serverless function
export default async function handler(req: any, res: any) {
  const app = await appPromise;
  // Delegate the request to the Express app
  app(req, res);
}
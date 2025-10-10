// Shared API configuration
// Exports a single BASE_URL constant so all API callers import the same source of truth.
// If TypeScript complains about 'process' not being defined in the environment,
// declare it here so this module can read env vars at build time in Next.js.
declare const process: any;

// Read NEXT_PUBLIC_BASE_URL from the environment (Next.js exposes NEXT_PUBLIC_* to the client).
// export const BASE_URL: string = (process as any)?.env?.NEXT_PUBLIC_BASE_URL || "";

export const BASE_URL : string = "https://digital-market-place-server-5viz.onrender.com";

// Helper to retrieve base URL if consumers prefer a function.
export const getBaseUrl = (): string => BASE_URL;

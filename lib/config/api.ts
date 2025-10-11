// Shared API configuration
// Exports a single BASE_URL constant so all API callers import the same source of truth.
// Read NEXT_PUBLIC_BASE_URL from the environment (Next.js exposes NEXT_PUBLIC_* to the client).
// If you prefer to read from env, uncomment the line below. Next.js exposes NEXT_PUBLIC_* variables
// to the browser at build time, so using process.env.NEXT_PUBLIC_BASE_URL will work when set.
// export const BASE_URL: string = process.env.NEXT_PUBLIC_BASE_URL ?? "https://digital-market-place-server-1.onrender.com";

export const BASE_URL: string = "https://digital-market-place-server-1.onrender.com";

// Helper to retrieve base URL if consumers prefer a function.
export const getBaseUrl = (): string => BASE_URL;

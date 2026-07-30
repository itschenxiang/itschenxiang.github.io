"use client";

import { useEffect, useState } from "react";

/**
 * A simple provider that reads the "config" cookie on the client side.
 * This avoids depending on next-client-cookies/server which can't be
 * dynamically imported in static exports.
 */
export function CookiesClientProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // On first render (SSR), render children directly.
  // After hydration, the client-side code can access document.cookie.
  // This prevents hydration mismatch and avoids server-side cookie issues.
  return <>{children}</>;
}

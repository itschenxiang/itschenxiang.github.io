"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const CookiesProvider = dynamic(
  () => import("next-client-cookies/server").then((mod) => mod.CookiesProvider),
  { ssr: false }
);

export function CookiesClientProvider({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={children}>
      <CookiesProvider>{children}</CookiesProvider>
    </Suspense>
  );
}

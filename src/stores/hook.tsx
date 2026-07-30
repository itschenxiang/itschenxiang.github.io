"use client";

import { type Config, defaultConfig } from "@/lib/db/config";
import { tryCatch } from "@/lib/utils";

function getCookie(name: string): string | undefined {
  if (typeof document === "undefined") return undefined;
  const match = document.cookie.match(new RegExp(`(?:^|; )${name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : undefined;
}

export function useConfigFromCookies() {
  return tryCatch<Config>(() => JSON.parse(getCookie("config")!)["state"], defaultConfig);
}

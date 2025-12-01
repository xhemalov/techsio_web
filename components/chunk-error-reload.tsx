"use client";
import { useEffect } from "react";

export default function ChunkErrorReload() {
  useEffect(() => {
    function handler(e: any) {
      const err = (e && (e.reason || e.error || e)) || {};
      const name = err?.name || "";
      const message = err?.message || "";
      const isChunkError =
        name === "ChunkLoadError" || /Loading chunk .* failed/i.test(message);

      if (isChunkError) {
        try {
          const key = "__chunkReloadedOnce";
          const alreadyReloaded = sessionStorage.getItem(key);
          if (!alreadyReloaded) {
            console.log("[ChunkErrorReload] ChunkLoadError detected, reloading once...");
            sessionStorage.setItem(key, "1");
            window.location.reload();
          } else {
            console.log(
              "[ChunkErrorReload] ChunkLoadError persisted after one reload. Not reloading again."
            );
            sessionStorage.removeItem(key);
          }
        } catch (err) {
          console.log("[ChunkErrorReload] sessionStorage unavailable, reloading once.");
          window.location.reload();
        }
      }
    }

    window.addEventListener("unhandledrejection", handler);
    window.addEventListener("error", handler);
    return () => {
      window.removeEventListener("unhandledrejection", handler);
      window.removeEventListener("error", handler);
    };
  }, []);

  return null;
}

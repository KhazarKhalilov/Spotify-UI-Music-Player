"use client";

import { useEffect, useState } from "react";
import styles from "../styles/PlayerBar.module.css";

export default function PlayerBar() {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(20);

  useEffect(() => {
    if (!playing) return;

    const id = window.setInterval(() => {
      setProgress((p) => (p >= 100 ? 0 : p + 1));
    }, 120);

    return () => window.clearInterval(id);
  }, [playing]);

  return (
    <div className={`rounded-2xl border border-border bg-surface p-4 shadow-soft ${styles.bar}`}>
      <div className={styles.glow} />

      <div className="relative flex items-center justify-between gap-4">
        <div className="min-w-0">
          <div className="truncate text-sm font-semibold">Midnight Signals</div>
          <div className="truncate text-xs text-muted">Khazar & The Tokens</div>
        </div>

        <button
          type="button"
          onClick={() => setPlaying((v) => !v)}
          className="rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-black dark:text-white transition hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-accent"
          aria-label={playing ? "Pause" : "Play"}
        >
          {playing ? "Pause" : "Play"}
        </button>
      </div>

      <div className="relative mt-4">
        <div className={styles.progressTrack} />
        <div className={styles.progressFill} style={{ width: `${progress}%` }} />
        <div className="mt-2 flex justify-between text-xs text-muted">
          <span>0:00</span>
          <span>3:14</span>
        </div>
      </div>
    </div>
  );
}

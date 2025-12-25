"use client";

import { useEffect, useState } from "react";
import styles from "../styles/spotify.module.css";
import type { Track } from "../data/music";

export default function NowPlayingBar({
  track,
}: {
  track: Track | null;
}) {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(25);

  useEffect(() => {
    if (!playing) return;
    const id = window.setInterval(() => {
      setProgress((p) => (p >= 100 ? 0 : p + 1));
    }, 140);
    return () => window.clearInterval(id);
  }, [playing]);

  useEffect(() => {
    // when track changes, reset progress + pause
    setProgress(10);
    setPlaying(false);
  }, [track?.id]);

  return (
    <div className="fixed bottom-0 left-0 right-0 border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="min-w-0">
            <div className="truncate text-sm font-semibold">
              {track ? track.title : "Pick a track"}
            </div>
            <div className="truncate text-xs text-muted">
              {track ? track.artist : "No track selected"}
            </div>
          </div>

          <button
            type="button"
            onClick={() => setPlaying((v) => !v)}
            className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-black transition hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-accent"
            aria-label={playing ? "Pause" : "Play"}
            disabled={!track}
          >
            {playing ? "Pause" : "Play"}
          </button>
        </div>

        <div className="mt-3">
          <div className={styles.progressTrack} />
          <div className={styles.progressFill} style={{ width: `${progress}%` }} />
          <div className="mt-1 flex justify-between text-[11px] text-muted">
            <span>0:00</span>
            <span>3:30</span>
          </div>
        </div>
      </div>
    </div>
  );
}

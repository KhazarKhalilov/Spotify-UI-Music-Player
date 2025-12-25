import ThemeToggle from "./ThemeToggle";
import styles from "../styles/spotify.module.css";

export default function TopBar() {
  return (
    <div className={`sticky top-0 z-10 rounded-2xl border border-border px-4 py-3 ${styles.glassTop}`}>
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0">
          <div className="text-xs text-muted">Playlist</div>
          <div className="truncate text-lg font-bold">Design System Beats</div>
        </div>

        <div className="flex items-center gap-2">
          <button className="rounded-full border border-border px-4 py-2 text-sm transition hover:border-accent">
            Upgrade
          </button>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}

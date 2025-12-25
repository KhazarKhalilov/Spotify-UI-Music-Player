import type { Track } from "../data/music";
import styles from "../styles/spotify.module.css";

export default function TrackRow({
  track,
  index,
  active,
  onPlay,
}: {
  track: Track;
  index: number;
  active: boolean;
  onPlay: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onPlay}
      className={[
        "w-full rounded-xl px-3 py-3 text-left",
        styles.trackRow,
        active ? styles.activeRow : "",
      ].join(" ")}
    >
      <div className="grid grid-cols-[34px_1fr_1fr_60px] items-center gap-3">
        <div className="text-xs text-muted">{index + 1}</div>

        <div className="min-w-0">
          <div className={active ? "text-accent font-semibold truncate" : "truncate font-medium"}>
            {track.title}
          </div>
          <div className="text-xs text-muted truncate">{track.artist}</div>
        </div>

        <div className="text-xs text-muted truncate hidden sm:block">{track.album}</div>

        <div className="text-xs text-muted text-right">{track.length}</div>
      </div>
    </button>
  );
}

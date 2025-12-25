import { playlists } from "../data/music";

export default function Sidebar() {
  return (
    <aside className="hidden md:flex md:w-72 md:flex-col gap-3 p-3">
      <div className="rounded-2xl border border-border bg-surface p-4">
        <div className="text-sm font-semibold">Spotify UI</div>

        <div className="mt-3 space-y-1 text-sm">
          <button className="w-full text-left rounded-xl px-3 py-2 transition hover:bg-white/5">
            Home
          </button>
          <button className="w-full text-left rounded-xl px-3 py-2 transition hover:bg-white/5">
            Search
          </button>
          <button className="w-full text-left rounded-xl px-3 py-2 transition hover:bg-white/5">
            Library
          </button>
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-surface p-4">
        <div className="text-xs text-muted">Playlists</div>
        <div className="mt-3 space-y-1">
          {playlists.map((p) => (
            <button
              key={p.id}
              className="w-full text-left rounded-xl px-3 py-2 transition hover:bg-white/5"
            >
              <div className="text-sm font-medium">{p.name}</div>
              <div className="text-xs text-muted">{p.subtitle}</div>
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}

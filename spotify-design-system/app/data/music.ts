export type Track = {
  id: string;
  title: string;
  artist: string;
  album: string;
  length: string;
};

export const playlists = [
  { id: "p1", name: "Liked Songs", subtitle: "Your favorites" },
  { id: "p2", name: "Daily Mix 1", subtitle: "Alt • Indie • Pop" },
  { id: "p3", name: "Focus Flow", subtitle: "Lo-fi • Study" },
];

export const tracks: Track[] = [
  { id: "t1", title: "Midnight Signals", artist: "Khazar & The Tokens", album: "Design System Beats", length: "3:14" },
  { id: "t2", title: "Green Pulse", artist: "UI Waves", album: "Neon Nights", length: "2:46" },
  { id: "t3", title: "Silent Sidebar", artist: "Layout Lab", album: "Dark Mode Anthems", length: "4:02" },
  { id: "t4", title: "Hover State", artist: "Micro Interactions", album: "Smooth Transitions", length: "3:33" },
];

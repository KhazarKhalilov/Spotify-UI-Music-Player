import ThemeToggle from "./components/ThemeToggle";
import Button from "./components/Button";
import Card from "./components/Card";
import PlayerBar from "./components/PlayerBar";

export default function ComponentsPage() {
  return (
    <main className="min-h-screen bg-bg p-6">
      <div className="mx-auto max-w-4xl">
        <header className="mb-6 flex items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight">Components Showcase</h1>
            <p className="mt-1 text-sm text-muted">
              Buttons · Cards · PlayerBar · Theme Toggle
            </p>
          </div>
          <ThemeToggle />
        </header>

        <section className="grid gap-6 md:grid-cols-2">
          <Card title="Buttons" subtitle="Variants + focus/hover states">
            <div className="flex flex-wrap gap-2">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="danger">Danger</Button>
              <Button disabled>Disabled</Button>
            </div>
          </Card>

          <Card title="Card Component" subtitle="Reusable layout container">
            <div className="text-sm text-muted">
              This card uses design tokens via Tailwind CSS variables.
            </div>
          </Card>

          <div className="md:col-span-2">
            <Card
              title="Player Bar (CSS Modules)"
              subtitle="Music UI + micro-interactions"
            >
              <div className="mt-3">
                <PlayerBar />
              </div>
            </Card>
          </div>
        </section>

        <footer className="mt-10 text-xs text-muted">
          Design System Components Page
        </footer>
      </div>
    </main>
  );
}

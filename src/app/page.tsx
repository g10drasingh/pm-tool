import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-8">
      <div className="max-w-2xl text-center space-y-6">
        <h1 className="text-4xl font-bold tracking-tight">
          Project Management Tool
        </h1>
        <p className="text-lg text-muted-foreground">
          Fully customizable & themable. Epics → Sprints → Stories → Tasks →
          Subtasks. Teams, Sub-teams, Kanban, Calendar, Comments & Chat.
          Roles: Admin / Manager / Member + custom.
        </p>
        <div className="flex gap-4 justify-center pt-4">
          <Link
            href="/login"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition"
          >
            Sign in
          </Link>
          <Link
            href="/register"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-2.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition"
          >
            Create account
          </Link>
        </div>
        <p className="text-xs text-muted-foreground pt-8">
          Multi-session build in progress · Session 1–2 complete
        </p>
      </div>
    </main>
  );
}

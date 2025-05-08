export function formatStatus(status: string): string {
  switch (status.toLowerCase()) {
    case "in_progress":
      return "🚧 In Progress";
    case "completed":
      return "✅ Completed";
    default:
      return "❔ Unknown";
  }
}

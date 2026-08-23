import { createTRPCRouter } from "@/server/trpc/trpc";
import { workspaceRouter } from "./workspace";
import { projectRouter } from "./project";
import { workItemRouter } from "./workItem";

export const appRouter = createTRPCRouter({
  workspace: workspaceRouter,
  project: projectRouter,
  workItem: workItemRouter,
  // Future: board, sprint, comment, chat, theme, role
});

export type AppRouter = typeof appRouter;

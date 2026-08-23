/**
 * Seed script — creates a demo user + workspace so you can log in immediately.
 * Run: npx prisma db seed   (or npm run db:seed)
 */
import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const passwordHash = await hash("demo1234", 12);

  const user = await prisma.user.upsert({
    where: { email: "demo@example.com" },
    update: {},
    create: {
      email: "demo@example.com",
      name: "Demo User",
      passwordHash,
    },
  });

  console.log("Demo user:", user.email);

  const existingMembership = await prisma.workspaceMember.findFirst({
    where: { userId: user.id },
  });

  if (!existingMembership) {
    const workspace = await prisma.workspace.create({
      data: {
        name: "Demo Workspace",
        slug: "demo",
        description: "Sample workspace for exploration",
      },
    });

    const adminRole = await prisma.role.create({
      data: {
        workspaceId: workspace.id,
        name: "Admin",
        isSystem: true,
        permissions: [
          "workspace:manage",
          "project:manage",
          "board:configure",
          "workitem:manage",
          "workitem:create",
          "workitem:update",
          "workitem:delete",
          "workitem:assign",
          "comment:create",
          "chat:send",
          "theme:manage",
          "role:manage",
          "team:manage",
        ],
      },
    });

    await prisma.role.createMany({
      data: [
        {
          workspaceId: workspace.id,
          name: "Manager",
          isSystem: true,
          permissions: [
            "project:manage",
            "board:configure",
            "workitem:manage",
            "workitem:create",
            "workitem:update",
            "workitem:delete",
            "workitem:assign",
            "comment:create",
            "chat:send",
            "theme:manage",
          ],
        },
        {
          workspaceId: workspace.id,
          name: "Member",
          isSystem: true,
          permissions: [
            "workitem:create",
            "workitem:update:own",
            "workitem:delete:own",
            "comment:create",
            "chat:send",
          ],
        },
        {
          workspaceId: workspace.id,
          name: "Viewer",
          isSystem: true,
          permissions: [],
        },
      ],
    });

    await prisma.workspaceMember.create({
      data: {
        workspaceId: workspace.id,
        userId: user.id,
        roleId: adminRole.id,
      },
    });

    await prisma.project.create({
      data: {
        workspaceId: workspace.id,
        name: "Sample Project",
        key: "SAM",
        description: "A project to explore the hierarchy and boards",
      },
    });

    console.log("Created Demo Workspace + roles + sample project");
  } else {
    console.log("User already has a workspace membership — skipping workspace seed");
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

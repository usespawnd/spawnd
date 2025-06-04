import env from "./src/lib/env";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "apps/backend/drizzle",
  schema: "packages/shared/schemas/*",
  dialect: "sqlite",
  dbCredentials: {
    url: env.DATABASE_URL!,
  },
});

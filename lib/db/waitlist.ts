import { pgTable as table } from "drizzle-orm/pg-core";
import * as t from "drizzle-orm/pg-core";

export const waitlist = table("waitlist", {
  id: t.integer().primaryKey().generatedAlwaysAsIdentity(),
  name: t.varchar("title").notNull(),
  company: t.text("company_name"),
  email: t.text("email").unique(),
  phone: t.varchar("phone_number", { length: 10 }),
  interested: t.text("interested"),
  other: t.text("other_reason"),
  createdAt: t.timestamp().defaultNow(),
});

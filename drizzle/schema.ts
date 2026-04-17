import { pgTable, unique, integer, varchar, text, timestamp } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"



export const waitlist = pgTable("waitlist", {
	id: integer().primaryKey().generatedAlwaysAsIdentity({ name: "waitlist_id_seq", startWith: 1, increment: 1, minValue: 1, maxValue: 2147483647, cache: 1 }),
	title: varchar().notNull(),
	companyName: text("company_name"),
	email: text(),
	phoneNumber: varchar("phone_number", { length: 10 }),
	interested: text(),
	otherReason: text("other_reason"),
	createdAt: timestamp({ mode: 'string' }).defaultNow(),
}, (table) => [
	unique("waitlist_email_unique").on(table.email),
]);

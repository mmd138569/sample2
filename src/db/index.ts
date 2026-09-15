import {PrismaClient} from "@/generated/prisma/client";
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';


const adapter = new PrismaBetterSqlite3({
    url: 'file:./prisma/dev.db' // Your database path
});

export const db = new PrismaClient({ adapter });
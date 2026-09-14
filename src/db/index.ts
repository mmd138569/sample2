import {PrismaClient} from "@/generated/prisma/client";
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';
import path from 'path'


const adapter = new PrismaBetterSqlite3({
    url: 'file:./prisma/dev.db' // Your database path
});

export const db = new PrismaClient({ adapter });
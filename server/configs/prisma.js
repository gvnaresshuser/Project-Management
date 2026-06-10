import 'dotenv/config';
import { PrismaClient } from '../src/generated/prisma/index.js';
import { PrismaNeon } from '@prisma/adapter-neon';
import { neonConfig } from '@neondatabase/serverless';
import ws from 'ws';

neonConfig.webSocketConstructor = ws;

const connectionString = process.env.DATABASE_URL;

console.log("DATABASE_URL =", connectionString);

const adapter = new PrismaNeon({
    connectionString,
});

export const prisma = new PrismaClient({
    adapter,
});

/* async function testConnection() {
    try {
        const result = await prisma.$queryRaw`SELECT NOW()`;
        console.log("Database Connected:", result);
    } catch (err) {
        console.error("Database Error:", err);
    }
}

testConnection(); */
//----------------------------------------------
/*
import 'dotenv/config'
import { PrismaClient } from './generated/prisma'
import { PrismaNeon } from '@prisma/adapter-neon'

const adapter = new PrismaNeon({
  connectionString: process.env.DATABASE_URL!,
})

export const prisma = new PrismaClient({ adapter })
*/
//----------------------------------------------
/* import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaNeon } from "@prisma/adapter-neon";
import { neonConfig } from "@neondatabase/serverless";

import ws from "ws";
neonConfig.webSocketConstructor = ws;
neonConfig.poolQueryViaFetch = true;

const connectionString = `${process.env.DATABASE_URL}`;

const adapter = new PrismaNeon({ connectionString });
const prisma = global.prisma || new PrismaClient({ adapter });

if (process.env.NODE_ENV === "development") global.prisma = prisma;

export default prisma;
 */
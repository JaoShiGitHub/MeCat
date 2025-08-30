import * as pg from "pg";

const { Pool } = pg.default;
import dotenv from "dotenv";
dotenv.config();

export const pool = new Pool({
  connectionString: `postgresql://postgres:${process.env.DB_PASSWORD}@localhost:5432/${process.env.DB_NAME}`,
});

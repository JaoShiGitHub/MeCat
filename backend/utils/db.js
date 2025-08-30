import * as pg from "pg";

const { Pool } = pg.default;

export const pool = new Pool({
  connectionString: `postgresql://postgres:${process.env.DB_PASSWORD}@localhost:5432/me_cat`,
});

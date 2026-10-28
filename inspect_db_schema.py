#!/usr/bin/env python3
"""Bradley's Maths — Inspect SQLite Database Schema."""

import sqlite3

db_path = 'bradleys_maths.db'
conn = sqlite3.connect(db_path)
cur = conn.cursor()

# Get list of all tables
cur.execute("SELECT name FROM sqlite_master WHERE type='table';")
tables = cur.fetchall()
print(f"Tables found: {tables}")

# Print columns for each table
for (table_name,) in tables:
    print(f"\n--- Columns in table: {table_name} ---")
    cur.execute(f"PRAGMA table_info({table_name});")
    for col in cur.fetchall():
        print(f"  cid: {col[0]}, name: {col[1]}, type: {col[2]}")

conn.close()
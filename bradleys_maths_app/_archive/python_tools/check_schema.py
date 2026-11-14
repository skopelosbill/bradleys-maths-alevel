import sqlite3

conn = sqlite3.connect('assets/bradleys_maths.db')
cur = conn.cursor()
cur.execute("SELECT sql FROM sqlite_master WHERE type='table';")
for row in cur.fetchall():
    print(row[0])
    print("-" * 50)
conn.close()

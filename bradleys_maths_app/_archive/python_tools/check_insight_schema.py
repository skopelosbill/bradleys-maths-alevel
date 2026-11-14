import sqlite3

conn = sqlite3.connect('assets/bradleys_maths.db')
cur = conn.cursor()

print("=" * 70)
print("TABLES IN DATABASE:")
print("=" * 70)
cur.execute("SELECT name FROM sqlite_master WHERE type='table'")
tables = cur.fetchall()
for t in tables:
    print(f"  Table: {t[0]}")

print("\n" + "=" * 70)
print("COLUMNS IN 'questions' TABLE:")
print("=" * 70)
cur.execute("PRAGMA table_info(questions)")
for c in cur.fetchall():
    print(f"  Column {c[0]}: {c[1]} ({c[2]})")

# If there is an insights table or column, inspect 004039
for t in tables:
    if 'insight' in t[0].lower():
        print(f"\nCOLUMNS IN '{t[0]}' TABLE:")
        cur.execute(f"PRAGMA table_info({t[0]})")
        for c in cur.fetchall():
            print(f"  Column {c[0]}: {c[1]} ({c[2]})")

conn.close()
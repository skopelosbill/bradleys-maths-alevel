import sqlite3

DB_PATH = 'assets/bradleys_maths.db'
conn = sqlite3.connect(DB_PATH)
cur = conn.cursor()

print("=" * 70)
print("     PATCHING UNCLOSED HTML TAG IN INSIGHT 004772")
print("=" * 70)

cur.execute("SELECT content FROM bradley_insights WHERE question_id = '004772'")
row = cur.fetchone()
if row:
    old_c = row[0]
    # Replace <strong>>Radian<\strong> with <strong>Radian</strong>
    new_c = old_c.replace(r'<strong>>Radian<\strong>', r'<strong>Radian</strong>')
    cur.execute("UPDATE bradley_insights SET content = ? WHERE question_id = '004772'", (new_c,))
    print("[FIXED] 004772 Insight: Replaced '<strong>>Radian<\\strong>' with '<strong>Radian</strong>'")

conn.commit()
conn.close()

print("=" * 70)
print("ITEM 1 COMMITTED & COMPLETED!")
print("=" * 70)
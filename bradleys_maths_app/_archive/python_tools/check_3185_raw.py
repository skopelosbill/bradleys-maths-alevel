import sqlite3

conn = sqlite3.connect('assets/bradleys_maths.db')
cur = conn.cursor()

cur.execute("SELECT id, ans_text FROM question_options WHERE id = 3185")
row = cur.fetchone()

print("=" * 60)
print(f"RAW TEXT FOR ID {row[0]}:")
print(repr(row[1]))
print("\nCHARACTER BY CHARACTER:")
for idx, char in enumerate(row[1]):
    print(f"  [{idx:02d}] '{char}' (ASCII {ord(char)})")
print("=" * 60)

conn.close()
import sqlite3

conn = sqlite3.connect('assets/bradleys_maths.db')
c = conn.cursor()

# Mapping: old_id -> (new_id, new_group_id, unified_topic)
realign_map = {
    # 1. Harmonic Mean
    '009001': ('009001', '009001', 'The Harmonic Mean'),
    '009006': ('009002', '009001', 'The Harmonic Mean'),
    '009011': ('009003', '009001', 'The Harmonic Mean'),
    '009016': ('009004', '009001', 'The Harmonic Mean'),
    '009021': ('009005', '009001', 'The Harmonic Mean'),

    # 2. The Golden Ratio
    '009002': ('009006', '009006', 'The Golden Ratio'),
    '009007': ('009007', '009006', 'The Golden Ratio'),
    '009012': ('009008', '009006', 'The Golden Ratio'),
    '009017': ('009009', '009006', 'The Golden Ratio'),
    '009022': ('009010', '009006', 'The Golden Ratio'),

    # 3. Benford's Law
    '009003': ('009011', '009011', "Benford's Law"),
    '009008': ('009012', '009011', "Benford's Law"),
    '009013': ('009013', '009011', "Benford's Law"),
    '009018': ('009014', '009011', "Benford's Law"),
    '009023': ('009015', '009011', "Benford's Law"),

    # 4. Taxicab Geometry
    '009004': ('009016', '009016', 'Taxicab Geometry'),
    '009009': ('009017', '009016', 'Taxicab Geometry'),
    '009014': ('009018', '009016', 'Taxicab Geometry'),
    '009019': ('009019', '009016', 'Taxicab Geometry'),
    '009024': ('009020', '009016', 'Taxicab Geometry'),

    # 5. Pick's Theorem
    '009005': ('009021', '009021', "Pick's Theorem"),
    '009010': ('009022', '009021', "Pick's Theorem"),
    '009015': ('009023', '009021', "Pick's Theorem"),
    '009020': ('009024', '009021', "Pick's Theorem"),
    '009025': ('009025', '009021', "Pick's Theorem"),
}

tables_to_update = [
    ('questions', 'id'),
    ('question_steps', 'question_id'),
    ('question_options', 'question_id'),
    ('bradley_insights', 'question_id'),
    ('user_attempts', 'question_id'),
]

c.execute("BEGIN TRANSACTION")

# Pass 1: Rename old IDs to temporary IDs to prevent primary key collisions
for old_id in realign_map.keys():
    temp_id = f"T_{old_id}"
    for tbl, col in tables_to_update:
        c.execute(f"UPDATE {tbl} SET {col} = ? WHERE {col} = ?", (temp_id, old_id))

# Pass 2: Rename temporary IDs to final new IDs, group_id, and unified topic
for old_id, (new_id, new_group_id, unified_topic) in realign_map.items():
    temp_id = f"T_{old_id}"
    for tbl, col in tables_to_update:
        c.execute(f"UPDATE {tbl} SET {col} = ? WHERE {col} = ?", (new_id, temp_id))
    c.execute("UPDATE questions SET group_id = ?, topic = ? WHERE id = ?", (new_group_id, unified_topic, new_id))

conn.commit()

# Verify results
c.execute("SELECT id, group_id, topic, substr(question_text, 1, 40) FROM questions WHERE branch='Comprehension' ORDER BY id")
rows = c.fetchall()
print(f"Realigned {len(rows)} Comprehension questions successfully:")
for r in rows:
    print(r)

conn.close()

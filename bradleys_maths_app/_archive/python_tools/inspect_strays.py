import json

with open("bradleys_maths_app/assets/questions.json", "r", encoding="utf-8") as f:
    data = json.load(f)

print("\n=== THE 2 UNKNOWN QUESTIONS ===")
for q in data:
    ma = str(q.get("major_area", "")).lower()
    top = str(q.get("topic", "")).lower()
    if "unknown" in ma or "unknown" in top:
        print(f"ID: {q.get('id')} | Level: {q.get('level')} | Branch: {q.get('branch')} | MA: {q.get('major_area')} | Topic: {q.get('topic')}")
        print(f"  Text: {q.get('question', '')[:110]}...\n")

print("\n=== THE 5 AS MOMENTS QUESTIONS ===")
for q in data:
    if q.get("branch") == "Mechanics" and q.get("level") == "AS" and q.get("major_area") == "Moments":
        print(f"ID: {q.get('id')} | Level: {q.get('level')} | Topic: {q.get('topic')}")
        print(f"  Text: {q.get('question', '')[:110]}...\n")
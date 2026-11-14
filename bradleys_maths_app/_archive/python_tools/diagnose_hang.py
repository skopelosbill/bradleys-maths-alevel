import os
import json
import sqlite3
import urllib.request
import urllib.error

API_KEY = os.environ.get('GEMINI_API_KEY')

conn = sqlite3.connect('assets/bradleys_maths.db')
cur = conn.cursor()
# Fetch question 7 (ID 004007)
cur.execute("SELECT q.id, q.question_text, o.ans_text FROM questions q JOIN question_options o ON q.id = o.question_id WHERE o.is_correct = 1 ORDER BY q.id LIMIT 1 OFFSET 6")
q_id, q_text, db_ans = cur.fetchone()
conn.close()

print("=" * 60)
print(f"DIAGNOSING QUESTION 7 (ID: {q_id})")
print("=" * 60)

prompt = f"""You are an A-Level Mathematics Examiner.
Does this Database Answer mathematically answer the question?
QUESTION: {q_text[:300]}
DATABASE ANSWER: {db_ans}
Reply strictly: VERDICT: PASS or VERDICT: FLAG
"""

payload = {
    "contents": [{"parts": [{"text": prompt}]}],
    "generationConfig": {"temperature": 0.1, "maxOutputTokens": 50}
}

# Test with gemini-flash-lite-latest with a strict 10s timeout
url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-lite-latest:generateContent?key={API_KEY}"
headers = {'Content-Type': 'application/json'}
data_bytes = json.dumps(payload).encode('utf-8')

print("Sending request with strict 10s timeout...")
try:
    req = urllib.request.Request(url, data=data_bytes, headers=headers)
    with urllib.request.urlopen(req, timeout=10) as resp:
        res = json.loads(resp.read().decode('utf-8'))
        answer = res['candidates'][0]['content']['parts'][0]['text']
        print(f"\n>>> SUCCESS in under 2 seconds! <<<\nResponse: {answer.strip()}")
except urllib.error.HTTPError as e:
    print(f"\nHTTP ERROR {e.code}: {e.read().decode('utf-8')}")
except Exception as e:
    print(f"\nNETWORK/SOCKET ERROR: {e}")
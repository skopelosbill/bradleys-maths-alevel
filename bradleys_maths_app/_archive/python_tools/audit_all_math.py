import os
import sys
import json
import sqlite3
import time
import urllib.request
import urllib.error

API_KEY = os.environ.get('GEMINI_API_KEY')
if not API_KEY:
    print("[ERROR] No GEMINI_API_KEY found in environment!")
    print("Please run: $env:GEMINI_API_KEY=\"your_key_here\"")
    sys.exit(1)

DB_PATH = 'assets/bradleys_maths.db'
CHECKPOINT_PATH = 'math_audit_checkpoint.json'
DISCREPANCY_PATH = 'math_audit_discrepancies.txt'
MODEL_NAME = 'gemini-flash-lite-latest'
API_URL = f"https://generativelanguage.googleapis.com/v1beta/models/{MODEL_NAME}:generateContent?key={API_KEY}"

# 1. Load Checkpoint
checkpoint = {}
if os.path.exists(CHECKPOINT_PATH):
    try:
        with open(CHECKPOINT_PATH, 'r', encoding='utf-8') as f:
            checkpoint = json.load(f)
    except Exception:
        checkpoint = {}

# 2. Fetch all questions from DB
conn = sqlite3.connect(DB_PATH)
cur = conn.cursor()
cur.execute("""
    SELECT q.id, q.branch, q.topic, q.question_text, o.ans_text 
    FROM questions q
    JOIN question_options o ON q.id = o.question_id
    WHERE o.is_correct = 1
    ORDER BY q.id
""")
all_questions = cur.fetchall()
conn.close()

total_q = len(all_questions)
print("=" * 70)
print(f"     BRADLEY'S MATHS — 1,400 QUESTION MASTER MATHEMATICAL AUDIT")
print(f"     Target Engine: {MODEL_NAME} (Fastest Batch Tier)")
print(f"     Progress: {len(checkpoint)}/{total_q} already completed")
print("=" * 70)

if not os.path.exists(DISCREPANCY_PATH):
    with open(DISCREPANCY_PATH, 'w', encoding='utf-8') as f:
        f.write("=" * 70 + "\n")
        f.write("     BRADLEY'S MATHS — MATHEMATICAL DISCREPANCY AUDIT REPORT\n")
        f.write("=" * 70 + "\n\n")

def call_gemini(prompt):
    payload = {
        "contents": [{"parts": [{"text": prompt}]}],
        "generationConfig": {
            "temperature": 0.1,
            "maxOutputTokens": 200
        }
    }
    headers = {'Content-Type': 'application/json'}
    data_bytes = json.dumps(payload).encode('utf-8')
    
    for attempt in range(1, 5):
        try:
            req = urllib.request.Request(API_URL, data=data_bytes, headers=headers)
            with urllib.request.urlopen(req, timeout=10) as resp:
                res_data = json.loads(resp.read().decode('utf-8'))
                return res_data['candidates'][0]['content']['parts'][0]['text']
        except urllib.error.HTTPError as e:
            if e.code in (429, 503):
                wait_time = attempt * 4
                print(f" [Busy ({e.code}) — pausing {wait_time}s...]", end="", flush=True)
                time.sleep(wait_time)
            else:
                return f"ERROR: HTTP {e.code}"
        except Exception:
            time.sleep(2)
    return "ERROR: Timeout after 4 attempts"

flags_count = sum(1 for v in checkpoint.values() if v == 'FLAG')

try:
    for idx, (q_id, branch, topic, q_text, db_ans) in enumerate(all_questions, 1):
        if q_id in checkpoint:
            continue

        prompt = f"""You are a Senior Chief Examiner for Cambridge & Edexcel A-Level Mathematics.
Evaluate whether the Database Answer is mathematically sound for this question:

QUESTION:
{q_text}

DATABASE ANSWER:
{db_ans}

INSTRUCTIONS:
- If the Database Answer is mathematically CORRECT (equivalent expressions, algebraic forms, exact vs rounded answers are all valid), reply strictly:
VERDICT: PASS

- If the Database Answer is mathematically WRONG (calculation slip, wrong value, wrong sign), reply strictly:
VERDICT: FLAG
REASON: <1 concise sentence explaining the error>
EXAMINER_ANSWER: <correct final answer>
"""

        response = call_gemini(prompt)

        if "VERDICT: FLAG" in response:
            checkpoint[q_id] = "FLAG"
            flags_count += 1
            print(f"[{idx}/{total_q}] [FLAG] {q_id} ({branch} - {topic}) -> Discrepancy logged!")
            
            reason = "Discrepancy detected"
            for line in response.splitlines():
                if line.startswith("REASON:"):
                    reason = line.replace("REASON:", "").strip()
                elif line.startswith("EXAMINER_ANSWER:"):
                    reason += " | Correct: " + line.replace("EXAMINER_ANSWER:", "").strip()

            with open(DISCREPANCY_PATH, 'a', encoding='utf-8') as f:
                f.write(f"QUESTION ID: {q_id} ({branch} - {topic})\n")
                f.write(f"DATABASE ANSWER: {db_ans}\n")
                f.write(f"EXAMINER REPORT: {reason}\n")
                f.write("-" * 60 + "\n")
        else:
            checkpoint[q_id] = "PASS"
            print(f"[{idx}/{total_q}] [PASS] {q_id} ({branch} - {topic})")

        # Save checkpoint after every question so not a single second of work is lost
        with open(CHECKPOINT_PATH, 'w', encoding='utf-8') as f:
            json.dump(checkpoint, f)

        # 4-second pace keeps us under Google's 15 RPM free limit
        time.sleep(4.0)

except KeyboardInterrupt:
    print("\n\n[PAUSED] Progress saved safely to checkpoint.")
    print(f"Completed {len(checkpoint)}/{total_q} questions.")
    sys.exit(0)

print("\n" + "=" * 70)
print(f"MASTER AUDIT COMPLETE!")
print(f"Total Questions Verified: {len(checkpoint)}/{total_q}")
print(f"Total Discrepancies Logged: {flags_count}")
print(f"Report saved to: {DISCREPANCY_PATH}")
print("=" * 70)
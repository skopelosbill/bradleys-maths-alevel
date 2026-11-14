import os
import json
import sqlite3
import time
import urllib.request
import urllib.error

api_key = os.environ.get('GEMINI_API_KEY')

# Fetch Question 050162
conn = sqlite3.connect('assets/bradleys_maths.db')
cur = conn.cursor()
cur.execute("SELECT question_text FROM questions WHERE id = '050162'")
question_text = cur.fetchone()[0]
conn.close()

print("=" * 70)
print("     INDEPENDENT SOLVER AUDIT — QUESTION 050162")
print("=" * 70)

prompt = f"""You are a Senior Chief Examiner for Cambridge & Edexcel A-Level Mathematics.
Solve the following A-Level Statistics question step-by-step from first principles.
Pay extreme care to exact counting of leaves, ranks for medians and quartiles for n = 21, and careful arithmetic.

QUESTION:
{question_text}

Provide:
1. Ordered list of values for Group A and Group B.
2. Exact ranks and values for Median, Q1, Q3, and IQR for both groups.
3. At the very end, write a single line:
FINAL ANSWER: (a)(i) [Median], (ii) [IQR], (b)(i) [Median], (ii) [IQR]
"""

payload = {"contents": [{"parts": [{"text": prompt}]}]}
headers = {'Content-Type': 'application/json'}

candidate_models = ['gemini-3.8-flash', 'gemini-flash-latest', 'gemini-flash-lite-latest']
success = False

for model_name in candidate_models:
    if success:
        break
    url = f"https://generativelanguage.googleapis.com/v1beta/models/{model_name}:generateContent?key={api_key}"
    print(f"\nAttempting with [{model_name}]...")
    
    for attempt in range(1, 4):
        try:
            req = urllib.request.Request(url, data=json.dumps(payload).encode('utf-8'), headers=headers)
            with urllib.request.urlopen(req) as response:
                res_data = json.loads(response.read().decode('utf-8'))
                solution = res_data['candidates'][0]['content']['parts'][0]['text']
                print("\n>>> INDEPENDENT EXAMINER SOLUTION: <<<\n")
                print(solution)
                success = True
                break
        except urllib.error.HTTPError as e:
            if e.code == 503:
                print(f"  Attempt {attempt}: High demand spike (503). Retrying in 3s...")
                time.sleep(3)
            else:
                err_text = e.read().decode('utf-8')
                print(f"  HTTP {e.code} on {model_name}: {err_text[:120]}...")
                break
        except Exception as e:
            print(f"  Error: {e}")
            break

if not success:
    print("\nAll models temporarily busy. Please try in a moment.")
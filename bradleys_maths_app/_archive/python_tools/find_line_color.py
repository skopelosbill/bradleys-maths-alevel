import os, glob

pub_cache = os.path.expandvars(r'%LOCALAPPDATA%\Pub\Cache\hosted\pub.dev')
files = glob.glob(pub_cache + '/flutter_math_fork*/**/array*.dart', recursive=True)
if not files:
    files = glob.glob(pub_cache + '/flutter_math_fork*/**/*.dart', recursive=True)

found = []
for f in files:
    with open(f, 'r', encoding='utf-8', errors='ignore') as fp:
        content = fp.read()
        if 'hline' in content or 'array' in content.lower():
            for line in content.splitlines():
                if 'BorderSide' in line or 'border' in line.lower() and 'color' in line.lower():
                    found.append((os.path.basename(f), line.strip()))

for item in found[:10]:
    print(item)

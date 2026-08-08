import json
import os
import glob
from collections import Counter

def extract_to_markdown(output_filename="Analysis_Report.md"):
    all_major_areas = []
    all_topics = []
    all_subtopics = []

    # Target the specific naming convention
    files = glob.glob("Pure_*.js")

    if not files:
        print("No files found. Please ensure the script is in the folder with Pure_1.js etc.")
        return

    for file_path in files:
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
                start_idx = content.find('[')
                end_idx = content.rfind(']') + 1
                
                if start_idx == -1: continue
                
                data = json.loads(content[start_idx:end_idx])
                
                for item in data:
                    if "major_area" in item:
                        all_major_areas.append(item["major_area"])
                    if "topic" in item:
                        all_topics.append(item["topic"])
                    if "subtopic" in item and isinstance(item["subtopic"], list):
                        all_subtopics.extend(item["subtopic"])
        except Exception as e:
            print(f"Error processing {file_path}: {e}")

    # Generate the Markdown content
    with open(output_filename, 'w', encoding='utf-8') as md_file:
        md_file.write("# Curriculum Data Analysis Report\n\n")
        
        write_markdown_table(md_file, "Major Areas", Counter(all_major_areas))
        write_markdown_table(md_file, "Topics", Counter(all_topics))
        write_markdown_table(md_file, "Subtopics", Counter(all_subtopics))

    print(f"Success! Analysis saved to: {output_filename}")

def write_markdown_table(file_handle, title, counter_obj):
    """Writes an alphabetically sorted Markdown table to the file."""
    file_handle.write(f"## {title}\n\n")
    file_handle.write(f"| {title[:-1]} Name | Frequency |\n")
    file_handle.write(f"| :--- | :--- |\n")
    
    for name in sorted(counter_obj.keys()):
        file_handle.write(f"| {name} | {counter_obj[name]} |\n")
    file_handle.write("\n---\n\n")

if __name__ == "__main__":
    extract_to_markdown()
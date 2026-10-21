import os
import json

docs_dir = "docs"
output_file = "docs-config.json"

def generate_config():
    if not os.path.exists(docs_dir):
        print("Error: 'docs' directory does not exist.")
        return

    if os.path.exists(output_file):
        os.remove(output_file)

    docs_tree = {}

    for category_name in os.listdir(docs_dir):
        category_path = os.path.join(docs_dir, category_name)
        
        if os.path.isdir(category_path):
            md_files = []
            
            for file_name in os.listdir(category_path):
                if file_name.endswith(".md"):
                    name_without_ext = os.path.splitext(file_name)[0]
                    md_files.append(name_without_ext)

            if md_files:
                md_files.sort()
                docs_tree[category_name] = md_files

    with open(output_file, "w", encoding="utf-8") as f:
        json.dump(docs_tree, f, ensure_ascii=False, indent=4)

    print("Success: docs-config.json")

if __name__ == "__main__":
    generate_config()
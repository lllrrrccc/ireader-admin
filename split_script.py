import re
import os

base = "/Users/lrc/Documents/kimi/workspace/ireader-admin-prototype/js"

# ===== 1. Split pages.js =====
with open(f"{base}/pages.js", "r") as f:
    lines = f.readlines()

# Function boundaries
func_starts = {
    "books": 4,
    "bookAudio": 388,
    "batchAddBooks": 542,
    "bookDetail": 671,
    "categories": 874,
    "recommendation": 1279,
    "wordbank": 1511,
    "listening": 1769,
    "aiGuide": 2043,
    "aiTranslate": 2280,
    "aiExplain": 2476,
    "knowledge": 2672,
    "students": 2948,
    "studentDetail": 3301,
    "teachers": 3751,
    "parents": 4040,
    "devices": 4283,
    "deviceStudents": 4542,
    "readingData": 4665,
    "readingTasks": 4849,
    "wordLearning": 5202,
    "listeningData": 5402,
    "platformOverview": 5586,
    "bookAnalysis": 5771,
    "userAnalysis": 5948,
    "version": 6192,
    "permissions": 6381,
    "accounts": 6645,
}

# Build groups
groups = {
    "pages_books": ["books", "bookAudio", "batchAddBooks", "bookDetail"],
    "pages_categories": ["categories"],
    "pages_ai": ["recommendation", "wordbank", "listening", "aiGuide", "aiTranslate", "aiExplain", "knowledge"],
    "pages_user": ["students", "studentDetail", "teachers", "parents"],
    "pages_device": ["devices", "deviceStudents"],
    "pages_data": ["readingData", "readingTasks", "wordLearning", "listeningData"],
    "pages_system": ["platformOverview", "bookAnalysis", "userAnalysis", "version", "permissions", "accounts"],
}

# Sorted function names for boundary calculation
sorted_funcs = sorted(func_starts.items(), key=lambda x: x[1])

for group_name, func_names in groups.items():
    out_lines = ["// Auto-generated from pages.js\n"]
    out_lines.append("Object.assign(pageFunctions, {\n")
    
    for func_name in func_names:
        start_line = func_starts[func_name]
        # Find end line (next function start - 1, or last line before closing })
        end_line = 6912  # default before last line
        for i, (name, line) in enumerate(sorted_funcs):
            if name == func_name and i + 1 < len(sorted_funcs):
                end_line = sorted_funcs[i + 1][1] - 1
                break
        
        # Extract lines (1-based to 0-based)
        func_lines = lines[start_line - 1:end_line]
        out_lines.extend(func_lines)
        out_lines.append("\n")
    
    out_lines.append("});\n")
    
    with open(f"{base}/{group_name}.js", "w") as f:
        f.writelines(out_lines)
    
    print(f"Created {group_name}.js")

# ===== 2. Split main.js =====
with open(f"{base}/main.js", "r") as f:
    main_lines = f.readlines()

main_funcs = {
    "init": 5,
    "doLogin": 11,
    "renderSidebar": 22,
    "navigateTo": 38,
    "updateBreadcrumb": 50,
    "loadPage": 74,
    "setupEventListeners": 87,
    "attachPageEvents": 106,
    "openModal": 111,
    "closeModal": 148,
    "toggleDropdown": 153,
    "updateGradeText": 186,
    "toggleBookEdit": 216,
    "showBookStep2": 225,
    "backToBookStep1": 236,
    "updateRadioText": 247,
    "handleBatchFiles": 257,
    "updateBatchCount": 288,
    "showBatchStep1": 300,
    "showBatchStep2": 309,
    "updateBatchEditCount": 360,
    "showBatchStep3": 365,
    "toggleBatchCheckAll": 376,
    "applyBatchEdit": 382,
    "handleAudioUpload": 401,
    "openBookStatusModal": 417,
    "toggleBookVisibility": 422,
    "saveTimeline": 463,
    "markTextPosition": 468,
    "selectAudio": 482,
    "showMarkedPositions": 491,
}

sorted_main = sorted(main_funcs.items(), key=lambda x: x[1])

# Core: init, doLogin, renderSidebar, navigateTo, updateBreadcrumb, loadPage, setupEventListeners, attachPageEvents
core_funcs = ["init", "doLogin", "renderSidebar", "navigateTo", "updateBreadcrumb", "loadPage", "setupEventListeners", "attachPageEvents"]
# Modal: openModal, closeModal, toggleDropdown, updateGradeText, updateRadioText
modal_funcs = ["openModal", "closeModal", "toggleDropdown", "updateGradeText", "updateRadioText"]
# Book actions: the rest
book_funcs = ["toggleBookEdit", "showBookStep2", "backToBookStep1", "handleBatchFiles", "updateBatchCount", "showBatchStep1", "showBatchStep2", "updateBatchEditCount", "showBatchStep3", "toggleBatchCheckAll", "applyBatchEdit", "handleAudioUpload", "openBookStatusModal", "toggleBookVisibility", "saveTimeline", "markTextPosition", "selectAudio", "showMarkedPositions"]

def extract_func_lines(func_name, all_lines, func_map, sorted_map):
    start = func_map[func_name]
    end = len(all_lines)
    for i, (name, line) in enumerate(sorted_map):
        if name == func_name and i + 1 < len(sorted_map):
            end = sorted_map[i + 1][1] - 1
            break
    return all_lines[start - 1:end]

# Write main_core.js
core_lines = ["// Core framework: navigation, routing, breadcrumb, init\n"]
for fn in core_funcs:
    core_lines.extend(extract_func_lines(fn, main_lines, main_funcs, sorted_main))
    core_lines.append("\n")
with open(f"{base}/main_core.js", "w") as f:
    f.writelines(core_lines)
print("Created main_core.js")

# Write main_modal.js
modal_lines = ["// Modal system & dropdown utilities\n"]
for fn in modal_funcs:
    modal_lines.extend(extract_func_lines(fn, main_lines, main_funcs, sorted_main))
    modal_lines.append("\n")
with open(f"{base}/main_modal.js", "w") as f:
    f.writelines(modal_lines)
print("Created main_modal.js")

# Write main_book.js
book_lines = ["// Book-related actions: add, batch, audio, status\n"]
for fn in book_funcs:
    book_lines.extend(extract_func_lines(fn, main_lines, main_funcs, sorted_main))
    book_lines.append("\n")
with open(f"{base}/main_book.js", "w") as f:
    f.writelines(book_lines)
print("Created main_book.js")

print("\nDone! Split complete.")

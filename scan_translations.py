import os
import re
root = r"e:\Users\LENOVO\Desktop\projet\amt-systems-website\src"
textpat = re.compile(r'>([^<>{}]+)<')
attrpat = re.compile(r'\b(aria-label|title|alt|placeholder|label|caption)=\s*["\']([^"\']+)["\']')

for dirpath, dirnames, filenames in os.walk(root):
    for filename in sorted(filenames):
        if filename.endswith(('.js', '.jsx')):
            path = os.path.join(dirpath, filename)
            txt = open(path, 'r', encoding='utf-8').read()
            found = []
            for m in textpat.finditer(txt):
                s = m.group(1).strip()
                if s and any(c.isalpha() for c in s) and len(s) > 1 and not re.search(r"\b(t|Trans|useTranslation|withTranslation|i18n)\b", s):
                    found.append(('text', s))
            for m in attrpat.finditer(txt):
                val = m.group(2).strip()
                if val and any(c.isalpha() for c in val) and len(val) > 1:
                    found.append(('attr', f'{m.group(1)}="{val}"'))
            if found:
                print('FILE:', path)
                for kind, val in found[:80]:
                    print(' ', kind, val)
                print()
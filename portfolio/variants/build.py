from pathlib import Path
from _shared import BASE, BODY, SHELL

ROOT = Path(__file__).resolve().parent

VARIANTS = [
    {
        "file": "01-duty-roster.html",
        "title": "Duty roster",
        "fonts": '<link rel="preconnect" href="https://fonts.googleapis.com">\n  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n  <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&display=swap" rel="stylesheet">',
        "css": BASE + """
body {
  font-family: "Source Serif 4", Georgia, serif;
  font-size: 1.0625rem;
  line-height: 1.55;
  color: #243018;
  background: #b7bec6;
}
.page {
  max-width: 42rem;
  margin: 2rem auto;
  background: #e4e8ec;
  padding-bottom: 0.5rem;
}
.mast, .opening, .project, .close {
  padding: 0 1.25rem;
}
.mast {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 1rem;
  padding-top: 1.25rem;
  padding-bottom: 0.75rem;
  border-left: 10px solid #e3c56b;
}
.mast .name {
  font-family: "Barlow Condensed", sans-serif;
  font-weight: 700;
  font-size: 2.75rem;
  line-height: 0.95;
  margin: 0;
  letter-spacing: -0.02em;
}
.mast .place { margin: 0; font-size: 1rem; }
.close {
  padding: 2rem 1.25rem 2.5rem;
  border-top: 1px solid #8e96a0;
}
.close .name {
  font-family: "Barlow Condensed", sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 0.35rem;
}
.close p { margin: 0 0 0.25rem; }
.phone img { width: min(100%, 16rem); margin-inline: auto; }
.opening { padding-top: 1rem; padding-bottom: 1.5rem; }
.project {
  padding-top: 1.5rem;
  padding-bottom: 0.5rem;
  border-top: 1px solid #8e96a0;
}
h2 {
  font-family: "Barlow Condensed", sans-serif;
  font-size: 1.35rem;
  font-weight: 600;
  margin: 0 0 0.75rem;
}
p { margin: 0 0 1rem; }
""",
    },
    {
        "file": "02-corridor.html",
        "title": "Corridor",
        "fonts": '<link rel="preconnect" href="https://fonts.googleapis.com">\n  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n  <link href="https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700&display=swap" rel="stylesheet">',
        "css": BASE + """
body {
  font-family: Figtree, "Segoe UI", sans-serif;
  font-size: 1.05rem;
  line-height: 1.5;
  color: #2a3336;
  background: #e8eced;
}
.mast {
  padding: 2.5rem 1.25rem 0.5rem;
  max-width: 38rem;
  margin: 0 auto;
}
.mast .name {
  font-size: 2.15rem;
  font-weight: 700;
  margin: 0;
  letter-spacing: -0.03em;
}
.mast .place { margin: 0.2rem 0 0; color: #4a5c62; }
.opening, .project, .close {
  max-width: 38rem;
  margin: 0 auto;
  padding: 0 1.25rem;
}
.opening { padding-top: 1.5rem; padding-bottom: 0.5rem; }
.opening p:first-child {
  font-size: 1.28rem;
  font-weight: 500;
  line-height: 1.4;
  color: #1c2427;
}
h2 {
  font-size: 1.15rem;
  font-weight: 600;
  margin: 2.5rem 0 0.75rem;
  color: #4a5c62;
}
p { margin: 0 0 1rem; }
.acute { color: #8b1e3f; font-weight: 600; }
figure.phone {
  background: #cfd6d8;
  padding: 1.25rem 0;
}
.phone img { width: min(100%, 17rem); margin-inline: auto; }
.close { padding: 2.5rem 1.25rem 3.5rem; }
.close .name { font-weight: 700; margin: 0 0 0.35rem; }
.close p { margin: 0 0 0.2rem; }
""",
    },
    {
        "file": "03-work-order.html",
        "title": "Work order",
        "fonts": '<link rel="preconnect" href="https://fonts.googleapis.com">\n  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n  <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600&display=swap" rel="stylesheet">',
        "css": BASE + """
body {
  font-family: "IBM Plex Sans", "Helvetica Neue", sans-serif;
  font-size: 1.02rem;
  line-height: 1.5;
  color: #1e2a2f;
  background: #f3f6f8;
}
.mast {
  background: #c5dce8;
  padding: 1.75rem 1.25rem 1.25rem;
  border-bottom: 4px solid #2c5f2d;
}
.mast .name {
  font-size: 2rem;
  font-weight: 600;
  margin: 0;
}
.mast .place { margin: 0.25rem 0 0; font-weight: 500; }
.opening, .project, .close {
  max-width: 40rem;
  margin: 0 auto;
  padding: 0 1.25rem;
}
.opening { padding-top: 1.75rem; }
h2 {
  font-size: 1.05rem;
  font-weight: 600;
  margin: 2.25rem 0 0.6rem;
  padding: 0.35rem 0.5rem;
  background: #e6f0f5;
  display: inline-block;
}
p { margin: 0 0 0.95rem; }
.phone img { width: min(100%, 15.5rem); }
.close {
  max-width: none;
  margin-top: 2rem;
  padding: 1.5rem 1.25rem 2.5rem;
  background: #c5dce8;
  border-top: 4px solid #2c5f2d;
}
.close .name { font-weight: 600; margin: 0 0 0.4rem; }
.close p { margin: 0 0 0.15rem; }
""",
    },
    {
        "file": "04-ward-notes.html",
        "title": "Ward notes",
        "fonts": '<link rel="preconnect" href="https://fonts.googleapis.com">\n  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n  <link href="https://fonts.googleapis.com/css2?family=Literata:opsz,wght@7..72,400;7..72,600&display=swap" rel="stylesheet">',
        "css": BASE + """
body {
  font-family: Literata, Georgia, serif;
  font-size: 1.08rem;
  line-height: 1.62;
  color: #2b2f38;
  background: #f5f7fa;
}
.mast {
  max-width: 36rem;
  margin: 0 auto;
  padding: 3rem 1.5rem 0;
}
.mast .name {
  font-size: 1.75rem;
  font-weight: 600;
  margin: 0;
}
.mast .place {
  margin: 0.15rem 0 0;
  color: #3d4f7c;
}
.opening, .project, .close {
  max-width: 36rem;
  margin: 0 auto;
  padding: 0 1.5rem;
}
.opening { padding-top: 2rem; }
.opening p:first-child { font-size: 1.2rem; }
h2 {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 2.75rem 0 0.85rem;
  color: #3d4f7c;
}
p { margin: 0 0 1.05rem; }
figure {
  margin-left: -0.25rem;
  margin-right: -0.25rem;
}
.phone img { width: min(100%, 14.5rem); }
.close { padding: 3rem 1.5rem 4rem; }
.close .name { font-weight: 600; margin: 0 0 0.4rem; color: #3d4f7c; }
.close p { margin: 0 0 0.2rem; }
""",
    },
    {
        "file": "05-birch-shop.html",
        "title": "Birch shop",
        "fonts": '<link rel="preconnect" href="https://fonts.googleapis.com">\n  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n  <link href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@112,400;112,600;112,700&display=swap" rel="stylesheet">',
        "css": BASE + """
body {
  font-family: Archivo, "Avenir Next", sans-serif;
  font-variation-settings: "wdth" 112;
  font-size: 1.04rem;
  line-height: 1.48;
  color: #4e3b2a;
  background: #e8dcc8;
}
.mast {
  padding: 2.25rem 1.25rem 1rem;
  max-width: 44rem;
  margin: 0 auto;
}
.mast .name {
  font-size: 2.6rem;
  font-weight: 700;
  margin: 0;
  letter-spacing: -0.04em;
  line-height: 0.95;
}
.mast .place { margin: 0.4rem 0 0; font-weight: 600; color: #6b7f82; }
.opening, .project, .close {
  max-width: 44rem;
  margin: 0 auto;
  padding: 0 1.25rem;
}
.opening { padding-bottom: 1.5rem; }
h2 {
  font-size: 1.35rem;
  font-weight: 700;
  margin: 0 0 0.8rem;
  padding-top: 1.5rem;
  border-top: 6px solid #6b7f82;
}
p { margin: 0 0 0.95rem; }
.phone img { width: min(100%, 16rem); }
.close {
  padding: 1.5rem 1.25rem 3rem;
}
.close .name { font-weight: 700; font-size: 1.35rem; margin: 0 0 0.35rem; }
.close p { margin: 0 0 0.2rem; }
""",
    },
]


def main():
    for v in VARIANTS:
        html = SHELL.format(title=v["title"], fonts=v["fonts"], css=v["css"], body=BODY)
        path = ROOT / v["file"]
        path.write_text(html, encoding="utf-8")
        print(path.name)


if __name__ == "__main__":
    main()

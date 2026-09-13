# Goal
The goal of this repo is creating great portfolio for Lisa Bark tailored to a specific job.

# Sources

 - Current job: `jobs/HUSKVARNA-UX-2026.md`
 - LinkedIn: https://www.linkedin.com/in/ACoAABicTwgBJGnaDY1lbQAUotxu1tJwh2B29v0?skipRedirect=true&miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAABicTwgBJGnaDY1lbQAUotxu1tJwh2B29v0
 - Past application: `past-applications/application.pdf`
 - https://www.husqvarna.com/se/utforska-och-upptack/husqvarna-fleet-services-for-robotgrasklippare/
 - https://www.husqvarna.com/se/tjanster/fleet-services/

# Rules
 - Writing: Portfolio text is English. Read `.cursor/skills/unslop/SKILL.md` and `.cursor/skills/no-ai-slop/SKILL.md` before any of it.
 - Interviewing: Lisa runs the chat. Use grill-me. One question at a time, with a recommended answer.
 - Known facts: do not re-ask anything already stated in the Application (`past-applications/application.pdf`).
 - Web design: read `.cursor/skills/frontend-design/SKILL.md` before any HTML variant.
 - Terms: read `ONTOLOGY.md` before using project words. Update it when a term is resolved.
 - Document answers directly after each question in grillings to that information cant be lost.

# Way of working

## Goal 1 - The interview
  - You and Lisa must come to a shared agreement that all high value past portfolio worthy Projects get surfaced. Skip facts already in the Application. Ask for more Ascom work the Application does not cover. Ask for what it does not cover on each Project: what she personally did, what she is allowed to show, skills, ways of working, accolades, achievements. Reason with her about which ones fit the Job.
  - Each past project should have enough information that you understand what skills, ways of working, accolades and achievements are showcased through that project.
  - Come to an agreement which ones to pick for the current job application you are targeting in /Users/danielbark/Code/lisa-portfolio-creator/jobs

## Goal 2 - Writing the portfolio text
  - Work iteratively with Lisa one text section at a time and give rationales about what you are trying to convey the reader assessing her for the chosen job. Lisa will approve or suggest changes.
  - Report per project and overall progress after each text section is done.

## Goal 3 - Portfolio Design
  - Once you have an agreement with Lisa about the portfolio content and rationale for it its time to start ideating on the look of the portfolio. Screenshot files are in the repo before this starts.
  - You create 5 variants in HTML and have Lisa pick one or generate 5 more with her input on what more exactly she is looking for. Once she picks one she might have some tweaks for you to finalize it. 
  - Once the HTML portfolio design process is finalized you export it both as docx and pdf where all texts and images should be easily editable by Lisa for final touchup.

# Local tooling
 - Toolchain: the Cloud Agent env (`.cursor/environment.json`) provisions `pandoc` + `poppler-utils` via `scripts/setup-tools.sh`. Run that script yourself if those tools are ever missing (Chrome, Node, and Python are already in the base image).
 - Read the past application: `pdftotext -layout past-applications/application.pdf -` (poppler-utils).
 - Export a finished HTML variant to PDF + DOCX: `scripts/export-portfolio.sh <input.html> [output-basename]`. PDF is rendered by headless Chrome (keeps the CSS design), DOCX by pandoc (text/images stay editable). It auto-runs `setup-tools.sh` if the toolchain is missing. Scratch outputs go under `build/`.

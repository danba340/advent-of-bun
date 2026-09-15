#!/usr/bin/env bash
#
# Export a portfolio HTML file to a print-ready PDF and an editable DOCX.
#
#   PDF  -> Google Chrome headless (keeps the HTML/CSS design intact)
#   DOCX -> pandoc (text and images stay editable for final touch-up)
#
# Usage:
#   scripts/export-portfolio.sh <input.html> [output-basename]
#
# Example:
#   scripts/export-portfolio.sh build/portfolio.html dist/lisa-bark-husqvarna
#   -> writes dist/lisa-bark-husqvarna.pdf and dist/lisa-bark-husqvarna.docx

set -euo pipefail

usage() {
  echo "Usage: $0 <input.html> [output-basename]" >&2
  exit 1
}

[ $# -ge 1 ] || usage

INPUT="$1"
[ -f "$INPUT" ] || { echo "Input HTML not found: $INPUT" >&2; exit 1; }

BASE="${2:-${INPUT%.*}}"
OUT_DIR="$(dirname "$BASE")"
mkdir -p "$OUT_DIR"

# Self-heal: ensure the export toolchain is present even if the environment
# install step never ran (e.g. a fresh agent without a configured environment).
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
if ! { command -v pandoc >/dev/null && command -v pdftotext >/dev/null && command -v rsvg-convert >/dev/null; }; then
  bash "$SCRIPT_DIR/setup-tools.sh"
fi

# Prefer the real Chrome binary over any desktop wrapper: the wrapper pins a shared
# --user-data-dir + --remote-debugging-port, which makes headless --print-to-pdf hang.
CHROME=""
for c in google-chrome-stable chromium chromium-browser google-chrome; do
  if command -v "$c" >/dev/null; then CHROME="$(command -v "$c")"; break; fi
done
[ -n "$CHROME" ] || { echo "No Chrome/Chromium found for PDF export." >&2; exit 1; }
command -v pandoc >/dev/null || { echo "pandoc not found for DOCX export." >&2; exit 1; }

ABS_INPUT="$(realpath "$INPUT")"
PROFILE_DIR="$(mktemp -d)"
trap 'rm -rf "$PROFILE_DIR"' EXIT

echo "Rendering PDF via ${CHROME##*/} ..."
"$CHROME" --headless=new --no-sandbox --disable-gpu --disable-dev-shm-usage \
  --no-first-run --no-default-browser-check \
  --user-data-dir="$PROFILE_DIR" \
  --no-pdf-header-footer \
  --print-to-pdf="${BASE}.pdf" \
  "file://${ABS_INPUT}" >/dev/null 2>&1

echo "Rendering DOCX via pandoc ..."
HTML_DIR="$(dirname "$ABS_INPUT")"
HTML_BASE="$(basename "$ABS_INPUT")"
OUT_DIR_ABS="$(realpath "$OUT_DIR")"
DOCX_NAME="$(basename "$BASE").docx"
# Image srcs in the HTML are relative to the HTML file (e.g. ../screenshots/...).
# Pandoc resolves them from cwd, so run from the HTML directory.
(
  cd "$HTML_DIR"
  pandoc "$HTML_BASE" -f html -t docx --extract-media="${OUT_DIR_ABS}/media" -o "${OUT_DIR_ABS}/${DOCX_NAME}"
)

echo "Done:"
echo "  ${BASE}.pdf"
echo "  ${BASE}.docx"

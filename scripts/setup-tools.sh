#!/usr/bin/env bash
#
# Idempotent installer for the portfolio export toolchain.
#
#   pandoc         -> HTML/markdown to editable DOCX
#   poppler-utils  -> pdftotext (read the past application), pdftoppm/pdfinfo (previews)
#
# Safe to run repeatedly: it no-ops instantly once the tools are present. Used by
# .cursor/environment.json (install) and auto-invoked by scripts/export-portfolio.sh
# so the pipeline works even if the environment install step never ran.

set -euo pipefail

if command -v pandoc >/dev/null && command -v pdftotext >/dev/null; then
  exit 0
fi

SUDO=""
if [ "$(id -u)" -ne 0 ]; then
  command -v sudo >/dev/null || { echo "setup-tools: need root or sudo to install pandoc/poppler-utils." >&2; exit 1; }
  SUDO="sudo"
fi

echo "setup-tools: installing pandoc + poppler-utils ..."
$SUDO apt-get update
$SUDO DEBIAN_FRONTEND=noninteractive apt-get install -y pandoc poppler-utils

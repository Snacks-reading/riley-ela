# Riley Reads & Spells — ELA (Phase 1)

## What this repo structure does
- **One launcher** (`/index.html`) that lists modules (like IXL/Prodigy-style tiles).
- **Each module is its own folder** under `/modules/<module-id>/`.
- **A single registry** (`/core/registry.js`) controls ordering, labels, and routing.

## Locked baseline
- **A1 (Guard the Vowel / CVC Doubling)** is copied in as:
  - `/modules/A1_guard-the-vowel/`
  - This folder is treated as locked; do not edit inside it unless we're versioning a hotfix.

## Add a new module (repeatable pattern)
1. Duplicate `/modules/_template/` and rename it to your next module folder.
2. Add an entry in `/core/registry.js`.
3. Deploy via GitHub Pages.

## GitHub Pages
- Settings → Pages → Deploy from branch → `/ (root)`.
- The launcher will work at: `https://<org>.github.io/<repo>/`

## Asset conventions
- Shared avatars live in `/assets/avatars/`.
- If a module is fully self-contained (like A1), keep its assets local inside that module folder.


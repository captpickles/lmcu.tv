# LMCU local proof of concept

Open `index.html` directly in Chrome. No server, install, build step, remote font, analytics, autoplay, or network connection is required.

This is a presentation prototype using a small set of representative records from `../data/canon.yaml`. It is not the complete public site and does not replace the structured corpus.

Current generated destinations:

- `timeline/index.html` — all 186 catalogued reels in chronological order
- `reels/bad-job/index.html` — the first complete reel-detail proof
- `reels/*/index.html` — one generated record for every catalogued reel
- `characters/index.html` — cast directory with 25 generated character records
- `feed.xml` — RSS 2.0 feed containing every catalogued reel, newest first

After changing `data/canon.yaml`, regenerate those pages from the repository root:

```sh
ruby scripts/generate-site.rb
ruby scripts/generate-v01-pages.rb
```

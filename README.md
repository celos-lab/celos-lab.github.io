# CELOS Lab homepage

Source of https://celoslab.github.io, the homepage of the CELOS Lab (Control, Estimation, and Learning for Optimal Systems) at Hanyang University.

Built with Astro and Tailwind CSS. Pushing to `main` builds the site and deploys it to GitHub Pages (`.github/workflows/deploy.yml`).

## Editing content

- Text and lists live in `src/data/*.yaml` (members, publications, projects, news, research, talks, awards, history, cv).
- Fixed page text lives in `src/i18n/ui.ts`.
- Images and clips live in `public/media/` (WebP images, MP4 clips with WebP posters).

## Local preview

```sh
npm install
npm run build
npm run preview
```

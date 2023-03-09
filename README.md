# 🗑 Hamiltoss

_Find out if something is recyclable in Hamilton_

<img src="demo/screenshot.png" alt="A screen shot of Hamiltoss site" width="800" />

This is a site that I made because I found it difficult to look up how to sort my garbage and recycling in Hamilton. And I wanted to learn Svelte and SvelteKit. Special thanks to Will for the name.

Thanks for stopping by!

— Jason, Feb 2023

## Features
- 🔍 Search for items that you're curious about sorting.
- 👀 See a preview in the search results of where something might be sorted.
- 🖼 View more details about specific items, and see a list of related items.
- 📚 Browse a list of all available results.
- ⏱ Recent searches are stored locally in your browser. (I've found myself looking up things more than once.)
- ☝️ See an alert around notable times in the pickup calendar. (Like when collection is a day later.)

## Tech intro

This is a [SvelteKit](https://kit.svelte.dev/) app made with their TypeScript starter. Styling is done with [Tailwind](https://tailwindcss.com/) and was added to the project using this handy repo [svelte-add/tailwindcss](https://github.com/svelte-add/tailwindcss). Code is formatted with Prettier. I'm using the Prettier plugin `prettier-plugin-tailwindcss` to automatically sort tailwind classes in code.

[Svelte Kit Docs](https://kit.svelte.dev/docs/introduction)

[Svelte Docs](https://svelte.dev/docs)

[Tailwind Docs](https://tailwindcss.com/docs/installation)

## Setup

You'll need at least `node 18`.

Once you've installed dependencies with `npm install`, start the development server:

```bash
npm run dev -- --open
```

The app will be running at

```
http://localhost:5173/
```

## Developing

Once running, you can edit files, save them, and it'll update in the browser.
Make new commits on a feature branch. Branches on this remote will be built on netlify.

You can run `npm run build` locally to check if the build and deloy will succeed. You can then preview the production build with `npm run preview`. Or just push and see.

## Deployment

Once updates are ready, pulling into `main` will get built and deployed to: https://hamiltoss.fyi/

- Added `adapter-netlify` for this.

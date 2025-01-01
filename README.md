# My Personal Website

A repo for my personal website, which is currently live at [davidzhan.com](https://davidzhan.com). This is been hosted on many platforms in the past, but is currently hosted using [Cloudflare Pages](https://pages.cloudflare.com/).

There are plans to upgrade this and make this look nicer in the future.

<!-- A past version of this site is available at [site.archive.dzhan.dev](https://site.archive.dzhan.dev) -->

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Make sure you are using the node version specified in `.node-version`: version `22.12.0`. Most node versions should work, but older versions may run into issues with Next.js, and it's probably best to use the version specified in `.node-version` as that will be the version of node used in building the site.

<!-- This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel. -->

## Build Settings

Right now I am hosting this site on [Cloudflare Pages](https://pages.cloudflare.com/). The build settings I am using are:

- Build command: `npx next build`
- Build output: `out`
- Root directory: [none specified]
- Build comments: `Enabled`

I've specified in `.node-version` to use version `22.12.0`, which Cloudflare Pages does check for when building the site. When developing locally, make sure to use that version too for consistency. Most node versions should work, but older versions may run into issues with Next.js.

## Credits

There were several sites where I learned a lot of information on or used CC0/Unlicense code, and I give them all credit in [CREDITS.md](/CREDITS.md). This is both to give them credit and so I know where to look for more info when I want to do the same thing again in the future.
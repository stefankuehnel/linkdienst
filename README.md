# Linkdienst

[![Build Status](https://travis-ci.com/stefankuehnel/linkdienst.svg?token=AQyzxMBFxfUSRWWUx9Bp&branch=master)](https://travis-ci.com/stefankuehnel/linkdienst)![CI](https://github.com/stefankuehnel/linkdienst/workflows/CI/badge.svg)

The frontend, backend, and content source code for Linkdienst, the official link shortener by [Stefan Kühnel](https://9bn.de/sk).

## Found a bug? 👷‍

Thanks for letting me know! Please [file an issue](https://github.com/stefankuehnel/linkdienst/issues/new?assignees=&labels=&template=bug_report.md&title=) and I should reply shortly.

## Building the site 🏗

You'll need a recent version of Node: v12.10 or higher.

### Clone the repo

```bash
git clone https://github.com/stefankuehnel/stefankuehnel.com.git
```

### Install dependencies

```bash
npm ci
```

### Start a local server to preview the site

```bash
npm run dev
```

Open `http://localhost:3000/` to see the site locally. Changes to assets will
rebuild the site. Refresh to see your changes.

## Deploying the site 🚀

The site will build and deploy the `main` branch automatically after every `git push origin main` via [Vercel](https://vercel.com).

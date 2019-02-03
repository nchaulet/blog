---
path: "/first-impressions-github-actions"
date: "2018-12-21"
title: "First impressions with github actions"
---

A few weeks ago Github published [Github Actions](https://github.com/features/actions). In the beginning, the feature was accessible only for private repositories, but they just released it for public ones. I wanted to give it a try and what better project than my personal blog to try new technologies, I decided to move the deployment of my blog to Github Actions.

It's easy to start you have a UI where you can add basic actions like running npm scripts, but to deploy my blogs I used the npm module `gh-pages` that rely on having git installed on the machine, and it was not the case with the default npm Github action.

I decided to implement my own action to deploy to Github pages. You just need to create a GitHub repository with a `Dockerfile` inside. When GitHub is going to execute your action the repo and results of previous actions are going to be mount in `/github/workspace`.

The result is here [My first github action](https://github.com/nchaulet/github-action-gh-pages).

And this blog is now deployed using github actions ([see workflow](https://github.com/nchaulet/blog/blob/master/.github/main.workflow)).

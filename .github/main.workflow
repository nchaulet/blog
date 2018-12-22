workflow "Build and deploy" {
  on = "push"
  resolves = [
    "nchaulet/github-action-gh-pages@master"
  ]
}

action "Master" {
  uses = "actions/bin/filter@b2bea07"
  args = "branch master"
}

action "GitHub Action for npm" {
  needs = ["Master"]
  uses = "actions/npm@e7aaefe"
  args = "install"
}

action "Deploy" {
  uses = "actions/npm@e7aaefe"
  needs = ["GitHub Action for npm"]
  args = "run build"
}

action "nchaulet/github-action-gh-pages@master" {
  uses = "nchaulet/github-action-gh-pages@master"
  needs = ["Deploy"]
  secrets = [
    "GITHUB_TOKEN",
    "GIT_EMAIL",
    "GIT_USERNAME",
  ]
}

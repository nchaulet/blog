workflow "Build and deploy" {
  on = "push"
  resolves = ["Deploy"]
}

action "Filter Master" {
  uses = "actions/bin/filter@b2bea07"
  args = "branch master"
}

action "Npm install" {
  uses = "actions/npm@e7aaefe"
  args = "install"
  needs = ["Filter Master"]
}

action "Npm build" {
  uses = "actions/npm@e7aaefe"
  args = "run build"
  needs = ["Npm install"]
}

action "Deploy" {
  uses = "nchaulet/github-action-gh-pages@master"
  secrets = [
    "GITHUB_TOKEN",
  ]
  needs = ["Npm build"]
}

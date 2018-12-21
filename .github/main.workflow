workflow "Build and deploy" {
  on = "push"
  resolves = ["Deploy"]
}

action "GitHub Action for npm" {
  uses = "actions/npm@e7aaefe"
  secrets = ["GITHUB_TOKEN"]
  args = "install"
}

action "Deploy" {
  uses = "actions/npm@e7aaefe"
  needs = ["GitHub Action for npm"]
  secrets = ["GITHUB_TOKEN"]
  args = "run deploy"
}

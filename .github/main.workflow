workflow "Build and deploy" {
  on = "push"
  resolves = ["GitHub Action for npm"]
}

action "GitHub Action for npm" {
  uses = "actions/npm@e7aaefe"
  runs = "deploy"
  secrets = ["GITHUB_TOKEN"]
}

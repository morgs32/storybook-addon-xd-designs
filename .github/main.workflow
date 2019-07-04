workflow "master" {
  on = "push"
  resolves = ["Deploy examples"]
}

action "Ensure master" {
  uses = "actions/bin/filter@master"
  args = "branch master"
}

action "Install" {
  uses = "docker://node:10"
  runs = "yarn"
  args = "install"
  needs = ["Ensure master"]
}

action "Build" {
  uses = "docker://node:10"
  runs = "yarn"
  args = "build"
  needs = ["Install"]
}

action "Build examples" {
  uses = "docker://node:10"
  runs = "yarn"
  args = "example:build"
  needs = ["Build"]
}

action "Deploy examples" {
  uses = "maxheld83/ghpages@v0.2.1"
  env = {
    BUILD_DIR = "packages/examples/storybook-static/"
  }
  needs = ["Build examples"]
  secrets = [
    "GH_PAT"
  ]
}

workflow "version" {
  on = "push"
  resolves = ["Publish"]
}

# Publish on a new tag
action "Ensure version" {
  uses = "actions/bin/filter@master"
  args = "tag"
}

action "Publish" {
  needs = ["Ensure version", "Build"]
  uses = "actions/npm@master"
  args = "run ci:publish"
  secrets = [
    "NPM_AUTH_TOKEN"
  ]
}

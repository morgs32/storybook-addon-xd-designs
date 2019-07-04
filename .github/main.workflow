workflow "master" {
  on = "push"
  resolves = ["Deploy examples", "Publish"]
}

action "Ensure master" {
  uses = "actions/bin/filter@master"
  args = "branch master"
}

action "Install" {
  needs = ["Ensure master"]
  uses = "docker://node:10"
  runs = "yarn"
  args = "install"
}

action "Build" {
  needs = ["Install"]
  uses = "docker://node:10"
  runs = "yarn"
  args = "build"
}

action "Build examples" {
  needs = ["Build"]
  uses = "docker://node:10"
  runs = "yarn"
  args = "example:build"
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

action "Publish" {
  needs = ["Build"]
  uses = "actions/npm@master"
  args = "run ci:publish"
  secrets = [
    "NPM_AUTH_TOKEN"
  ]
}

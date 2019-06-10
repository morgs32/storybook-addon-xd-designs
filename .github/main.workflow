workflow "master" {
  on = "push"
  resolves = ["Deploy examples", "Publish"]
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

# Publish on a new tag
action "Ensure version" {
  needs = "Build"
  uses = "actions/bin/filter@master"
  args = "tag"
}

action "Publish" {
  needs = "Ensure version"
  uses = "actions/npm@master"
  args = "lerna publish from-package -y"
  secrets = [
    "NPM_AUTH_TOKEN"
  ]
}

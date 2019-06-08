workflow "master" {
  on = "push"
  resolves = ["[master] Deploy examples"]
}

action "[master] Ensure branch" {
  uses = "actions/bin/filter@master"
  args = "branch master"
}


action "[master] Install" {
  uses = "docker://node:10"
  runs = "yarn"
  args = "install"
  needs = ["[master] Ensure branch"]
}

action "[master] Build" {
  uses = "docker://node:10"
  runs = "yarn"
  args = "build"
  needs = ["[master] Install"]
}

action "[master] Build examples" {
  uses = "docker://node:10"
  runs = "yarn"
  args = "example:build"
  needs = ["[master] Build"]
}

action "[master] Deploy examples" {
  uses = "maxheld83/ghpages@v0.2.1"
  env = {
    BUILD_DIR = "packages/examples/storybook-static/"
  }
  needs = ["[master] Build examples"]
  secrets = [
    "GH_PAT"
  ]
}

workflow "publish" {
  on = "push"
  resolves = ["[publish] Publish package"]
}

action "[publish] Ensure branch" {
  uses = "actions/bin/filter@master"
  args = "tag"
}

action "[publish] Install" {
  uses = "docker://node:10"
  runs = "yarn"
  args = "install"
  needs = ["[publish] Ensure branch"]
}

action "[publish] Publish package" {
  uses = "docker://node:10"
  runs = "yarn"
  args = "lerna publish from-package -y"
  needs = ["[publish] Install"]
  secrets = [
    "NPM_AUTH_TOKEN"
  ]
}

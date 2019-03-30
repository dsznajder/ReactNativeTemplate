# TemplateProject

[![Greenkeeper badge](https://badges.greenkeeper.io/dsznajder/ReactNativeTemplate.svg)](https://greenkeeper.io/)
[![CircleCI](https://circleci.com/gh/dsznajder/ReactNativeTemplate/tree/master.svg?style=svg)](https://circleci.com/gh/dsznajder/ReactNativeTemplate/tree/master)

[![codecov](https://codecov.io/gh/dsznajder/ReactNativeTemplate/branch/master/graph/badge.svg)](https://codecov.io/gh/dsznajder/ReactNativeTemplate)

## Dependencies included & linked:

- [react-native-gesture-handler](https://github.com/kmagiera/react-native-gesture-handler)
- [react-native-reanimated](https://github.com/kmagiera/react-native-reanimated)
- [react-native-screens](https://github.com/kmagiera/react-native-screens)
- [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)
- [react-navigation](https://github.com/react-navigation/react-navigation)

## Setup

[Prerequires](https://gist.github.com/dsznajder/6cc186491f53ca9b1be7eebdf68ab5c5)

- `git clone git@github.com:dsznajder/ReactNativeTemplate.git <ProjectName>`
- `cd <ProjectName>`
- `code .`

### Android:

- Change `com.dsznajder.templateproject` to `com.<author>.<projectname>`

### Next Steps:

- CMD + Shift + F: Change `TemplateProject` to <ProjectName>
- `yarn bootstrap`

And project is ready :)

# Docs

### This repo has emoji commit specification:

| Emoji    | Description                                   | Example                                   |
| -------- | --------------------------------------------- | ----------------------------------------- |
| :star:   | New dependency added to template              | :star: Add react-native-vector-icons      |
| :gem:    | Dependency update                             | :gem: Update husky to version 1.1.2       |
| :fire:   | Removed assets, dependency or file            | :fire: Remove unnecessary assets          |
| :lock:   | Lockfile update                               | :lock: Update lockfile yarn.lock          |
| :wrench: | Updated scripts or tooling inside Template    | :wrench: Setup CI, first test             |
| :memo:   | Documentation / Readme update                 | :memo: Add README.md                      |
| :bug:    | Pin dependency version because of error / bug | :bug: Lock react-native version to 0.57.2 |

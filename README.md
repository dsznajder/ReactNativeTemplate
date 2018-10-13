# TemplateProject

[![Greenkeeper badge](https://badges.greenkeeper.io/dsznajder/ReactNativeTemplate.svg)](https://greenkeeper.io/)
[![CircleCI](https://circleci.com/gh/dsznajder/ReactNativeTemplate/tree/master.svg?style=svg)](https://circleci.com/gh/dsznajder/ReactNativeTemplate/tree/master)

## Setup

[Prerequires](https://gist.github.com/dsznajder/6cc186491f53ca9b1be7eebdf68ab5c5)

- `git clone git@github.com:dsznajder/ReactNativeTemplate.git <ProjectName>`
- `cd ProjectName`
- `code .`
- Change folders and files in `ios` from TemplateProject to <ProjectName>:
  - ios/TemplateProject
  - ios/TemplateProject.xcodeproj/xcshareddata/xcschemes/TemplateProject.xcscheme
  - ios/TemplateProject.xcodeproj
- Change `com.templateproject` to `com.<projectname>`
- Change folder `android/app/src/main/java/com/templateproject` to `android/app/src/main/java/com/<projectname>`
- CMD + Shift + F: Change `TemplateProject` to <ProjectName>
- `yarn bootstrap`

And project is ready :)

TODO:

- Extend `bootstrap` script.
- Add basic Fastlane setup.
- Setup flow.

# Docs

This repo has emoji commit specification:

| Emoji    | Description                                   | Example                                   |
| -------- | --------------------------------------------- | ----------------------------------------- |
| :star:   | New dependency added to template              | :star: Add react-native-vector-icons      |
| :gem:    | Dependency update                             | :gem: Update husky to version 1.1.2       |
| :fire:   | Removed assets, dependency or file            | :fire: Remove unnecessary assets          |
| :lock:   | Lockfile update                               | :lock: Update lockfile yarn.lock          |
| :wrench: | Updated scripts or tooling inside Template    | :wrench: Setup CI, first test             |
| :memo:   | Documentation / Readme update                 | :memo: Add README.md                      |
| :bug:    | Pin dependency version because of error / bug | :bug: Lock react-native version to 0.57.2 |

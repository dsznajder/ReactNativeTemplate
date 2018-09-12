# TemplateProject

## Setup

[Prerequires](https://gist.github.com/dsznajder/6cc186491f53ca9b1be7eebdf68ab5c5)

- `git clone git@github.com:dsznajder/ReactNativeTemplate.git <ProjectName>`
- `cd ProjectName`
- `rm -rf .git && git init`
- `code .`
- Change folders and files in `ios` from TemplateProject to <ProjectName>:
  - ios/TemplateProject
  - ios/TemplateProject.xcodeproj
  - ios/TemplateProject.xcodeproj/xcshareddata/xcschemes/TemplateProject.xcscheme
- Change `com.templateproject` to `com.<projectname>`
- Change folder `android/app/src/main/java/com/templateproject` to `android/app/src/main/java/com/<projectname>`
- CMD + Shift + F: Change `TemplateProject` to <ProjectName>
- `yarn bootstrap`

And project is ready :)

#!/bin/bash

echo "Type author of project included in android package (com.<author>.<projectName>)"
read author
echo "Type your project name. Write it in CapitalizeCamelCase"
read projectName

# Android
mkdir android/app/src/main/java/com/$author
mkdir android/app/src/main/java/com/$author/$projectName
mkdir android/app/src/debug/java/com/$author
mkdir android/app/src/debug/java/com/$author/$projectName
cp android/app/src/main/java/com/dsznajder/templateproject/MainActivity.java \
   android/app/src/main/java/com/$author/$projectName/MainActivity.java
cp android/app/src/main/java/com/dsznajder/templateproject/MainApplication.java \
   android/app/src/main/java/com/$author/$projectName/MainApplication.java
cp android/app/src/main/java/com/dsznajder/templateproject/ReactNativeFlipper.java \
   android/app/src/main/java/com/$author/$projectName/ReactNativeFlipper.java

# IOS
mv ios/TemplateProject ios/$projectName
mv ios/TemplateProject.xcodeproj ios/$projectName.xcodeproj
mv ios/TemplateProject.xcworkspace ios/$projectName.xcworkspace
mv ios/TemplateProject.xcodeproj/xcshareddata/xcschemes/TemplateProject.xcscheme \
   ios/TemplateProject.xcodeproj/xcshareddata/xcschemes/$projectName.xcscheme

if [[ "$author" != "dsznajder" ]]; then
  rm -rf android/app/src/main/java/com/dsznajder
  rm -rf android/app/src/debug/java/com/dsznajder
fi;

# # TODO: Change TemplateProject to ProjectName

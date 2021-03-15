# Do not strip any method/class that is annotated with @DoNotStrip
# facebook
-keep @com.facebook.proguard.annotations.DoNotStrip class *
-keep @com.facebook.common.internal.DoNotStrip class *
-keep @com.facebook.jni.annotations.DoNotStrip class *
-keepclassmembers class * {
    @com.facebook.proguard.annotations.DoNotStrip *;
    @com.facebook.common.internal.DoNotStrip *;
    @com.facebook.jni.annotations.DoNotStrip *;
}
-keepclassmembers @com.facebook.proguard.annotations.KeepGettersAndSetters class * {
  void set*(***);
  *** get*();
}
-keep class * implements com.facebook.react.bridge.JavaScriptModule { *; }
-keep class * implements com.facebook.react.bridge.NativeModule { *; }
-keepclassmembers,includedescriptorclasses class * { native <methods>; }
-keepclassmembers class *  { @com.facebook.react.uimanager.annotations.ReactProp <methods>; }
-keepclassmembers class *  { @com.facebook.react.uimanager.annotations.ReactPropGroup <methods>; }
-dontwarn com.facebook.react.**
-keep,includedescriptorclasses class com.facebook.react.bridge.** { *; }
-keep,includedescriptorclasses class com.facebook.react.turbomodule.** { *; }

# hermes
-keep class com.facebook.hermes.unicode.** { *; }
-keep class com.facebook.jni.** { *; }

# okio
-keep class sun.misc.Unsafe { *; }
-dontwarn java.nio.file.*
-dontwarn org.codehaus.mojo.animal_sniffer.IgnoreJRERequirement
-dontwarn okio.**
<% if (integrations.unimodules) { %>
# react-native-unimodules
-keep class expo.modules.permissions.** { *; }
-keep class expo.modules.imagepicker.** { *; }
-keep class expo.modules.lineargradient.** { *; }
-keep class expo.modules.documentpicker.** { *; }
-keep class expo.modules.filesystem.** { *; }
-keep class expo.modules.securestore.** { *; }
<% } %>
<% if (modules.config) { %>
# react-native-config
-keep class com.<%- project.package %>.BuildConfig { *; }
<% } %>
<% if (modules.svg) { %>
# react-native-svg
-keep public class com.horcrux.svg.** {*;}
<% } %>

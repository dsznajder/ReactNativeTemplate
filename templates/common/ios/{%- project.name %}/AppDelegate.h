#import <React/RCTBridgeDelegate.h>
#import <UIKit/UIKit.h>
<% if (integrations.unimodules) { %>
#import <UMCore/UMAppDelegateWrapper.h>

@interface AppDelegate : UMAppDelegateWrapper <UIApplicationDelegate, RCTBridgeDelegate>
<% } else { %>
@interface AppDelegate : UIResponder <UIApplicationDelegate, RCTBridgeDelegate>
<% } %>
@property (nonatomic, strong) UIWindow *window;

@end

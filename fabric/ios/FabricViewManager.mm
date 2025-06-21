#import <React/RCTViewManager.h>
#import <React/RCTUIManager.h>
#import "RCTBridge.h"

@interface FabricViewManager : RCTViewManager
@end

@implementation FabricViewManager

RCT_EXPORT_MODULE(FabricView)

- (UIView *)view
{
  return [[UIView alloc] init];
}

RCT_EXPORT_VIEW_PROPERTY(color, NSString)

@end

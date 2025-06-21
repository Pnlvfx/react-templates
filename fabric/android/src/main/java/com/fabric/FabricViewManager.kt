package com.fabric

import android.graphics.Color
import com.facebook.react.module.annotations.ReactModule
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.ViewManagerDelegate
import com.facebook.react.uimanager.annotations.ReactProp
import com.facebook.react.viewmanagers.FabricViewManagerInterface
import com.facebook.react.viewmanagers.FabricViewManagerDelegate

@ReactModule(name = FabricViewManager.NAME)
class FabricViewManager : SimpleViewManager<FabricView>(),
  FabricViewManagerInterface<FabricView> {
  private val mDelegate: ViewManagerDelegate<FabricView>

  init {
    mDelegate = FabricViewManagerDelegate(this)
  }

  override fun getDelegate(): ViewManagerDelegate<FabricView>? {
    return mDelegate
  }

  override fun getName(): String {
    return NAME
  }

  public override fun createViewInstance(context: ThemedReactContext): FabricView {
    return FabricView(context)
  }

  @ReactProp(name = "color")
  override fun setColor(view: FabricView?, color: String?) {
    view?.setBackgroundColor(Color.parseColor(color))
  }

  companion object {
    const val NAME = "FabricView"
  }
}

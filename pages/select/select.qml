<view class="wrap">
  <view class='time'>
    2019-4-23 星期一 宜偷懒
  </view>
  <view class='choose'>
      <i-row style="text-align:center;">
            <i-col span="12" i-class="col-class" bindtap="seat">
              <i-icon type="return" style='float:left;'/>预约选座
            </i-col>
            
            <i-col span="12" i-class="col-class" bindtap='rule'>
              <text style="float:left;color:#EDECE8;" >|</text>规则说明
            </i-col>
        </i-row>
        <view class='scanner' bindtap='scanner'>
            <image src='../../images/select/scanner.png'></image>扫码入座
        </view>
        
  </view>
</view>
<view class='center'>
  <view class='tcenter'></view>
  <swiper
    indicator-dots="{{indicatorDots}}"
    autoplay="{{autoplay}}"
    interval="{{interval}}"
    duration="{{duration}}"
  >
    <block wx:for="{{imgUrls}}">
      <swiper-item>
        <image src="{{item}}" class="slide-image" width="355" height="150" />
      </swiper-item>
    </block>
  </swiper>
</view>

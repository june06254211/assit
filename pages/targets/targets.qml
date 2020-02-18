<view class="wrap">
  <!-- <view class='time'>
    2017年12月  宜偷懒
   </view> -->
  <view class='topbar' x>
    <i-row class="top">
      <i-col span="4" i-class="col-class" bindtap='pcenter'>
        <image src='{{src}}'></image>
      </i-col>
      <i-col span="13" i-class="col-class" offset="1" bindtap="level">
        <text class='snick'>{{nickname}}</text>
        <text class='lv'>Lv{{le}}</text>
        <view class='pro'>
          <view style='height:5px;background: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);width:{{score/bs*100}}%;position:absolute;'></view>
        </view>
        <view class='btm'>
          <text><text style="color:#f83600">{{score}}</text>/{{bs}}</text>
          <text><image></image>{{name}}</text>
        </view>
      </i-col>
      <i-col span="5" i-class="col-class" offset="1" bindtap='pcenter'>
        <view class='t-r'>
          <view>个人中心</view>
        </view>
      </i-col>
    </i-row>
  </view>
  <view class='choose'>
    <view class="tui-rolling-news list-item">
      <image src="../../images/target/confirm.png" style="height:44rpx;width:44rpx;"></image>
      <swiper vertical="{{true}}" autoplay="{{true}}" circular="{{true}}" interval="4000" class="tui-swiper">
        <swiper-item wx:for="{{headlines}}" wx:key="{{index}}" data-id="{{item.id}}"class="tui-swiper-item" bindtap="newsDetail">
          <view class="tui-news-item">{{item.title}}</view>
        </swiper-item>
      </swiper>
    </view>
    <i-row style="text-align:center;">
      <i-col span="12" i-class="col-class" bindtap="seat">
        <i-icon type="return" style='float:left;' />组队自习
      </i-col>

      <i-col span="12" i-class="col-class" bindtap='target'>
        <text style="float:left;color:#EDECE8;">|</text>单人自习
      </i-col>
    </i-row>
    <view class='scanner' bindtap='scanner'>
      <image src='../../images/select/scanner.png'></image>点击定位签到
    </view>
    <tui-footer fixed="{{false}}" copyright="{{copyright}}" navigate="{{navigate}}" tui-footer-class="tui-custom"></tui-footer>

  </view>
</view>
<view class='center'>
  <view class='tcenter'></view>
  <!-- <swiper
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
  </swiper> -->
  <image src='../../images/target/swiper.jpg' style='height:100%;width:100%;'></image>
</view>
<i-modal title="Hi" visible="{{ visible1 }}" bind:ok="handleClose1" bind:cancel="handleClose1">
  <view>坚持每天登录：积分 + 1</view>

</i-modal>
<i-modal title="恭喜你" visible="{{ visible2 }}" bind:ok="handleClose2" bind:cancel="handleClose2">
  <view>经过不懈努力，成为：{{name}}</view>

</i-modal>
<div class="overlay" wx:if="{{show}}" bindtap="hideOverlay">
  <image class="tips" src="../../images/p.png" style='top:160rpx;right:90rpx;display:{{p}};'></image>
  <image class="tips" src="../../images/l.png" style='top:160rpx;left:0rpx;width:458rpx;height:225rpx;display:{{l}}'></image>
  <image class="tips" src="../../images/zd.png" style='top:400rpx;left:110rpx;width:458rpx;height:225rpx;display:{{zd}}'></image>
  <view class="t" bindtap='next'>
    <image src="../../images/know.png"></image>
  </view>
</div>
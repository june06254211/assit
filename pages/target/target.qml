<!-- <view class='top'>
  <view class='img'>
    <image src="../../images/tabbar/wx-login.jpg"></image>

  </view>
  <view class='txt'><text>{{nicheng}}-{{tname}}</text></view> 
</view> -->

<swiper indicator-dots="{{indicatorDots}}"
  autoplay="{{autoplay}}" interval="{{interval}}" duration="{{duration}}" circular="{{true}}" easing-function="linear">
  <block wx:for="{{top}}" wx:key="tname">
    <swiper-item>
      <view class='top'>
        <view class='img'>
          <image src="{{item.avatarUrl}}"></image>
        </view>
        <view class='txt'>
          <text>{{item.nicheng}}-{{item.tname}}</text>
        </view>
      </view>
    </swiper-item>
  </block>
</swiper>
<view class='middle'>
<view style='font-size:18px;margin:12rpx 0px 0px 40rpx;font-weight:bold;'>星期{{cday}}</view>
  <text style='font-size:14px;margin:12rpx 0px 0px 40rpx;'>今天要做的事情</text>
  <view class='m-left' bindtap='all'>
    <image src='../../images/target/target.png'></image>
    <text>所有专注目标</text>
  </view>
</view>
<view class='footer'>
  <view class='f-item' wx:for="{{list}}" wx:key="id">
    <i-swipeout i-class="i-swipeout-demo-item" actions="{{actions}}" bind:change="del" data-id='{{item.id}}'> 
      <view slot="content" style='height:100rpx;'>
        <view class='item-l'>
          <view class='conl'>
            <view>
              <view class='title'>{{item.tname}}</view>
              <view class='detail'>创建{{item.stime}}天，已专注{{item.alltime}}分钟</view>
            </view>
          </view>
        </view>
        <view class='item-r'>
          <view class='conr' bindtap='nowstar' data-id='{{item.id}}' data-name='{{item.tname}}' data-time='{{item.ttime}}'>
            <text>现在开始</text>
            <image src='../../images/target/more.png'></image>
          </view>
        </view>
      </view>
    </i-swipeout>
  </view>
  <view style='display:{{list.length > 0 ? "none" :"block"}};text-align:center;'>
    <image src='../../images/bg.png' style='height:600rpx;width:600rpx;'> </image>
  </view>



</view>
<view class='fixed'>
  <view class='just add'>
    <view class='just more' bindtap='add'>
      <image src='../../images/target/add.png'></image>
    </view>
    <view class='right' bindtap='star'>
      <image src='../../images/target/scanner.png' class='r1'></image>
      <text>快速开始</text>
      <image src='../../images/target/right.png' class='r2'></image>
    </view>
  </view>

</view>
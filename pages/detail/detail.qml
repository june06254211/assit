<!--pages/detail/detail.wxml-->
<view class='bd'>
  <view class='mg fs' style='text-align:center;'>{{list[0].nickname}}的自习室</view>
  <view class='mg pl'>
    成员：<view wx:for="{{as}}">
            <image src='{{item.avatarUrl}}' ></image><text class='lv'>Lv{{item.score}}</text>
          </view>
  </view>
  <view class='mg'>
    时间：{{list[0].date}}   {{list[0].stime}}-{{list[0].uptime}}
  </view>
  <view class='mg'>
    地点：{{list[0].place}}
  </view>
  <view class='mg'>
    发起人电话号码：{{list[0].pnum}}
  </view>
  <view class='mg'>
    状态：
  </view>
  <view style='margin:40rpx 0;'>
     <i-steps current="{{current}}">
        <i-step>
            <view slot="title">
                  开始
            </view>
            <view slot="content">
                建立自习室
            </view>
        </i-step>
        <i-step>
            <view slot="title">
                进行中
            </view>
            <view slot="content">
                位置签到
            </view>
        </i-step>
        <i-step>
            <view slot="title">
                完成
            </view>
            <view slot="content">
                位置签到离开
            </view>
        </i-step>
    </i-steps>
  </view>
 
 <view style="width:100%;text-align:center;">
    <map id="map" longitude="{{longitude}}" latitude="{{latitude}}" scale="14" controls="{{controls}}" bindcontroltap="controltap" markers="{{markers}}" bindmarkertap="markertap" polyline="{{polyline}}" bindregionchange="regionchange" show-location style="width: 96%; height: 300px;margin:0 auto">
      
    </map>
  </view>

  <view class='mg tips'>
    <view class='mg tip'>TIPS:</view>
    <view class='mg tip'>1:到了自习地点记得要定位签到哦</view>
    <view class='mg tip'>2:结束自习记得要使用签到功能哟，否则不会给积分哟</view>
    <view class='mg tip'>3:发起人放鸽子了也要记得签到自习哟</view>
  </view>
  
</view>
<view class='fixed'>
  <view class='just add'>
    <view class='just more' bindtap='getLocation'>
      <image src='../../images/position.png'></image>
    </view>
    <view class='right' bindtap='star'>
      <image src='../../images/target/scanner.png' class='r1'></image>
      <text>点击签到</text>
      <image src='../../images/target/right.png' class='r2'></image>
    </view>
  </view>
</view>
<div class="overlay" wx:if="{{show}}">
  <image class="tipss" src="../../images/qd.png" style='bottom:180rpx;left:110rpx;width:458rpx;height:225rpx;'></image>
  <view  class="t" bindtap='next'>
    <image  src="../../images/know.png"></image>
  </view>
</div>
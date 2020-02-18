<!--pages/fail/fail.wxml-->
<view class='fail' >
  <image src='../../images/play.png' style='width:60%;height:70%;margin-top:100rpx;margin-left:100rpx;'></image>
</view>
  <view class='failtext'>
   
  <view style='margin-bottom:50rpx;'>
  <text style='font-size:45rpx;'>好可惜！</text>
  </view>
  <view>
  <text style='font-size:35rpx;'>原本可以和全国<text style='font-size:40rpx;color:orange'>{{index}}</text>位青年一起专注。\n</text>
  <text style='font-size:35rpx;'>没关系，下次一定可以坚持下来的</text>
  </view>
</view>
<view class='return'>
  <button class='back'  bindtap="back"> 
    <image src='../../images/main.png' style=' width: 60rpx;height: 60rpx;margin:auto 0;'></image> 
    <text style='margin-left:10px;'>回到首页</text> 
  </button>
  
  <button class='restar' bindtap='restar'> 
    <image src='../../images/squa.png' style=' width: 60rpx;height: 60rpx;margin:auto 0;'></image> 
    <text style='margin-left:10px;'>重新专注</text>  
  </button>
</view>
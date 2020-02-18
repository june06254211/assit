<!--pages/finish/finish.wxml-->
<view class='success'>
  <image src='../../images/finish.png' style='width:80%;height:70%;margin-top:50rpx;margin-left:50rpx;'></image>
</view>
<view class='toshare' style="display:{{show}}">
  <view class='sharepost' style='overflow:hidden'>
    <image src='{{imagePath}}' style='width:600rpx; height:900rpx;'></image>
  </view>
  <button class="share" bindtap='save'>保存图片</button>
  <view class='cover' bindtap='hidden'></view>
</view>
<view class='thepost' style='margin-left:1600rpx;margin-top:-1500rpx;' >
  <canvas canvas-id='postcontent' style='height:1600rpx;width:800rpx;'></canvas>
</view>
<!-- <canvas class='bgCanvas' canvas-id='bgCanvas' >
</canvas> -->
<view  class='finish' style='margin-top:0;'><view style='font-size:40rpx;margin-button:100rpx;'> 做的不错！</view>
<view style='font-size:30rpx;'><text>成功完成<text style="font-size:40rpx;">{{event}}</text>\n与全国<text style='color:orange;font-size:40rpx'>12{{number}}</text>位青年一起专注</text></view>
</view>
<view class='buttons'>
<button class='post' bindtap='post'><image src='../../images/photo.png' style='width:75rpx;height:85rpx;margin-top:0rpx' ></image>生成海报</button>
<button class='continue' bindtap='go'>
<image src='../../images/square.png' style='width:75rpx;height:75rpx;margin-top:5rpx;'></image>继续专注</button>
</view>



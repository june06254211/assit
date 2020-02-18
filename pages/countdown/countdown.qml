<view class='container'>
<!-- {{index}} -->
<!--创建两个Canvas  -->
<i-modal visible="{{ visible2 }}" bind:ok="handleClose1" bind:cancel="handleClose2">
    <view>你确定要半途而废吗？</view>
</i-modal>
  <view class='tip'>
  <!-- <text>专注！专注！</text>  -->
  
  </view>
  <view style='text-align:center;width:100%;position:absolute;'>
    <image src='../../images/target/pop.png' style='height:40px;width:200px;'></image>
    <view style='position:relative;top:-82rpx;'>{{event}}</view>
  </view>
  <canvas class='bgCanvas' canvas-id='bgCanvas' style='display:{{cav}}'>
    <canvas class='countdown' canvas-id='countdown'></canvas>
  </canvas>
  <view style='font-size:15px;color:#B3B3C2;text-align:center;'>请不要误点返回哟，点了之后时间会清零哟~~</view>
  <view bindtap='handleOpen2' class='check'>
    <image src='../images/del.png'></image>
    <text>{{condition}}</text>
  </view>

</view>
<!--pages/level/level.wxml-->

<view class='top'>
  <image src='{{url}}'></image>
  <text class='lv'>Lv{{le}}</text>
  <text style='margin-left:20rpx;font-size:15px;'>{{name}}</text>
  <text style='font-size:15px;position:absolute;right:40rpx;'>经验值 <text style='color:#1DBAA5;'>{{score}}</text> /{{bs}}</text>
</view>
<view class='middle'>
  <view class='title'>自习等级与经验值</view>
   <view class="hr"></view>
  <view class='m-con'>
    <view class='m'>
      <text class='lv' style='background:#fff;color:black;'>等级</text>
    </view>
    <view class='m'>
      <text>头衔</text>
    </view>
    <view class='m'>
      <text>所需经验值</text>
    </view>
  </view>
  <view class='m-con' wx:for="{{level}}">
    <view class='m'>
      <text class='lv'>{{item.le}}</text>
    </view>
    <view class='m'>
      <text>{{item.name}}</text>
    </view>
    <view class='m'>
      <text>{{item.sc}}</text>
    </view>
  </view>

</view>

<view class='whole'>
  <text class='title'>经验值获取规则</text>
  <view class="hr"></view>
  <view class='rule'>
    <block wx:for="{{rules}}">
      <view class='event'>{{item.event}}</view><text class='add' >{{item.add}}</text><text class='rest'>{{item.rest}}</text><view class='line'></view>
    </block>
  </view>


</view>
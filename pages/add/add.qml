<!--pages/target/target.wxml-->

<view  class='whole'>
  <view style=''>
    <view style="height:40rpx;"></view>
    <text class='tpname'>添加新的专注目标</text>
  </view>
  <view style="height:40rpx;"></view>

  <i-card title="目标名称"  >
    <view slot="content">

        <input  placeholder='看一本书' maxlength='8' style='margin-top:5rpx; padding-left:30rpx;' bindinput='event' ></input>
        <view style='border:0.5px solid rgb(230, 230, 230);margin-top:5rpx;margin-button:10rpx;'></view>
      <text>鼓励语</text>
      <input  placeholder='真正的高贵是优于过去的自己' maxlength='45' style='margin-top:10rpx; padding-left:30rpx;' bindinput='saying' ></input>
        <view style='border:0.5px solid rgb(230, 230, 230);margin-top:5rpx;margin-button:5rpx;'></view>
      
      <text>设定周期</text>
      <view style='display:flex;flex-wrap:wrap;'>
        <view class='button_container'>
          <block wx:for="{{buttons}}" wx:key="buttons">
          <button class='{{item.checked?"checked_button":"normal_button"}}'data-name='{{index}}' data-id='{{item.id}}' bindtap='checkButtonTap'>{{item.name}}</button>
          </block>
        </view>
        
      </view>
      <text>设定时长(分钟)</text>
        <view class='selects'>
        <block wx:key="index" wx:for='{{time}}' data-date="{{item.time}}">
        <view class='select' id='{{index}}'bindtap='changeColor'>
        <block wx:if="{{index==clickId}}" >
        <button class='btn' style='color:white;background-color:#febb60;font-size:25rpx;width:70rpx;height:100rpx;line-height:100rpx;' >
        {{ item }}
        </button>
        </block>
        <block wx:else>
        <button class='btn' style='color:black;background-color:#eeeded;font-size:25rpx;width:70rpx;height:100rpx;line-height:100rpx;'>
        {{ item }}
        </button>
        </block>
        </view>
        </block>
        </view>

      <button style='margin-top:100rpx;margin-buttom:100rpx;' bindtap='submit'>提交</button>
      <view style="height:100rpx;"></view>
      
    </view>
    <view slot="footer">既然制定了就要好好执行</view>
  </i-card>
  
</view> 
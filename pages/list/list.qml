<!--pages/list/list.wxml-->


<view class="bar">
  <text bindtap="ing" style='color:{{cling}}'>进行中</text>
  <text bindtap="ed" style='color:{{cled}}'>已达成</text>
</view>
<view class='sort' bindtap='select'>
  <text style='margin-left:20rpx'>{{title}}</text>
  <image src='../../images/down.png' style='width:30rpx;height:30rpx;margin-right:20rpx;'></image>
</view>
<view class="cover" style="display:{{cover}}" bindtap='close'>
</view>

<!-- 日期 -->
<view class='select' style=' display:{{sel}}'>
  <view class='selects' style="width:600rpx;border-radius:20rpx;">
    <block wx:key="index" wx:for='{{time}}'>
      <view class='selectdate'>
        <block wx:if="{{index==clickId}}">
          <button class='btn' id='{{index}}' data-date="{{item.id}}" bindtap='changeColor' data-name='{{item.name}}' style='color:orange;font-size:30rpx;height:70rpx;black;background-color:white;text-align:left;line-height:100rpx;'>
            {{ item.name}}
          </button>
          <view class='divLine'></view>
        </block>
        <block wx:else>
          <button class='btn' id='{{index}}' data-date="{{item.id}}" bindtap='changeColor' data-name="{{item.name}}" style='color:black;text-align:left;background-color:white;font-size:30rpx;height:70rpx;line-height:100rpx;'>
            {{ item.name}}
          </button>
          <view class='divLine'></view>
        </block>
      </view>
    </block>
  </view>

</view>


<view class='doing' style='display:{{pling}};'>
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
          <view class='conr' data-id='{{item.id}}' data-name='{{item.tname}}'data-time='{{item.ttime}}'>
            <text>左划删除</text>
            <image src='../../images/target/more.png'></image>
          </view>
        </view>
      </view>
    </i-swipeout>
  </view>
</view>

<view class='done' style='display:{{pled}};'>
  <view class='f-item' wx:for="{{list2}}" wx:key="id">
    <i-swipeout i-class="i-swipeout-demo-item" actions="{{actions}}" bind:change="del" data-id='{{item.id}}'>
      <view slot="content" style='height:100rpx;'>
        <view class='item-l'>
          <view class='conl'>
            <view>
              <view class='title'>{{item.tname}}</view>
              <view class='detail'>创建{{item.ttime}}天，已专注{{item.alltime}}分钟</view>
            </view>
          </view>
        </view>
        <view class='item-r'>
          <view class='conr' data-id='{{item.id}}' data-name='{{item.tname}}'data-time='{{item.ttime}}'>
            <text>左划删除</text>
            <image src='../../images/target/more.png'></image>
          </view>
        </view>
      </view>
    </i-swipeout>
  </view>
</view>
<view style='display:{{list.length > 0 || list2.length > 0 ? "none" :"block"}};text-align:center;'>
    <image src='../../images/bg.png' style='height:600rpx;width:600rpx;'> </image>
  </view>

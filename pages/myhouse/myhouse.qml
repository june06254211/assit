<i-tabs current="{{ current_scroll }}"  bindchange="handleChangeScroll">
    <i-tab key="{{item.key}}" title="{{item.title}}" wx:for="{{tabs}}"></i-tab>
</i-tabs>
<view class='footer'>
  <view class='f-item' wx:for="{{lst}}" wx:for-item="itemName" wx:key="id">
    <view style='margin:7px;display:flex;align-items:center;position:relative;'>
      <image src='{{itemName.avatarUrl}}' class='one-l'></image>
      <text class='one-m'>{{itemName.nickname}}</text>
      <text class='one-r' style='display:{{itemName.total == 0 ? "none" : ""}}'>还差 <text style='color:red;font-size:16px;'>{{itemName.total}}</text> 人未签到</text>
      <text class='one-r' style='display:{{itemName.total == 0 ? "" : "none"}}'>全员到齐~~</text>     
    </view>
    <view style='margin: 14rpx;font-size:12px;color:#515a6e;'><text class='two-l'>目标：{{itemName.zname}}</text><text class='two-r'>地点：{{itemName.place}}</text></view>
    <view class='three'>
      <text class='three-l'>时间：{{itemName.date}} {{itemName.stime}}-{{itemName.uptime}}</text>      
      <!-- <text class='three-r' bindtap='join' data-id = '{{itemName.id}}'> -->
        <button type="default" size="mini"  plain="{{plain}}"
    disabled="{{current_scroll == 'index' ? undisabled : disabled}}"  bindtap='join' data-id = '{{itemName.id}}' hover-class="other-button-hover" style='display:inline;margin:0;'> {{current_scroll == 'index' ? '去签到' : '已完成'}} </button>
      <!-- </text> -->
      
    </view>
  </view>
   <view style='display:{{lst.length > 0 ? "none" :"block"}};text-align:center;'>
    <image src='../../images/bg.png' style='height:600rpx;width:600rpx;'> </image>
  </view>   
        
   
</view>
<view class='fixed'>
  <view class='just add'>
    <view class='just more' bindtap='create'>
      <image src='../../images/target/add.png'></image>
    </view>
    <view class='right' bindtap='myhouse'>
      <image src='../../images/target/scanner.png' class='r1'></image>
      <text>返回自习室</text>
      <image src='../../images/target/right.png' class='r2'></image>
    </view>
  </view>
</view>
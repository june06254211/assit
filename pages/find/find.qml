<i-tabs current="{{ current_scroll }}" scroll bindchange="handleChangeScroll">
  <i-tab key="{{item.key}}" title="{{item.title}}" wx:for="{{tabs}}"></i-tab>
</i-tabs>



<view class='footer' style='margin-bottom:176rpx;'>
  <view class='f-item' wx:for="{{lst}}" wx:for-item="itemName" wx:key="id">
    <view style='margin:7px;display:flex;align-items:center;position:relative;'>
      <image src='{{itemName.avatarUrl}}' class='one-l'></image>
      <text class='one-m'>{{itemName.nickname}}</text>
      <text class='lv'>Lv{{itemName.score}}</text>
      <text class='one-r' style='display:{{itemName.total == 0 ? "none" : ""}}'>还差 <text style='color:red;font-size:16px;'>{{itemName.total}}</text> 人</text>
    </view>
    <view style='margin: 14rpx;font-size:12px;color:#515a6e;'>
      <text class='two-l'>目标：{{itemName.zname}}</text>
      <text class='two-r'>地点：{{itemName.place}}</text>
    </view>
    <view class='three'>
      <text class='three-l'>时间：{{itemName.date}} {{itemName.stime}}-{{itemName.uptime}}</text>
      <!-- <text class='three-r' bindtap='join' data-id = '{{itemName.id}}'> -->
      <button type="default" size="mini" plain="{{plain}}" disabled="{{itemName.total == 0 ? disabled : undisabled}}" bindtap='join' data-id='{{itemName.id}}' hover-class="other-button-hover" style='display:inline;margin:0;'> {{itemName.total == 0 ? unjoinname : joinname}} </button>
      <!-- </text> -->
    </view>
  </view>
  <view style='display:{{lst.length  > 0 ? "none" :"block"}};text-align:center;'>
    <image src='../../images/bg.png' style='height:600rpx;width:600rpx;'> </image>
  </view>
  <!--加载loadding-->
   <view class="load">
    <tui-loadmore visible="{{loadding}}"></tui-loadmore>
   </view>
   <view class="load">
    <tui-nomore visible="{{!pullUpOn}}" ></tui-nomore>
   </view>
   
  <!--加载loadding-->
</view>






<view class='fixed'>
  <view class='just add'>
    <view class='just more' bindtap='create'>
      <image src='../../images/target/add.png'></image>
    </view>
    <view class='right' bindtap='myhouse'>
      <image src='../../images/target/scanner.png' class='r1'></image>
      <text>我的自习</text>
      <image src='../../images/target/right.png' class='r2'></image>
    </view>
  </view>

</view>
<i-modal title="叮咚~~" visible="{{ visible2 }}" bind:ok="handleCloseo" bind:cancel="handleClosec">
  <view>加入之后是不能修改的哟</view>

</i-modal>
<div class="overlay" wx:if="{{show}}">

  <image class="tips" src="../../images/add.png" style='bottom:180rpx;left:110rpx;width:458rpx;height:225rpx;'></image>
  <view class="t" bindtap='next'>
    <image src="../../images/know.png"></image>
  </view>
</div>
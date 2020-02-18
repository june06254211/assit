<!--pages/star/star.wxml-->
<view class='whole'>
  <view class='settarget'>
    <view>
      <text style='padding-left: 170rpx;'>设立目标\n</text>
      <input type='text' placeholder='目标最多八个字哦' class='target' bindinput='target' ></input>
    </view>
    <view class='time' style='margin-left:35rpx;margin-top:30rpx;color:#88949E;'>
      <swiper class="swiper-block" bindchange="swiperChange"  current="0" display-multiple-items='3' circular="true" >
      <block wx:for="{{imgUrls}}" wx:index="{{index}}">
      <swiper-item class="swiper-item">
        <view class="slide-image {{currentIndex == index ? 'active' : ''}}" >{{item}}</view>
      </swiper-item>
      </block>
    </swiper>
    </view>
  </view>
  <view class='submit'>
    <button bindtap="handleClick" type="default" shape="square" style='font-size:14px;box-shadow:0px 0px 40rpx #D6D6D6;'>
      <label class="radio" wx:for="{{items}}" >
          <!-- <radio value="{{item.name}}" checked="{{item.checked}}"/>{{item.value}} -->
          {{item.value}}
      </label>
    </button>
  </view>
  
</view>
<i-modal title="叮咚~~" visible="{{ visible1 }}" bind:ok="handleClose1" bind:cancel="handleClose1">
        
    <view>字数太多啦，最多八个字呀</view>
   
</i-modal>
<view class='topbar'>
  <i-row class="top">
    <i-col span="5" i-class="col-class" offset="1.5">
      <image src='{{src}}'></image>
    </i-col>
    <i-col span="13" i-class="col-class" offset="1">
      <text class='snick'>{{nickname}}</text>
      <text style='font-size:12px;'>编辑资料</text>
    </i-col>
    <i-col span="1" i-class="col-class" offset="2" style='line-height:90px;'>
      <i-icon type="enter" />
    </i-col>
  </i-row>
</view>
<view class='middle'>
  <view class='lf'>
    <text style='display:block;font-weight:bold;'>0</text>
    <text>目标</text>
  </view>  
  <view class='lf'>
    <text style='display:block;font-weight:bold;'>6</text>
    <text>成功</text>
  </view>
  <view class='lf'>
    <text style='display:block;font-weight:bold;'>0</text>
    <text>违约</text>
  </view>
  <view class='lf'>
    <text style='display:block;font-weight:bold;'>6</text>
    <text>自习室</text>
  </view>
</view>

<i-cell-group>
    <i-cell title="" is-link>
      <image src='../../images/mine/confirm.png' style='height:30px;width:30px;'></image>
      <text class='txt'>消息通知</text>
    </i-cell>
    <i-cell title="" is-link>
      <image src='../../images/mine/zxgl.png' style='height:30px;width:30px;'></image>
      <text class='txt'>自习管理</text>
    </i-cell>
    <i-cell title="" is-link>
      <image src='../../images/mine/zxgj.png' style='height:30px;width:30px;'></image>
      <text class='txt'>自习轨迹</text>
    </i-cell>
    <i-cell title="" is-link bindtap="step">
      <image src='../../images/mine/foot.png' style='height:30px;width:30px;'></image>
      <text class='txt'>信用足迹</text>
    </i-cell>
    <i-cell title="" is-link>
      <image src='../../images/mine/sz.png' style='height:30px;width:30px;'></image>
      <text class='txt'>设置</text>
    </i-cell>
   
</i-cell-group>
<i-modal title="叮咚~~" visible="{{ visible2 }}" bind:ok="handleClose2" bind:cancel="handleClose2">
    <view>hi,boys or girls,欢迎您成为我们内测成员</view>
    <view>如果您有很好的建议，有兴趣成为我们团队的一员，让这个软件变得更好</view>
    <view>请加群:829437323</view>
    
    
</i-modal>

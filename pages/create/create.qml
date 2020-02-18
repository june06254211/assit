<!--pages/target/target.wxml-->

<view class='whole'>
  <!-- <view class='top'>
  <view class='img'>
    <image src="../../images/index.jpg"></image>
  </view>
  <view class='txt'><text>张俊正在石河子石河子石河子石河子</text></view> 
</view> -->

  <i-card title="开始创建你的个性自习室吧！">
    <view slot="content">
      <i-panel title="基础用法">
        <view class='zname'>
          <text style='width:25%;font-weight:bold;'>自习名:</text>
          <input bindinput="bindKeyInput1" placeholder="简要概括你的自习室" class='' />
        </view>
        <view class='zname'>
          <text style='width:25%;font-weight:bold;'>联系方式:</text>
          <input bindinput="bindKeyInput2" placeholder="方便相互联系" class='' />
        </view>
        <i-cell-group>
          <i-cell title="" is-link>
            <picker bindchange="bindPickerChange3" value="{{index3}}" range="{{array3}}">

              类型：
              <text style='float:right;color:#B3B3C2;'>{{array3[index3]}}</text>
            </picker>
          </i-cell>
          <i-cell title="" is-link>
            <picker bindchange="bindPickerChange" value="{{index}}" range="{{array}}">

              地点：
              <text style='float:right;color:#B3B3C2;'>{{array[index]}}</text>
            </picker>
          </i-cell>
          <i-cell title="" is-link>
            <picker bindchange="bindPickerChange2" value="{{index2}}" range="{{array2}}">

              人数：
              <text style='float:right;color:#B3B3C2;'>{{array2[index2]}}</text>
            </picker>
          </i-cell>
          <i-cell title="" is-link>
            <picker mode="date" value="{{date}}" start="{{now}}" end="2020-09-01" bindchange="bindDateChange">
              日期：
              <text style='float:right;color:#B3B3C2;'>{{date}}</text>
            </picker>
          </i-cell>

          <i-cell title="" is-link>
            <picker mode="time" value="{{time1}}" start="09:00" end="22:00" bindchange="bindTimeChange1">
              开始时间：
              <text style='float:right;color:#B3B3C2;'>{{time1}}</text>
            </picker>
          </i-cell>
          <i-cell title="" is-link>
            <picker mode="time" value="{{time2}}" start="{{lasttime}}" end="22:00" bindchange="bindTimeChange2">
              结束时间：
              <text style='float:right;color:#B3B3C2;'>{{time2}}</text>
            </picker>
          </i-cell>
          <i-cell title="显示您的联系方式">
            <switch slot="footer" checked />
          </i-cell>
        </i-cell-group>

      </i-panel>
    </view>
    <view slot="footer">坚持不懈才是最后的赢家！</view>
     <view slot="footer">开始时间与结束时间相隔至少半小时！</view>
  </i-card>
  
</view>
<view class='fixed'>
    <view class='just add'>
      <view class='just more' bindtap='back'>
        <image src='../../images/del.png'></image>
      </view>
      <view class='right' bindtap='finish'>
        <image src='../../images/target/scanner.png' class='r1'></image>
        <text>完成创建</text>
        <image src='../../images/target/right.png' class='r2'></image>
      </view>
    </view>
  </view>
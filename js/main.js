/*
カーソルに追従するアニメーション
*/

function CursorFollower(follower_num, delay_time, posleft = 0, postop = 0){

  let $cursor = $('.cursor'),       //カーソルになる要素
      $follower = $('.follower'),   //カーソルを追従する要素
      cWidth = $cursor.width(),     //カーソルの横幅
      cHeight = $cursor.height(),   //カーソルの縦幅
      fWidth,                       //追従要素の横幅
      fHeight,                      //追従要素の縦幅
      fHTML = '',                   //追従要素のHTMLを格納する変数
      numFollow = follower_num,     //追従要素の個数
      mouseX = 0,                   //マウスの水平位置
      mouseY = 0,                   //マウスの垂直位置
      followX = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],  //追従要素の水平位置
      followY = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],  //追従要素の垂直位置
      delay = delay_time;           //追従時間※値が大きいとゆっくり追従

  //追従要素のHTMLを格納する変数に追従要素の個数分だけspanタグを格納    
  for(let i=0;i<numFollow;i++){     
    fHTML += '<span class="follower"></span>'
  }
  $follower.html(fHTML);            //.followerに追従要素を格納

  let $followerSpan = $follower.find('span'); //追従要素

  fWidth = $followerSpan.width();             //追従要素の横幅を取得
  fHeight = $followerSpan.height();           //追従要素の縦幅を取得

  //マウス座標を取得
  $(document).on("mousemove", function(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
  });

  //カーソルの遅延アニメーション
  //少しだけ遅延させる 0.001秒
  TweenMax.to({}, .001, {
    repeat: -1,   //リピート設定
    onRepeat: function() {    //コールバック関数
      $followerSpan.each(function(i){   //追従要素の位置を設定
        followX[i] += (mouseX - followX[i]) / (delay*(i+1));
        followY[i] += (mouseY - followY[i]) / (delay*(i+1));
        //追従要素のアニメーション
        TweenMax.set($(this), {
          css: {    
            left: followX[i] + posleft,
            top: followY[i] + postop
          }
        });
      });
      //カーソルのアニメーション
      TweenMax.set($cursor, {
          css: {    
            left: mouseX - (cWidth / 2),
            top: mouseY - (cWidth / 2)
          }
      });
    }
  });
}

$('.kurukuru').click(function() {
  addSekiakio($('.kurukuru'));
})

function addSekiakio(target){
  target.append('<img id="rotation3" src="images/関暁夫_002.jpg" alt="宣材写真" />');
}
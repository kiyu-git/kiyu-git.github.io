// for humberger menu
function fold(){
  var box = document.getElementById("menu-btn");
  if (box.checked == true) {
    box.checked = false;
  }
}

$(function() {
  $('.sidebar nav li a').each(function(){
    var $href = $(this).attr('href');
    if(location.pathname === $href) {
      $(this).addClass('current');
    } else {
      $(this).removeClass('current');
    }
  });
});

$(function() {
  if(location.pathname.indexOf('/en/') == -1){
    $("#lang_en").addClass("current_lang");
    $("#lang_ja").removeClass("current_lang");
  }else{
    $("#lang_ja").addClass("current_lang");
    $("#lang_en").removeClass("current_lang");
  }
}
)

// for work page
$(document).ready(function($) {
  $('.slider-pro').sliderPro({
    width: "100%",
    // height: 600,
    aspectRatio: 1.33,//縦横比の設定
    arrows: true,
    imageScaleMode: "contain",
    // width: 600,
    // height: 450,
    autoplay: false,
    buttons: false,//ナビゲーションボタン
    shuffle: false,//スライドのシャッフル
    fullScreen: true,
    cursor: false,
    // thumbnailWidth: 200,//サムネイルの横幅
    //thumbnailHeight: 60,//サムネイルの縦幅
    slideDistance: 10,//スライド同士の距離
  });
});

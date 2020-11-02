//スクロールアニメーション
$(function () {
  $(window).scroll(function () {
    $(".fadein").each(function () {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 200) {
        $(this).addClass("active");
      }
    });
  });
});

//スムーズスクロール部分の記述
$(function () {
  $(".slider").slick({
    dots: true,
    autoplay: false,
    autoplaySpeed: 300,
  });
  $("a[href^='#']").click(function () {
    //スクロールのスピード
    var speed = 500;
    //リンク元を取得
    var href = $(this).attr("href");
    //リンク先を取得
    var target = $(href == "#" || href == "" ? "html" : href);
    //リンク先までの距離を取得
    var position = target.offset().top;
    //スムーススクロール
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});

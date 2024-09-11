$(function () {

$(document).ready(function () {
    $(".slider").slick({
        // arrows: false,
        // ↑左右の矢印を見えないように
        dots: true,
        // ↑下のドットを表示させるように
        // autoplay: true
        // ↑自動スライドするように　でもならなかった

        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        // adaptiveHeight:true

        responsive: [
            {
            breakpoint: 415,
            settings: {
            autoplay: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
            }
        ]

    }

    );
});

$(".toggle_btn").on("click", function () {
    // headerにopenクラスがあるか判定する
    if ($("header").hasClass("open")) {
      // headerにopenクラスが存在する場合、openクラスを削除する
    $("header").removeClass("open");
    } else {
      // headerにopenクラスが存在しない場合、openクラスを加える
    $("header").addClass("open");
    }
});

  // メニューが表示されている時に画面をクリックした場合
$(".mask").on("click", function () {

    $("header").removeClass("open");
});

$('a[href*="#"]').on('click', function() {  
  $('header').removeClass('open');
});

});

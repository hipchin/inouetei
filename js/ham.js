///////ハンバーガーメニュー////////
$(function () {
    $("#nav_toggle_open").on("click", function () {
        $("body").toggleClass("menu-open");
    });
});

$(function () {
    $("#gloval_nav li").on("click", function () {
        $("body").removeClass("menu-open");
    });
});

/////予約フォーム//////
$(function () {
    $("#book_button").on("click", function (e) {
        e.preventDefault();
        $("body").toggleClass("book-open");

        if ($("body").hasClass("book-open")) {
            var text = $("#book_button").data("text-clicked");
        } else {
            var text = $("#book_button").data("text-default");
        }

        $("#book_button").html(text);
    });
});

$(function () {
    $(".book_sent").on("click", function () {
        alert("送信が完了しました（これはデモです）");
    })
});


/////スクロール////
$(function () {
    $('#gloval_nav a').click(function () {
        var id = $(this).attr('href');
        var position = $(id).offset().top;

        $('html,body').animate({
            scrollTop: position
        }, '500')
    })
})

///トップへ戻るボタン////
$(function () {
    var topBtn = $('#top_return_bt');
    topBtn.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});

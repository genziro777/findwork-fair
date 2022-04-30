/* =============== ハンバーガーメニュー============================== */
$("#hamburger").click(function () {
    $(this).toggleClass("active")
    $(".globalNav--sp").toggleClass("js-slideIn").css("opacity", "1")
    $("body").toggleClass("no-scroll")
})

/* =============== スクロールイベント fadeIn ==================================== */

if ($(".js-fadeTrigger").length) {
    //ページ内にfadeTargetがある場合のみアニメを実施
    scrollFadeAnimation()
}

function scrollFadeAnimation() {
    $(window).scroll(function () {
        $(".js-fadeTrigger").each(function () {
            const position = $(this).offset().top,
                scroll = $(window).scrollTop(),
                windowHeight = $(window).height()

            if (scroll > position - windowHeight + 40) {
                $(this).addClass("is-active")
            }
        })
    })
}
$(window).trigger("scroll") //リロード時後にもアクション

/* =============== スマホでhoverOff ==================================== */
var touch =
    "ontouchstart" in document.documentElement ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
if (touch) {
    try {
        for (var si in document.styleSheets) {
            var styleSheet = document.styleSheets[si]
            if (!styleSheet.rules) continue
            for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
                if (!styleSheet.rules[ri].selectorText) continue
                if (styleSheet.rules[ri].selectorText.match(":hover")) {
                    styleSheet.deleteRule(ri)
                }
            }
        }
    } catch (ex) {}
}

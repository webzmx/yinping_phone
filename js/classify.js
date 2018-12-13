$(function (e) {
    
    function scroll() {
        $(window).scroll(function () {
            var st = $(window).scrollTop();
            if (st >= 200) {
                $(".v-go-up").show();
            } else {
                $(".v-go-up").hide();
            }
        })
    }
    scroll()

    $("#kw").on("click", function () {
        $(".mm-page").hide();
        $("#ypSearch-box").show();
    })
    $(".yp-search").on("click", function () {
        $(".mm-page").show();
        $("#ypSearch-box").hide();
    })

    function localS() {

        $(".pro-table li").each(function (i) {
            var value
            $(".pro-table li").eq(i).on("touchstart", function () {
                value = $(".proclass-title").eq(i).text();
                window.localStorage.name = value;
                // var ss = window.localStorage.key;
                // window.localStorage.removeItem('yyy');//localStorage删除
            })
        })

    }
    localS()

    function sousuo() {
        $(".hilight1").on("keyup", function () {
            // $(".search-list").css({"display":"block","zIndex":"13"});
            $.ajax({
                url: 'https://www.ingping.com/search/solrCheck',
                data: {
                    term: $(this).val()
                },
                dataType: "jsonp",
                jsonp: "callback",
                callback: "jQuery19104212185540225353_1542538584664",
                success: function (data) {
                    console.log(data[0])
                    var html = "";
                    for (var i = 0; i < data.length; i++) {
                        html +=
                            '<li class="auto-li">' +
                            '<a href="details.html">' + data[i] + '</a>' +
                            '</li>'
                    }
                    $(".search-list").html(html);
                }
            })
        })

    }
    sousuo()

    function jichu() {
        var h=$(window).height();
        $(".mm-panel").css("height",h )
        $(".menu_nav").on("click", function (e) {
            e.preventDefault()
            $(".mm-page").css("height",h );
            $(".mm-page").addClass("mm-move");
            $(".mm-blocker").show();
            $(".mm-page").addClass("mmbox-y")
        })
        $(".mm-blocker").on("touchstart", function (e) {
            e.preventDefault()
            $(".mm-page").css("height","100%" );
            $(".mm-page").removeClass("mm-move");
            $(".mm-page").removeClass("mmbox-y");
            $(".mm-blocker").hide();
        })
    }
    jichu()

})
$(function () {
    FastClick.attach(document.body);
})
$(function () {
    var currentPage = 1;//首次分页页数
    var perPage = 10;//首次分页数量
    var currentPagesr = 2; //滚动页码
    var perPagesr = 5; //滚动时候一页加载多少
    var datatotal; //总数据数量
    var datatotalkl; //总数据数量
    var url = "./php/herad.php" //请求地址
    var flag = true;
    var shoupingnum;//首屏获取的数量
    // $("html").on("touchmove",function(e){
    //     e.preventDefault();//阻止窗口拖动
    // })



    $(".yp-search-form-action-a").on("touchstart", function () {
        $(".v-fixed-bottom-a").toggleClass("v-fixed-h")
    })

    $(".proInfoUL li").eq(0).addClass("filter-cur")
    $(".proInfoUL").on("touchstart", ".proInfoli", function () {
        $(".proInfoli").removeClass("filter-cur").eq($(".proInfoli").index(this)).addClass("filter-cur");
    })

    $("#ypSearchTag").on("tap", function () {
        $("#screenContentDiv").hide();
        $("#ypSearch-box").show();
    })
    $(".yp-search").on("touchend", function (e) {
        e.preventDefault()
        $("#ypSearch-box").hide();
        $("#screenContentDiv").show();
    })
    $(".yp-search-icon-cancel-a").on("click", function () {
        window.history.back();
        console.log(1)
    })
    // -----------------screenPannelDiv----------------------
    function screenPannelDiv() {
        $("#screenLi").on("tap", "a", function () {
            $('html').addClass("noscroll")
            $("#screenPannelDiv").show();
            $(".sidebar-header").show();
            $(".sidebar-content").show();
            $(".sidebar-header").animate({
                "left": "10%"
            }, 200, function () {

            });
            $(".sidebar-content").animate({
                "left": "10%"
            }, 200);
        })

        $(".sidebary").on("touchstart", function () {
            $(".sidebar-header").animate({
                "left": "100%"
            }, 200, function () {
                $("#screenPannelDiv").hide();
                $(".sidebar-header").hide()
                $(".sidebar-content").hide()
                $('html').removeClass("noscroll")
            });
            $(".sidebar-content").animate({
                "left": "100%"
            }, 300);
        })
        $(".tit_two").each(function (i) {

            var x = 0;
            $(".tit_two").eq(i).on("click", function () {
                x++;

                if (x >= 2) {
                    x = 0
                };
                if (x == 1) {
                    $(".tit_one_img").eq(i).hide();
                    $(".tit_one_img2").eq(i).show();
                    $(".sidebar-list").eq(i).show();

                } else {
                    $(".tit_one_img").eq(i).show();
                    $(".tit_one_img2").eq(i).hide();
                    $(".sidebar-list").eq(i).hide();
                }

            })
        })


    }
    screenPannelDiv()



    function localS() {
        var ss = window.localStorage.name;
        // window.localStorage.removeItem('yyy');//localStorage删除
        $(".bread_word h1").text(ss);
        $(".search_shaixuan").text(ss);
    }
    localS()

    https: //www.ingping.com/search/solrCheck?format=json&callback=jQuery19104212185540225353_1542538584664&term=8&_=1542538584668
        // ----------------------------------
        function sousuo() {
            $(".hilight1").on("keyup", function () {
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

    function jishu() {
        $.ajax({
            url: url,
            data: {
                currentPage: currentPage,
                perPage: perPage
            },
            dataType: "json",
            success: function (data) {
                datatotal = parseFloat(data.total - data.data.length);
                datatotalkl = datatotal;
                shoupingnum=data.data.length;
            }
        })
    }
    jishu();

    function xuanran() {
        $.ajax({
            url: url,
            data: {
                currentPage: currentPage,
                perPage: perPage
            },
            dataType: "json",
            success: function (data) {
                datatotal = parseFloat(data.total - data.data.length);
                datatotalkl = datatotal;
                for (var i = 0; i < data.data.length; i++) {
                    $(".sub-product-list li").eq(i).html(
                        '<a class="prolist-click" href="details.html">' +
                        '<div class="wbox">' +
                        '<div class="pro-img">' +
                        '<img src="' + data.data[i].img + '" alt="' + data.data[i].title + '">' +
                        '</div>' +
                        '<div class="pro-info">' +
                        '<p class="pro-name">' +
                        '' + data.data[i].title + '' +
                        '</p>' +
                        '<p class="pro-tip">' + data.data[i].detail + '</p>' +
                        '<p class="mt10">' +
                        '<span class="ypPrice mr10 v-list-ypPrice"> ¥' + data.data[i].price + '</span>' +
                        '</p>' +
                        '</div>' +
                        '<span class="arrow"></span>' +
                        '</div>' +
                        '</a>'
                    )
                }
            }
        })
    }
    // xuanran()

    function scrollxr() {
        $.ajax({
            url: url,
            data: {
                currentPage: currentPagesr,
                perPage: perPagesr
            },
            dataType: "json",
            success: function (data) {
                console.log(data);
                html = "";
                for (var i = 0; i < data.data.length; i++) {
                    html +=
                        '<li>' +
                        '<a class="prolist-click" href="details.html">' +
                        '<div class="wbox">' +
                        '<div class="pro-img">' +
                        '<img src="' + data.data[i].img + '" alt="' + data.data[i].title + '">' +
                        '</div>' +
                        '<div class="pro-info">' +
                        '<p class="pro-name">' +
                        '' + data.data[i].title + '' +
                        '</p>' +
                        '<p class="pro-tip">' + data.data[i].detail + '</p>' +
                        '<p class="mt10">' +
                        '<span class="ypPrice mr10 v-list-ypPrice"> ¥' + data.data[i].price + '</span>' +
                        '</p>' +
                        '</div>' +
                        '<span class="arrow"></span>' +
                        '</div>' +
                        '</a>' +
                        '</li>'
                }
                $("#proListUl").append(html);
                flag = true;
                $("#moreContentTip").show();
                $("#loadingDiv").hide();
                datatotalkl -= 5;
            }
        })
    }


    function scroll() {
        var uh //proListUl
        $(window).scroll(function () {
            uh = $("#proListUl").height();
            var st = $(window).scrollTop();
            var ot = $("#proListUl").offset().top;
            var h = $(window).height();
            h /= 2;
            if (st >= 40) {
                $(".filter").addClass("filterfix");
            } else {
                $(".filter").removeClass("filterfix");
            }
            if (st >= 200) {
                $(".v-go-up").show();
            } else {
                $(".v-go-up").hide();
            }


            if (uh + ot - st <= h + 60 && datatotalkl >= 0 && flag) {
                console.log(1)
                flag = false
                $("#moreContentTip").hide();
                $("#loadingDiv").show();
                $("#dropload-noData").hide();
                currentPagesr++;
                scrollxr();
            }
            if (datatotalkl <= 0) {
                $("#moreContentTip").hide();
                $("#loadingDiv").hide();
                $("#dropload-noData").show();
            }
            if (datatotalkl > 0 && flag) {
                $("#moreContentTip").show();
                $("#loadingDiv").hide();
                $("#dropload-noData").hide();
            }
        })

    }
    scroll();

    function Listclick() {
        currentPagesr = 2; //重新算业数
        var html="";
        for(var i=0;i<10;i++){
            html+=
            '<li>' +
            '<a class="prolist-click" href="details.html">' +
            '<div class="wbox">' +
            '<div class="pro-img">' +
            '<img src="./images/timg.jpg" alt="">' +
            '</div>' +
            '<div class="pro-info">' +
            '<p class="pro-name">' +
            '亲图片加载中' +
            '</p>' +
            '</div>' +
            '</div>' +
            '</a>' +
            '</li>'
        }
        $("#proListUl").html(html)
        flag = true;
        $(window).scrollTop(0);
    } //点击销量的时候数据刷新

    function ajaxDY() {
        var x = 0;
        var y = 0;
        $("#proTypeLi").on("touchstart", "a", function () {
            $('.icons-sortbar-arrow').hide();
            url = "./php/herad.php";
            Listclick()
            xuanran();
        });

        $("#salesCountLi").on("touchstart", "a", function () {
            $('.icons-sortbar-arrow').hide()
            x++;
            if (x >= 2) {
                x = 0;
            }
            if (x == 1) {
                $("#salesCountLi .icons-sortbar-arrow").removeClass("up").show().addClass("down");
                url = "./php/heradpriceadd.php";
                $("#moreContentTip").show();
                $("#dropload-noData").hide();
                Listclick();
                xuanran();
            }
            if (x == 0) {
                $("#salesCountLi .icons-sortbar-arrow").removeClass("down").show().addClass("up");
                url = "./php/heradpricejian.php";
                $("#moreContentTip").show();
                $("#dropload-noData").hide();
                Listclick();
                xuanran();
            }
        })

        $("#priceLi").on("touchstart", "a", function () {
            $('.icons-sortbar-arrow').hide();
            y++;
            if (y >= 2) {
                y = 0;
            }
            if (y == 1) {
                $("#priceLi .icons-sortbar-arrow").removeClass("down").show().addClass("up");
                url = "./php/heradnumjian.php";
                Listclick();
                xuanran()
            }
            if (y == 0) {
                $("#priceLi .icons-sortbar-arrow").removeClass("up").show().addClass("down");
                url = "./php/heradnumadd.php";
                Listclick();
                xuanran()
            }
        })




    }
    ajaxDY();









})
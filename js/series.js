//=====================多余的促消失

function fun() {
    $(".goods-money").each(function (i) {
        var str=$(".goods-money").eq(i).find(".oldprice").html();
        var tex = $(".goods-money").eq(i).find("i").html();
        if (tex == " " || tex == "") {
            $(this).find("i").css("display", "none");
        }
        if (str == " " || str == "") {
            $(this).find(".oldprice").css("display", "none");
        }

    })
    console.log("执行fun")
}
fun();

//====================模态搜索框
$(".sou").focus(function () {
    console.log("点击了输入框")
    $(".motai").animate({
        "opacity": "1"
    }, 200).css("zIndex", "2")
    setTimeout("$('.motai input').focus()", 500);

})
$('.pre i').click(function () {
    $(".motai").animate({
        "opacity": "0"
    }, 200).css("zIndex", "-2")
})
//============莫泰框的搜索
$('.motai input').keyup(function () {
    $.ajax({
        url: "https://www.ingping.com/search/solrCheck",
        data: {
            term: $(this).val()
        },
        dataType: "jsonp",
        type: "GET",
        jsonp: "callback",
        success: function (data) {
            console.log(data)
            var html = "";
            for (var i = 0; i < data.length; i++) {
                html +=
                    '<li class="auto-li">' +
                    '<a href="details.html">'
                    +data[i] +'</a>' +'</li>'
                    
                    
                    
            }
            $(".search-list").html(html);
        }
    })
})

//触底加载
var flag = true;
var num = 0;
$(window).scroll(function () {

    var st = $(window).scrollTop();
    var ot = $(".banner").offset().top;
    var h = $(window).height();
    if (st + 200 >= ot - h && flag) {
        num += 9;
        if (num >= 37) {
            $(".tmer").html("没有更多了")
        }
        flag = false;
        $.ajax({
            url: '../php/series.php',
            data: {
                num: num,
            },
            dataType: "json",
            success: function (data) {

                var str = "";
                for (var i = 0; i < data.length; i++) {
                    str += '<li class="goods-list">' +
                        '<div class="goods">' +
                        '<img src="images/' + data[i].img_url + '" alt="">' +
                        '<a href="">' +
                        '<div class="goods-des">' +
                        '<p class="tit">' + data[i].tit + '</p>' +
                        '<div class="goods-money">' +
                        '<i>' + data[i].active + '</i>' +
                        '<span class="price">￥' + data[i].price + '</span>' +
                        '<span class="oldprice">' + data[i].oldprice + '</span>' +
                        '</div>' +
                        '</div>' +
                        '</a>' +
                        '</div>' +
                        '<i class="iconfont iconmore">&#xe621;</i>' +
                        ' </li>'

                }
                $(".more").append(str);
                flag = true;
                fun();
            }
        })
    }

})
$(".del").click(function () {
    $(".history-select-goods").eq(0).html("")
})

//返回顶部
var btn = document.querySelector(".gotop")
btn.onclick = function () {
    var st = document.documentElement.scrollTop || document.body.scrollTop; //获取当前scrollTop

    var timer = setInterval(function () {

        st -= 60;
        if (st <= 0) {
            st = 0;
            clearInterval(timer);
        }

        document.documentElement.scrollTop = st;
        document.body.scrollTop = st;

    }, 20)

}
//让按销量和价格栏定位
$(window).scroll(function () {
    var st = $(window).scrollTop();

    var ot = $(".goods-sort").offset().top;

    if (st >= 100) {
        console.log(1)
        $(".goods-sort").css({
            width: '100%',

            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 2
        })

    } else {
        $(".goods-sort").css({

            position: "static",


        })

    }
})
//==========================轮播图==============================
(function banner() {

    var swiper = new Swiper('.banner-wrap>.swiper-container', {
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
            autoplayDisableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

    });
})();

//=================================页面列表===============================
(function classlist() {
    var swiper = new Swiper('.classlist-wrap>.swiper-container', {
        centeredSlides: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

    });

})();

//============================隐藏菜单==========================
(function hideMenu() {

    $('.header-menu').on('click', function (e) {
        e.stopPropagation();
        $('.container').toggleClass('hide-menu-containter');
        $('footer').toggleClass('hide-menu-containter');
        $('.header-hide-menu').toggleClass('hide-menu-open');

    })

    $('.container').on('click', function (e) {
        if ($('.header-hide-menu').hasClass('hide-menu-open')) {
            e.preventDefault();
            e.stopPropagation();
            $('.container').removeClass('hide-menu-containter');
            $('footer').removeClass('hide-menu-containter');
            $('.header-hide-menu').removeClass('hide-menu-open');
        }
    })

})();

//============================解决方案==========================
(function selectData() {
    $.ajax({
        url: 'php/index.php',
        dataType: 'json',
        success: function (data) {
            var str = "";
            for (var i = 0; i < data.length; i++) {
                str += '<li>' +
                    '<a href="" class="solution-list-pro-r">' +
                    '<img  class="test-lazyload" data-original="" src="images/' + data[i].leftpro + '" alt="">' +
                    ' </a>' +
                    ' <div class="solution-list-pro-r">' +
                    '<a href="" class="solution-list-example">' +
                    '<img  class="test-lazyload" data-original="" src="images/' + data[i].rightpro + '" alt="">' +
                    '</a>' +
                    '<ul class="solution-list-menu">' +
                    '<li>' +
                    '<a href="">' + data[i].li1 + '</a>' +
                    '</li>' +
                    '<li>' +
                    '<a href="">' + data[i].li2 + '</a>' +
                    '</li>' +
                    '<li class="border-r">' +
                    '<a href="">' + data[i].li3 + '</a>' +
                    ' </li>' +
                    '</ul>' +
                    '</div>' +
                    '</li>'
            }
            $('.solution-list').eq(0).html(str);
        }

    })


})();

//===============================城市地址选择======================
(function city() {
    

    // 百度地图API功能
    function myFun(result){
        var cityName = result.name;
        //map.setCenter(cityName);
        var cityposition=document.getElementById('city_position')
        var demo=document.getElementById('demo')
        cityposition.innerHTML=cityName
        demo.innerHTML=cityName
    
    }
    var myCity = new BMap.LocalCity();
    myCity.get(myFun);

    
    $('#city').on('touchend', function () {
        $('.city-wrap').show();
    })
    $('.goback').on('touchend', function (e) {
        e.preventDefault();
        $('.city-wrap').hide();
    })

    $('.city-common-list li').on('touchend', function (e) {
        e.preventDefault();

        var x = $(this).html()
        $('.city').html(x)
    })



})();


//===============================模态搜索框===========================
$("#search").focus(function () {
    // console.log("点击了输入框")
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
            // console.log(data)
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

// //===============================返回顶部=========================
// (function gotop() {/
    // var btn=document.querySelector(".gotop")
    // btn.onclick=function(){
       
    //     var st=document.documentElement.scrollTop||document.body.scrollTop;//获取当前scrollTop
    //     console.log(document.body.scrollTop)
    //     var timer=setInterval(function(){

    //         st-=10;
    //         if(st<=0){
    //             st=0;
    //             clearInterval(timer);
    //         }
            
    //         document.documentElement.scrollTop=st;
    //         document.body.scrollTop=st;

    // },20)

// }
// function scroll() {
//     $(window).scroll(function () {
//         var st = $(window).scrollTop();
//         if (st >= 200) {
//             $(".v-go-up").show();
//         } else {
//             $(".v-go-up").hide();
//         }
//     })
// }
// scroll()

// })();
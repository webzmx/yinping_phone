$(function () {
    $(function(){
        FastClick.attach(document.body);
    });
    $(".menu_nav").on("tap", function () {
        $(".mm-menu").toggleClass("mm-opened");
        $(".mm-page").toggleClass("open-mm-page");
        $(".over").toggleClass("hover");
    })
    $(".over").on("touchstart",function(){
        $(".mm-menu").toggleClass("mm-opened");
        $(".mm-page").toggleClass("open-mm-page");
        $(".over").toggleClass("hover");
    })
})
// ===================

function FreshTime(){
    var endtime=new Date("2019/10/01,12:20:12");//结束时间
    var nowtime = new Date();//当前时间
    var lefttime=parseInt((endtime.getTime()-nowtime.getTime())/1000); 
    d=parseInt(lefttime/3600/24);
    h=parseInt((lefttime/3600)%24);
    m=parseInt((lefttime/60)%60);
    s=parseInt(lefttime%60);

    h = checkTime(h); 
    m = checkTime(m); 
    s = checkTime(s); 

    

    function checkTime(i){ //将0-9的数字前面加上0，例1变为01 
        if(i<10) 
        { 
            i = "0" + i; 
        } 
            return i; 
        } 
 
    $(".hours").html(h);
    $(".mine").html(m);
    $(".second").html(s);
    if(lefttime<=0){
        document.getElementById("LeftTime").innerHTML="团购已结束";
        clearInterval(sh);
    }
}
    FreshTime();
    var sh;
    sh=setInterval(FreshTime,1000);

//===========================================

$(function(){
    $.ajax({
        url: "http://localhost/php/active.php",
            dataType: "json",
            success: function (data) {
                // console.log(data);
                for (var i = 2; i < data.length - 12; i++) {
                    $(".theme").append(`
                        <div class="part_1">
                            <a href="###">
                                <img src="images/43aa9d18f65.gif" data-src="${data[i].pic}" alt="" class="lazy">
                                <p>${data[i].desc}</p>
                            </a>
                        </div>
                    `)
                }
                $(window).scroll(function(){
                   $(".lazy").each(function(i){
                       var ot=$(".lazy").eq(i).offset().top
                        if($(window).scrollTop()-200>= ot-$(window).height()){
                            var src = $(".lazy").eq(i).data("src");
                            $(".lazy").eq(i).attr("src",src).animate({
                                opacity:1
                            },2000)
                        }
                   }) 
            })
        }
    })
    
})
    
$(function(){
    //加载更多
    $(".get_more").on("tap", function () {
        $.ajax({
            url: "http://localhost/php/active.php",
                dataType: "json",
                success: function (data) {
                    // console.log(data);
                    for (var i = 0; i < data.length - 12; i++) {
                        $(".theme").append(`
                        <div class="part_1">
                            <a href="###">
                            <img src="images/43aa9d18f65.gif" data-src="${data[i].pic}" alt="" class="lazy">
                                <p>${data[i].desc}</p>
                            </a>
                        </div>
                    `)
                    }
                }
        })
    });
    $.ajax({
        url: "http://localhost/php/active.php",
            dataType: "json",
            success: function (data) {
                // console.log(data);
                for (var i = 20; i < data.length; i++) {
                    $(".newProduct").append(`
                    <div class="part_1">
                        <a href="###">
                        <img src="images/43aa9d18f65.gif" data-src="${data[i].pic}" alt="" class="lazy">
                            <p>${data[i].desc}</p>
                        </a>
                    </div>
                `)
                }
                $(window).scroll(function(){
                    $(".lazy").each(function(i){
                        var ot=$(".lazy").eq(i).offset().top
                        if($(window).scrollTop()-200>= ot-$(window).height()){
                            var src = $(".lazy").eq(i).data("src");
                            $(".lazy").eq(i).attr("src",src)
                        }
                    })
                }) 
            }
    })
})
// 滚动--主题专场 固定到顶部
$(function () {
    $(function(){
        FastClick.attach(document.body);
    });
    $(window).scroll(function () {
        if ($(this).scrollTop()>= $(".theme").offset().top-$(this).height()) {
            $(".nav-holder").css({
                "position": "fixed",
                "top": 0,
                "z-index": 2
            })
        } else if ($(this).scrollTop() <= $(".theme").offset().top - $(this).height()) {
            $(".nav-holder").css({
                "position": "relative"
            })
        }
    })
})
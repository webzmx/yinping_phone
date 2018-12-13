//图片懒加载
var arr = ["images/201609241807470758593.jpg", "images/201609241805490447220.jpg", "images/201612031740450177460.jpg", "images/201609241806360961994.jpg",
    "images/201609241808020254290.jpg", "images/201609241807550716680.jpg", "images/201609241806590228527.jpg"
];
$(window).scroll(function () {
    var st = $(this).scrollTop(); //文档超出浏览器窗口的距离
    //懒加载元素距离文档顶部的高度；
    var h = $(this).height(); //浏览器窗口的高度
   
    for (var i = 0; i < arr.length; i++) {
        var ot = $(".lazy").eq(i).offset().top;
        if (st>= ot-h) {
            $(".lazy").eq(i).data("original", arr[i]);
            var src = $(".lazy").eq(i).data("original");
            $(".lazy").eq(i).attr("src", src)
            $(".lazy").eq(i).css({"paddingTop":0})
        }
    }

})
//===回来优化一下下===导航小图片点击,滑动都可以页面移动
var x = 0;
function Swipe() {
    x++;  
    if (x % 2) {
        console.log(x)
        $(".wrap").animate({"marginLeft":150});

    } else {
        $(".wrap").animate({"marginLeft":0});
        
    }
   
}
$(".list").click(Swipe);

$("body").swipeLeft(function () {
    $(".wrap").animate({"marginLeft":0});
})
$("body").swipeRight(function (e) {
    e.preventDefault();
    $(".wrap").animate({"marginLeft":150});
});

// 返回顶部
var btn=document.querySelector(".gotop")
btn.onclick=function(){
    var st=document.documentElement.scrollTop||document.body.scrollTop;//获取当前scrollTop

    var timer=setInterval(function(){

        st-=60;
        if(st<=0){
            st=0;
            clearInterval(timer);
        }

        document.documentElement.scrollTop=st;
        document.body.scrollTop=st;

    },20)

}

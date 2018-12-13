$(function () {
    $(function () {
        FastClick.attach(document.body);
    });
    // var d;
    // var dd;
    // var ol;
    // var ll;
    $(".menu_nav").on("tap", function () {
        $(".mm-menu").toggleClass("mm-opened");
        $(".mm-page").toggleClass("open-mm-page");
        $(".over").toggleClass("hover");
    })
    $(".over").on("touchstart", function () {
        $(".mm-menu").toggleClass("mm-opened");
        $(".mm-page").toggleClass("open-mm-page");
        $(".over").toggleClass("hover");
    })
    $(".items").on("tap", function () {
        $(".li_picker").css("display", "block").animate({
            opacity: "0.6"
        }, 200);
        $(".li_picker_body").animate({
            bottom: "0"
        }, 200);
    })
    $(".li_picker").on("tap", function () {
        $(".li_picker").animate({
            opacity: "0"
        }, 200, function () {
            $(this).css("display", "none")
        });
        $(".li_picker_body").animate({
            bottom: "-5.2rem"
        }, 200);
        // $(".over").toggleClass("hover");
    })
    $(".li_close").on("tap", function () {
        $(".li_picker").animate({
            opacity: "0"
        }, 200, function () {
            $(this).css("display", "none")
        });
        $(".li_picker_body").animate({
            bottom: "-5.2rem"
        }, 200);
    })
    $(".ig").on("tap", function () {
        $(".li_portrait_page").css("display", "block");
    })
    $(".li_portrait_page").on("tap", function () {
        $(".li_portrait_page").css("display", "none");
    })
// 
    $.ajax({
        url:"https://www.ingping.com/recData/guessLike",
        dataType:'jsonp',
        jsonp:"jsoncallback",
        success:function(data){
            console.log(data);
        }
    })
    $.ajax({
        url:"https://m.ingping.com/advertising/getAdvertisingByCno",
        dataType:'jsonp',
        jsonp:"jsoncallback",
        data:{
            'cno':170729
        },
        success:function(data){
            console.log(data);
        }
    })
    // $.ajax({
    //     url:"https://m.ingping.com/advertising/getAdvertisingByCno",
    //     dataType:'jsonp',
    //     jsonp:"jsoncallback",
    //     data:{
    //         'cno':170729
    //     },
    //     success:function(data){
    //         console.log(data);
    //     }
    // })

    // https://m.ingping.com/advertising/getAdvertisingByCno?cno=170729&jsoncallback=jQuery21305854704281087706_1544596945153&_=1544596945154










    const ComLi = {
        data() {
            return {}
        },
        template: `<ul>
        <li>适合音乐：民谣</li>
        <li>话筒类型：云杉木（spruce）</li>
        <li>拾音器：无</li>
        <li>类型：民谣吉他</li>
        <li>指板：玫瑰木（Rosewood）</li>
        <li>琴颈：吉他</li>
        <li>品格：20</li>
        <li>尺寸：41</li>
        <li>芬达品牌评价：芬达相关产品评价</li>
    
    </ul>`
    }
    const ComLili = {
        data() {
            return {}
        },
        template: `<ul>
        <li>• 型号代码：0961545021</li>
        <li>• 型号全称：CD-60</li>
        <li>• 所属系列：Classic Design</li>
        <li>• 颜色：原木色</li>
        <li>• 琴体轮廓：Dreadnought 41寸</li>
        <li>• 面板：云杉</li>
        <li>• 背侧板：那都木（Nato）</li>
        <li>• 琴颈：那都木（Nato）</li>
        <li>• 琴身漆面：高光漆面</li>
        <li>• 音梁：圆齿状“X”音梁</li>
        <li>• 上弦枕宽度：1.69”（43mm）</li>
        <li>• 有效弦长：25.3”（64.3cm）</li>
        <li>• 品数：20</li>
        <li>• 品记：圆点品记镶嵌</li>
        <li>• 琴颈调节：双向调节</li>
        <li>• 琴桥：玫瑰木与平衡下弦枕</li>
        <li>• 弦钮：压铸弦钮</li>
        <li>• 音孔：珍珠碎花亚克力音孔环饰</li>
    </ul>`
    }
    const ComLilili = {
        data() {
            return {}
        },
        template: `<ul>
        <li>• CD-60 吉他 1把</li>
    </ul>`
    }
    var vm = new Vue({
        el: "#app",
        data: {
            tab: ["基本属性", "规格参数", "包装清单"],
            cur: 0,
            classname: 'tabs_inline',
            count:[0,1,2]
        },
        methods: {
            change(index) {
                this.cur = index;
            },
        },
        components: {
            ComLi,
            ComLili,
            ComLilili,
        }
    });
    // $(document).on("swipeLeft", function (e) {
    //     ll = parseFloat($(".mm-menu").css("left"))
    //     console.log(ll)
    //     // d = e.targetTouches[0].clientX
    //     // ol = e.targetTouches[0].target.offsetLeft
    //     if (ll == 0) {
    //         $(".mm-menu").toggleClass("mm-opened");
    //         $(".mm-page").toggleClass("open-mm-page");
    //     }
    // })
    // $(document).on("touchmove", function (e) {
    //     dd = e.targetTouches[0].clientX
    //     if (ll == 0) {
    //         $(".mm-menu").toggleClass("mm-opened");
    //         $(".mm-page").toggleClass("open-mm-page");
    //     }
    // })
    $(window).scroll(function () {
        var st = $(window).scrollTop();
        if (st >= 100) {
            $(".filter").css("position", "fixed")
        } else {
            $(".filter").css("position", "static")
        }
    })
    var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        speed: 300,
        autoplay: {
            delay: 1000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
        },

        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
            bacground: 'red'
        },

        // 如果需要前进后退按钮
        // nextButton: '.swiper-button-next',
        // prevButton: '.swiper-button-prev',

        // 如果需要滚动条
        // scrollbar: '.swiper-scrollbar',
    })
})
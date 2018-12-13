(function(){
    function resize(){
        var root = document.documentElement;
        var w = root.getBoundingClientRect().width;
        if(w>750){w=750}
        var fontSize = w/7.5+"px";        /*设计稿是750*/
        root.style.fontSize=fontSize;
    }
    resize();
    var t;
    window.addEventListener("resize",function(){
        clearTimeout(t);
        t =setTimeout(resize,300);
    })
})();
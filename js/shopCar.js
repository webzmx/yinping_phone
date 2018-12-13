$(function(){
   $('.nav-switch').click(function(){
       $('#menu').show();
       $('.m-page').animate({left:"2.7rem"},300,'ease-out',function(){
           $(this).addClass("pageOpen");
       });
   })
   
       
    $('.m-page').click(function(e){
        if($('.m-page').hasClass('pageOpen')){
            e.preventDefault();
            $('.m-page').animate({left:"0rem"},300,'ease-out',function(){
                $(this).removeClass("pageOpen");
                $('#menu').hide();
            });
        }
   })
   $('.cart-foot-bar').click(function(e){
    if($('.m-page').hasClass('pageOpen')){
        e.preventDefault();
        $('.m-page').animate({left:"0rem"},300,'ease-out',function(){
            $(this).removeClass("pageOpen");
            $('#menu').hide();
        });
    }
})


    $('.search').click(function(){
        $('#ypSearch-box').show();
    })
    $('.yp-search-icon2').click(function(){
        $('#ypSearch-box').hide();
    })
   
})



var obj = {'aa':'11', 'bb':'22', 'cc':'33', 'dd':'44'};
Mock.mock('http://test.com',obj);


//购物车更新列表
$.ajax({
    url:'http://test.com',
    type:"get",
    datype:"json",
    success:function(data){
        
        var data = JSON.parse(data);
        console.log($('#prolist').html())
        var html = ejs.render($('#prolist').html(),{datas:data});
        console.log(html)
        $('.cart-list ul').html(html);
    }
})


//购物车计算

    function plusProductNum(t){
        var pars = t.parent().parent().parent();
        var num = t.parent().find('input').val();
        num++;
        t.parent().find('input').val(num);
        if(pars.find(".cartcheckpro").is(":checked")){
            var allmoney = parseFloat($('.total').html().replace('￥',''));
            var promoney = parseFloat(pars.find('.proprice').html().replace('￥',''));
            allmoney+=promoney;
            allmoney+=".00";
            $('.total').html('￥'+allmoney);
        }
    }
    function minusProductNum(t){
        var pars = t.parent().parent().parent();
        var num = t.parent().find('input').val();
        num--;
        var flag = true;
        if(num<1){
            num=1;
            flag=false;
        }
        t.parent().find('input').val(num);
        if(flag){
            if(pars.find(".cartcheckpro").is(":checked")){
                var allmoney = parseFloat($('.total').html().replace('￥',''));
                var promoney = parseFloat(pars.find('.proprice').html().replace('￥',''));
                allmoney-=promoney;
                allmoney+=".00";
                $('.total').html('￥'+allmoney);
            }
        }
    }
    function deleteProduct(t){
        var pars = t.parent().parent();
        pars.remove();
        if(pars.find(".cartcheckpro").is(":checked")){
            var allmoney = parseFloat($('.total').html().replace('￥',''));
            var promoney = parseFloat(pars.find('.proprice').html().replace('￥',''));
            var pronum = parseInt(pars.find('.pro-num').val());
            allmoney-=promoney*pronum;
            allmoney+=".00";
            $('.total').html('￥'+allmoney);
        }
        if($(".cart-list ul li").length==0){
            $(".cartempty").css("display","flex");
        }
    }
    function selectGoods(t){
        var pars = t.parent();
        var allmoney = parseFloat($('.total').html().replace('￥',''));
        var promoney = parseFloat(pars.find('.proprice').html().replace('￥',''));
        var pronum = parseInt(pars.find('.pro-num').val());
        if($(".cartcheckpro:checked").length==$(".cartcheckpro").length){
            $('.checkedall').prop('checked',true);
        }else if($(".cartcheckpro:checked").length<$(".cartcheckpro").length){
            $('.checkedall').prop('checked',false);
        }
        if(t.is(':checked')==false){
			allmoney-=promoney*pronum;
		}else{
			allmoney+=promoney*pronum;
		}
		allmoney+=".00";
		$(".total").html('￥'+allmoney);
    
    }
    function selectAll(t){
        console.log(t.prop("checked"))
        console.log()
        $('.cartcheckpro').prop('checked',t.prop("checked"));
        if(t.is(':checked')==false){
            $('.total').html('￥0.00');
        }else{
            var allmoney=0;
            $('.cart-list ul li').each(function(i){
                var promoney = parseFloat($('.proprice').eq(i).html().replace('￥',''));
                var pronum = parseInt($('.pro-num').eq(i).val());
                allmoney+=promoney*pronum;
            })
            allmoney+=".00";
            $('.total').html('￥'+allmoney);
        }
    }
    $('.pro-num').each(function(i){
        $('.pro-num').eq(i).focus(function(){
            $(this).attr('count',$(this).val());
        })
        $('.pro-num').eq(i).blur(function(){
            var pars = $(this).parent().parent().parent();
            var num = parseInt($(this).val());
            var countnum = parseInt($(this).attr("count"));
            if(pars.find(".cartcheckpro").is(":checked")){
                var allmoney = parseFloat($('.total').html().replace('￥',''));
                var promoney = parseFloat(pars.find('.proprice').html().replace('￥',''));
                allmoney+=promoney*(num-countnum);
                allmoney+=".00";
                $('.total').html('￥'+allmoney);
            }
        })
    })

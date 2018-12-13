window.addEventListener('touchmove', function(e){
    e.preventDefault();
}, { passive: false });
$(function() {
    FastClick.attach(document.body);
});
var tellpwd;
$("#btn").on("swipeRight",function(){
    var btnleft=$("#btn").position().left;
    var sliderwidth=$("#slider").width();
    var btnwidth=$("#btn").width();
    var widthcha=sliderwidth-btnwidth;
    if(btnleft==widthcha){
        $(".label_y").show();
        $(".next_con").css("background","#fd7d26");
        $(".next_con").on("tap",function(){
            var str=$("#phoneNum").val();
            // console.log(str)
            var reg=/^1[3-9][\d]{9}$/;
            if(str==""){
                $("#mobileShowMessageDiv").animate({"display":"block"},function(){
                    $("#mobileShowMessageDiv").animate({"display":"none"},1500)
                });
                $("#mobileShowMessageWarning").html("请输入正确的手机号");
                return;
            }
            $.ajax({
                url:"php/register.php",
                data:{tell:$("#phoneNum").val()},
                success:function(data){
                    // console.log(data)
                    if(data==1){
                        var reg=/^1[3-9][\d]{9}$/;
                        if(!reg.test(str)){
                            $("#mobileShowMessageDiv").animate({"display":"block"},500,function(){
                                $("#mobileShowMessageDiv").animate({"display":"none"},1500)
                            });
                            $("#mobileShowMessageWarning").html("请输入正确的手机号");
                        }else{
                            $(".stage").hide();
                            $(".con_box").show();
                            $(".next_con").hide();
                            $(".enrol").show();
                            $("#sendRegMsgA").html()
                            $.ajax({
                                url:"php/tel_validate.php",
                                data:{tell:$("#phoneNum").val()},
                                dataType:"json",
                                success: function(data){
                                    tellpwd=data.pwd;
                                }
                            })
                            sendMessage();
                            $(".yg-sms").html();
                            $(".yg-sms").css({"color":"#9d9d9d"})
                        }
                    }else{
                        $("#mobileShowMessageDiv").animate({"display":"block"},500,function(){
                            $("#mobileShowMessageDiv").animate({"display":"none"},1500)
                        });
                        $("#mobileShowMessageWarning").html("用户名已存在");
                    }
                }
            })
        })
    }
})
$(".enrol").on("tap",function(){
    var value1=$("#phoneNum").val();
    var value2=$("#pwd").val();
    var value3=$("#authCode").val();
    var reg=/^.{6,20}$/;
    if(value2==""){
        $("#mobileShowMessageDiv").animate({"display":"block"},function(){
            $("#mobileShowMessageDiv").animate({"display":"none"},1500)
        });
        $("#mobileShowMessageWarning").html("请输入密码");
    }
    else if(!reg.test(value2)){
        $("#mobileShowMessageDiv").animate({"display":"block"},function(){
            $("#mobileShowMessageDiv").animate({"display":"none"},1500)
        });
        $("#mobileShowMessageWarning").html("由字母加数字组成的6-20位半角字符，区分大小写");
    }
    if(value3!=tellpwd){
        $("#mobileShowMessageDiv").animate({"display":"block"},function(){
            $("#mobileShowMessageDiv").animate({"display":"none"},1500)
        });
        $("#mobileShowMessageWarning").html("请检查验证码");
    }
    if(value1&&value2&&value3==tellpwd){
        $.ajax({
            url:"php/registerzc.php",
            data:{tell:$("#phoneNum").val(),pwd:$("#pwd").val()},
            dataType:"json",
            success:function(data){
                if(data==1){
                    location.href="index.html";
                }else{
                    alert("注册失败")
                }
            }
        })
    }
    
})
var content=60;
var InterValObj; //timer变量，控制时间
var count = 60; //间隔函数，1秒执行
var curCount;//当前剩余秒数
function sendMessage() {
    curCount = count;
    //设置button效果，开始计时
        $("#sendRegMsgA").val( + curCount + "秒再获取");
        InterValObj = window.setInterval(SetRemainTime, 1000); //启动计时器，1秒执行一次
    //timer处理函数
    function SetRemainTime() {
        if (curCount == 0) {     
            window.clearInterval(InterValObj);//停止计时器           
            $("#sendRegMsgA").html("获取验证码")
            $("#sendRegMsgA").css("color","#f60");  
        }
        else {
            curCount--;
            $("#sendRegMsgA").html( + curCount + "秒重发");
        }
    }
}
$(".yg-sms").on("tap",function(){
    sendMessage();
    $.ajax({
        url:"php/tel_validate.php",
        data:{tell:$("#phoneNum").val()},
        dataType:"json",
        success: function(data){
            tellpwd=data.pwd;
        }
    })
})
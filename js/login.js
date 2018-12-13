$(".zhuce1").on("tap",function(){
    var str=$("#phoneNum").val();
    if(str==""){
        $("#mobileShowMessageDiv").animate({"display":"block"},function(){
            $("#mobileShowMessageDiv").animate({"display":"none"},1500)
        });
        $("#mobileShowMessageWarning").html("请输入邮箱/会员账号/手机号");
        return;
	}
    $.ajax({
        url:"php/register.php",
        data:{tell:$("#phoneNum").val()},
        dataType:"json",
        success:function(data){
            // console.log(data)
            if(data==0){
                var reg=/^1[3-9][\d]{9}$/;
                if(!reg.test(str)){
                    $("#mobileShowMessageDiv").animate({"display":"block"},function(){
                        $("#mobileShowMessageDiv").animate({"display":"none"},1800)
                    });
                    $("#mobileShowMessageWarning").html("邮箱/会员账号/手机号不存在");
                    return;
                }
                else if(reg.test(str)){
                    var str1=$("#password").val();
                    // console.log(str1)
                    if(str1==""){
                        $("#mobileShowMessageDiv").animate({"display":"block"},function(){
                            $("#mobileShowMessageDiv").animate({"display":"none"},1500)
                        });
                        $("#mobileShowMessageWarning").html("请输入密码");
                        return;
                    }
                    $.ajax({
                        url:"php/login_pwd.php",
                        data:{pwd:$("#password").val()},
                        dataType:"json",
                        success:function(data){
                            // console.log(data)
                            if(data==1){
                                location.href="homepage.html";
                            }else{
                                $("#mobileShowMessageDiv").animate({"display":"block"},function(){
                                    $("#mobileShowMessageDiv").animate({"display":"none"},1500)
                                });
                                $("#mobileShowMessageWarning").html("请检查账号或密码");
                            }
                        }
                    })
                }
            }else{
                $("#mobileShowMessageDiv").animate({"display":"block"},function(){
                    $("#mobileShowMessageDiv").animate({"display":"none"},1500)
                });
                $("#mobileShowMessageWarning").html("请检查账号或密码");
            }

        }
    })

})
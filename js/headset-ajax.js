$(function(){
    $.ajax({
        url:"./php/heard.php",
        data:{
            currentPage:1,
            perPage:10
        },
        dataType: "json",
        success:function(data){
            console.log(data)
        }
    })
})
function ajax(obj){
	obj.type=obj.type||"GET";
	var xhr=new XMLHttpRequest();

	var str="";

	for(var x in obj.query){
		str+=x+"="+obj.query[x]+"&";
	};

	if(obj.type=="GET"){
		var d=new Date();
		str+="time="+d.getTime();
		obj.url+="?"+str;
	}

	xhr.open(obj.type,obj.url);

	if(obj.type=="GET"){
		xhr.send();
	}else{
		xhr.setRequestHeader("content-type","application/x-www-form-urlencoded")
		xhr.send(str);
	}
	

	xhr.onreadystatechange=function(){

		if(xhr.readyState==4&&xhr.status==200){

			obj.success(xhr.responseText);

		}

	}

}

<?php
    $host = "https://feginesms.market.alicloudapi.com";
    $path = "/codeNotice";
    $method = "GET";
    $appcode = "d1bba10372c747ccbd4d5f21af5d1c3e";
    $headers = array();



    $tell=$_REQUEST["tell"];
    // $tell = "13271567280";
    array_push($headers, "Authorization:APPCODE " . $appcode);
    $rand_num = rand(108654, 999999);
    $querys = "param=".$rand_num."&phone=".$tell."&sign=1&skin=19";
    $bodys = "";



    $url = $host . $path . "?" . $querys;
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $method);
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($curl, CURLOPT_FAILONERROR, false);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_HEADER, false);
    //curl_setopt($curl, CURLOPT_HEADER, true); 如不输出json, 请打开这行代码，打印调试头部状态码。
    //状态码: 200 正常；400 URL无效；401 appCode错误； 403 次数用完； 500 API网管错误
    if (1 == strpos("$".$host, "https://"))
    {
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
    }
    $out_put = curl_exec($curl);
    $arr["msg"] = $out_put;
    $arr["pwd"] = $rand_num;
    echo json_encode($arr);
?>

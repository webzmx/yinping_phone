<?php
/* Smarty version 3.1.32, created on 2018-11-20 17:45:44
  from 'D:\SVN\webapp01\ingping_phone\templates\series-1.html' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.32',
  'unifunc' => 'content_5bf3d7c88cec19_89000633',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '286e8961e2dc52d575f23ccb546a851ec81c3cb7' => 
    array (
      0 => 'D:\\SVN\\webapp01\\ingping_phone\\templates\\series-1.html',
      1 => 1542707035,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5bf3d7c88cec19_89000633 (Smarty_Internal_Template $_smarty_tpl) {
?><!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="../css/rest.css">
    <link rel="stylesheet" href="../iconfont/iconfont.css">
    <link rel="stylesheet" href="../css/series-1.css">
   
    <?php echo '<script'; ?>
 src="../js/font-size.js"><?php echo '</script'; ?>
>
</head>

<body>
    <div class="selec">
        <div class="pre">
            <a href="kge.html"><i class="iconfont">&#xe64b;</i></a>
        </div>
        <div class="ipt">
            <a href="">
                <input type="text" placeholder="  请搜索商品">
            </a>
           
            <!-- <i class="iconfont">&#xe61c;</i> -->
        </div>
        <i class="iconfont selr">&#xeaf8;</i>
    </div>
    <!-- 头部搜索栏结束 -->
    <div class="page">
        <a href="index.html">音平商城</a>
        <i class="page-next"></i>
        <a href="kge.html">套装分类</a>
        <i class="page-next"></i>
        <a href="">
            <p>录音编曲</p>
        </a>
    </div>
    <!-- 页面导航结束 -->
    <!-- 商品排序开始 -->
    <div class="goods-sort">
        <p class="good-active">按销量<i class="iconfont">&#xe627;</i></p>
        <p class="price-sort">按价格</p>
    </div>
    <ul>
        <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['goodslist']->value, 'row', false, 'index');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['index']->value => $_smarty_tpl->tpl_vars['row']->value) {
?>
        <li class="goods-list">
            <div class="goods">
                <img src="images/<?php echo $_smarty_tpl->tpl_vars['row']->value['img_url'];?>
" alt="">
                <a href="">
                    <div class="goods-des">
                        <p class="tit"><?php echo $_smarty_tpl->tpl_vars['row']->value["tit"];?>
</p>
                        <div class="goods-money">
                            <i><?php echo $_smarty_tpl->tpl_vars['row']->value["active"];?>
</i>
                            <span>￥<?php echo $_smarty_tpl->tpl_vars['row']->value["price"];?>
</span>
                            <span class="oldprice"><?php echo $_smarty_tpl->tpl_vars['row']->value["oldprice"];?>
</span>
                        </div>
                    </div>
                </a>
            </div>
            <i class="iconfont iconmore">&#xe621;</i>
        </li>
        <?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);?>
    </ul>
    <ul class="more">
        
    </ul>
    <div class="tmer">
        <span class="tm"></span>
         <span>加载更多</span>
     </div>
    <img src="../images/xcx-banner.jpg" alt="" class="banner">
    <!-- ===================底部开始===================== -->
    <div class="rights-box">
        <div class="rights-login">
            <div class="logmsg">
                <a>登录</a>
                <a>|</a>
                <a>注册</a>
            </div>
            <div class="tel clearfix">
                <p class="fl">客服热线：</p>
                <span class="fl">400-123-4567</span>
            </div>
        </div>
        <ul class="promise">
            <li>
                <i class="zp"></i>
                <a>正品保障</a>
            </li>
            <li>
                <i class="zp"></i>
                <a>满99包邮</a>
            </li>
            <li>
                <i class="zp"></i>
                <a>7天退换</a>
            </li>
            <li>
                <i class="zp"></i>
                <a>售后保障</a>
            </li>
        </ul>
        <div class="banben">
            <div>
                <img src="images/bottom_logo1-1.0.0.png" alt="">
                <p>了解我们</p>
            </div>
            <div>
                <img src="images/bottom_logo2-1.0.2.png" alt="">
                <p>了解我们</p>
            </div>
            <div>
                <img src="images/bottom_logo3-1.0.2.png" alt="">
                <p>了解我们</p>
            </div>
            <div>
                <img src="images/bottom_logo4-1.0.0.png" alt="">
                <p>了解我们</p>
            </div>
        </div>
        <div class="coprt">
            <p>增值电信业务经营许可证：粤B2-20110237 | 粤ICP备11032710号</p>
           
        </div>
        <div class="coprt">
            <p>
                © 2011-2018 音平商城
            </p>
        </div>
    </div>
    
</body>
<?php echo '<script'; ?>
 src="../js/zepto.js"><?php echo '</script'; ?>
>
<?php echo '<script'; ?>
 src="../js/series.js"><?php echo '</script'; ?>
>
<!-- <?php echo '<script'; ?>
 src="../js/ajax.js"><?php echo '</script'; ?>
> -->
</html><?php }
}

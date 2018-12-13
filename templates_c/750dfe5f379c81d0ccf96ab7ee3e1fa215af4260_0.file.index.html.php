<?php
/* Smarty version 3.1.32, created on 2018-11-07 15:10:35
  from 'E:\project\templates\index.html' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.32',
  'unifunc' => 'content_5be28feb82a726_51970241',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '750dfe5f379c81d0ccf96ab7ee3e1fa215af4260' => 
    array (
      0 => 'E:\\project\\templates\\index.html',
      1 => 1541574631,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5be28feb82a726_51970241 (Smarty_Internal_Template $_smarty_tpl) {
?><!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/index.css">
    <title>Document</title>
</head>

<body>
    <header>
        首页的其它信息
    </header>
    <!-- 新品推荐 开始 -->
    <section class="new-goods">
        <h2>新品推荐</h2>
        <ul>
            <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['booklist']->value, 'row', false, 'index');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['index']->value => $_smarty_tpl->tpl_vars['row']->value) {
?>
            <li>
                <a href="">
                    <div class="left"><img src="images/book1.jpg" alt=""></div>
                    <div class="right">
                        <p class="book-name">书名:<span><?php echo $_smarty_tpl->tpl_vars['row']->value["bookName"];?>
</span></p>
                        <p class="author">作者:<span><?php echo $_smarty_tpl->tpl_vars['row']->value["author"];?>
</span></p>
                        <p class="price">
                            原价:<span>price</span>
                            折扣价：<span>discount</span>
                        </p>
                        <p class="desc">描述:<span>desc</span></p>
                    </div>
                </a>
            </li>
            <?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);?>
        </ul>
    </section>
    <!-- 新品推荐 结束 -->
    <!-- 更多商品 开始 -->
    <section class="more-goods">
        <h2>更多商品</h2>
        <ul>
            <!-- <li>
                <a href="">
                    <div class="left"><img src="images/book1.jpg" alt=""></div>
                    <div class="right">
                        <p class="book-name">书名:<span>bookName</span></p>
                        <p class="author">作者:<span>author</span></p>
                        <p class="price">
                            原价:<span>price</span>
                            折扣价：<span>discount</span>
                        </p>
                        <p class="desc">描述:<span>desc</span></p>
                    </div>
                </a>
            </li> -->
            
        </ul>
    </section>
    <!-- 更多商品 结束 -->
    <?php echo '<script'; ?>
 src="js/jquery-1.12.4.js"><?php echo '</script'; ?>
>
    <?php echo '<script'; ?>
 src="js/index-more.js"><?php echo '</script'; ?>
>
</body>

</html><?php }
}

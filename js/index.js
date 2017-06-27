/* 
* @Author: Marte
* @Date:   2017-05-26 11:03:33
* @Last Modified by:   Marte
* @Last Modified time: 2017-06-27 01:21:28
*/


$(document).ready(function(){
    // 解决点透
    FastClick.attach(document.body);
    //点击表单组激活样式
    $('.form-group').on('tap', function () {
        $('.form-group').removeClass('act');
        $(this).addClass('act');
    });

    // 弹窗遮罩层
    var winHeight = $(window).height(),
        winWidth = $(window).width();
    function showPop() {
        $('.pop').height(winHeight);
        $('.pop').width(winWidth);
    }
    showPop();
    // 弹窗列表点击事件
    $('.pop-list').on('tap', 'li', function (e) {
        // 图标激活
        var $thisCheck = $(this).find('.icon-check');
        var $thisList = $(this).parents('.pop-list');
        var $checkBtns = $thisList.find('.icon-check');
        var $thisPop = $(this).parents('.pop');
        $checkBtns.removeClass('act');
        $thisCheck.addClass('act');
        $thisPop.removeClass('show');
        // e.preventDefault();
    });

    // 高考类别show弹窗
    $('#gk-class').on('tap', function () {
        var $thisTxt = $(this).find('.form-group-text');
        $('.gk-class').addClass('show');
        var $popList = $('.gk-class').find('li');

        $popList.on('tap', function () {
            var thisTxt = $(this).find('.pop-text');
            var text = thisTxt.text();
            $thisTxt.text(text);
        });
    });
    // 高考生源地show弹窗
    $('#gk-syd').on('tap', function () {
        var $thisTxt = $(this).find('.form-group-text');
        $('.gk-syd').addClass('show');
        var $popList = $('.gk-syd').find('li');
        $popList.on('tap', function () {
            var thisTxt = $(this).find('.pop-text');
            var text = thisTxt.text();
            $thisTxt.text(text);
        });
    });

    // 高考生源地show弹窗
    $('#dx-szd').on('tap', function () {
        var $thisTxt = $(this).find('.form-group-text');
        $('.dx-szd').addClass('show');
        var $popList = $('.dx-szd').find('li');
        $popList.on('tap', function () {
            var thisTxt = $(this).find('.pop-text');
            var text = thisTxt.text();
            $thisTxt.text(text);
        });
    });
    // 高考生源地show弹窗
    $('#dx-class').on('tap', function () {
        var $thisTxt = $(this).find('.form-group-text');
        $('.dx-class').addClass('show');
        var $popList = $('.dx-class').find('li');
        $popList.on('tap', function () {
            var thisTxt = $(this).find('.pop-text');
            var text = thisTxt.text();
            $thisTxt.text(text);
        });
    });
    $('#dx-chose').on('tap', function () {
        var $thisTxt = $(this).find('.form-group-text');
        $('.dx-chose').addClass('show');
        var $popList = $('.dx-chose').find('li');
        $popList.on('tap', function () {
            var thisTxt = $(this).find('.pop-text');
            var text = thisTxt.text();
            $thisTxt.text(text);
        });
    });
    $('.ok-button').on('tap', function () {
        var thisPop = $(this).parents('.pop');
        thisPop.css('display', 'none');
    });
    // 高考成绩输入验证
    $('.now-button').on('click', function () {
        var textIput = $('.gkcj')[0];
        var text = textIput.value;
        var reg = /^[0-9]*$/;
        if (!reg.test(text)) {
            $('.numTip').css('display', '-webkit-flex');
            return false;
        }
        
    });
    // 结果页
    setTimeout(function () {
        $('.tip-top').slideUp();
    }, 5000)
    
});
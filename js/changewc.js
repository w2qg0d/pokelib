var wc1_显示基本信息 = document.getElementById('wc1_显示基本信息');
var wc1_显示对战数据 = document.getElementById('wc1_显示对战数据');
var wc1_基本信息按钮 = document.getElementById('wc1_基本信息按钮');
var wc1_对战数据按钮 = document.getElementById('wc1_对战数据按钮');
var wc1_基本信息介绍 = document.getElementById('wc1_基本信息介绍');
var wc1_对战数据介绍 = document.getElementById('wc1_对战数据介绍');

wc1_对战数据按钮.onclick = function() {
    wc1_显示基本信息.setAttribute("style","display: none; width: 100%;");
    wc1_显示对战数据.setAttribute("style","display: ; width: 100%;");
    wc1_基本信息介绍.setAttribute("style","display: none; width: 100%;");
    wc1_对战数据介绍.setAttribute("style","display: ; width: 100%;");
}

wc1_基本信息按钮.onclick = function() {
    wc1_显示基本信息.setAttribute("style","display: ; width: 100%;");
    wc1_显示对战数据.setAttribute("style","display: none; width: 100%;");
    wc1_基本信息介绍.setAttribute("style","display: ; width: 100%;");
    wc1_对战数据介绍.setAttribute("style","display: none; width: 100%;");
}
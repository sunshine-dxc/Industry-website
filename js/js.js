// ------------广告倒计时效果-----------------
// var adTop = document.getElementById("adTop");
// (function countDown() {

// 	var adTopEm = adTop.getElementsByTagName("em")[0];
// 	var arr = ["一","二","三","四","五","六","七","八","九","十"];
// 	var num = arr.indexOf(adTopEm.innerText);

// 	if (num > -1) {

// 		var timer = setInterval(function () {
// 			num--;

// 			if (num < 0) {
// 				clearInterval(timer);
// 				adTop.style.display = "none";
// 				adCloseDo(0);
// 			}
// 			adTopEm.innerHTML = arr[num];

// 		},1000);

// 	}
// })();


var adTop = document.getElementById("adTop");
var adTopEm = adTop.getElementsByTagName("em")[0];
var adTopII = adTop.getElementsByTagName("i")[0];

function adClose(num) {

    num--;
    if (num == 9) {
        adTopEm.innerHTML = "九";
    }else if (num == 8) {

        adTopEm.innerHTML = "八";
    }else if (num == 7) {

        adTopEm.innerHTML = "七";
    }else if (num == 6) {

        adTopEm.innerHTML = "六";
    }else if (num == 5) {

        adTopEm.innerHTML = "五";
    }else if (num == 4) {

        adTopEm.innerHTML = "四";
    }else if (num == 3) {

        adTopEm.innerHTML = "三";
    }else if (num == 2) {

        adTopEm.innerHTML = "二";
    }else if (num == 1) {

        adTopEm.innerHTML = "一";
    }else if (num == 0) {
        adCloseDo(0);
        return;
    }
    // 兼容IE和火狐谷歌等的写法
    var computedStyle;

    if (window.getComputedStyle) {

        computedStyle = getComputedStyle(adTop, null);
    } else {
        computedStyle = adTop.currentStyle;//兼容IE的写法
    }
    adTopMmarginTop = computedStyle.marginTop;

    // alert(adTopMmarginTop);
    if (parseInt(adTopMmarginTop) > -80) {

        return setTimeout(function () {adClose(num);},1000);
    }

}

function adCloseDo(height) {
    height += 5;
    if (height <= 80) {
        adTop.style.marginTop = -height+"px";
        return setTimeout(function(){adCloseDo(height);}, 20);
    }

}
adClose(11);

adTopII.onclick = function () {
    adCloseDo(0);
};



//---------------------网站导航下拉菜单--------------------

var loginRegWebNav = document.getElementById("loginReg_webNav");
var loginRegWebNavSpan = loginRegWebNav.getElementsByTagName("span")[0];
var loginRegWebNavUl = loginRegWebNav.getElementsByTagName("ul")[0];

loginRegWebNav.onmouseover = function () {

    loginRegWebNavSpan.className = "loginReg_webNav_cur";
    loginRegWebNavUl.style.display = "";
};
loginRegWebNav.onmouseout = function () {

    loginRegWebNavSpan.className = null;
    loginRegWebNavUl.style.display = "none";
};

//---------------------城市选择--------------------

var areaAll = document.getElementById("areaAll");
var areaAllUls = areaAll.getElementsByTagName('ul');
var areaAllLis = areaAllUls[1].getElementsByTagName("li");
var areaXX = document.getElementById("areaXX");
var areaSpan = document.getElementById("areaSpan");

for (var i = 0; i < areaAllLis.length; i++) {

    areaAllLis[i].onclick = (function (j) {


        return function  () {
            //j就是当前li的位置
            if (this.className == "area_cur") {
                return false;//直接跳出
            }
            var newNum = j,oldNum;

            for (var k = 0; k < areaAllLis.length; k++) {
                if (areaAllLis[k].className == "area_cur") {
                    oldNum = k;
                    break;
                }

            }
            areaAllLis[newNum].className = "area_cur";
            areaAllLis[oldNum].className = "";
            areaAllUls[newNum+2].style.display = "";
            areaAllUls[oldNum+2].style.display = "none";
            return false;

        };

    })(i);
}

areaXX.onclick = function () {

    areaUp(0);

};

function areaUp(num) {
    num += 5;
    if (num <= 100) {
        areaAll.style.marginTop = -num + "%";
        return setTimeout(function(){areaUp(num);}, 25);
    }else{
        areaAll.style.display = 'none';
    }
}

areaSpan.onclick = function () {

    areaDown(0);
};

function areaDown(num) {
    if (num == 0) {
        areaAll.style.display = '';
    }

    num += 5;
    if (num <= 100) {
        areaAll.style.marginTop = (-100+num) + "%";
        return setTimeout(function(){areaDown(num);}, 20);
    }
}

//立即执行函数
(function () {

    for (var i = 0; i < areaAllUls.length; i++) {

        if (areaAllUls[i].className == "area_main_nav") {
            continue;
        }
        var lis = areaAllUls[i].getElementsByTagName("li");

        for (var j = 0; j < lis.length; j++) {

            lis[j].onclick = function () {

                var text = this.innerText || this.textContent;
                areaSpan.getElementsByTagName("i")[1].innerHTML = text;
                areaUp(0);

                return false;

            };
        }
    }
})();


// index_one 第一块 菜单栏 列表切换
(function  () {

    var indexOneLnav = document.getElementById("indexOneLnav");
    var indexOneLnavlis = indexOneLnav.getElementsByTagName("li");

    for (var i = 0; i < indexOneLnavlis.length; i++) {

        indexOneLnavlis[i].onmouseover = (function (j) {

            return function () {

                this.className += " index_one_LliCur";
                var chNodes = this.childNodes;
                for (var k = 0; k < chNodes.length; k++) {

                    if (chNodes[k].className == "index_one_LMain") {

                        chNodes[k].style.display = "";
                    }
                }

            };


        })(i);

        indexOneLnavlis[i].onmouseout =(function (j) {

            return function () {

                this.className = this.className.substring(0, this.className.lastIndexOf(" "));

                var chNodes = this.childNodes;
                for (var k = 0; k < chNodes.length; k++) {

                    if (chNodes[k].className == "index_one_LMain") {

                        chNodes[k].style.display = "none";
                    }
                }

            };

        })(i);
    }


})();

//图片轮播
(function () {
    var indexOneMFlash = document.getElementById("indexOneMFlash");
    var indexOneMFlashUls = indexOneMFlash.getElementsByTagName("ul");
    var imgLis = indexOneMFlashUls[0].getElementsByTagName("li");
    var btnLis = indexOneMFlashUls[1].getElementsByTagName("li");

    function getOldNum () {

        var oldNum;
        for (var k = 0; k < btnLis.length; k++) {

            if (btnLis[k].className == "index_o_MCur") {
                oldNum = k;
                break;
            }
        }
        return oldNum;
    }

    //圆点的hover效果
    for (var i = 0; i < btnLis.length; i++) {

        btnLis[i].onmouseover = (function (j) {

            return function () {
                //newNum表示当前位置；oldNum表示之前位置
                if (this.className == "index_o_MCur") {
                    return;
                }
                var newNum = j,
                    oldNum = getOldNum();
                btnLis[newNum].className = "index_o_MCur";
                btnLis[oldNum].className = "";

                opacityFlash(0,newNum,oldNum);

            };

        })(i);
    }

    //num表示递归的起始值；newNum表示当前位置；oldNum表示之前位置
    function opacityFlash(num,newNum,oldNum) {
        if (num == 0) {
            imgLis[newNum].className = "index_o_MICur";
            imgLis[oldNum].className = "";

        }
        num += 10;
        if (num<100) {

            imgLis[newNum].style.opacity = num/100;
            imgLis[newNum].style.filter = "alpha(opacity="+(num)+")";

            imgLis[oldNum].style.opacity =1-num/100;
            imgLis[oldNum].style.filter = "alpha(opacity="+(100-num)+")";

            return setTimeout(function () {opacityFlash(num,newNum,oldNum);}, 20);

        }
    }
    //图片淡入淡出
    function opacityFlashAuto() {
        //newNum表示当前位置；oldNum表示之前位置
        var newNum,
            oldNum = getOldNum();
        last = btnLis.length - 1;

        if (oldNum != last) {
            newNum = oldNum+1;
        }else{
            newNum = 0;
        }
        btnLis[newNum].className = "index_o_MCur";
        btnLis[oldNum].className = "";
        opacityFlash(0,newNum,oldNum);

    }
    //自动播放
    var opacityFlashAutoDodo = setInterval(opacityFlashAuto, 3000);

    indexOneMFlash.onmouseover = function () {
        clearInterval(opacityFlashAutoDodo);
    };

    indexOneMFlash.onmouseout = function () {
        opacityFlashAutoDodo = setInterval(opacityFlashAuto, 3000);
    };

})();


// 媒体资讯 / 新闻公告 切换
(function () {
    var indexORUlTit = document.getElementById("indexORUlTit");
    var indexORUlTitLis = indexORUlTit.getElementsByTagName("li");
    var indexORContent = document.getElementById("indexORContent");
    var indexORMainDivs = indexORContent.getElementsByTagName("div");


    for (var i = 0; i < indexORUlTitLis.length; i++) {

        indexORUlTitLis[i].onmouseover = (function  (j) {

            return function () {

                if (this.className == "index_o_RUlTitCur") {
                    return;
                }

                var newNum=j,oldNum;
                for (var k = 0; k < indexORUlTitLis.length; k++) {
                    if (indexORUlTitLis[k].className == "index_o_RUlTitCur") {
                        oldNum = k;
                        break;
                    }
                }
                indexORUlTitLis[newNum].className = "index_o_RUlTitCur";
                indexORUlTitLis[oldNum].className = "";
                indexORMainDivs[newNum].style.display = "";
                indexORMainDivs[oldNum].style.display = "none";
            };

        })(i);
    }

})();

//去除字符串两端的空格
function trim (str) {

    return str.replace(/(^\s*)|(\s*$)/g,"");

}

// 搜索框添加获取焦点失去焦点的事件

function search(id) {

    var searchMain = document.getElementById(id);
    var searchMainInput = searchMain.getElementsByTagName("input")[0];

    searchMainInput.onfocus = function () {

        var val = trim(this.value);
        if (val == "请输入您的品牌和机型，看看您的宝贝还值多少钱？") {
            this.value = "";
            this.style.color = "#000";
        }

    };

    searchMainInput.onblur = function () {

        var val = trim(this.value);

        if (val == "") {
            this.value = "请输入您的品牌和机型，看看您的宝贝还值多少钱？";
            this.style.color = "#8c8c8c";
        }
    };
}
search("searchMain");




// ------产品切换------
(function () {
    //addNodes 对应dd的数组节点
    //ulNodes 对应ul的数组节点
    function proTraggle(ddId,ulId) {

        var ddNodes = document.getElementById(ddId).getElementsByTagName("dd");
        var ulNodes = document.getElementById(ulId).getElementsByTagName("ul");

        for (var i = 0; i < ulNodes.length; i++) {

            ddNodes[i].onmouseover = (function (j) {

                return function () {
                    if (this.className == "pro_l_mLCur") {
                        return;
                    }
                    var newNum=j,oldNum;
                    for (var k = 0; k < ulNodes.length; k++) {

                        if (ddNodes[k].className == "pro_l_mLCur" ) {
                            oldNum = k;
                            break;
                        }
                    }
                    ddNodes[newNum].className = "pro_l_mLCur";
                    ddNodes[oldNum].className = "";
                    ulNodes[newNum].style.display = "";
                    ulNodes[oldNum].style.display = "none";
                };

            })(i);
        }

        if (ddNodes[ddNodes.length-1].getAttribute("ul") == "none") {

            ddNodes[ddNodes.length-1].onmouseover =  function () {
                this.className = "pro_l_mLCur";

            };
            ddNodes[ddNodes.length-1].onmouseout =  function () {
                this.className = "";

            };

        }
    }

    for (var x = 0; x < 3; x++) {
        proTraggle("product"+x,"productUl"+x);
    }
})();

// product_clinch 向上移动的效果
(function () {
    var productClinch = document.getElementById("productClinch");
    var productClinchLis = productClinch.getElementsByTagName("li");
    function liToTop(num) {
        num += 2;
        if (num < 72) {
            productClinchLis[0].style.marginTop = -num+"px";
            return setTimeout(function () {liToTop(num);}, 20);
        }else{
            productClinch.appendChild(productClinchLis[0]);
            productClinchLis[productClinchLis.length-1].style.marginTop = "0px";
        }
    }
    var productDo = setInterval(function(){liToTop(0);},2000);

    productClinch.onmouseover = function () {
        clearInterval(productDo);
    };
    productClinch.onmouseout = function () {
        productDo = setInterval(function(){liToTop(0);},1500);
    };

})();


(function  () {
    // 固定搜索
    search("searchMainFix");
    var searchFix = document.getElementById("searchFix");
    var searcher = document.getElementById("search");
    var webHeight = searcher.offsetTop+searcher.offsetHeight;

    window.onscroll = function () {

        var scrollH = document.body.scrollTop+document.documentElement.scrollTop;

        if (scrollH >= webHeight) {

            searchFix.style.display = "";
        }else{

            searchFix.style.display = "none";
        }

    };
})();


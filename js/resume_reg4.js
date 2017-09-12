/**
 * Created by Administrator on 2017/9/11 0011.
 */
$(document).ready(function(){
    var national = [
        "汉族", "壮族", "满族", "回族", "苗族", "维吾尔族", "土家族", "彝族", "蒙古族", "藏族", "布依族", "侗族", "瑶族", "朝鲜族", "白族", "哈尼族",
        "哈萨克族", "黎族", "傣族", "畲族", "傈僳族", "仡佬族", "东乡族", "高山族", "拉祜族", "水族", "佤族", "纳西族", "羌族", "土族", "仫佬族", "锡伯族",
        "柯尔克孜族", "达斡尔族", "景颇族", "毛南族", "撒拉族", "布朗族", "塔吉克族", "阿昌族", "普米族", "鄂温克族", "怒族", "京族", "基诺族", "德昂族", "保安族",
        "俄罗斯族", "裕固族", "乌孜别克族", "门巴族", "鄂伦春族", "独龙族", "塔塔尔族", "赫哲族", "珞巴族"
    ];

    var date_options=""
    for(var i=0;i<national.length;i++){
        date_options+="<div class='select-option' style='width: 108px'><span>"+national[i]+"</span></div>"
    };
    $('.cwfnationaloptions').append(date_options);

    $('body').on("click",".general-select input",function(){
        var _this=$(this);
        year=parseInt(_this.val().substring(0,4));

        if(_this.closest(".general-select").next().height()=="0"){
            $(".options").css("height","0px");
            _this.closest(".general-select").next().css("height","auto");
        }else {
            _this.closest(".general-select").next().css("height","0px");
        }

    });




    $('body').on("click",".select-option",function(){
        var _this=$(this);
        var optionhtml=_this.find("span").eq(0).html();
        _this.closest(".options").prev().find("input").val(optionhtml);
        _this.closest(".options").css("height","0px");
    });
})
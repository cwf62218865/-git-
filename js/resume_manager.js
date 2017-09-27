/**
 * Created by cwf on 2017/9/26 0026.
 */

//头像
$(".resume_manage_header").on("mouseover",function(){
    $(".resume_manage_header .img_con").show();
}).on("mouseleave",function(){
    $(".resume_manage_header .img_con").hide();
});

$(".img_con").click(function () {
    $(".title_content").html("上传头像");
    $("#modalbox").animate({"opacity":1},300);
    setTimeout(function(){
        $("#modalbox").css("display","block");
    },0)
});

$(".modalclose").on("click",function(){
    $("#modalbox").animate({"opacity":0},300);
    setTimeout(function(){
        $("#modalbox").css("display","none");
    },300)
});



//基本信息
$(".sexbox_span").on("click",function(){
    $(".sexbox_span").removeClass("radio_sec");
    $(this).addClass("radio_sec");
    $("#sex").val($(this).html());
})


$(".general-select input").on("mousedown",function(){

    var _this=$(this);
    if(_this.closest(".general-select").next().height()=="0"){
        $(".options").css("height","0px");
        _this.closest(".general-select").next().css("height","185px");
    }else {
        _this.closest(".general-select").next().css("height","0px");
    }

});
$('body').on("mousedown",".noscend .select-option",function(){
    var _this=$(this);
    $(".select-option").each(function(){
        var _that=$(this);
    });
    var optionhtml=_this.find("span").eq(0).html();
    _this.closest(".options").prev().find("input").val(optionhtml);
    _this.closest(".options").css("height","0px");
});

var year="";
$('body').on("mousedown",".scend .select-option",function(){
    var _this=$(this);
    var optionhtml=_this.find("span").eq(0).html();
    _this.closest(".options").prev().find("input").val(optionhtml);
    //_this.closest(".options").css("height","0px");
    year=optionhtml;
});

$('body').on("mousedown",".cwfmonths span",function(){
    var _this=$(this);
    var timebox=_this.closest(".general-select").find("input").eq(0);
    var month=parseInt(_this.html());
    if(year.toString().length==4){
        timebox.val(year+"."+month);
        _this.closest(".options").css("height","0px");
    }else{

    };

});



//生日
//默认年份
var date =new Date();
var year_date= date.getFullYear();//年
var datetime_options="";
for(var i=0;i<50;i++){
    datetime_options+="<div class='select-option' style='width:80px;'><span>"+(year_date-i)+"</span></div>"
};
$('.cwftimeoptions').append(datetime_options);

var national = [
    "汉族", "壮族", "满族", "回族", "苗族", "维吾尔族", "土家族", "彝族", "蒙古族", "藏族", "布依族", "侗族", "瑶族", "朝鲜族", "白族", "哈尼族",
    "哈萨克族", "黎族", "傣族", "畲族", "傈僳族", "仡佬族", "东乡族", "高山族", "拉祜族", "水族", "佤族", "纳西族", "羌族", "土族", "仫佬族", "锡伯族",
    "柯尔克孜族", "达斡尔族", "景颇族", "毛南族", "撒拉族", "布朗族", "塔吉克族", "阿昌族", "普米族", "鄂温克族", "怒族", "京族", "基诺族", "德昂族", "保安族",
    "俄罗斯族", "裕固族", "乌孜别克族", "门巴族", "鄂伦春族", "独龙族", "塔塔尔族", "赫哲族", "珞巴族"
];

var date_options=""
for(var i=0;i<national.length;i++){
    date_options+="<div class='select-option' style='width: 216px'><span>"+national[i]+"</span></div>"
};
$('.cwfnationaloptions').append(date_options);


//籍贯
var  area=dsy.Items[0];
var city="";
for(var i=0;i<area.length;i++){
    city+="<div class='select-option' style='width:120px;' data-id='"+i+"'><span>"+area[i]+"</span></div>"
};
$('.cwfcityoptions').append(city);

$("body").on("mousedown",".cwfcityoptions .select-option",function(){
    var _this=$(this);
    $(".cwfcityoptions .select-option").each(function(){
        var _that=$(this);
        //_that.css({'background-color':'#fff','color':'#333'})
    });
    //_this.css({'background-color':'#1aa9d2','color':'#fff'});

    var areas="";
    var data_id=_this.attr("data-id");
    var listnum="0_"+data_id+"_0";
    var areamsg=dsy.Items[listnum];
    for(var i=0;i<areamsg.length;i++){
        areas+="<span>"+areamsg[i]+"</span>"
    }
    $(".cwfarea").html(areas);
});

$("body").on("mousedown",".cwfarea span",function(){
    var _this=$(this);
    _this.closest(".options").prev().find("input").val(_this.html());
    _this.closest(".options").css("height","0px");
});


//现居地址
for(var i=0;i<area.length;i++){
    city+="<div class='select-option' style='width:140px;' data-id='"+i+"'><span>"+area[i]+"</span></div>"
};
$('.cityoptions').append(city);

$("body").on("mousedown",".cityoptions .select-option",function(){
    var _this=$(this);
    $(".cwfcityoptions1 .select-option").each(function(){
        var _that=$(this);
        //_that.css({'background-color':'#fff','color':'#333'})
    });
    //_this.css({'background-color':'#1aa9d2','color':'#fff'});

    var areas="";
    var data_id=_this.attr("data-id");
    var listnum="0_"+data_id+"_0";
    var areamsg=dsy.Items[listnum];
    $("#area").val(areamsg[0]);
    for(var i=0;i<areamsg.length;i++){
        areas+="<div class='select-option' style='width:180px;'><span>"+areamsg[i]+"</span></div>"
    }
    $(".areaoptions").html(areas);
    _this.closest(".options").css("height","0px");
});


$("body").on("mousedown",".areaoptions .select-option",function(){
    var _this=$(this);

    _this.closest(".options").css("height","0px");
});




//文本域输入数字显示
$(".cwftextarea").on("input",function(){
    var content=$(this).val();
    var contentlength=content.length;
    var length=60;
    var nowlength=length-contentlength;
    if(nowlength>=0){
        $("#textareanum").html(nowlength);
        $("#introduce").val(content);
    }else{
        $(this).val(content.substring(0,length));
        $("#introduce").val(content);
    }

})

//文本提示修改
$(".cwftextarea").on("focus",function(){
    $(this).parent().next().find(".formtip").remove();
})

//修改
$("#edit_person_msg").on("click",function(){
    if($("#person_msgbox").css("display")=="none"){
        $("#person_msgbox").show();
        $("#person_msg").hide();
    }else{
        $("#person_msg").show();
        $("#person_msgbox").hide();
    }
});

$("#edit_wanted_job").on("click",function(){
    if($("#wanted_jobbox").css("display")=="none"){
        $("#wanted_jobbox").show();
        $("#wanted_job").hide();
    }else{
        $("#wanted_job").show();
        $("#wanted_jobbox").hide();
    }
})

//取消
$(".cancelbtn").eq(0).on("click",function(){
    $(this).closest(".basic_msg").hide();
    $(this).closest(".basic_msg").prev().show();
})
$(".cancelbtn").eq(1).on("click",function(){
    $("#wanted_job").show();
    $("#wanted_jobbox").hide();
})

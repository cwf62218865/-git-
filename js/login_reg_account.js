/**
 * Created by Administrator on 2017/9/18 0018.
 */

var telphone_reg=/^1[3|5|7|8][0-9]\d{8}$/;
var eamiltest=/^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/;

function create_bind_account(){
    $(".forgetpsw_title").click(function(){
        $(".forgetpsw_title").removeClass("xuanzhong");
        $(this).addClass("xuanzhong");
    });
    $(".forgetpsw_title").eq(0).click(function(){
        $(".tel_con").show();
        $(".email_con").hide();
    })
    $(".forgetpsw_title").eq(1).click(function(){
        $(".tel_con").hide();
        $(".email_con").show();
    })


    $("#tel_number").on("input", function () {
        var tel=$("#tel_number").val();
        if(telphone_reg.test(tel)){
            $(".tel_con .code").addClass("click");
        }else{
            $(".tel_con .code").removeClass("click");
        }
    });
    $("body").on("click",".tel_con .click",function(){
        var time=60;
        $(".tel_con .code").html(time+"s后重新获取");
        $(".tel_con .click").removeClass("click");
        var timer=setInterval(function(){
            time--;
            $(".tel_con .code").html(time+"s后重新获取");
            if(time==0){
                clearInterval(timer);
                $(".tel_con .code").addClass("click").html("获取验证码");
            }
        },1000)
    });
}

function forget_password(){
    $(".forgetpsw_title").click(function(){
        $(".forgetpsw_title").removeClass("xuanzhong");
        $(this).addClass("xuanzhong");
    });
    $(".forgetpsw_title").eq(0).click(function(){
        $(".tel_con").show();
        $(".email_con").hide();
    })
    $(".forgetpsw_title").eq(1).click(function(){
        $(".tel_con").hide();
        $(".email_con").show();
    });

    $("#tel_number").on("input", function () {
        var tel=$("#tel_number").val();
        if(telphone_reg.test(tel)){
            $(".tel_con .code").addClass("click");
        }else{
            $(".tel_con .code").removeClass("click");
        }
    });
    //邮箱
    $("#email_number").on("input", function () {
        var email=$("#email_number").val();
        if(eamiltest.test(email)){
            $(".email_con .code").addClass("click");
        }else{
            $(".email_con .code").removeClass("click");
        }
    });

    $("body").on("click",".tel_con .click",function(){
        var time=60;
        $(".tel_con .code").html(time+"s后重新获取");
        $(".tel_con .click").removeClass("click");
        var timer=setInterval(function(){
            time--;
            $(".tel_con .code").html(time+"s后重新获取");
            if(time==0){
                clearInterval(timer);
                $(".tel_con .code").addClass("click").html("获取验证码");
            }
        },1000)
    });

    $("body").on("click",".email_con .click",function(){
        var time=60;
        $(".email_con .code").html(time+"s后重新获取");
        $(".email_con .click").removeClass("click");
        var timer=setInterval(function(){
            time--;
            $(".email_con .code").html(time+"s后重新获取");
            if(time==0){
                clearInterval(timer);
                $(".email_con .code").addClass("click").html("获取验证码");
            }
        },1000)
    });
}

function send_resume(){
    $(".btn_ditu").click(function () {
        $("#modalbox").animate({"opacity":1},300);
        setTimeout(function(){
            $("#modalbox").css("display","block");
        },300)
    });

    $(".modalclose").on("click",function(){
        $("#modalbox").animate({"opacity":0},300);
        setTimeout(function(){
            $("#modalbox").css("display","none");
        },300)
    });
    $(".modalclose").on("click",function(){
        $("#refusebox").animate({"opacity":0},300);
        setTimeout(function(){
            $("#refusebox").css("display","none");
        },300)
    });
    $(".quxiao").on("click",function(){
        dataid="";
        $("#refusebox").animate({"opacity":0},300);
        setTimeout(function(){
            $("#refusebox").css("display","none");
        },300)
    });
    $(".list_top .list_item_btn").click(function(){
        $(".list_top .list_item_btn").removeClass("select");
        $(this).addClass("select");
    });
    $("#send_list").click(function(){
        $(".list_content").show();
        $(".resume_content").hide();
        $(".ico_rightstatas").show();
        $(".biezhu").show();
    });
    $("#review").click(function(){
        $(".resume_content").show();
        $(".list_content").hide();
        $(".ico_rightstatas").hide();
        $(".biezhu").hide();
    })
}

function person_collection(){

    //提取省市内容
    var area=new Array();
    area=dsy.Items[0];
    var html="";
    for(var i=0;i<area.length;i++){
        html+="<div class='select-option city_con ' id='city"+i+"'><span>"+area[i]+"</span></div>";
    }
    $(".city1 .options").html(html);
    var city_1=dsy.Items['0_0_0'];
    var city_html="";
    for(var j=0;j<city_1.length;j++){
        city_html+="<div class='select-option city_con'><span>"+city_1[j]+"</span></div>";
    }
    $(".citys").html(city_html);

    $("#gz_address").on("click",function(){
        var _this=$(this);
        _this.closest(".general-select").next().css("height","185px");
        _this.closest(".general-select").next().next().css("height","185px");
    })
    $(".general-select input").on("mousedown",function(){
        var _this=$(this);
        if(_this.closest(".general-select").next().height()=="0"){
            $(".options").css("height","0px");
            _this.closest(".general-select").next().css("height","auto");
        }else {
            _this.closest(".general-select").next().css("height","0px");
        }
    })
    $("body").on("mousedown",".select-option",function(){
        var _this=$(this);
        var optionhtml=_this.find("span").eq(0).html();
        _this.closest(".options").prev().find("input").val(optionhtml);
        _this.closest(".options").css("height","0");
    });
    var total=0;
    $("body").on("mousedown",".select-option1",function(){
        var _this=$(this);
        var flag=_this.attr("flag");
        if(flag==0 && total<3){
            _this.addClass("click_item");
            var del_ico="<svg class='icon deleteicon'  aria-hidden='true'> <use xlink:href='#icon-shan' class='colorbbb'></use> </svg>";
            _this.html(_this.html()+del_ico);
            _this.attr("flag",1);
            total++;
        }
            $(".deleteicon").click(function () {
                var flag=$(this).closest(".select-option1").attr("flag");
                if(flag==1){
                    $(this).closest(".select-option1").attr("flag",0);
                    --total;
                    $(this).closest(".select-option1").removeClass("click_item");
                    $(this).closest(".select-option1").find("svg").remove();
                }
            })
    });
    $("#hy_preserve").click(function () {
        var html="";
        for(var i=0;i<$(".select-option1").length;i++){
            if($(".select-option1").eq(i).attr("flag")==1){
                html+=$(".select-option1").eq(i).find("span").html()+",";
            }
        }
        html = html.substring(0,html.length-1);
        $("#hy_district").val(html);
        $(this).closest(".options").css("height","0");
    })
    $("#hy_quxiao").click(function () {
        $(this).closest(".options1").css("height","0");
    })
    $(".list_top .list_item_btn").click(function(){
        $(".list_top .list_item_btn").removeClass("select");
        $(this).addClass("select");
    });
    $("#favourite").click(function(){
        $(".list_content").show();
        $(".resume_content").hide();
    });
    $("#subscribe").click(function(){
        $(".resume_content").show();
        $(".list_content").hide();
    });
    //订阅的显示
    $("#edit_dytj").click(function(){
        $(".no_dingyue_list").hide();
        $(".edit_dingyue").show();
    });

    $(".general-input input").on("focus",function(){
        var _this=$(this);
        if(_this.closest(".general-input").css("borderColor")=="rgb(226, 61, 70)"){
            _this.closest("div").nextAll(".chec_tip1").eq(0).find(".left_align").html("");
            _this.closest("div").nextAll(".chec_tip1").eq(0).find(".center_align").html("");
            _this.closest("div").nextAll(".chec_tip1").eq(0).find(".right_align").html("");
        }
    });
}


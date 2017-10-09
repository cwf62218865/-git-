/**
 * Created by Administrator on 2017/9/29 0029.
 */

//testatrea相关事件

$("textarea").on("input",function(){
    var content=$(this).val();
    $(this).closest(".release_list").find("input").val(content);
})

$("textarea").on("focus",function(){
    $(this).closest(".release_list").find(".formtip").remove();
})

var salarychoice= $.salarychoice({
    data:["面议","1k","2k","3k","4k","5k","6k","7k","8k"],
    input:"#salarychoice",
    width:"218px"
})
//模板名称切换
$(".template_names").eq(0).on("click",function(){
    $(".template_names").eq(0).addClass("template_name_choiced");
    $(".template_names").eq(1).removeClass("template_name_choiced");
    $(".job_template_msg").show();
    $(".do_job_template_msg").hide();
});
$(".template_names").eq(1).on("click",function(){
    $(".template_names").eq(1).addClass("template_name_choiced");
    $(".template_names").eq(0).removeClass("template_name_choiced");
    $(".job_template_msg").hide();
    $(".do_job_template_msg").show();
});

//选择模板
$(".job_template_msg .job_template_msgbtn").one("click",function(){
    var _this=$(this);
    _this.prev().css({"background-color":"#a8c9ea","color":"#fff","border-color":"#a8c9ea"});
    _this.find("use").attr("xlink:href","#icon-zhengque2");
    _this.append("<span style='float: right;margin-left: 10px;font-size: 14px;line-height: 36px'>已添加至岗位职责</span>")
    var content1=_this.prev().html();
    var content2=$("#job_duty_textarea").val();
    var length=content2.split(".").length;

    if(content2){
        $("#job_duty_textarea").val(content2+"\r\n"+length+"."+content1);
        $("#job_duty_input").val(content2+"\r\n"+length+"."+content1);
    }else{
        $("#job_duty_textarea").val(length+"."+content1);
        $("#job_duty_input").val(length+"."+content1);
    }
});

$("#job_duty_textarea").keyup(function (e) {
    if (e.keyCode == 13) {
        var content2=$(this).val();
        var length=content2.split(".").length;
        $("#job_duty_textarea").val(content2+length+".");
    }
});
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
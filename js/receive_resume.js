$(function () {
    $(".wenzi,.ico_xiala").click(function () {
        $(".my_joblist").show();
        $(".option_select").click(function () {
            $(".wenzi").html($(this).html());
            $(".my_joblist").hide();
        })
    });
    //收藏简历
    $(".shoucang_resume,.edit_ico ").click(function () {
        $("#beizhubox").animate({"opacity":1},300);
        setTimeout(function(){
            $("#beizhubox").css("display","block");
        },300)
    })
    $(".edit_ico,.shoucang_resume  ").click(function () {
        var item=$(this).closest(".list_item");
        var data=item.attr("data-id");
        var beizhu=item.find(".beizhu_content").val();
        $("#beizhubox").attr("data-id",data);
        $("#beizhubox").find(".scbz_input").val(beizhu);
    })
    $(".modalclose,.quxiao").on("click",function(){
        $("#beizhubox").animate({"opacity":0},300);
        setTimeout(function(){
            $("#beizhubox").css("display","none");
        },300)
    });
    //邀请面试
    $(".yaoqing_interview,.agree_review").click(function () {
        $("#invite_box").animate({"opacity":1},300);
        setTimeout(function(){
            $("#invite_box").css("display","block");
        },300)
    })
    $(".modalclose,.quxiao").on("click",function(){
        $("#invite_box").animate({"opacity":0},300);
        setTimeout(function(){
            $("#invite_box").css("display","none");
        },300)
    });
    // 面试时间选择
    var date=new Date();
    var datatime=new Date();
    var month=date.getMonth()+1;
    var today=date.getDate();
    var week=date.getDay();
    var hour="";
    var arr=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
    $(".review_input").on("mousedown",function () {
        $(".review_time").show();
        $(".time_hour").click(function () {
            var data_id=$(this).attr("data-id");
            $(".time_hour").removeClass("slect");
            $(this).addClass("slect");
            if(data_id==1){
                date.setTime(datatime.getTime()+24*1*60*60*1000);
                hour="10:00";
            }else if(data_id==2){
                date.setTime(datatime.getTime()+24*1*60*60*1000);
                hour="14:00";
            }
            else if(data_id==3){
                date.setTime(datatime.getTime()+24*2*60*60*1000);
                hour="10:00";
            }
            else if(data_id==4){
                date.setTime(datatime.getTime()+24*2*60*60*1000);
                hour="14:00";
            }
            $("#review_time").val(month+"月"+date.getDate()+"日 "+arr[date.getDay()]+" "+hour);
            $(".review_time").hide();
        });
        $(".select_date").click(function () {
            $(".review_time").hide();
            $(".review_date").show();
            var html="";
            for(var i=1;i<=7;i++){
                date.setTime(datatime.getTime()+24*i*60*60*1000);
                html +="<label class='date_items'><span class='dater'>"+date.getDate()+"</span><span class='week'>"+arr[date.getDay()]+"</span></label>";
            }
            $(".items_dateweek").html(html);
        })
        $("body").on("click",".date_items",function () {
            $(".date_items").removeClass("date_select");
            $(this).addClass("date_select");
        })
        var re_hour=$(".number_hour").html();
        $("#minus").click(function () {
            re_hour--;
            if(re_hour<0){
                re_hour=23;
            }
            $(".number_hour").html(re_hour);
        })
        $("#plus").click(function () {
            re_hour++;
            if(re_hour>23){
                re_hour=0;
            }
            $(".number_hour").html(re_hour);
        })
        $("#reviewtime").click(function () {
            var items=$(".date_items");
            var hour=$(".number_hour").html();
            for(var i=0;i<items.length;i++){
                if(items.eq(i).hasClass('date_select')){
                    var htmls=items.eq(i);
                    console.log(htmls.find(".dater").html());
                    $("#review_time").val(month+"月"+htmls.find(".dater").html()+"日 "+htmls.find(".week").html()+" "+hour+":00");
                    $(".review_date").hide();
                }
            }
        })
        $(".quxiao1").click(function () {
            $(".review_date").hide();
        })
    })

    $(".refuse_review").click(function () {
        $(this).closest(".review_statas").html("<div class='jujuestatus cur' data-id='1'>已拒绝面试</div>")
    })

    //面试邀请
    $("#send_review").click(function () {
        var reviewtime=$("#review_time").val();
        var contacts_name=$("#contacts_name").val();
        var contacts_tel=$("#contacts_tel").val();
        var city=$("#city").val();
        var city_area=$("#city_area").val();
        var detail_address=$("#detail_address").val();

        var telphone_reg=/^1[3|5|7|8][0-9]\d{8}$/;
        if(reviewtime==""){
            alert("请输入面试日期")
            return;
        }
        if(contacts_name==""){
            alert("请输入联系人")
            return;
        }
        if(contacts_tel==""){
            alert("请输入联系电话")
            return;
        }
        if(!telphone_reg.test(contacts_tel)){
            alert("请输入可联系的电话")
            return;
        }
        if(city==""){
            alert("请输入城市")
            return;
        }
        if(city_area==""){
            alert("请输入区县")
            return;
        }
        if(detail_address==""){
            alert("请输入详细地址")
            return;
        }

        $("#invite_box").hide();

        $.ajax({
            url:"",
            type:"post",
            data:{
                reviewtime:reviewtime,
                contacts_name:contacts_name,
                contacts_tel:contacts_tel,
                city:city,
                city_area:city_area,
                detail_address:detail_address
            },
            success:function(data){
                if(data.status==1){
                    window.location.href="";
                }else{
                    console.log(data.content);
                }
            }
        })
    })
    //收藏备注
    $("#shoucang").click(function () {
        var item=$(this).closest("#beizhubox");
        var beizhu=item.find(".scbz_input").val();
        var data_flag=item.attr("data-id");

        var item=$(this).closest("")
        if(beizhu==""){
            alert("请填写备注！")
            return;
        }
        $("#beizhubox").hide();
        var lists=$(".resume_content .list_item");
        lists.each(function () {
            if($(this).attr("data-id")==data_flag){
                $(this).find(".beizhu_content").val(beizhu);
            }
        })
        for(i=0;i<lists.length;i++){
            if(lists.eq(i).attr("data-id")==data_flag){

            }
        }

        $.ajax({
            url:"",
            type:"post",
            data:{
                beizhu:beizhu
            },
            success:function (data) {
                if(data.status==1){
                    window.location.href="";
                }else{
                    console.log(data.content);
                }
            }
        })
    })
})
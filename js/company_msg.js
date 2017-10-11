/**
 * Created by Administrator on 2017/10/9 0009.
 */
$(document).ready(function(){
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        slidesPerView: 1,
        roundLengths : true,
        pagination: '.swiper-pagination',
        // 如果需要前进后退按钮
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
    })
})

//显示全部公司介绍
var introducecontent=$(".introduces").eq(0).html();
var introducecontentlength=introducecontent.length;
if(introducecontentlength>300){
    $(".introduces").eq(0).html(introducecontent.toString().substring(0,300)+"...");
}
 $(".showoehideall").on("click",function(){
     if($(this).find("span").eq(0).html()=="显示全部"){
         $(".introduces").eq(0).html(introducecontent);
         $(this).find("span").eq(0).html("收起内容");
         $(this).find("use").eq(0).attr("xlink:href","#icon-shangjiantou");
     }else{
         $(".introduces").eq(0).html(introducecontent.toString().substring(0,300)+"...");
         $(this).find("span").eq(0).html("显示全部");
         $(this).find("use").eq(0).attr("xlink:href","#icon-xiajiantou");
     }


 })
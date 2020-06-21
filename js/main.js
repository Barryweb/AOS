AOS.init();  //初始化
$('#banner').slick({
    autoplay:true,
    autoplaySpeed:1500,
    arrows:false //輪播片的左右箭頭 false為去除
});
$('#brand').slick({
    slidesToShow:4,
    autoplay:true,
    autoplaySpeed:1000,
    dots:true, //圖片下方的點點
    arrows:false
});
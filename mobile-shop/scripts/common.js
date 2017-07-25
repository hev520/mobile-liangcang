var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    autoplay : 1000,
    spaceBetween: 30,
    effect: 'fadeIn'
});
if (localStorage.getItem('token')) {
    var oRg=document.getElementsByClassName('rg');
	var oRder = document.getElementsByClassName('order');    
	oRg[0].style.display="none";
	oRder[0].style.display="block";
}
    var searchBtn = document.getElementsByClassName('search_btn');
    console.log(searchBtn);
    var oSearchGoods=document.getElementById('search_goods');
    console.log(oSearchGoods);
    if (searchBtn.length === 1) {
	searchBtn[0].onclick=function(){
	location.href = 'search.html?search_text=' + oSearchGoods.value;
	console.log(oSearchGoods.value);
 };
}
//更新购物车
//得到商品ID
// var goods_id = $.getQueryString('goods_id');
// console.log(goods_id);
// var oAddCart = document.getElementsByClassName('add_cart');
// $.ajax({
// 	"url":"http://h6.duchengjiu.top/shop/api_cart.php?goods_id="+ goods_id,
// 	"pagesize":10,
// 	"type":"GET",
// 	"dataType":'json',
	
// 	"data":{
// 		"goods_id":goods_id,
// 		"number":number
// 	}
// 	'success':function(response){
// 		var obj = response.data[0];
// 		console.log(obj);
// 	}
// })
//请求分类中的商品
var cat_id = $.getQueryString('cat_id');
var goodsUl = document.querySelector('.goods');
console.log(goodsUl);
$.ajax({
	"url": "http://h6.duchengjiu.top/shop/api_goods.php?cat_id=" + cat_id,
    "type": "GET",
    "dataType": "json",
    "data":{
    	"page":2,
    	"pagesize":10
    },
	"success": function(response) {
		console.log(response);
		if (response.data.length === 0) {
			var oH1 = document.createElement('h1');
			oH1.innerText = "亲，此类商品已经售完,店主正在备货中！";
			document.body.appendChild(oH1);
			return;
		}
		for (var i = 0; i < response.data.length; i++) {
			var obj = response.data[i];
			var oLi = document.createElement('li');
			var oA = document.createElement('a');
			oA.href = 'detail.html?goods_id=' + obj.goods_id;
			oLi.appendChild(oA);
			var oImage =document.createElement('img');
			oImage.src = obj.goods_thumb;
			var oP = document.createElement('p');
			var oI = document.createElement('i');
			oI.innerText = "￥"+obj.price;
			oP.innerText = obj.goods_name;
			oA.appendChild(oImage);
			oA.appendChild(oP);
			oA.appendChild(oI);
			goodsUl.appendChild(oLi);
		}
	}
})
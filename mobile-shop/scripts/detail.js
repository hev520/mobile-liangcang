//得到商品ID
var goods_id = $.getQueryString('goods_id');
console.log(goods_id);

$.ajax({
	'url':'http://h6.duchengjiu.top/shop/api_goods.php?goods_id='+goods_id,
	'type':'GET',
	"dataType":'json',
	'success':function(response){
		var obj = response.data[0];
		console.log(obj);

		var oDiv = document.getElementsByClassName('nav')[0];
		console.log(oDiv);
		var oImg = document.createElement('img');
		oImg.src = obj.goods_thumb;
		oDiv.appendChild(oImg);

		var oP = document.createElement('p');
		oP.innerText = obj.goods_desc;
		oDiv.appendChild(oP);

		var oE = document.createElement('em');
		oE.innerText = '￥' + obj.price;
		oDiv.appendChild(oE);

		var oBtn =document.getElementById('shoping_btn');
		oBtn.onclick = function (){
			if (!localStorage.token) {
				location.href = 'login.html#callbackurl'+location.href;
				return;
			}
			console.log('已登录');

		$.ajax({
        "url": "http://h6.duchengjiu.top/shop/api_cart.php?token="+localStorage.token,
        "type": "POST",
        "data": {
          "goods_id": goods_id,
          "number": 1
        },
        "dataType": "json",
        "success": function(response) {
          console.log(response);
        }
      });

        document.body.appendChild(oDiv);
		}
	}
});
   var oLis = document.getElementsByClassName('number_add')[0].children;
   var sum = parseInt(oLis[1].innerText);
     oLis[0].onclick=function(){
	  if (sum>1) {
		  sum --;
		  oLis[1].innerText=sum;	
		  console.log(sum);
	  }else{
		  return;
	  }
   };
   oLis[2].onclick=function(){
   	console.log(sum);
   	 if(sum<100){
   	 	sum++;
   	 	oLis[1].innerText=sum;
   	 }else{
   	 	return;
   	 }
   };
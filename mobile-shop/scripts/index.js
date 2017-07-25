

$.ajax({
  "url": 'http://h6.duchengjiu.top/shop/api_goods.php',
  "type": "GET",
  "dataType": "json",
  "data":{
    "page":7,
    "pagesize":6,
  },
  
  "success": function(response){
    //处理返回的数据
    console.log(response);
    for (var i = 0; i < response.data.length; i++) {
      var hot_show=document.querySelector('.hot_show') 
      var obj = response.data[i];
      var oLi = document.createElement('li');
      var oA = document.createElement('a');
      oA.href = 'detail.html?goods_id=' + obj.goods_id;
      oLi.appendChild(oA);
      if (i % 2 === 1 && i%2===2) {
        oLi.className += " diy";
      }
      var oImage = document.createElement('img');
      oImage.src = obj.goods_thumb;
      oA.appendChild(oImage);
      hot_show.appendChild(oLi);
    }
  },
  "error": function(message) {
    //
    console.log(message);
  }
}); 


$.ajax({
  "url": 'http://h6.duchengjiu.top/shop/api_goods.php?',
  "type": "GET",
  "dataType": "json",
  "data":{
    "page":21,
    "pagesize":21,
  },
  
  "success": function(response){
    //处理返回的数据
    console.log(response);
    for (var i = 0; i < response.data.length; i++) {
      var hot_goods=document.querySelector('.hot_goods') 
      var obj = response.data[i];
      var oLi = document.createElement('li');
      var oA = document.createElement('a');
      oA.href = 'detail.html?goods_id=' + obj.goods_id;
      oLi.appendChild(oA);
      // if (i % 5 === 4) {
      //   oLi.className += " diy";
      // }
      var oImage = document.createElement('img');
      oImage.src = obj.goods_thumb;
      var oP = document.createElement('p');
      var oI = document.createElement('i');
      oP.innerText = obj.goods_desc;
      oA.appendChild(oImage);
      oA.appendChild(oP);
      oI.innerText = '￥'+obj.price;
      oA.appendChild(oI);
      hot_goods.appendChild(oLi);
    }
  },
  "error": function(message) {
    //
    console.log(message);
  }
});	        
		        
		        
		        
		        
		    

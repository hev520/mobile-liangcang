var goodsUl = document.getElementById('goods_list');
$.ajax({
  "url": 'http://h6.duchengjiu.top/shop/api_goods.php',
  "type": "GET",
  "dataType": "json",
  "success": function(response){
  	console.log(response);
    // var oNavLiTemplateStr = document.getElementById('nav-li-template').innerHTML;
    for (var i = 0; i < response.data.length; i++) {
      var obj = response.data[i];
      console.log(i);
      $('#goods_list').append('<li><a href="list.html?cat_id=' + obj.cat_id + '">' + '<img src="images/'+i+'.png">' + '</a></li>')
    }
  },
  "error": function(message) {
    console.log(message);
  }
});
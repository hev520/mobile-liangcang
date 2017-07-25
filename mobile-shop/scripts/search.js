//获取参数search_text,放到搜索框
var searchText=$.getQueryString('search_text');
console.log(searchText);
var oSearchGoods=document.getElementById('search_goods');
oSearchGoods.value = searchText;

searchGoods();
function searchGoods(){
	$.ajax({
		"url": 'http://lc.shudong.wang/api_goods.php?search_text=' + searchText,
		'type':"GET",
		'dataType': "json",
		'success':function(response){
			console.log(response);
			var html = '';
			for (var i = 0; i < response.data.length; i++) {
				var obj = response.data[i];
				html += '<li><a href="detail.html?goods_id='
		          + obj.goods_id
		          + '"><img src="'
		          + obj.goods_thumb
		          + '" /><p>'
		          + obj.goods_name
		          + '</p></a></li>';
		      }
		      document.getElementsByClassName('search_goods')[0].innerHTML = html;
			}
		})
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
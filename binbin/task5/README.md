#task5
>继续学习了DOM对节点的操作

1.判断是否超过限制的数量
```
	function overNumber(){
		if((kuang.childNodes.length-1)>60){
			alert("不能超过六十个");
		}
	}

```

2.排序函数
```
function sortNumfunc(){
		var arr = [];
		//将所有数字存入数组
		for (let i = 0; i < kuang.childNodes.length-1; i++) {
			arr[i] = parseInt(kuang.childNodes[i].innerText);
		}
		//冒泡排序
		for(let i = 0;i<arr.length;i++){
			for(let j = 0;j<arr.length-i-1;j++){
				if (arr[j]<arr[j+1]) {
					let temp = arr[j+1];
					arr[j+1] = arr[j];
					arr[i] = temp;
				}
			}
		}
		console.log(arr);
		//清空显示区
		kuang.innerHTML = "";
		//显示排序后的数字
		for (let i = 0; i < arr.length; i++) {
			var div = document.createElement("div");
			//通过设置的数字设置高度
			div.innerHTML="<div class=\"n\" style=\"height:"+arr[i]+"px;\">"+arr[i] + "</div>";
			kuang.insertBefore(div,kuang.firstChild);
		}		
	}
```


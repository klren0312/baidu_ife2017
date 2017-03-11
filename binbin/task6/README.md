#task6
>学习了字符串分割split函数，以及数组操作

1.从空格符字符串中将各个字符串分割存入数组
```
	var number = document.getElementById('num').value;
	var arr = number.split(" ");
```

2.通过数组遍历，与输入的字符进行匹配
```
	function searchText(text){
		let arr = [];
		for (let i = 0; i < kuang.childNodes.length-1; i++) {
			arr[i] = kuang.childNodes[i].innerText;
			if (arr[i] === text) {
				kuang.childNodes[i].style.color="red";
				console.log("ok");
			}
		}
	}
```
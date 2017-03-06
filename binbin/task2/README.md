#task1
>DOM创建新的节点

1.创建新的li标签
`document.createElement("li");`

2.给标签内赋值
`li.innerHTML= "<div></div>"`

3.将创建的标签加到ul标签下
`ul.appendChild(li)`

4.多维数组
>test[数组项目][数组项目内数值]

5.排序函数sort
>单独使用 arr.sort()
如果不行的话，加一个排序函数
```
function sortArray(a,b){
	return b[1] - a[1];
}
```


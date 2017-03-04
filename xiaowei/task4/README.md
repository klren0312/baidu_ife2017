#task4
>这次练习让我学习了postion定位和清除float浮动的方法，以及如何将元素在浏览器页面中居中显示。还是要多加练习，加深理解。

1.清除浮动
>1.overflow
`overflow:auto;`
>2.clearfix
```
.group:before,.group:after{
	display:table;
	content:"";
}
.group:after{
	clear:both;
}
.group{
	*zoom:1;/*ie的属性*/
}
```

2.元素在浏览器页面中居中显示
>
```
.container{
	position:absolute;
	left:50%;
	top:50%;
	margin:-100px 0 0 -200px;
}
```

3.position中，relative相对定位，会保留元素原位置空间；absolute绝对定位，元素会脱离文档流。
>absolute的元素需要父元素要是相对定位或者绝对定位，否则该元素会根据全局窗口定位。

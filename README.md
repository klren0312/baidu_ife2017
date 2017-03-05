# 百度前端技术学院2017学期
***
* [小薇学院](#小薇学院)
  * [task1-20170228](#task1)
  * [task2-20170301](#task2)
  * [task3-20170302](#task3)
  * [task4-20170304](#task4)
  * [task5-20170304](#task5)
  * [task6-20170305](#task6)

***


##小薇学院

###task1
>这次练习让我又重新学习了html，发现自己以前基础几乎忘了差不多了。

 - 1.学习了table的写法
 - 2.学习了input一些类型的写法，尤其是单选框的写法
	 ```
	 <input type="radio" name="sex" id="man">男
	 <input type="radio" name="sex" id="woman">女
	 ```
 - 3.学习了要使用HTML5语义化标签

###task2
>这次练习让我又重新学习了css样式。

1. 学习了a标签的相关样式

```
/*a去掉下划线*/
 a{
 	text-decoration:none;
 }

 /*a各种形态显示的颜色*/
 a:link{color:white;}
 a:active{color:blue;}
 a:visited{color:yellow;}
 a:hover{color:red;}
```

2.列表相关样式

```
 list-style-type: none;/*前面没有标志*/
 list-style-type: decimal;/*前面是数字*/
```

3.box-shadow增加阴影


###task3
>这次练习让我学习了postion定位和float布局。还是要多加练习，加深理解。

1.box-sizing
2.padding
3.position
4.float
5.overflow


###task4
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


###task5
>运用了前面的清除浮动技术，解决了十张图片的那里的问题。以及页脚撑在最底下的问题。

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


###task6
>综合了前面所学的知识。主要还是定位的知识。还是花了很长时间。

1.首字下沉
```
p:first-letter{
        float: left;
        font-size: 70px;
        padding-right: 5px;
        font-family: "微软雅黑";
        color: #f5e327;
}
```

2.字体倾斜
`font-style:italic`

3.字体加粗
`font-weight:bold`

4.字体下划线
`text-decoration: underline （颜色）;`

5.有些线都是用`box-shadow`画的。

6.左右居中
`margin:auto`

# 百度前端技术学院2017学期
***
* [小薇学院](#小薇学院)
  * [task1-20170228](#task1)
  * [task2-20170301](#task2)
  * [task3-20170302](#task3)
  * [task4-20170304](#task4)
  * [task5-20170304](#task5)
  * [task6-20170305](#task6)
* [斌斌学院](#斌斌学院)
  * [task1-20170305](#task1)
  * [task2-20170306](#task2)
  * [task3-20170307](#task3)
  * [task4-20170308](#task4)

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


##斌斌学院

###task1
>复习了简单的dom操作

1.通过id获取对象
`document.getElementById()`

2.获取表单数据
`document.getElementById().value`

3.给标签内赋值
`document.getElementById().innerHTML`


###task1
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

6.数字转中文
`test.toLocaleString('zh-Hans-CN-u-nu-hanidec')`


###task3
>学习了字符串的处理

1.获取一个指定标签下的指定所有列表
>`var strong = document.querySelectorAll("#source li");`
这段代码就是用来获取id为“#source”下所有的li。

2.转换获取到的li格式
>获取到的li格式都是
`<li>北京空气质量：<b>90</b></li>`
可以使用innerText来将它转换为字符串格式`"北京空气质量：90"`

3.处理字符串，将其分为key，value存入数组
>使用split函数，将“：”前后的字符串分离，存入数组
`demo[i] = strong[i].innerText.split("：");`
得到的数组格式是`Array [ "上海空气质量", "70" ]`

4.将数组中的数字字符串转换为数字，并替换到原数组中
>通过parseInt()函数转换
`data[i][1] = parseInt(demo[i][1]);`
得到的数组格式是`Array [ "上海空气质量", 70 ]`,得到了指定的数组。

5.排序函数，从小到大
```
function sortAqiData(data) {
  var arr = [];
  //排序函数，从小到大
  function sortArray(a,b){
    return  a[1] - b[1];
  }
  arr = data.sort(sortArray);
  return arr;
}
```

6.将排序后的数值显示到指定的ul标签下
```
function render(data) {
  var test = 0;//设置计数器
  var ul = document.getElementById("resort");

  for (var key of data) {
    var li = document.createElement("li");
    test++;//计数器加一，排名使用
    //数字转中文
    li.innerHTML = "<h4>第"+test.toLocaleString('zh-Hans-CN-u-nu-hanidec')+"名: "+key[0]+":<b>"+key[1]+"</b></h4>";
    ul.appendChild(li); 
  }
}
```

###task4
>学习了DOM对节点的操作

1.左侧加入节点
`parentnode.insertBefore(newnode,parentnode.firstChild)`

2.右侧加入节点
`parentnode.appendChild(newnode)`

3.左侧移除节点
`parentnode.removeChild(parentnode.firstChild)`

4.右侧移除节点
`parentnode.removeChild(parentnode.lastChild)`


#task3
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



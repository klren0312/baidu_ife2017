#task2
>学习了表单验证相关写法,和相关事件

1.相关事件
>1.点击事件 `onclick=""`
2.焦点事件 `onfocus=""`
3.失去焦点事件 `onblus=""`


2.邮箱简单判断
>```
else if(str.indexOf("@",0) == -1){
    	kuang.style.border="5px solid red";
    	tips4.style.color = "red";
    	tips4.innerHTML = "邮箱格式错误！"
    	return false;
    }
```
使用`indexOf"`查找指定字符串，如果要检索的字符串值没有出现，则该方法返回 -1。
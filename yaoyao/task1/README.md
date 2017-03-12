#task1
>学习了表单验证相关写法

1.判断字符长度
>使用charCodeAt()
charCodeAt() 方法可返回指定位置的字符的 Unicode 编码。这个返回值是 0 - 65535 之间的整数。Unicode是除了中文之外的字符。
通过循环判断，若是中文则标识符加二，其他标识符加一。

2.表单按钮按了之后，验证一闪而过
>```
<button   type="submit" onclick="return btnClick()">验证</button>
```
使用`onclick="return btnClick()"`若`btnClick()`函数返回false，则提交按钮无效，不会提交并刷新页面，这样验证信息就能显示了。
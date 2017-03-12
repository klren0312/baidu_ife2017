var btn = document.getElementById('btn');
var form = document.getElementById('myform');
var span = document.getElementById('tips');
var kuang = document.getElementById('b1');
var str = kuang.value;

var len = 0;
function charLengthCheck(){
	let kuang = document.getElementById('b1');
	let str = kuang.value;
	len = 0;
	for (let i = 0;i<str.length;i++) {
		if(str[i].charCodeAt()>0 && str[i].charCodeAt()<65535){
			len++;
		}else{
			len += 2;
		}
	}
}

function btnClick(){
	charLengthCheck();
	span.innerHTML = ""
	if (str == "") {
		kuang.style.border="5px solid red";
		span.style.color = "red";
		span.innerHTML = "姓名不能为空"
		return false;
	}
	else if(len<4||len>16){
		kuang.style.border="5px solid red";
		span.style.color = "red";
		span.innerHTML = "字符长度应该是4-16个字符！"
		return false;		
	}else{
		span.innerHTML = "姓名格式正确！"
		kuang.style.border="5px solid green";
		span.style.color = "green";
		return false;
	}

}
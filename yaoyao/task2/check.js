var tips1 = document.getElementById('tips1');
var tips2 = document.getElementById('tips2');
var tips3 = document.getElementById('tips3');
var tips4 = document.getElementById('tips4');
var tips5 = document.getElementById('tips5');

//获取焦点函数
function nameFocus() {
	tips1.innerHTML = "必填，为4~16位字符";
}

function pwdFocus() {
	tips2.innerHTML = "请输入密码";	
}

function repwdFocus() {
	tips3.innerHTML = "请再次输入密码";	
}

function emailFocus() {
	tips4.innerHTML = "请输入邮箱";	
	 
}

function phoneFocus() {
	tips5.innerHTML = "请输入手机";	
}


//改变检测函数

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

function nameCheck() {
	let kuang = document.getElementById('b1');
    let str = kuang.value;
	charLengthCheck();
	tips1.innerHTML = ""
	if (str == "") {
		kuang.style.border="5px solid red";
		tips1.style.color = "red";
		tips1.innerHTML = "姓名不能为空"
		return false;
	}
	else if(len<4||len>16){
		kuang.style.border="5px solid red";
		tips1.style.color = "red";
		tips1.innerHTML = "字符长度应该是4-16个字符！"
		return false;		
	}else{
		tips1.innerHTML = "姓名格式正确！"
		kuang.style.border="5px solid green";
		tips1.style.color = "green";
		return false;
	}
}

function pwdCheck() {
	let kuang = document.getElementById('b2');
    let str = kuang.value;
    if (str == "") {
    	kuang.style.border="5px solid red";
    	tips2.style.color = "red";
    	tips2.innerHTML = "密码不能为空"
    	return false;
    }else{
		tips2.innerHTML = "密码可用！"
		kuang.style.border="5px solid green";
		tips2.style.color = "green";
		return false;
	}
}


function repwdCheck() {
	let kuang = document.getElementById('b2');
	let rekuang = document.getElementById('b3');
    let str = kuang.value;
    let restr = rekuang.value;

    if (str == "") {
    	rekuang.style.border="5px solid red";
    	tips3.style.color = "red";
    	tips3.innerHTML = "请重新输入密码,不能为空"
    	return false;
    }
    else if(str === restr){
		tips3.innerHTML = "密码一致！"
		rekuang.style.border="5px solid green";
		tips3.style.color = "green";
		return false;
	}else{
		rekuang.style.border="5px solid red";
    	tips3.style.color = "red";
    	tips3.innerHTML = "密码输入不一致"
    	return false;
	}
}

function emailCheck() {
	let kuang = document.getElementById('b4');
	let str = kuang.value;
    if (str == "") {
    	kuang.style.border="5px solid red";
    	tips4.style.color = "red";
    	tips4.innerHTML = "请输入邮箱,不能为空"
    	return false;
    }
    else if(str.indexOf("@",0) == -1){
    	kuang.style.border="5px solid red";
    	tips4.style.color = "red";
    	tips4.innerHTML = "邮箱格式错误！"
    	return false;
    }else{
    	tips4.innerHTML = "邮箱可用！"
    	kuang.style.border="5px solid green";
    	tips4.style.color = "green";
    	return false;
    }	
}

function phoneCheck() {
	let kuang = document.getElementById('b5');
	let str = kuang.value;
    if (str == "") {
    	kuang.style.border="5px solid red";
    	tips5.style.color = "red";
    	tips5.innerHTML = "请输入手机号码,不能为空"
    	return false;
    }
    else if(str.length != 11){
    	kuang.style.border="5px solid red";
    	tips5.style.color = "red";
    	tips5.innerHTML = "手机号码格式错误！"
    	return false;
    }else{
    	tips5.innerHTML = "手机号码可用！"
    	kuang.style.border="5px solid green";
    	tips5.style.color = "green";
    	return false;
    }		
}

function btnClick(){
	let kuang1 = document.getElementById('b1');
	let kuang2 = document.getElementById('b2');
	let kuang3 = document.getElementById('b3');
	let kuang4 = document.getElementById('b4');
	let kuang5 = document.getElementById('b5');

	if (kuang1.value == ""||kuang2.value == ""||kuang3.value == ""||kuang4.value == ""||kuang5.value == "") {
		alert("表单不能为空！");
	}

}
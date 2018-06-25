
function signup(){
	var signupwarning1=document.getElementById("signupwarning1");
	var signupwarning2=document.getElementById("signupwarning2");
	var signupwarning3=document.getElementById("signupwarning3");
	var sui1=document.getElementById("sui1");
	var sui2=document.getElementById("sui2");
	var sui3=document.getElementById("sui3");
	
	if(sui1.value==""){
		sui1.classList.add("warninginput");
	signupwarning1.textContent = "This field can't be empty.";
	signupwarning2.textContent = "";
	signupwarning3.textContent = "";	
	}
	else if( (sui1.value.indexOf("@")<1) || (sui1.value.indexOf(".")<3)){
		sui1.classList.add("warninginput");
		signupwarning1.textContent = "Enter a valid email id.";
		signupwarning2.textContent = "";
		signupwarning3.textContent = "";
	}
	else if(sui2.value==""){
		sui1.classList.remove("warninginput");
		sui2.classList.add("warninginput");
	signupwarning1.textContent = "";
	signupwarning2.textContent = "Enter a Password";
	signupwarning3.textContent = "";	
	}
	else if(sui3.value==""){
		sui2.classList.remove("warninginput");
		sui3.classList.add("warninginput");
	signupwarning1.textContent = "";
	signupwarning2.textContent = "";
	signupwarning3.textContent = "Enter the password.";	
	}
	else if(sui2.value!=sui3.value){
		sui3.classList.add("warninginput");
		signupwarning1.textContent = ""
		signupwarning2.textContent = ""
		signupwarning3.textContent ="Password does not match."
	}
	else{
		sui3.classList.remove("warninginput");
		signupwarning1.textContent = ""
		signupwarning2.textContent = ""
		signupwarning3.textContent = ""
		window.alert("Sign Up completed");
	}
}

function signin(){
	var signinwarning1=document.getElementById("signinwarning1");
	var signinwarning2=document.getElementById("signinwarning2");
	var sii1=document.getElementById("sii1");
	var sii2=document.getElementById("sii2");
	if(sii1.value==""){
	sii1.classList.add("warninginput");
	signinwarning1.textContent = "This field can't be empty.";
	signinwarning2.textContent = "";

	}
	else if( (sii1.value.indexOf("@")<1) || (sii1.value.indexOf(".")<3)){
		sii1.classList.add("warninginput");
		signinwarning1.textContent = "Enter a valid email id.";
		signinwarning2.textContent = "";
	}
	else if(sii2.value==""){
	sii1.classList.remove("warninginput");
	sii2.classList.add("warninginput");
	signinwarning1.textContent = "";
	signinwarning2.textContent = "Enter password";	
	}else if(sii2.value.length<8){

	}
	else{
		sii2.classList.remove("warninginput");
		signinwarning1.textContent = ""
		signinwarning2.textContent = ""
		window.alert("Sign In completed");
	}
}

function submitbtn(){
	var checked;
	for(var i=1;i<6;i++){
		checked = false;
		for(var j=1;j<5;j++){
			checked = document.getElementById("mcq"+i+"."+j).checked;
			if(checked){
				break;
			}
		}
		if(!checked){
			document.querySelector("#submitlink").setAttribute("href","#MCQs");
			if(i>1){
				for(var x=1;x<i;x++){
					document.getElementById("mcq"+x).textContent="";
				}
			}
			
			document.getElementById("mcq"+i).textContent="Select an option.";
			window.alert("No answer selected for MCQ no. "+i);
			document.getElementById("mcqq"+i).classList.add("mcqq");
			break;
		}
	}
	if(checked){
		for(var x=1;x<6;x++){
			document.getElementById("mcq"+x).textContent="";
		}
		document.querySelector("#submitlink").removeAttribute("href");
		window.alert("Form Submitted");
	}
}


function clickvalidate(param){
	param.onblur = function(){
		switch(param.getAttribute("id")){
			
			case "sui1":
				var signupwarning1=document.getElementById("signupwarning1");
				if(param.value==""){
				param.classList.add("warninginput");
				signupwarning1.textContent = "This field can't be empty.";	
				}
				else if( (param.value.indexOf("@")<1) || (param.value.indexOf(".")<3)){
					signupwarning1.textContent = "Enter a valid email id.";
					param.classList.add("warninginput");
				}
				else{
					param.classList.remove("warninginput");
					signupwarning1.textContent = "";
				}
			break;

			case "sui2":
				var signupwarning2=document.getElementById("signupwarning2");
				if(param.value==""){
					param.classList.add("warninginput");
				signupwarning2.textContent = "This field can't be empty.";	
				}
				if(param.value.length<8){
					param.classList.add("warninginput");
					signupwarning2.textContent = "password must be 8 characters long.";
				}
				else{
					param.classList.remove("warninginput");
					signupwarning2.textContent = "";
				}

			break;	

			case "sui3":
				var sui2=document.getElementById("sui2");
				var sui3=document.getElementById("sui3");
				var signupwarning3=document.getElementById("signupwarning3");
				if(sui3.value==""){
					param.classList.add("warninginput");
					signupwarning3.textContent = "Enter the password."
				}
				else if(sui2.value!=sui3.value){
					param.classList.add("warninginput");
					signupwarning3.textContent ="Password does not match.";
				}
				else{
					param.classList.remove("warninginput");
					signupwarning3.textContent="";
				}
			break;


			case "sii1":
				var signinwarning1=document.getElementById("signinwarning1");
				if(param.value==""){
					param.classList.add("warninginput");
					signinwarning1.textContent = "This field can't be empty.";	
				}
				else if( (param.value.indexOf("@")<1) || (param.value.indexOf(".")<3)){
					param.classList.add("warninginput");
					signinwarning1.textContent = "Enter a valid email id.";
				}
				else{
					param.classList.remove("warninginput");
					signinwarning1.textContent = "";
				}
			break;

			case "sii2":
				var signinwarning2=document.getElementById("signinwarning2");
				if(param.value==""){
					param.classList.add("warninginput");
				signinwarning2.textContent = "This field can't be empty.";	
				}
				if(param.value.length<8){
					param.classList.add("warninginput");
					signinwarning2.textContent = "password must be 8 characters long.";
				}
				else{
					param.classList.remove("warninginput");
					signinwarning2.textContent = "";
				}
			break;	

			case "nameinput":
				var namewarning=document.getElementById("namewarning");
				if (param.value=="") {
					param.classList.add("warninginput");
					namewarning.textContent="Enter a name.";
				}
				else{
					param.classList.remove("warninginput");
					namewarning.textContent="";	
				}
			break;

			case "rollinput":
				var rollwarning=document.getElementById("rollwarning");
				if (param.value=="") {
					param.classList.add("warninginput");
					rollwarning.textContent="Enter roll number";
				}
				else{
					param.classList.remove("warninginput");
					rollwarning.textContent="";	
				}
			break;

			case "branchinput":
				var branchwarning=document.getElementById("branchwarning");
				if (param.value=="") {
					param.classList.add("warninginput");
					branchwarning.textContent="Enter branch.";
				}
				else{
					param.classList.remove("warninginput");
					branchwarning.textContent="";	
				}
			break;

			case "seminput":
				var semwarning=document.getElementById("semwarning");
				if (param.value=="") {
					param.classList.add("warninginput");
					semwarning.textContent="Enter semester.";
				}
				else{
					param.classList.remove("warninginput");
					semwarning.textContent="";	
				}
			break;

			case "mobinput":
				var mobwarning=document.getElementById("mobwarning");
				
				if ( ((param.value).length!=10) ) {
					param.classList.add("warninginput");
					mobwarning.textContent="Not a valid mobile no.";
				}
				else{
					param.classList.remove("warninginput");
					mobwarning.textContent="";	
				}
			break;
		}		
	}
}
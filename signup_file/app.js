const checkPassword = (password) =>{
	var number = /([0-9])/;
	var alphabets = /([a-zA-Z])/;
	var special_characters = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/;

	if(password.length <= 8){
		$("#password-strength").removeClass()
		$("#password-strength").addClass("weak-password")
		$("#password-strength").html("Weak")
	}else if(password.match(number) && password.match(alphabets) && password.match(special_characters)){
		$("#password-strength").removeClass()
		$("#password-strength").addClass("strong-password")
		$("#password-strength").html("Strong")
	}else{
		$("#password-strength").removeClass()
		$("#password-strength").addClass("medium-password")
		$("#password-strength").html("Medium")
	}
};

$("#password").keyup(function(){
	checkPassword(this.value)
});


$("#showpass").click(function(){
	
	if($("#password").get(0).type == "password"){
		$("#password").get(0).type = 'text'
		$("#password").css("opacity","1") 
	}else{
		$("#password").get(0).type = 'password'
		$("#password").css("opacity","0.4") 
	}
	$("#showpass i").toggleClass("fa-eye-slash")
	$("#showpass i").toggleClass("fa-eye");
})


$( "#signupform" ).validate({
	rules: {
	//   email:"required",	
	//   password: "required",
	  re_password: {
		equalTo: "#password"
	  }
	},	 
	 messages: {
		re_password: {
			equalTo: "Password tidak sama"
		  }
	}
  });



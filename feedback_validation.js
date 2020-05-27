"use strict";


/*javascript for login panel */

function login()
{
	var e=document.getElementById("email").value;
	var p=document.getElementById("password").value;
	
	
	if(e=="admin" && p=="admin")
	{
		window.location="file:///E:/PART-3/index.html";
		alert("Login-Sucessful");
		
	}
	else
	{
		
		document.getElementById("email").value="";
		document.getElementById("password").value="";
		alert("Login failed");
		
	}
}


/*javascript to validate first and last name  */
function VN()
{
	
	 var x = document.getElementById("fname").value;
	 
		
		if(!x.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/))
			{
				
				document.getElementById("f").innerHTML="<img src='Images/wrong.png' width='25px' height='20px'/>"+"First and Last Name Required";
				
			}
			if(x.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/))
			{
				
				document.getElementById("f").innerHTML="<img src='Images/right.png' width='25px' height='20px'  />"+"VALID";
			}
			if(x==0)
			{
				
				document.getElementById("f").innerHTML="<img src='Images/wrong.png' width='25px' height='20px'  />"+"First and Last Name Required";
			}

}

	
	


/*javascript to validate feedback */


function validateMessage() {
	
  var message = document.getElementById('contact-message').value;
  var required = 30;
  var left = required - message.length;
  var extra=message.length-30;
  if (left > 0) {
	  document.getElementById("frm").innerHTML=left+"Character needed";
     }

  if(left==0)
  {
	  document.getElementById("frm").innerHTML="VALID";
  }
if(message.length==0)
{
	document.getElementById("frm").innerHTML="<img src='Images/wrong.png' width='25px' height='20px' />";
}
}


/*javascript to validate Phone number */

function V()
 {
	
  var phone = document.getElementById("phn").value;

    if(phone.length == 0) {
      
      document.getElementById("ph").innerHTML="<img src='Images/wrong.png' width='25px' height='20px'  />"+"Invalid Data";
    }
    if(phone.length != 10) {
		
      document.getElementById("ph").innerHTML="<img src='Images/wrong.png' width='25px' height='20px'  />"+"Invalid Data";
	  
    }

    if(phone.match(/^[0-9]{10}$/))
		{
		
      document.getElementById("ph").innerHTML="<img src='Images/right.png' width='25px' height='20px'  />"+"VALID";
    }
	

 }

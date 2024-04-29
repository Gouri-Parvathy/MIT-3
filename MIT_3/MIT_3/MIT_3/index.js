var firstname = document.getElementById("first").value
var lastname = document.getElementById("last").value
var email = document.getElementById("mail").value
var password =document.getElementById("pass").value
function loginpage() {
   if(firstname.length>0){
    document.getElementById("one").innerHTML="username" + first
   }
   else if(lastname.length>0){
    alert(Username-invalid);
    return false
   }
   else if(email.length>0){
    alert(email-invalid);
    return false
   }
   else if( password.length>5||password.length<17){
   alert(password-invalid)
return false
}
alert(sign in successfully)
}
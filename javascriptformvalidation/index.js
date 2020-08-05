function seterror(id,error){
    element =document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML=error;
}
function clearerror(){
    var  errors=document.getElementsByClassName('formerror');
      for(let item of errors){
         item.innerHTML="";
      }
}
  function validateForm(){
        var returnval=true;
         clearerror();
        var name=document.forms["myForm"]["fname"].value;
        if(name.length<5){
           seterror("fn","*the length is too short!!!");
           returnval= false;
        }
        var phone=document.forms["myForm"]["no"].value;
        if(phone.length!=10){
           seterror("num","*phone no should be of 10 digit!!");
           returnval= false;
        }

        var email=document.forms["myForm"]["email"].value;
        if(email.length>15){
            seterror("email","*the length is too long!!!");
            returnval= false;
         }
        
         var pass=document.forms["myForm"]["pass"].value;
         if(pass.length<6){
            seterror("pass","*password is less than 6 char!!");
            returnval= false;
         }
         var confpass=document.forms["myForm"]["cpass"].value;
         if(confpass!=pass){
            seterror("confpass","*password is missmatched!!");
            returnval= false;
         }
        return returnval;
     }
   //   function test(){
   //    name = document.getElementById('fname').value ;
   //    if(name.length<5){
   //       console.log("err")
   //    }
      
   // }
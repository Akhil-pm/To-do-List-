$(document).ready(function(){

 $("#btn").click(function(){                    //On clicking login button, validate() is called in which redirect() is passed as argument
    validate(redirect);
 })
    function validate(callbackfunc)
    {
    
        let uname= $("#uname")
        let pwd= $("#pwd")
      console.log(uname.val())
      console.log(pwd.val())


      if(uname.val()=="" || pwd.val()=="")
      {
       alert("All fields are required");
      }
    
   else if(uname.val()==="admin" && pwd.val()==="12345")
        {
        callbackfunc();
        console.log("succss")
        }
    else
    {
        alert("Enter correct username & Password combination");
        console.log("incorrect")
    }
       
    }


    function redirect()
    {
        $("#log").submit();                             //submit() submits the form,only then page is redirected
    }
    


})


















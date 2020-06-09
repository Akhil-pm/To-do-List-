$(document).ready(function(){
    $("#btn").click(()=>{
          $.get("https://jsonplaceholder.typicode.com/todos",(response,status,xhr)=>{
   
             if(status=="success") 
             {
                 console.log("success")
               var output = "";
               for (var i = 0; i < response.length; i++) {
                   output += "<tr><td>"+ response[i].id + "</td><td>" + response[i].title + "</td><td>" ;

                   if(response[i].completed==true) 
                   {
                      output+="<input type='checkbox' checked disabled></td></tr>";  
                   }
                   else
                   {
                       output+="<input type='checkbox' class='checkBox' onclick='check()'></td></tr>";
                   } 

                 }
               $("#list").css("visibility","visible")
               $("#content").append(output);
             }               
             if(status=="error")   console.log("error: " + xhr.statusText);
           })
       })
   
   })




 
   function check()
   {
    var count=0;
    var list= document.getElementsByClassName("checkBox");
    for(let i=0;i<list.length;i++)
    {
        if(list[i].checked)
        {
            console.log(list[i]);
            count +=1;
        }
    }
       var promise = new Promise(function(resolve,reject){        

          if(count==5){

            resolve("Congrats!!! 5 tasks have been successfully completed");
            console.log("completed");

            // for(let i=0;i<list.length;i++)
            // {
            //     list[i].disabled=true;
            // }

          }
          
       else{
        reject("Count is not 5");
       }

      });
   
      promise
      .then(function(s){
          alert(s)
      })
      .catch(function(e){
          console.log(e)
      })
   
       
   }

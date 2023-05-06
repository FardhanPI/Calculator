var result=null,number=null,percentage=null;

function allbutton(text) {
 

   if(text!="%"){
      document.getElementById("inputbox").value+=text;
   }
   if(text=='%'){
      number=inputbox.value;
      inputbox.value="";
    
      
   }
    
  }
  
  function backbutton(){
   
   let text =document.getElementById("inputbox").value;
   let modifiedText = text.substring(0, text.length - 1);
   inputbox.value = modifiedText;
  }
  function clears(){
   
   document.getElementById("inputbox").value="";
  }

  function equalclick(){

   
  if(!inputbox.value.includes("*")&&!inputbox.value.includes("+")&&!inputbox.value.includes("-")&&!inputbox.value.includes("/")){
   percentage=inputbox.value;
   result= (percentage*number)/100;
   inputbox.value=result;
   
   result=null;
   number=null;
   percentage=null;
   
  }else{
      document.getElementById("inputbox").value=eval(document.getElementById("inputbox").value);
  }

  }
   var flag=false;
  function posnegbutton(){
   if(flag==false){
      flag=true;
      inputbox.value="-"+inputbox.value;
   }else if(flag==true){
      flag=false;
      inputbox.value = inputbox.value.replace("-", "");
   
  }
}



let button=document.createElement("button");
button.style.backgroundColor="lightgreen";

button.innerHTML="<i>click for dark mode or white</>";
let mainBody=document.querySelector("body")
mainBody.prepend(button);
button.onclick=()=>{
      mainBody.style.backgroundColor="black"
      button.style.color="black";
     
    
}
button.ondblclick=()=>{
    mainBody.style.backgroundColor="white";
    button.style.color="black";
    
}
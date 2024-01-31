let main = document.querySelector(".main");
let cross = document.querySelector(".cross");
let cross2 = document.querySelector(".cross-2");
let sidebar = document.querySelector(".side-bar");


// cross.addEventListener("onclick",()=>{
//     sidebar.classList.add("hamid")
// });


// cross2.addEventListener("onclick",fun())

function fun2 (){
    sidebar.classList.remove("hamid")
    sidebar.style.transition="all 0.5s linear"
    cross.style.display="none"
}


function fun (){
    sidebar.classList.add("hamid")
    cross.style.display="block"
}







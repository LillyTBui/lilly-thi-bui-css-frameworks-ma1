const btn = document.querySelector(".navbar-toggler");
const navbar = document.querySelector(".navbar");

btn.onclick = ()=>{
    if(btn.ariaExpanded == "false"){
        navbar.style.boxShadow = "0px 3px 10px rgb(0 0 0/0.1)";
    }else{
        navbar.style.boxShadow = "none";
    }
}



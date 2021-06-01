const navActive = document.querySelector(".nav-active"),
      navUl = document.querySelector(".nav-ul");
navActive.onclick = function(){
    navUl.classList.toggle("active");
    navUl.classList.add("show");
}

navUl.addEventListener("click", (event) =>{

    if(event.target.classList.contains("bul")){
        console.log(event.target);
        navUl.querySelector(".active").classList.remove("active");
        event.target.classList.add("active");
    }
})
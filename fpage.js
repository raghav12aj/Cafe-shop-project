let cartbtn=document.getElementById("icon3")
let cartbtncon=document.getElementById("popupcontainer")
let cartcross=document.getElementById("cartcrossbtn")
cartbtn.addEventListener("click",run=()=>{
    cartbtncon.classList.add("opencart")
})
cartcross.addEventListener("click",run=()=>{
    cartbtncon.classList.remove("opencart")
})


let searchbtn=document.getElementById("icon2")
let overlaybtn=document.getElementById("modaloverlayp")
let popupbtn=document.getElementById("searchpopupcontainer")

searchbtn.addEventListener("click",run=()=>{
    popupbtn.classList.add("openedbar")
    overlaybtn.classList.add("openedbar")
})
overlaybtn.addEventListener("click",run=()=>{
    popupbtn.classList.remove("openedbar")
    overlaybtn.classList.remove("openedbar")

})
let loginbtn=document.getElementById("icon1img")
let logincon=document.getElementById("loginformcontainer")
let logincrossbtn=document.getElementById("logincross")
loginbtn.addEventListener("click",run=()=>{
    logincon.classList.add("openedlogin")
})
logincrossbtn.addEventListener("click",run=()=>{
    logincon.classList.remove("openedlogin")
})
let pr=document.getElementById("popup")
let modal=document.getElementById("modal1")
let overlay=document.getElementById("modaloverlay")
let cross=document.querySelectorAll(".crossicon")
pr.addEventListener("click",run=()=>{
    modal.style.display="flex"
    overlay.style.display="block"

})
overlay.addEventListener("click",run=()=>{
    modal.style.display="none"
    overlay.style.display="none"

})
cross[0].addEventListener("click",run=()=>{
    modal.style.display="none"
    overlay.style.display="none"
})


let pr2=document.getElementById("popup2")
let modal2=document.getElementById("modal2")
pr2.addEventListener("click",run=()=>{
    modal2.style.display="flex"
    overlay.style.display="block"
})
overlay.addEventListener("click",run=()=>{
    modal2.style.display="none"
    overlay.style.display="none"
})
cross[1].addEventListener("click",run=()=>{
    modal2.style.display="none"
    overlay.style.display="none"
})


let pr3=document.getElementById("popup3")
let modal3=document.getElementById("modal3")
pr3.addEventListener("click",run=()=>{
    modal3.style.display="flex"
    overlay.style.display="block"
})
overlay.addEventListener("click",run=()=>{
    modal3.style.display="none"
    overlay.style.display="none"
})
cross[2].addEventListener("click",run=()=>{
    modal3.style.display="none"
    overlay.style.display="none"
})


let pr4=document.getElementById("popup4")
let modal4=document.getElementById("modal4")
pr4.addEventListener("click",run=()=>{
    modal4.style.display="flex"
    overlay.style.display="block"
})
overlay.addEventListener("click",run=()=>{
    modal4.style.display="none"
    overlay.style.display="none"
})
cross[3].addEventListener("click",run=()=>{
    modal4.style.display="none"
    overlay.style.display="none"
})

let pr5=document.getElementById("popup5")
let modal5=document.getElementById("modal5")
pr5.addEventListener("click",run=()=>{
    modal5.style.display="flex"
    overlay.style.display="block"
})
overlay.addEventListener("click",run=()=>{
    modal5.style.display="none"
    overlay.style.display="none"
})
cross[4].addEventListener("click",run=()=>{
    modal5.style.display="none"
    overlay.style.display="none"
})


let pr6=document.getElementById("popup6")
let modal6=document.getElementById("modal6")
pr6.addEventListener("click",run=()=>{
    modal6.style.display="flex"
    overlay.style.display="block"
})
overlay.addEventListener("click",run=()=>{
    modal6.style.display="none"
    overlay.style.display="none"
})
cross[5].addEventListener("click",run=()=>{
    modal6.style.display="none"
    overlay.style.display="none"
})


let pr7=document.getElementById("popup7")
let modal7=document.getElementById("modal7")
pr7.addEventListener("click",run=()=>{
    modal7.style.display="flex"
    overlay.style.display="block"
})
overlay.addEventListener("click",run=()=>{
    modal7.style.display="none"
    overlay.style.display="none"
})
cross[6].addEventListener("click",run=()=>{
    modal7.style.display="none"
    overlay.style.display="none"
})


let pr8=document.getElementById("popup8")
let modal8=document.getElementById("modal8")
pr8.addEventListener("click",run=()=>{
    modal8.style.display="flex"
    overlay.style.display="block"
})
overlay.addEventListener("click",run=()=>{
    modal8.style.display="none"
    overlay.style.display="none"
})
cross[7].addEventListener("click",run=()=>{
    modal8.style.display="none"
    overlay.style.display="none"
})

let pr9=document.getElementById("popup9")
let modal9=document.getElementById("modal9")
pr9.addEventListener("click",run=()=>{
    modal9.style.display="flex"
    overlay.style.display="block"
})
overlay.addEventListener("click",run=()=>{
    modal9.style.display="none"
    overlay.style.display="none"
})
cross[8].addEventListener("click",run=()=>{
    modal9.style.display="none"
    overlay.style.display="none"
})

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
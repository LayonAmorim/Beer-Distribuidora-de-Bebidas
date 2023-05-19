var menuresponse = document.getElementById("menu-response")
var buttonresponse = document.getElementById("button-response")
var header = document.getElementsByTagName("header")[0]
var fecha = document.getElementById("fecha-menu")

buttonresponse.addEventListener("click", menuAbre)
fecha.addEventListener("click", menuFecha)

function menuAbre(){
    header.style.display = "flex"
    header.style.flexWrap = "nowrap"
    header.style.flexFlow = "column"
    header.style.justifyContent = "center"
    menuresponse.style.display = "flex"
    buttonresponse.style.display = "none"
}

function menuFecha(){
    header.style.display = "flex"
    header.style.flexWrap = "nowrap"
    header.style.flexFlow = "row"
    header.style.flexDirection = "column"
    menuresponse.style.display = "none"
    buttonresponse.style.display = "flex"
}


var box = document.querySelector("div#area")

box.addEventListener('click', changeText)
box.addEventListener('mouseenter', colourPink)
box.addEventListener("mouseout", colourGreen)
box.addEventListener('mousedown', colourWhite)
box.addEventListener('mouseup', colourPink)

function changeText(){   
    box.innerHTML = isClicked() ? "interaja... " : "Boa"
}

function isClicked(){
    return box.innerHTML == "Boa"
}

function setColor(value){
    box.style.backgroundColor = value
}

function colourPink(){
    setColor("#ffbddd")
    box.style.color = "#ffffff"
}

function colourGreen(){
    setColor("#bde783")
}

function colourWhite(){
    setColor("#ffffff")
    box.style.color = "#053360"
}

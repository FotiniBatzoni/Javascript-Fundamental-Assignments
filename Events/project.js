document.getElementById("b1").addEventListener("click", btnClicked)

function btnClicked(){
    document.getElementById("p1").innerHTML = "Button 1 was clicked"
    alert("Button 1 was clicked")
}


document.getElementById("i1").addEventListener("keydown", numberOfChar)

function typedCharacters () {
  let typedCharacters = document.getElementById("i1").value.length +1;
 return typedCharacters
}

function numberOfChar () {
 document.getElementById("c").innerHTML = `Characters typed ${typedCharacters()}`
}

document.getElementById("b2").addEventListener("click", removeParagraph);

function removeParagraph(){
   let p3 = document.getElementById("p3")
   p3.remove()
}

document.getElementById("i2").addEventListener("keydown" , changeFontSize )

function changeFontSize () {
    document.getElementById("p4").style.fontSize = "40px"
}
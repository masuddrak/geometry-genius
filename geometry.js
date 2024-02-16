
function getTriangle() {
    const base = getInput("triangle_base")
    const height =getInput("triangle_height")
    const result=0.5*base*height
    calculate(result,"triangle_area")
}

function getInput(inputText) {
    const inputBase = document.getElementById(inputText)
    const baseValue=parseFloat(inputBase.value)
    return baseValue
}
function calculate(result,element){
    const triangleArea = document.getElementById(element)
    triangleArea.innerText = result
}
console.log(document.getElementById("button").value)
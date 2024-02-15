
function getTriangle() {
    const triangleBase = document.getElementById("triangle_base")
    const triangleBaseText = parseFloat(triangleBase.value)

    const triangleHeight = document.getElementById("triangle_height")
    const triangleHeightText = parseFloat(triangleHeight.value)
    
    const triangleArea = document.getElementById("triangle_area")
    triangleArea.innerText = 0.5 * triangleBaseText * triangleHeightText
}
function pentagon(){
    const base = getInput("pentagon_base")
    const height =getInput("pentagon_height")
    const result=0.5*base*height
    calculate(result,"pentagon_area")
}
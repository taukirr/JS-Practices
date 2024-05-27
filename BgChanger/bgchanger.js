const randomColour = function(){
    const hex = '0123456789ABCDEF'
    let color = '#'
    for(let i=0; i<6; i++){
        color += hex[Math.floor(Math.random() * 10)]
    }
    return color
}

let intId

const startChange = function colorChang () {
    if(!intId){
        intId = setInterval(setInt, 1000)
    }
        function setInt(){
        document.body.style.backgroundColor = randomColour()
    }
}

const stopChange = function stopChangeColor () {
    clearInterval(intId)
    intId = null
}

const chngColor = document.getElementById('start').addEventListener('click',startChange)
const StopColor = document.getElementById('stop').addEventListener('click',stopChange)


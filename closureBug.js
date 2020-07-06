console.log("Closure Bug Example")

function makeArrayFunction(){
    const arr = []
    for (var i = 0; i<5;i++){
        arr.push( function(){console.log(i)} )
        //console.log("Inside Arr Push, value of i is: ",i)      
    }
    //console.log("Inside MakeArrayFunction value of i is: ", i)      
    return arr
}
const functionArr = makeArrayFunction()
functionArr[4]()
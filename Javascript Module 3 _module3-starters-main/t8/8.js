const ele=document.querySelector("#operation")
const output=document.querySelector("#result")

console.log(ele.value)

let result=0
function calculate(){
const input1=Number(document.querySelector("#num1").value)
const input2=Number(document.querySelector("#num2").value)
    if(ele.value==="add"){
        result=input1+input2
    }
    else if(ele.value==="sub"){
        result=input1-input2
    }
    else if(ele.value==="multi"){
        result=input1*input2
    }
    else if(ele.value==="div"){
        result=input1/input2
    }
    else {
        result="enter values"
    }
    output.innerText=result


    }
    const button1=document.querySelector("button")
button1.addEventListener("click",()=>{
    calculate()
    console.log(ele.value)
})
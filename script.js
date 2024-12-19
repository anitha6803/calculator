function a(){
    let num1=document.getElementById('first').value
    let num2=document.getElementById('second').value
    num1=parseInt(num1)
    num2=parseInt(num2)
    let h2 = document.getElementById("result")
    res=num1+num2
    h2.innerHTML="Result:"+res
}
function b(){
    let num1=document.getElementById('first').value
    let num2=document.getElementById('second').value
    num1=parseInt(num1)
    num2=parseInt(num2)
    let h2 =document.getElementById("result")
    res=num1-num2
    h2.innerHTML="Result:"+res
}
function c(){
    let num1=document.getElementById('first').value
    let num2=document.getElementById('second').value
    num1=parseInt(num1)
    num2=parseInt(num2)
    let h2 =document.getElementById("result")
    res=num1*num2 
    h2.innerHTML="Result:"+res
}
function d(){
    let num1=document.getElementById('first').value
    let num2=document.getElementById('second').value
    num1=parseInt(num1)
    num2=parseInt(num2)
    let h2=document.getElementById('result')
    res=num1/num2
    h2.innerHTML="Result:"+res
}
function e(){
    let num1=document.getElementById('first').value
    let num2=document.getElementById('second').value
    num1=parseInt(num1)
    num2=parseInt(num2)
    let h2=document.getElementById('result')
    res=num1**num2
    h2.innerHTML="Result:"+res
}
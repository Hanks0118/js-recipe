const mangoJuice = document.getElementById("button1")
const osiruko = document.getElementById("button2")
const input = document.getElementById("input")
const button =document.getElementById("tounyuu")
const change=document.getElementById("button3")

const number = 100
let money = 0

mangoJuice.onclick=function(){
if (money>=100){
   console.log("マンゴージュースが買えました")

   money=money-number
  
}



}
osiruko.onclick=function(){
if (money>=120){
  console.log("おしるこが買えました")
money=money-120
}
}

button.onclick=function(){
money=money+Number(input.value)
console.log(money+"円入っています")

}
change.onclick=function(){
 
  console.log(money+"円のお釣りです")
  money=0
}
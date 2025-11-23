'use strict';
const names = ['John', 'Paul', 'Jones'];
const list1=document.querySelector("#target")
console.log(list1)
for(let i=0;i<3;i++){
    let item=document.createElement("li")
    item.textContent=names[i]
    list1.appendChild(item)

}
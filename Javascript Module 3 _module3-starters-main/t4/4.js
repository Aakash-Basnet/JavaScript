'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];
const item=document.querySelector("#target")
for (let i=0;i<students.length;i++){
    let inneritems=document.createElement("option")
    inneritems.value=students[i].id
    inneritems.textContent=students[i].name
    item.appendChild(inneritems)
}
   const edit1=document.querySelector("#target")
    li1=document.createElement("li")
   li1.textContent="first item"
    li2=document.createElement("li")
    li2.textContent="second item"
 li3=document.createElement("li")
   li3.textContent="third item"

    edit1.appendChild( li1)
   edit1.appendChild( li2)
   edit1.appendChild( li3)

   const item2=document.querySelectorAll("#target li")[1]
  item2.className="my-item"




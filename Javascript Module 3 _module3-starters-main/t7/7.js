const para=document.querySelector("#trigger")
const image=document.querySelector("img")
const def=image.src


para.addEventListener("mouseenter",()=>{
image.src="img/picB.jpg"
})
para.addEventListener("mouseleave",()=>{
    image.src=def
})
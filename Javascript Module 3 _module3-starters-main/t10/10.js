const form=document.querySelector("#source")
const output=document.querySelector("#target")

form.addEventListener("submit",event=>{

    event.preventDefault();
formData()
   attributeData()

})
//using form data
function formData(){
    const data=new FormData(form);
const firstName=data.get("firstname")
const lastName=data.get("lastname")
     output.innerText=`From using form data: Your name is ${firstName} ${lastName}  `
}


//using attributes

function attributeData(){
     const firstnAme=form.querySelector('input[name="firstname"]').value
const lastnAme=form.querySelector('input[name="lastname"]').value
     output.innerText=`From using attributes: Your name is ${firstnAme} ${lastnAme}  `
}

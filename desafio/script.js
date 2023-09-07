const URL = 'https://jsonplaceholder.typicode.com/users'

let name = document.getElementById("name");
let lastName = document.getElementById("lastName");
let birthDate = document.getElementById("date");
let btn = document.getElementById("submit");


async function postInformation(URL){

    const information = {
        nombre: name.value,
        apellido: lastName.value,
        nacimiento: birthDate.value
    }

    const method = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(information),
    };


    let response = await fetch(URL, method)
    if (response.ok) {
        console.log("Estado: ", response.status)
        console.log("Nombre: ", await response.json())
    } else {
        alert("Estado: ", response.status)
    }
}


btn.addEventListener("click", (event)=>{
    event.preventDefault()
    postInformation(URL)
})
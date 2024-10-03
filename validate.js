const form = document.getElementById('form')

const cerrar = document.getElementById('cerrar')

cerrar.addEventListener('click', () => {
    const nombre = document.querySelector('input[name="nombre"]')
    const apellidos = document.querySelector('input[name="apellidos"]')
    const edad = document.querySelector('input[name="edad"]')

    nombre.value = ""
    nombre.focus()
    apellidos.value = ""
    edad.value = ""
    const p1 = document.getElementById("p1")
    const p2 = document.getElementById("p2")
    const p3 = document.getElementById("p3")

    p1.innerText = ''
    p2.innerText = ''
    p3.innerText = ''

})

form.addEventListener('submit', (evt) => {
    evt.preventDefault()

    const nombre = document.querySelector('input[name="nombre"]').value
    const apellidos = document.querySelector('input[name="apellidos"]').value
    const edad = document.querySelector('input[name="edad"]').value
    
    if (nombre === '' && apellidos === ''){
        alert('Campos vacios')

        return
    }
    
    console.log("nOMBRE ", nombre, "ap ",apellidos)

    const p1 = document.getElementById("p1")
    const p2 = document.getElementById("p2")
    const p3 = document.getElementById("p3")
    p1.innerText = nombre
    p2.innerText = apellidos
    p3.innerText = edad
    
})
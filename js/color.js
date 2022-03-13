const color = document.querySelector("#color")
const salida = document.querySelector("#salida");

//evento
color.addEventListener("input", () => {
    const valor = color.value;
    console.log(valor);

    // coloca el codigo del color que se va seleccionando
    salida.innerHTML = valor;
    salida.style.background = valor;
})
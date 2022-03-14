
color.value = storage;



//localStorage.setItem("colorValue", "#ffffff")
//evento
console.log(storage);



//Realizo la llamada a la funcion para que quede grabado el ultimo valor seleccionado
setColor();

//Eventos
color.addEventListener("input", setColor);
color.addEventListener("change", () => {
    saveColor(color.value)
});
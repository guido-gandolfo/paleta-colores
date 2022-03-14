const setColor = () => {
    const value = color.value;
    
    // coloca el codigo del color que se va seleccionando
    salida.innerHTML = value;
    salida.style.background = value;

};
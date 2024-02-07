const boton = document.querySelector('#button-color');
const parrafo = document.querySelector('#color');
console.log(Math.floor(Math.random()));

//Funcion color aleatorio
function colorAleatorio (){
    let digitos= '0123456789ABCDEF';
    let colorHex = '#';
    for (let i=0; i<6; i++){
        let indiceAleatorio = Math.floor(Math.random()*digitos.length);
        colorHex+=digitos[indiceAleatorio];
    }
    return colorHex;
}

//Escuchamos el evento, lo relacionamos con la funcion
boton.addEventListener ('click', (event)=>{
    let colorAleatorioHex = colorAleatorio();
    //actualizar el texto
    color.textContent = colorAleatorioHex; 
    //Actualizamos el color aleatorio
    document.body.style.background = colorAleatorioHex;
});
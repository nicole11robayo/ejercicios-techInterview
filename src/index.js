//importe la función multiplos que esta en otro archivo para ver por consola su funcionalidad
import {multiplos} from '../ejercicio2.js';
//Le agregué al documento en general un listener que escucha el evento de copiar
document.addEventListener("copy", function(event){
    // con clipboardData.setData modifico lo que se coloca en el portapapeles cuando ocurre el evento copy  
    event.clipboardData.setData("text/plain", "no puedes pegar este texto");
    
    // Con esto se evita la acción predeterminada de copia
    event.preventDefault();
}, false);


//función que se va a ejecutar cuando se le de click al botón 
function text() {
    //Llamó al elemento
    const demo= document.getElementById("demo");
    //se le asigna el string al elemento p que ya se creo en el HTML
    demo.innerText = "TEXTO GENERADO!";

    //cree elementos HTML para probar la funcionalidad
    const pruebaTitle= document.createElement('p');
    pruebaTitle.innerText= 'Copia el cualquier parte de texto de esta página e intenta pegarlo aquí:';
    const prueba= document.createElement('textarea');
    
    //usé este método para mostrar en pantalla los elementos que creé 
    demo.insertAdjacentElement('afterend', pruebaTitle);
    pruebaTitle.insertAdjacentElement('afterend', prueba);

}

//Llamó al botón que cree en el HTML
const button= document.getElementById('button');

//Le agregué al botón un listener que escucha el evento click y ejecuta la función text que ya defini antes
//También le agregue la función multiplos que esta en otro archivo para ver en consola la funcionalidad del ejercicio 2  
button.addEventListener('click', ()=>{
    text();
    multiplos(20);
})

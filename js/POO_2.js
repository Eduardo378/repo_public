
/**********************************************************************************************************************/
function capturar(){
    var nombre = document.getElementById("nombre").value;
    var edad = document.getElementById("edad").value
    if(nombre =='' || edad ==''){
        alert("alguno de los dos campos están vacíos");
    }else{
        var test = document.getElementById("nombre").value;
        if(!isNaN(test)){
            alert("No se puede introducir numeros en el campo de Nombre");
            reset();
        }else{
        
        //console.log("capturado");
        function Persona(nombre,edad){
            this.nombre=nombre;
            this.edad=edad;
        }
        var nombreCapturar = document.getElementById("nombre").value;
        var edadCapturar = document.getElementById("edad").value;
        
        
        // se pone el nombre de la variable sin el identificador "var" para crear variables globales
        nuevoSujeto = new Persona(nombreCapturar,edadCapturar);
        agregar();
        reset();
    }
    //creamos funcion reset para eliminar los campos de texto, hacemos llamada de esta funcion en dos ocasiones 
    //evaluación
    function reset(){
        document.getElementById("nombre").value="";
        document.getElementById("edad").value=""; 
        }
    }
}
var baseDatos=[];
function agregar(){
    baseDatos.push(nuevoSujeto);
    document.getElementById("tabla").innerHTML += '<tr class="row"><td>'+nuevoSujeto.nombre+'</td><td>'+nuevoSujeto.edad+'</td></tr>';
}

function limpiarTabla(){
   const $elemento = document.querySelector("#cuerpoTabla");

// El botón solo es para la demostración
const $btnLimpiar = document.querySelector("#btnLimpiar");

// Y en el click, limpiamos
$btnLimpiar.addEventListener("click", () => {
    $elemento.innerHTML = "";
});
}
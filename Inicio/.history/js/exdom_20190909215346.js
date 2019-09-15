
window.addEventListener('load', function(){
    console.log("DOM cargado!");

    var formulario = document.querySelector('#formulario');
    var box_dashed = document.querySelector(".dashed");
    box_dashed.style.display = "none";
    formulario.addEventListener('submit',function(){

        var nombre = document.querySelector("#nombre").value;
        var apellidos = document.querySelector("#apellidos").value;
        var edad = document.querySelector("#edad").value;
        box_dashed.style.display = "block";

        var datos_usuario =[nombre,apellidos,edad];

        for(indice in datos_usuario){
        var parrafo = document.createElement("p");
        parrafo.append(datos_usuario);
        }

        var parrafo = document.createElement("p");
        parrafo.append(nombre);
        parrafo.append(apellidos);
        parrafo.append(edad);
        box_dashed.append(parrafo);


    });
});
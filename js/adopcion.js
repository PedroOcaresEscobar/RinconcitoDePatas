document.addEventListener('DOMContentLoaded', function() {
let elementoImagen = $("#imagendeldia");
var number = 1 + Math.floor(Math.random() * 2);
var urlapi="";
if (number ===1 ){urlapi="https://api.thecatapi.com/v1/images/search"}
else {urlapi="https://api.thedogapi.com/v1/images/search"}

$.ajax({
    url:urlapi + "?api_key=live_mOXUgp8T76Zdyw9n8t3ORLbwYRq9PfqhtuALGhinzLowJIPXdmSWmEbRxNEr2PWc",
    dataType:"json"
}).done (function(data){
    /*pescamos el primer elemento de la lista y su atributo url*/
    let urlimagen = data[0].url;
    elementoImagen.attr("src",urlimagen)
    console.log(urlimagen)

})


$("#botonenviar").click(function(e){
    console.log("se manda formulario")
    e.preventDefault();
    let tipo=$("#tipo").val();
    let genero=$("#gender").val();
    let tamano=$("#size").val();
var urlapi="";
if (tipo ==="perro" ){urlapi="https://desarrollo.codemaker.cl/api/dog.php?"}
else {urlapi="https://desarrollo.codemaker.cl/api/cat.php?"}

$.ajax({
    url:urlapi + "tamano="+tamano+"&genero="+genero,
    dataType:"json"
}).done (function(data){
    let divresultado= $("#resultadonombre");
    divresultado.show()
    divresultado.find("h4").html(data.nombre)




}).fail(function(data){alert("No se ha encontrado nombre para la opcion seleccionada:(, intenta con otro tamaño.")

})
return false;

})
})
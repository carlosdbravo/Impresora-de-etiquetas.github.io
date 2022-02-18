/*validar solo numeros*/
/*function soloNum(e){
let key =e.keyCode || e.which;
let teclado= String.fromCharCode(key);
let err = document.getElementById('error');
err.style.color='red';
let mensajesErr =[];
let numeros="0123456789";
let especiales="8-37-38-46";//ascii
let telcado_especial=false;


for (let i in especiales) {
    if (key==especiales[i]){
        telcado_especial=true;
    }
    }
    //-1 si no se encontro
    if(numeros.indexOf(teclado)==-1 && !telcado_especial){
        mensajesErr.push('Solo números');
        mensajesErr.join(',');//separar errores por ,
         err.innerHTML=mensajesErr;
        return false;
    }
}
*/
//validar campos vacios
/*function validar(){
    let Ancho = document.getElementById('Ancho');
    let Largo = document.getElementById('Largo');
    let Colores=document.getElementById('Colores');
    let err = document.getElementById('error');
    err.style.color='red';
    let mensajesErr =Largo

    if(Ancho.value==null || Ancho.value==''){
        mensajesErr.push('Ingresa ancho de la etiqueta');//agregar valor
    }
    
    if(Largo.value==null || Largo.value==''){
        mensajesErr.push('Ingresa largo de la etiqueta');//agregar valor
    }

    if(Colores.value==null || Colores.value==''){
        mensajesErr.push('Ingresa cuantos colores lleva');//agregar valor
    }

    mensajesErr.join(',');//separar errores por ,
    err.innerHTML=mensajesErr;
    etiquetabordada();
    return false;
}
*/
function etiquetabordada(){
var ancho=parseInt(document.getElementById('Ancho').value);
var largo=parseInt(document.getElementById('Largo').value);
var colores=parseInt(document.getElementById('Colores').value);
var piezas=parseInt(document.getElementById('Piezas').value);
//var doblez=parseInt(document.getElementById('Doblez').value);
var cm2=ancho*largo;
const costocm = 0.035;
const costocolor= 0.08;
const costodoblez = 0.08;
//const extras = 0.07;
var totalcm2= costocm*cm2;
var totalcolores= costocolor*colores;
if(document.getElementById('Doblez').value ==1){
    var total=(totalcm2+totalcolores+costodoblez)*1.16;
    var pedidototal=total*piezas;
    document.getElementById('Total').innerHTML=('$' +' ' + total.toFixed(2) +' '+ 'pesos');
    document.getElementById('Pedidototal').innerHTML=('$' + ' ' + pedidototal.toFixed(2) +' ' + 'pesos');
}
else if(document.getElementById('Doblez').value == 2){
    var total=(totalcm2+totalcolores)*1.16;
    var pedidototal=total*piezas;
    document.getElementById('Total').innerHTML=('$' +' ' + total.toFixed(2) +' '+ 'pesos');
    document.getElementById('Pedidototal').innerHTML=('$' + ' ' + pedidototal.toFixed(2) +' ' + 'pesos');

}

}

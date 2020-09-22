
var myName="Caro"
console.log(myName);
var edad=22
console.log(edad);
var ignasiAge=32
var ageDiff= edad-ignasiAge;
console.log(ageDiff);
console.log("Tu tienes"+" "+edad)
if (edad>21){console.log("Tienes más de 21 años")}
else{console.log("No tiene más de 21 años")}

if(edad<ignasiAge){console.log("Ignasi es mayor que usted")}
else if(edad==ignasiAge) {console.log("Ingasi tiene la misma edad que usted")}
else if(edad>ignasiAge){console.log("Usted es mayor que Ignasi")};
console.log("-----EJERCICIO 1-----")
var nombresSA=["Yael","Malena","Andrea","Rodrigo","Luz","Belen",
              "Maca","Jhoelda","Nicole","Reyna","Branko","Camila",
            "Victoria","Maria Gabriela","Flor"];
var ordenados=nombresSA.sort()
console.log(ordenados)
;
console.log(nombresSA[0]);
console.log(nombresSA[nombresSA.length-1])
;
for(i=0;i<nombresSA.length;i++){console.log(nombresSA[i])};

console.log("---EJERCICIO 2----")
var edades = [18,22,19,26,28,24,23,22,32,20,21,19,24,20,19]
var i = 0
while(i<edades.length){
          console.log(edades[i])
            i++
              }
console.log("-- EDADES PARES---")
var edades = [18,22,19,26,28,24,23,22,32,20,21,19,24,20,19]
var i = 0
while(i < edades.length){if(edades[i] % 2 == 0){
            console.log(edades[i])
          }
          i++
        }
console.log("------")
for(i = 0; i < edades.length ; i++){if(edades[i]%2==0){console.log(edades[i])}
}

console.log("-- EJERCICIO 3--")

function menorNumero (array){var menor = array[0];for(i=0; i < array.length;i++)
                              {if(array[i]< menor){menor=array[i] }
                            }console.log(menor)
                            }

menorNumero(edades)
console.log("---- EJERCICIO 4-----")
function mayorNumero (array){var mayor = array[0];for(i=0; i < array.length;i++)
  {if(array[i]>mayor){mayor = array[i] }
}console.log(mayor)
}

mayorNumero(edades);
console.log("---EJERCICIO 5---")
var numbers = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];

function showPosition(array,index) {console.log(array[index])}


showPosition(numbers,3)
console.log("--- EJERCICIO 6---")
let members= data[0].results[0].members

function hallarRepetidos(ara){
  var repetidos = []
  var objetoAuxiliar={};
  for (var i =0; i < ara.length; i++){
    if(!objetoAuxiliar[ara[i].state]){
      objetoAuxiliar[ara[i].state]=0
    }
    objetoAuxiliar[ara[i].state]+=1 } 
  
  for (propiedad in objetoAuxiliar)
  {if(objetoAuxiliar[propiedad] > 1) {
    repetidos.push(propiedad)
   }
  }
      return repetidos}
console.log("Los numeros repetidos son: " + hallarRepetidos(members))
   
console.log("---- EJERCICIO 7---")
var myColor=["Red","Green","White","Black"];
function arrayToString(arr){
  var frase="";
  for(i=0;i<arr.length;i++){
    frase+= "";
    frase+= arr[i];
    frase+="";
   if(i<arr[i].length-2){
      frase+=", "
  }}
  return frase} 
console.log(arrayToString(myColor))
console.log("--- EJERCICIO 1---")
var x = "32443"
function invertirNumero(num){
  var numberToReverse = num.split("");
  var invertido= numberToReverse.reverse();
  
  return invertido.join("")
}
console.log(invertirNumero(x))
console.log("----- EJERCICIO 2---")
var palabra = "webmaster"
function palabraEnOA (string){
  var wToBeOrdered = string.split("");
  var OrderedWord= wToBeOrdered.sort();
  return OrderedWord.join("")
}
console.log(palabraEnOA(palabra))
console.log("------ EJERCICIO 3-----")
var sentence = "príncipe de persia";
function colocarMayus (word){
  var FraseSeparada=word.split(" ");
  var mayuscula = FraseSeparada.map((palabra)=>{
    return palabra.charAt(0).toUpperCase()+palabra.slice(1).toLowerCase();
  })
  var resultado= mayuscula.join(" ");
  return resultado

}
console.log(colocarMayus(sentence))
console.log("---- EJERCICIO 4---")
function palabraLarga(string){
  var array=string.split(" ");
  var contador =0;
  var palabraLarga="";
  for (var i =0;i<array.length;i++){
    if(array[i].length>contador){
      contador=array[i].length;
      palabraLarga=array[i]
    }

  }
  return palabraLarga
}
console.log(palabraLarga("Tutorial de desarrollo web"))
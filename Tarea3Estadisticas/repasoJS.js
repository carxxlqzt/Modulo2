// METODO .FIND

 let articulos = [
     {
        "habitacion":["sarten", "olla","cuchara","taza"]

     },
     {"habitacion":"mesa"},
     {"habitacion": ["tele","sillon","mesa","florero"]}
 ]

//EVERY
let numbers=[23,87,44,90,14,69]
const check = numbers.every(item =>{
    return item >100
})              
console.log(check) 
//REDUCE
//En este ejercicio quiero saber cuantas arepas pidió el cliente.
// Entonces con el metodo reduce puedo realizar una función en donde
//puedo juntar en un contador las arepas que voy encontrando en cada uno
//de los elementos de "almuerzos" que tengan la propiedad .principal
//el contador esta inicializado en cero, tal como lo coloqué antes
//del cierre de la función
//Cada vez que encuentre que hay un elemento cuyo valor (de la propiedad ".principal")
//sea "arepas" entonces va a sumar uno en el contador
//Todo esto resultará en 3, ya que se encontraron 3 arepas
 var almuerzos=[
     {principal:"arepa",postre:"helado"},
     {principal:"tacos" ,postre:"torta de queso"},
     {principal:"pizza" ,postre:"galletas"},
     {principal:"sushi" ,postre:"quesillo"},
     {principal:"arepa" ,postre:"golfeados"},
     {principal:"arepa",postre:"churros"}
 ]
 let principal = almuerzos.map(e=> e.principal)
 function buscar (){
     for (let i = 0; i < arguments.length; i++) {
        
         return arguments[i] + "Hola"
     }
        }

 var cantidadArepas = almuerzos.reduce(function(contador, almuerzo){
     if(almuerzo.principal==="arepa"){
         return contador + 1;
     } else{
         return contador
     }
 },0)
 console.log(cantidadArepas)
 var numeros = [45,32,11,22,76,45,78,11,90,59,45,32,11,22,76,45,78,11,90,59,67,23,45,67,12,13,34,56,76,12,45,32,11,22,76,45,78,11,90,59,88,34,12,1,45,13,67,98,42,16,45,32,11,22,76,45,78,11,90,59]

 numeros.sort(function(a, b) {
    return a - b;
  });
  console.log(numeros)
 
let sorted= [45,32,11,22,76,45,78,11,90,59,45,32,11,22,76,45,78,11,90,59,67,23,45,67,12,13,34,56,76,12,45,32,11,22,76,45,78,11,90,59,88,34,12,1,45,13,67,98,42,16,45,32,11,22,76,45,78,11,90,59]
  sorted.sort((memberA,memberB)=> {
    return memberA - memberB}
    ) 
let tenPercent = Math.round(sorted.length/10)
let  LowestTenPct= sorted[tenPercent]
let HighestTenPct= sorted[sorted.length - tenPercent];
least= sorted.filter(member => member<=LowestTenPct)
most= sorted.filter(member => member >= HighestTenPct )

//
let num = 30042;
num = num + "";
let num2 =4344
let n3 = num2.toString()
let palabra = "maquina"
let palabra2 = palabra.split("").sort().join("")
//Función para colocarle mayusculas a las primeras letras de las palabras de una frase
let frase = "hola mi nombre es carolina"
function toUpperCase (string){
    let sentence = string.split(" ")
    let upperCase=[]
    for (let i = 0; i < sentence.length; i++) {
     upperCase.push(sentence[i].charAt(0).toUpperCase() + sentence[i].slice(1))
    }
    return (upperCase.join(" "))
}
let sent = toUpperCase(frase)
function condicional(a){
    if(a){
        console.log("es verdad")
    }
    else{
        console.log("no es verdad")
    }
}
condicional(true)
function testCondicional(x){
    y = 0
    if(x){
       y+= 10
    }
   return y
}

// Función para calcular de vocales que tiene una frase indicada
function vowel_count(str1)
{
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;
  
  for(var x = 0; x < str1.length ; x++)
  {
    if (vowel_list.indexOf(str1[x]) !== -1)
    {
      vcount += 1;
    }
  
  }
  return vcount;
}
console.log(vowel_count("The quick brown fox"));

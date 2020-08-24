function suma (a,b){resultado= a + b;
                    return resultado}
console.log(suma(10,10));
document.write("Tu tienes" + " " + suma("Caro","lina"))

function saludo (nombre){
        saludar = "Bienvenidx" + nombre;
        return saludar
}
document.write (saludo(" Caro"))
console.log (saludo(" Caro"))
console.log (saludo(" Gloria"))

console.log("Aca quiero mostrar mayores de edad")
var edades = [91,28,5,9,43,87,67]
for(i=0;i<edades.length;i++)
    {if(edades[i] > 18) {console.log(edades[i])}}     
        
console.log("-----")
console.log("Aca quiero mostrar menores de edad")
var edades = [91,87,28,5,9,43,87,9,67]
for(i=0;i<edades.length;i++)
    {if(edades[i] < 18) {console.log(edades[i])}}     
    console.log("-------")
function mayores (array) {for(i=0;i<array.length;i++)
    {if(array[i] > 18) {console.log(array[i])}
} }
mayores(edades)
console.log("-----")
function repetidos (aray) {for(i=0;i<aray.length;i++)
    {if(aray[i]!=aray[i]){console.log(aray[i])}}}
repetidos (edades)


console.log("------")
var objet = {color:"blanco",
            tamaño:"6",
            nombre: "Circulo"}
var muchosObjetos = [{nombre: "Luisa",
                     apellido:"Sosa",
                     edad: 30

},
                    {nombre: "Susana",
                    apellido:"Ferrero",
                    edad:null


                    },
                {nombre:"Gabriela",
                apellido:"Ríos",
                edad:67

                }]

console.log("-----")
function mostrarTodos(arreglo) {for(i=0;i<arreglo.length;i++){
                            if(arreglo[i].edad==null){
                            console.log(arreglo[i].nombre
                                +" "+arreglo[i].apellido+" ")
                                    } else{console.log(arreglo[i].nombre
                                        +" "+arreglo[i].apellido+
                                        arreglo[i].edad)}}}

mostrarTodos(muchosObjetos)
console.log("--")
var numbers1= [4,9,10,29]
var cadenaDeTexto= numbers1.join("-");
console.log(cadenaDeTexto);
console.log("---------")
var elementos=[1,9,3,8,]
var ultimoElemento= elementos.pop()
console.log(ultimoElemento,elementos);
var arreglo=[3,3,5,9]
var arreglo2=["sal", 3]
var pushh= arreglo.push(arreglo2)
var texto= arreglo.join(" ")
console.log(texto)
arreglo.reverse()
console.log(arreglo)
var decimal=3029.882302;
decimal.toFixed(0);
console.log("-------")
const arr=[3,9,21,5];
    arr.forEach(function(la){
        if(la<0){console.log("Aca hay un numero mayor que 20")}
        else {console.log("Aca no hay numeros menores que 0")}
    })
console.log("------------")
const arregl=["43","11",29,85,96,48,34];
const multiplos5= arregl.map(function(elem){
    return elem
})
console.log(multiplos5)
console.log("----")
const pares= arregl.filter(function(elem){
    return elem%2==0
})
console.log(pares);
function Click(){
  document.getElementById("title").style.fontFamily="cursive"
}



let agar = 90-49
let suma="d"/7
const mercadería = new Vue({
    el:"#app",
    data:{
        clothes:[
            {name: "Shirt",
            stock:0},
            {name:"Short",
            stock:10},
            {name:"Trousers",
            stock:0}

        ],
        mostrar: 10,
        choosenClothes:"",
        mensaje:'Hi, bitches!',
        contador:1,
        colorElegido: ""
        
    },
    computed:{
        invertido(){
            return this.mensaje.split('').reverse().join("")
        },
        color(){
            if(this.contador<=10){
                return 'bg-warning'
            }
            else if(this.contador<=20){
                return 'bg-info'
            }
            else if (this.contador <= 30){
                return 'bg-success'
            }
            else if(this.contador<=40){
                return 'bg-dark'
            }
            else if(this.contador > 40){
                return 'lila'
            }
        }
    }
})




let objeto = document.querySelector("#element")
let container = document.querySelector("#container")
var myObject = new Vue({
    el: '#cont',
    data:{
        titulo:'Bienvenidos',
        todos: [{
            text:"Marrón"}
            
            ],
        colorFavorito:"",
        colorElegido: ""
           },
        methods:{
            añadirColor() {
            let newObject = document.createElement("div");
            newObject.id="element"
            if(this.colorElegido=== "" && this.colorFavorito=== ""){alert("Debes escribir algo")}
            else{
              this.todos.push({
                  text: this.colorFavorito

              }) 
              
              newObject.style.backgroundColor= this.colorElegido
              newObject.innerText+=this.colorFavorito
              this.colorFavorito="";
              this.colorElegido = ""
              

             container.appendChild(newObject)}
            }
        }
    

    })


   let object1={
       nombre:"camisa",

        color:"white",
        size:"L"
   }
    let hola= 34*2
   let frase= `La ${object1.nombre} es ${object1.color}`
   
    


    function Mueble (color,width,height){
        this.style1=color
        this.style2= width;
        this.style3=height
       

    }
    

    let objeto1= new Mueble ("red","200px","200px");
    let objeto2 = new Mueble("brown","100px","300px")
   

    class Mobiliario {
         constructor (nombre,color,tamaño){
        this.nombre=nombre;
        this.color=color;
        this.tamaño= tamaño;
       

    }
    mensaje(){
        return `Este ${this.nombre} es de color ${this.color} y tiene el tamaño de ${this.tamaño}`
    }}
     const mueble = new Mobiliario("mueble","marron","200 x 500")
    // let mesa = new Mobiliario("mesa","negro","160 x 90")

    console.log(mueble.mensaje())




function myFunc (){
    let a = 10
    let b = 10
    let c= a+b
    return c
}

let conditional = `https://api.propublica.org/congress/v1/113/${app?'senate':'house'}/members.json`
// let table =  document.getElementById("table")
// let senate
//  async function getData(){
     
//     await fetch("https://api.propublica.org/congress/v1/113/senate/members.json",{
//         method:"GET",
//         headers:{
//             "X-API-Key":"M6WzaYlhrGpoA8tvu2DJnyw0yXsJO5bXXyQ3kxqc"
//         }
//     })
//     .then(function(response){
//         if(response.ok){
//             return response.json()}
//             else{throw new Error(response.status)}
//         })
//     .then(function(dataS){
//         console.log(dataS.results[0].members)
       
//          senate = dataS.results[0].members
         
        
// })

// .catch(function(error){
//     alert(error)
// })
// dibujarTabla(senate)
        
// }
// getData()
// function dibujarTabla(array){
// array.forEach(e => {
//     let tbody = document.createElement("tbody")
//     let tr = document.createElement("tr")
//     let td1 = document.createElement("td")
//     let td2 =document.createElement("td")
//     td1.innerText= e.first_name
//     td2.innerText=e.party
//     tr.appendChild(td1)
//     tr.appendChild(td2)
//     tbody.appendChild(tr)
//     return table.appendChild(tbody)
// });
// }

// var tabla = new Vue({
//     el: 'tablaH',
//     data:
//         {message:'Bienvenidos',
//         todos: [
//             { text: 'Learn JavaScript' },
//             { text: 'Learn Vue.js' },
//             { text: myFunc ()},
//             { text: agar},
            
//             ]
//         }
//     })

// async function obtenerDatos(){
// fetch("https://api.propublica.org/congress/v1/113/house/members.json",{
//     method:"GET",
//     headers:{
//         "X-API-Key":"M6WzaYlhrGpoA8tvu2DJnyw0yXsJO5bXXyQ3kxqc"
//     }
// })
// .then(function(response){
//     if(response.ok){
//         return response.json()}
//         else{throw new Error(response.status)}
//     })
// .then(function(dataH){
//     return house = dataH.results[0].members
   

// })
// .catch(function(error){
//     alert(error)
// })
// }
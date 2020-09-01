//Llamo a la función  para poder armar la tabla sobre el promedio de los votos perdidos de caa partido
tablaAtGlance(tr1A,tr2A,tr3A,tr4A,"avgDemocratsMissedVotes","avgRepublicansMissedVotes","avgIndependentsMissedVotes", "avgTotalMissedVotes")
//ARMADO DE TABLA DE LOS MÁS Y MENOS COMPROMETIDOS
let attTableL = document.getElementById("tableAttL")
let attTableM = document.getElementById("tableAttM")
//Función para armar la tabla de los más y menos comprometidos
function armadoTablaAttendance (array,table){
let tbodyL = document.createElement("tbody")
let _array = statistics[array]
for (let i = 0; i < _array.length; i++) {
 let trL1 = document.createElement("tr")
 let tdL1 = document.createElement("td")
 let tdL2 = document.createElement("td")  
 let tdL3 = document.createElement("td")
 tdL1.innerText= _array[i].first_name+' '+(_array[i].middle_name || '')+' '+_array[i].last_name
 tdL2.innerText =_array[i].missed_votes
 tdL3.innerText =_array[i].missed_votes_pct
trL1.appendChild(tdL1)
trL1.appendChild(tdL2)
trL1.appendChild(tdL3)
tbodyL.appendChild(trL1)

}
table.appendChild(tbodyL)
}
armadoTablaAttendance("leastEnganged",attTableL)
armadoTablaAttendance("mostEnganged",attTableM)
//Le coloco la clase "table" a todas las etiquetas que se llamen "table"
let tableC= document.getElementsByTagName("table")
for (i =0;i<tableC.length;i++){tableC[i].classList.add("table")}
//Le coloco margen a aquellos elementos que sean h2 y desciendan de un "div"
let tituloA = document.querySelectorAll("div>h2")
for (let i = 0; i < tituloA.length; i++) {
    tituloA[i].classList.add("mt-4")
    
}
//Le coloco una clase especifica a cada elemento que sea un "table" y descienda de un "div"
let tableAtGlanceA = document.querySelector("div>table")
tableAtGlanceA.classList.add("tableAtGlance")
//A cada elemento que sea h3 le doy un margin top de 4em(propiedad que da bootstrap al colocar la clase mt-4)
let h3A = document.getElementsByTagName("h3")
for (let i = 0; i < h3A.length; i++) {
    h3A[i].classList.add("mt-4")}
//A todos los footer le doy un margin top de 4em
let footerA = document.getElementsByTagName("footer")
for (let i = 0; i < footerA.length; i++) {
        footerA[i].classList.add("mt-4")}
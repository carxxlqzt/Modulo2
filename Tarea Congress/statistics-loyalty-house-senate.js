//ESTADISTICAS DE LOS PARTIDOS(Cantidad de miembros,promedio de votos a favor y promedio de votos perdidos)
// Ademas de eso, incluye 4 "listas", dos de ellas sobre los mas y menos leales.
// Las otras dos sobre los mas y menos comprometidos
let statistics = {
    democrats:[],
    avgDemocratVotes:0,
    avgDemocratsMissedVotes:0,
    republicans:[],
    avgRepublicansVotes:0,
    avgRepublicansMissedVotes:0,
    independents:[],
    avgIndependentsVotes:0,
    avgIndependentsMissedVotes:0,
    leastLoyal:[],
    mostLoyal:[],
    leastEnganged:[],
    mostEnganged:[],
    avgTotalVotes:0,
    avgTotalMissedVotes:0,
    totalMembers:0
    
}

let members= data[0].results[0].members
for (let i = 0; i < members.length; i++) {
    if(members[i].party== "D"){statistics.democrats.push(members[i])}
    if(members[i].party== "R"){statistics.republicans.push(members[i])}
    if(members[i].party== "ID"){statistics.independents.push(members[i])}
    
}
//Funcion para calcular el promedio de votos a favor del partido y para calcular el promedio de votos perdidos
function avgPartyVotes(array,votes){
    let avg=0;
    if(array.length>0){
    let sumadorDeVotosAlPartido=0;
    for (let i = 0; i < array.length; i++) {
        sumadorDeVotosAlPartido += array[i][votes]
        
    }
    avg = sumadorDeVotosAlPartido/array.length;}
    else{avg = 0}
    return avg
}
statistics.avgDemocratVotes += avgPartyVotes(statistics.democrats,"votes_with_party_pct")
statistics.avgRepublicansVotes +=avgPartyVotes(statistics.republicans,"votes_with_party_pct")
statistics.avgIndependentsVotes +=avgPartyVotes(statistics.independents,"votes_with_party_pct")
statistics.avgDemocratsMissedVotes+= avgPartyVotes(statistics.democrats,"missed_votes_pct")
statistics.avgRepublicansMissedVotes+= avgPartyVotes(statistics.republicans,"missed_votes_pct")
statistics.avgIndependentsMissedVotes+= avgPartyVotes(statistics.independents,"missed_votes_pct")
statistics.avgTotalVotes+= avgPartyVotes(members,"votes_with_party_pct")
statistics.avgTotalMissedVotes+= avgPartyVotes(members,"missed_votes_pct")
statistics.totalMembers+=members.length

//Calculo para comprobar el 10% de los más y menos comprometidos
//tambien para comprobar el 10% de los más y menos leales
function calculoGeneral (array,key,least, most){
    let tenPercent = Math.round(array.length/10)
    let sorted= [...array]
    sorted.sort((memberA,memberB)=> {
    return memberA[key] - memberB[key]}
)

let  votesAtLowestTenPct= sorted[tenPercent][key]
let votesAtHighestTenPct= sorted[sorted.length - tenPercent][key];
statistics[least]= sorted.filter(member => member[key]<=votesAtLowestTenPct)
statistics[most] = sorted.filter(member => member[key] >= votesAtHighestTenPct)

}
calculoGeneral (members,"missed_votes","mostEnganged","leastEnganged")
calculoGeneral (members,"votes_with_party_pct","leastLoyal","mostLoyal")
//Damos vuelta el array de los más leales y el array de los menos comprometidos
//ya que el primer objeto del array no nos muestra por ejemplo, el más leal de todo el 10%
statistics.mostLoyal.reverse()
statistics.leastEnganged.reverse()

// Tabla acerca de la cantidad de miembros del partido, y el promedio de sus votos a favor(LOYALTY) o de sus votos perdidos(ATTENDANCE)
let tr1A= document.querySelector("#tbody> tr:first-child")
let tr2A= document.querySelector("#tbody> tr:nth-child(2n)")
let tr3A= document.querySelector("#tbody> tr:nth-child(3n)")
let tr4A =document.querySelector("#tbody> tr:nth-child(4n)")
let tr1L= document.querySelector("#tbdy> tr:first-child")
let tr2L= document.querySelector("#tbdy> tr:nth-child(2n)")
let tr3L= document.querySelector("#tbdy> tr:nth-child(3n)")
let tr4L= document.querySelector("#tbdy> tr:nth-child(4n)")
//Función para realizar la tabla para los 2 casos (ATTENDANCE Y LOYALTY)
function tablaAtGlance(tr1,tr2,tr3,tr4,key1,key2,key3,key4) {
let td1 = document.createElement("td")
let td2 =document.createElement("td")
td1.innerText= statistics.republicans.length
tr1.appendChild(td1)
td2.innerText = statistics[key1].toFixed(2)
tr1.appendChild(td2)
let td3 = document.createElement("td")
td3.innerText= statistics.democrats.length
tr2.appendChild(td3)
let td4 =document.createElement("td")
td4.innerText= statistics[key2].toFixed(2)
tr2.appendChild(td4)

let td5 = document.createElement("td")
td5.innerText= statistics.independents.length
tr3.appendChild(td5)
let td6 =document.createElement("td")
if(statistics[key3] == 0) {td6.innerText = 0}
else{td6.innerText = statistics[key3].toFixed(2)}
tr3.appendChild(td6);
let td7 = document.createElement("td")
td7.innerText = members.length
let td8 = document.createElement("td")
td8.innerText= statistics[key4].toFixed(2)
tr4.appendChild(td7)
tr4.appendChild(td8)
}

//Llamo a la función para realizar la tabla del promedio de los votos a favor (votes with party pct)
tablaAtGlance(tr1L,tr2L,tr3L,tr4L,"avgDemocratVotes","avgRepublicansVotes","avgIndependentsVotes","avgTotalVotes")

//Creación de la tabla de los más y menos leales
let loyalTableL = document.getElementById("loyalTable");
let loyalTableM = document.getElementById("mostLoyal");
//Función para realizar la tabla de los más y menos leales
function armadoTabla (key,table){
let tbodyL = document.createElement("tbody");
let _array = statistics[key];

for (let i = 0; i < _array.length; i++) {
let operation = _array[i].total_votes * _array[i].votes_with_party_pct /100
 let trL1 = document.createElement("tr");
 let tdL1 = document.createElement("td");
 let tdL2 = document.createElement("td");  
 let tdL3 = document.createElement("td");
 tdL1.innerText= _array[i].first_name+' '+(_array[i].middle_name || '')+' '+_array[i].last_name;
 tdL2.innerText = operation.toFixed(2);
 tdL3.innerText =_array[i].votes_with_party_pct;
trL1.appendChild(tdL1);
trL1.appendChild(tdL2);
trL1.appendChild(tdL3);
tbodyL.appendChild(trL1);

}
table.appendChild(tbodyL)
}
armadoTabla("leastLoyal",loyalTableL)
armadoTabla("mostLoyal",loyalTableM)

let tC= document.getElementsByTagName("table")
for (i =0;i<tC.length;i++){tC[i].classList.add("table")}

let titulos = document.querySelectorAll("div>h2")
for (let i = 0; i < titulos.length; i++) {
    titulos[i].classList.add("mt-4")
    
}
// let navLink = document.querySelectorAll(".nav-link")
// for (let i = 0; i < navLink.length; i++) {
//     navLink[i].classList.add("text-info");
let tableAtGlance = document.querySelector("div>table")
tableAtGlance.classList.add("tableAtGlance")

let h3 = document.getElementsByTagName("h3")
for (let i = 0; i < h3.length; i++) {
    h3[i].classList.add("mt-4")}
let footer = document.getElementsByTagName("footer")
for (let i = 0; i < footer.length; i++) {
    footer[i].classList.add("mt-4")
    
}
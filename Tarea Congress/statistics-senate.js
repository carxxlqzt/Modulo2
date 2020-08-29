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
    
}
let members= data[0].results[0].members
for (let i = 0; i < members.length; i++) {
    if(members[i].party== "D"){statistics.democrats.push(members[i])}
    if(members[i].party== "R"){statistics.republicans.push(members[i])}
    if(members[i].party== "ID"){statistics.independents.push(members[i])}
    
}
function avgPartyVotes(array,votes){
    let avg=0;
    let sumadorDeVotosAlPartido=0;
    for (let i = 0; i < array.length; i++) {
        sumadorDeVotosAlPartido += array[i][votes]
        
    }
    avg = sumadorDeVotosAlPartido/array.length;
    return avg
}
statistics.avgDemocratVotes += avgPartyVotes(statistics.democrats,"votes_with_party_pct")
statistics.avgRepublicansVotes +=avgPartyVotes(statistics.republicans,"votes_with_party_pct")
statistics.avgIndependentsVotes +=avgPartyVotes(statistics.independents,"votes_with_party_pct")
statistics.avgDemocratsMissedVotes+= avgPartyVotes(statistics.democrats,"missed_votes_pct")
statistics.avgRepublicansMissedVotes+= avgPartyVotes(statistics.republicans,"missed_votes_pct")
statistics.avgIndependentsMissedVotes+= avgPartyVotes(statistics.independents,"missed_votes_pct")


// let tenPercent = Math.round(members.length/10)
// let sorted= [...members]
// sorted.sort((memberA,memberB)=> {
//     return memberA.votes_with_party_pct - memberB.votes_with_party_pct}
// )

// let  votesAtLowestTenPct= sorted[tenPercent].votes_with_party_pct
// let votesAtHighestTenPct= sorted[sorted.length - tenPercent].votes_with_party_pct;
// statistics.leastLoyal= sorted.filter(member => member.votes_with_party_pct<=votesAtLowestTenPct)
// statistics.mostLoyal = sorted.filter(member => member.votes_with_party_pct >= votesAtHighestTenPct )
 

function calculoGeneral (array,key,least, most){
    let tenPercent = Math.round(array.length/10)
    let sorted= [...array]
    sorted.sort((memberA,memberB)=> {
    return memberA[key] - memberB[key]}
)

let  votesAtLowestTenPct= sorted[tenPercent][key]
let votesAtHighestTenPct= sorted[sorted.length - tenPercent][key];
statistics[least]= sorted.filter(member => member[key]<=votesAtLowestTenPct)
statistics[most] = sorted.filter(member => member[key] >= votesAtHighestTenPct )
}
calculoGeneral (members,"missed_votes","mostEnganged","leastEnganged")
calculoGeneral (members,"votes_with_party_pct","leastLoyal","mostLoyal")
// Tabla
let tr1= document.querySelector("#tbody> tr:first-child")
let tr2= document.querySelector("#tbody> tr:nth-child(2n+0)")
let tr3= document.querySelector("#tbody> tr:last-child")
let td1 = document.createElement("td")
let td2 =document.createElement("td")
td1.innerText= statistics.republicans.length
tr1.appendChild(td1)
td2.innerText = statistics.avgRepublicansVotes
tr1.appendChild(td2)
let td3 = document.createElement("td")
td3.innerText= statistics.democrats.length
tr2.appendChild(td3)
let td4 =document.createElement("td")
td4.innerText= statistics.avgDemocratVotes
tr2.appendChild(td4)

let td5 = document.createElement("td")
td5.innerText= statistics.independents.length
tr3.appendChild(td5)
let td6 =document.createElement("td")
td6.innerText= statistics.avgIndependentsVotes || 0
tr3.appendChild(td6)


//Tabla menos leales
let loyalTableL = document.getElementById("loyalTable")
let loyalTableM = document.getElementById("mostLoyal")
// let attTableL = document.getElementById("tableAttL")
// let attTableM = document.getElementById("tableAttM")

function armadoTabla (array,table){
let tbodyL = document.createElement("tbody")
let _array = statistics[array]
for (let i = 0; i < _array.length; i++) {
 let trL1 = document.createElement("tr")
 let tdL1 = document.createElement("td")
 let tdL2 = document.createElement("td")  
 let tdL3 = document.createElement("td")
 tdL1.innerText= _array[i].first_name+' '+(_array[i].middle_name || '')+' '+_array[i].last_name
 tdL2.innerText =_array[i].total_votes * _array[i].votes_with_party_pct /100
 tdL3.innerText =_array[i].votes_with_party_pct
trL1.appendChild(tdL1)
trL1.appendChild(tdL2)
trL1.appendChild(tdL3)
tbodyL.appendChild(trL1)

}
table.appendChild(tbodyL)
}
armadoTabla("leastLoyal",loyalTableL)
armadoTabla("mostLoyal",loyalTableM)

let tC= document.getElementsByTagName("table")
for (i =0;i<tC.length;i++){tC[i].classList.add("table")}
let main = document.getElementsByTagName("main")
for (i =0;i<main.length;i++){
main[i].classList.add("col-12")}
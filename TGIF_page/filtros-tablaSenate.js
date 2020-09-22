let tabla = document.getElementById("senate-data")
    let members = data[0].results[0].members
    document.querySelectorAll("input[name=party]").forEach(function(e){
      e.addEventListener("change",createTable)})
      document.querySelector("#State").addEventListener("change",createTable);
   
     
    
     createTable()
    function createTable(){
    tabla.innerHTML= ""
    let thead = document.createElement("thead")
    let tr = document.createElement("tr")
     let th1= document.createElement ("th");
     th1.innerText= "Full Name";
     let th2 = document.createElement("th");
      th2.innerText= "Party";
    let th3 =document.createElement("th");
    th3.innerText= "State";
    let th4 = document.createElement("th");
     th4.innerText= "Years in Ofice"
     let th5 = document.createElement("th");
     th5.innerText= "% Votes w/ Party"
     tr.appendChild(th1)
     tr.appendChild(th2)
     tr.appendChild(th3)
     tr.appendChild(th4)
     tr.appendChild(th5)
     thead.appendChild(tr)
     tabla.appendChild(thead)
    let tbody = document.createElement("tbody");
    let partidosChequeados= Array.from(document.querySelectorAll("input[name=party]:checked")).map(e=> e.value);
    let estado = document.querySelector("#State").value
    

    for(let i=0;i < members.length;i++){
    if (partidosChequeados.includes(members[i].party) && (members[i].state == estado || estado =="All") ){
     let tr = document.createElement("tr");
     let td = document.createElement("td");
     let td2 = document.createElement("td");
     let td3 =document.createElement("td");
     let td4 = document.createElement("td");
     let td5 = document.createElement("td")
     td.innerText= members[i].first_name +' '+(members[i].middle_name || '')+' '+members[i].last_name
     td2.innerText=members[i].party;
     td3.innerText=members[i].state;
     td4.innerText=members[i].seniority;
     td5.innerText= members[i].votes_with_party_pct+ "%"

    tr.appendChild(td);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5)
    tbody.appendChild(tr)
    }}
    tabla.appendChild(tbody)}

const main = new Vue ({
    el:"#main",
    data:{
        members:[],
        senate:document.querySelector("#senate"),
        apiUrl:`https://api.propublica.org/congress/v1/113/${this.senate?'senate':'house'}/members.json`,
        partidosChequeados:["R","D","ID"],
        select:"All",
        state:[],
        republicans:[],
        democrats:[],
        independents:[],
        mostEnganged:0,
        leastEnganged:0,
         mostLoyal:0,
        leastLoyal:0
       
    },
    created:  function(){
           fetch(this.apiUrl,{
                method:"GET",
                headers:{
                    "X-API-Key":"M6WzaYlhrGpoA8tvu2DJnyw0yXsJO5bXXyQ3kxqc"
                }
            })
            .then(res => res.json())
            .then(json => {this.members =json.results[0].members;
                this.cantMembers();
               this.state = this.getStateList(this.members);
               this.mostEnganged = this.tenPct(this.members,"missed_votes",true);
               this.leastEnganged = this.tenPct(this.members,"missed_votes",false);
               this.mostLoyal= this.tenPct(this.members,"votes_with_party_pct",false);
               this.leastLoyal= this.tenPct(this.members,"votes_with_party_pct",true)
            })
            .catch(err => console.log("Error al traer la info. Error:"+ err))
               
            },
                
    methods:{
        cantMembers(){
            this.members.filter(member => {    
             if ( member.party== "D") {this.democrats.push(member)}
             if ( member.party== "R"){  this.republicans.push(member)}
             if (  member.party== "ID"){ this.independents.push(member) || 0}
           
           
           })},
           avgPartyVotes:function(array,votes){
            let avg=0;
            if(array.length>0){
            let sumadorDeVotosAlPartido=0;
            for (let i = 0; i < array.length; i++) {
                sumadorDeVotosAlPartido += array[i][votes]
                
            }
            avg = sumadorDeVotosAlPartido/array.length;}
            else{avg = 0}
            return avg
        },
       getStateList(array){
            var repetidos = []
            var objetoAuxiliar={};
            for (var i =0; i < array.length; i++){
              if(!objetoAuxiliar[array[i].state]){
                objetoAuxiliar[array[i].state]=0
              }
              objetoAuxiliar[array[i].state]+=1 } 
            
            for (propiedad in objetoAuxiliar)
            {if(objetoAuxiliar[propiedad] > 1) {
              repetidos.push(propiedad)
             }
            }
                return repetidos.sort()}
         
           
    ,

    tenPct(array,key,isAscendent){
        let result=[];
        let sorted= isAscendent?[...array].sort((a,b)=> a[key] - b[key]):[...array].sort((a,b)=> b[key] - a[key])
        let tenPct=Math.round(sorted.length/10);
        result =sorted.slice(0,tenPct);
        let i =result.length;
        while(i< sorted.length && sorted[i][key]== result[result.length -1] ){
         result.push[sorted[i]];
            i++
        }
        return result
    }
    
    
     
    },
    computed:{
        filtered:function(){
           
            return this.members.filter(e=>  this.partidosChequeados.includes(e.party) && (this.select == e.state || this.select =="All")) 
        
        },
       
    },
   
            
})


function tenPct(array,key,isAscendent){
    let result=[];
    let sorted= isAscendent?[...array].sort((a,b)=> a[key] - b[key]):[...array].sort((a,b)=> b[key] - a[key])
    let tenPct=Math.round(sorted.length/10);
    result =sorted.slice(0,tenPct);
    let i =result.length;
    while(i< sorted.length && sorted[i][key]== result[result.length -1] ){
     result.push[sorted[i]];
        i++
    }
    return result
}





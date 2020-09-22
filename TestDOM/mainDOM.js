

function crearTarjetaB(event){
    event.preventDefault()

    let title = event.target.title.value
    let text  = event.target["text-box"].value
    let color = event.target.color.value

    if(title != "" && text != ""){
        let parent = document.getElementById("cards")

        let article = document.createElement("article")
        let h3 = document.createElement("h3")
        let p = document.createElement("p")
        let span = document.createElement("span")
    
        h3.innerText = title
        p.innerText = text
        span.innerText = "X"

        article.style.backgroundColor = color

        span.classList.add("close")
        span.addEventListener("click",function(event){
            parent.removeChild(event.target.parentNode)
        
        })//    parent.removeChild(article)
    
    
        article.appendChild(h3)
        article.appendChild(p)
        article.appendChild(span)
    
       parent.appendChild(article)
    }else{
        alert("you must complete all fields")
    }

    
    
}
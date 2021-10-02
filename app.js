function CarregarFilmes(){


    let filmes = ["images/chegada.png" ,"images/yesterday.png" ,"images/escola.png" ,"images/corra.jpg" ,"images/virgem.jpg" ,"images/ancora.jpg"]

    document.querySelector(".lista-filmes").innerHTML = "<img src=" + filmes[0] + ">"
    document.querySelector(".lista-filmes").innerHTML += "<img src=" + filmes[1] + ">"
    document.querySelector(".lista-filmes").innerHTML += "<img src=" + filmes[2] + ">"
    document.querySelector(".lista-filmes").innerHTML += "<img src=" + filmes[3] + ">"
    document.querySelector(".lista-filmes").innerHTML += "<img src=" + filmes[4] + ">"
    document.querySelector(".lista-filmes").innerHTML += "<img src=" + filmes[5] + ">"
}

//aray --> variavel com subdivisões (indices)

//laços de repetição
for(let controle = 0 ; controle < 6 ; controle = controle + 1){
    document.querySelector(".lista-filmes").innerHTML += "<img src="+ filmes
    [controle] + ">"
}
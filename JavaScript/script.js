let btnProximo = document.getElementById("proximo");

let btnAnterior = document.getElementById("anterior");

let Quadroimagem = document.getElementById("Quadroimagem");

let album = [
   "https://picsum.photos/id/1015/1200/600",
    "https://picsum.photos/id/1025/1200/600",
    "https://picsum.photos/id/1043/1200/600",
]


btnProximo.addEventListener("click", mostrarProximo);

let foto = 0;

function mostrarProximo(){
    foto = foto + 1;
    if(foto >= album.length){
        foto = 0
    }

    Quadroimagem.src = album[foto]
}

btnAnterior.addEventListener("click", mostrarAnterior);

function mostrarAnterior(){
    foto = foto - 1;
    if(foto < 0){
        foto = album.length - 1

    }

    Quadroimagem.src = album[foto]

}



   



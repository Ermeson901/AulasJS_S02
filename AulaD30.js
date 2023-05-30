//Retorna o primeiro elemento "P"
let elemento1 = document.querySelector("p");
elemento1.style.color = "pink";

// Elemento por classe ".par1"
let elemento2 = document.querySelector(".par1");
elemento2.style.color = "green";
//Elemento por id. 
let elemento3 = document.querySelector("#par3");
elemento3.style.color = "blue";

//Eventos
//onclick="cliquei()"

const cliquei = () => {
    let elemento4 = document.querySelector("#par5")
    elemento4.style.color = "red";
}
//Varios elementos.
let itemLista = document.querySelectorAll("#lista2");

for ( let i = 0 ; i <= itemLista.length ; i++){
    itemLista[i].style.color = "silver"
}


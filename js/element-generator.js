function inserimento(){
    const puls= document.createElement("button");
    puls.innerHTML="Ciao";
    puls.style.background="yellow";
    document.getElementById("pulsante").appendChild(puls);;       
}

function creaLista(lista, nomeLista){
    for(i=0;i<lista.length;i++){
        aggiungiElemento(lista[i], nomeLista);
    }
}

function aggiungiElemento(elementoDaAggiungere, nomeLista) {
    const mylist= document.getElementById(nomeLista);
    const elemento= document.createElement("li");
    elemento.textContent=elementoDaAggiungere;
    mylist.appendChild(elemento);
}

function nuovoTesto(){
    const paragrafo = document.createElement("p");
    const testo=document.createTextNode("ciao, mi chiamo Giulia.");
    

}
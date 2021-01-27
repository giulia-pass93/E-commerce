function headerGenerator(){
    
    const header = document.getElementsByTagName("header")[0];
    const animation = document.getElementsByClassName("animation")[0];

    //....HEADER__TOP....
    const NewHeaderTop= document.createElement("div");
    NewHeaderTop.classList.add("header__top");
    header.appendChild(NewHeaderTop);
    
    const left= document.createElement("div");
    left.classList.add("left");

    const el1=document.createElement("a");
    const el2=document.createElement("a");
    const el3=document.createElement("a");
    const el4=document.createElement("a");
    const el5=document.createElement("a");
    el1.innerHTML="List";
    el2.innerHTML="List";
    el3.innerHTML="List";
    el4.innerHTML="List";
    el5.innerHTML="List";
    left.appendChild(el1);
    left.appendChild(el2);
    left.appendChild(el3);
    left.appendChild(el4);
    left.appendChild(el5);

    const right= document.createElement("div");
    right.classList.add("right");

    const el6=document.createElement("a");
    const el7=document.createElement("a");
    el6.innerHTML="List";
    el7.innerHTML="List";
    right.appendChild(el6);
    right.appendChild(el7);

    NewHeaderTop.appendChild(left);
    NewHeaderTop.appendChild(right);
    
    //....HEADER__RICERCA....
    const headerRicerca=document.createElement("div");
    headerRicerca.classList.add("header__ricerca");

    const ricercaLogo=document.createElement("div");
    ricercaLogo.classList.add("header__ricerca__logo");
    const logo=document.createElement("img");
    logo.src="assets/logo.jpg";
    ricercaLogo.appendChild(logo);
    headerRicerca.appendChild(ricercaLogo);

    const ricercaInput=document.createElement("div");
    ricercaInput.classList.add("header__ricerca__input");
    const input=document.createElement("input");
    input.classList.add("header__ricerca__input--active");
    input.type="search";
    input.placeholder="Cerca sul sito";
    ricercaInput.appendChild(input);
    headerRicerca.appendChild(ricercaInput);

    const ricercaInfo=document.createElement("div");
    ricercaInfo.classList.add("header__ricerca__info");
    ricercaInfo.id="header__ricerca__info";
    const frase=document.createElement("p");
    frase.id="cell";
    frase.innerHTML="mio cellulare";
    frase.style.color="grey";
    ricercaInfo.appendChild(frase);
    headerRicerca.appendChild(ricercaInfo);
     
    const ricercaIcon=document.createElement("div");
    ricercaIcon.classList.add("header__ricerca__icon"); 
    
    const icon1=document.createElement("div");
    icon1.id="icon1";
    const ic1= document.createElement("a");
    const img1=document.createElement("img");
    img1.src="assets/cuore.jpg";
    ic1.appendChild(img1);
    icon1.appendChild(ic1);
    ricercaIcon.appendChild(icon1);  
    
    const icon2=document.createElement("div");
    icon2.id="icon2";
    const ic2= document.createElement("a");
    const img2=document.createElement("img");
    img2.src="assets/shop.jpg";
    ic2.appendChild(img2);
    icon2.appendChild(ic2);
    ricercaIcon.appendChild(icon2);
    headerRicerca.appendChild(ricercaIcon);

    header.appendChild(headerRicerca);
    
    //....HEADER__BOTTOM....
    const headerBottom=document.createElement("div");
    headerBottom.classList.add("header__bottom");
    
    const menuObject=[
        {name:"home", url:"www.google.com"},
        {name:"contatti", url:"www.facebook.com"}
    ];

    
    menuObject.forEach(currentItem => generateMenuItem(currentItem));

    function generateMenuItem(pippo){
        const item = document.createElement("a");
        item.innerHTML=pippo.name;
        headerBottom.appendChild(item);
        item.href=pippo.url;
    }

    header.appendChild(headerBottom);

    //....ANIMATION__TESTO....
    const animationTesto=document.createElement("div");
    animationTesto.classList.add("animation__testo");

    const paragrafo=document.createElement("div");
    paragrafo.classList.add("animation__testo__paragraph");
    
    const h1=document.createElement("h1");
    h1.innerHTML="PRODOTTI";
    paragrafo.appendChild(h1);
    const h2 = document.createElement("h2");
    h2.innerHTML="Descrizione del prodotto da acquistare";
    paragrafo.appendChild(h2);
    const button=document.createElement("button");
    button.type="button";
    button.innerHTML="Shop Now";
    button.style.fontWeight="bold";
    paragrafo.appendChild(button);
    
    animationTesto.appendChild(paragrafo);

    const cerchio=document.createElement("div");
    cerchio.classList.add("animation__testo__immagine");
    const cerchioImg=document.createElement("img");
    cerchioImg.src="assets/mare.jpg";
    cerchio.appendChild(cerchioImg);
    animationTesto.appendChild(cerchio);

    animation.appendChild(animationTesto);
    
    //....ANIMATION__IMMAGINE....
    const animationImmagine = document.createElement("div");
    animationImmagine.classList.add("animation__img");
    const animationImg=document.createElement("img");
    animationImg.src="assets/img.jpg";
    animationImmagine.appendChild(animationImg);
    
    animation.appendChild(animationImmagine);   
}
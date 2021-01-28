function bodyGenerator(){
    
    const header = document.getElementsByTagName("header")[0];
    const animation = document.getElementsByClassName("animation")[0];

    //....HEADER__TOP....
    const NewHeaderTop= createElementAddClass("header__top", "div");
    header.appendChild(NewHeaderTop);

    const menuTopLeft=[{ name:"privacy",
                         url:"www."},
                       { name:"cookies",
                         url:"www."},
                       { name:"politica",
                         url:"www."},
                       { name:"azienda",
                         url:"www."},
                       { name:"sedi",
                         url:"www."}];
    
    const menuTopRight=[{ name:"Lavora con noi",
                          url:"www."},
                        { name:"stampa",
                          url:"www."}];
 
    menuGenerator(menuTopLeft, "left", NewHeaderTop);
    menuGenerator(menuTopRight, "right", NewHeaderTop);

    //....HEADER__RICERCA....
    const headerRicerca=createElementAddClass("header__ricerca", "div");
    
    //Logo
    const ricercaLogo=createElementAddClass("header__ricerca__logo", "div");
    inserisciImmagine("assets/logo.jpg", ricercaLogo);
    headerRicerca.appendChild(ricercaLogo);
    
    //Input
    const ricercaInput=createElementAddClass("header__ricerca__input", "div");  
    const input=createElementAddClass("header__ricerca__input--active", "input");
   
    input.type="search";
    input.placeholder="Cerca sul sito";
    ricercaInput.appendChild(input);
    headerRicerca.appendChild(ricercaInput);

    //Info
    const ricercaInfo=createElementAddClass("header__ricerca__info", "div");
    
    generateInfo("3389431342", "black");
    generateInfo("mio cellulare", "grey");

    headerRicerca.appendChild(ricercaInfo);
  
    //Icone
    const ricercaIcon=createElementAddClass("header__ricerca__icon", "div");   
    
    generateIcons("icon1", "assets/cuore.jpg");
    generateIcons("icon2", "assets/shop.jpg");
    
    headerRicerca.appendChild(ricercaIcon);

    header.appendChild(headerRicerca);
    
    //....HEADER__BOTTOM....
    const menuBottom=[{name:"home", url:"www.google.com"},
                      {name:"contatti", url:"www.facebook.com"},
                      {name:"chi siamo", url:"www.facebook.com"},
                      {name:"dove siamo", url:"www.facebook.com"},
                      {name:"storia", url:"www.facebook.com"},
                      {name:"news", url:"www.facebook.com"},
                      {name:"forza Juve", url:"www.facebook.com"},
                      {name:"chat", url:"www.facebook.com"}];

    menuGenerator(menuBottom, "header__bottom", header);
 
    //....ANIMATION__TESTO....
    const animationTesto=createElementAddClass("animation__testo", "div");

    //Testo
    const paragrafo=createElementAddClass("animation__testo__paragraph", "div");
    
    generateTesto("h1", "PRODOTTI", "none", "none");
    generateTesto("h2", "Descrizione del prodotto da acquistare", "none", "none");
    generateTesto("button", "Shop Now", "button", "bold");
     
    animationTesto.appendChild(paragrafo);

    //Immagine 
    const cerchio=createElementAddClass("animation__testo__immagine", "div"); 
    inserisciImmagine("assets/mare.jpg", cerchio);  
    animationTesto.appendChild(cerchio);

    animation.appendChild(animationTesto);
    
    //....ANIMATION__IMMAGINE....
    const animationImmagine = createElementAddClass("animation__img", "div");
    inserisciImmagine("assets/img.jpg", animationImmagine);
    animation.appendChild(animationImmagine); 
    
    //....FUNZIONI....
    
    function createElementAddClass(className, tag){
      const node = document.createElement(tag);
      node.classList.add(className);
      return node;
    }

    function inserisciImmagine(link, node){
      const img=document.createElement("img");
      img.src=link;
      node.appendChild(img);
    }

    function generateIcons(id, src){
      const divIcon = document.createElement("div");
      divIcon.id=id;
      const aIcon = document.createElement("a");

      inserisciImmagine(src, aIcon);

      divIcon.appendChild(aIcon);
      ricercaIcon.appendChild(divIcon);
    }

    function generateInfo(informazione, colore){
      const info=document.createElement("p");
      info.innerHTML=informazione;
      info.style.color=colore;
      ricercaInfo.appendChild(info);
    }

    function generateTesto(tag, testo, type, style){
      const text=document.createElement(tag);
      text.innerHTML=testo;
      text.type=type;
      text.style.fontWeight=style;
      paragrafo.appendChild(text);
    }

    function menuGenerator(array, classToAdd, parent){
      const node = createElementAddClass(classToAdd, "div");
      array.forEach(currentItem => generateMenu(currentItem, node));
      parent.appendChild(node);
    }

    function generateMenu(menuItem, node){
        const item = document.createElement("a");
        item.innerHTML=menuItem.name;
        item.href=menuItem.url;
        node.appendChild(item);
    }
}
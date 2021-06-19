   var menuEstaAberto= false;
  var butaoMobile=window.document.querySelector('.menu_mobile');
  var listaMenu=window.document.querySelector('.nav-lista');

  butaoMobile.addEventListener("click", () => {

  	if (!menuEstaAberto) {
            listaMenu.style.display="flex";
            menuEstaAberto=true;
  	} else {
  		listaMenu.style.display="none";
  		menuEstaAberto=false;
  	}
  })

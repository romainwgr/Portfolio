// Afficher le menu
const ShowMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)
          
    toggle.addEventListener('click', () => {

        //ajouter la classe show-menu à nav-menu
        
        nav.classList.toggle('show-menu')

        //ajouter une icone pour afficher et caché le menu

        toggle.classList.toggle('show-icon')
        
    })
}

ShowMenu('nav-toggle','nav-menu')



/* finir le hide menu et ensuite gérer lespacement du nav quand on clique */
const HideMenu = (menuId, logoId,toggleId) => {
    const menu = document.getElementById(menuId),
        logo = document.getElementById(logoId),
        toggle =document.getElementById(toggleId)

    // Ajoutez les éléments à un tableau
    let elements = [menu, logo];

    // Ajoutez un événement 'click' à chaque élément du tableau
    elements.forEach(element => {
        element.addEventListener('click', () => {
            if (menu.classList.contains('show-menu')) {
                menu.classList.remove('show-menu');
                toggle.classList.remove('show-icon')

            }
        });
    });
}

HideMenu('nav-menu', 'nav-logo','nav-toggle');

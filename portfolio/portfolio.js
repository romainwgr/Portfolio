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



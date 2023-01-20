const menu = document.getElementById('toggle_menu')
const menuIcon = document.getElementById('toggle_menu_icon')

let menuOpen



const openMenu = `<svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"
viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" width="28px"
height="28px">
<path
    d="m11 16.745c0-.414.336-.75.75-.75h9.5c.414 0 .75.336.75.75s-.336.75-.75.75h-9.5c-.414 0-.75-.336-.75-.75zm-9-5c0-.414.336-.75.75-.75h18.5c.414 0 .75.336.75.75s-.336.75-.75.75h-18.5c-.414 0-.75-.336-.75-.75zm4-5c0-.414.336-.75.75-.75h14.5c.414 0 .75.336.75.75s-.336.75-.75.75h-14.5c-.414 0-.75-.336-.75-.75z"
    fill-rule="nonzero" />`

const closeMenu = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff" width="24px" height="24px"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.597 17.954l-4.591-4.55-4.555 4.596-1.405-1.405 4.547-4.592-4.593-4.552 1.405-1.405 4.588 4.543 4.545-4.589 1.416 1.403-4.546 4.587 4.592 4.548-1.403 1.416z"/></svg>`

menuIcon.addEventListener('click', () => {
    menuResponse()
})

const menuResponse = () => {
    menuOpen = !menuOpen
    if (!menuOpen) {
        menuIcon.innerHTML = (closeMenu)
        menu.classList.remove('xs:hidden')
        menu.classList.add('xs:flex')
        menu.classList.add('left-0')
        console.log('menu hidden' + menuOpen)
    }
    if (menuOpen) {
        menuIcon.innerHTML = (openMenu)

        menu.classList.remove('xs:flex')
        menu.classList.add('xs:hidden')
        console.log('menu' + menuOpen)
    }
}

menuResponse()
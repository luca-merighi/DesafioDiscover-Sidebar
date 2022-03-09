const toggleButtons = document.querySelector('#sidebar .header .toggle-buttons')
const menuButton = document.querySelector('#sidebar .header .toggle-buttons .menu-icon')
const closeButton = document.querySelector('#sidebar .header .toggle-buttons .close-icon')
const sidebar = document.querySelector('#sidebar') 

toggleButtons.addEventListener('click', function() {
    menuButton.classList.toggle('hide')
    closeButton.classList.toggle('hide')
    sidebar.classList.toggle('active')
})
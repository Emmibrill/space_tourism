
navToggle = document.querySelector('.nav__toggle')
console.log(navToggle)
navContainer = document.querySelector('.nav__section')
console.log(navContainer)
navToggle.addEventListener('click', () => {
    navContainer.classList.toggle('navOpen')
    const expanded = navToggle.getAttribute('aria-expanded')
    console.log(expanded)
    if(expanded === 'false'){
        navToggle.setAttribute('aria-expanded', 'true')
    } else if (expanded === 'true')
    {navToggle.setAttribute('aria-expanded', 'false')}
    
    
})
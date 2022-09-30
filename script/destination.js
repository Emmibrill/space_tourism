const destinationTab = document.querySelectorAll('[data-target]'),
descriptionLeftPane = document.querySelectorAll('[data-content');

destinationTab.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)
        descriptionLeftPane.forEach(leftPane => {
            leftPane.classList.remove('description__active')
        });
        target.classList.add('description__active')
    })
});

const tabActive = document.querySelectorAll('.destination__tab')
Array.from(tabActive).forEach(Active => {   
    Active.addEventListener('click', (e) => {
        addActive(e.target.innerHTML)
     }) 
})
function addActive(tab) {
    Array.from(tabActive).forEach(Active => {
        console.log(Active)
        if(Active.innerHTML === tab){
            Active.classList.add('activE')
        } else{Active.classList.remove('activE')
        Active.classList.remove('moon')}
        
    })
}
        
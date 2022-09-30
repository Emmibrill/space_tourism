

let technology = [
    {
        name: "Space capsule",
        images: "technology/image-space-capsule-landscape.jpg",
        "description": "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
    }
  ]
  let second = [
    {
        name: "Spaceport",
        images: "technology/image-spaceport-landscape.jpg",
        description: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
      }
  ]
  
  let third = [
    {
        name: "Launch vehicle",
        images: "technology/image-launch-vehicle-landscape.jpg",
        description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
     }
  ]
const button = document.querySelectorAll('.tech')
let techInfo = document.querySelector('.technology__details');
console.log(button)

button.forEach(btn => {
    btn.addEventListener('click', () => {
        
        console.log(btn)
        if(btn.innerHTML == 1){
            
            let html = "";
            technology.forEach(e => {
                html = `<div class="tech__description">
                <div class="info__wrapper">
                    <div class="tech__teminology">
                        <div class="teminology__tag">
                            <h2>The terminology...</h2>
                        </div>
                    </div>
                    <div class="launch__vehicles">
                        <div class="vehicle">
                            <h2>${e.name}</h2>
                        </div>
                    </div>
                    <div class="vehicle__information">
                        <div class="vehicle__about">
                            <h4>${e.description}
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
            <div class="vehicle__image">
                <img src="${e.images}"  alt="Space capsule">
            </div>`
            techInfo.innerHTML = html
                
            });
        } else if(btn.innerHTML == 2){
            let html = "";
            second.forEach(e => {
                html = `<div class="tech__description">
                <div class="info__wrapper">
                    <div class="tech__teminology">
                        <div class="teminology__tag">
                            <h2>The terminology...</h2>
                        </div>
                    </div>
                    <div class="launch__vehicles">
                        <div class="vehicle">
                            <h2>${e.name}</h2>
                        </div>
                    </div>
                    <div class="vehicle__information">
                        <div class="vehicle__about">
                            <h4>${e.description}
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
            <div class="vehicle__image">
                <img src="${e.images}"  alt="Space capsule">
            </div>`
            techInfo.innerHTML = html
                
            });
        } else if(btn.innerHTML == 3){
            let html = "";
            third.forEach(e => {
                html = `<div class="tech__description">
                <div class="info__wrapper">
                    <div class="tech__teminology">
                        <div class="teminology__tag">
                            <h2>The terminology...</h2>
                        </div>
                    </div>
                    <div class="launch__vehicles">
                        <div class="vehicle">
                            <h2>${e.name}</h2>
                        </div>
                    </div>
                    <div class="vehicle__information">
                        <div class="vehicle__about">
                            <h4>${e.description}
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
            <div class="vehicle__image">
                <img src="${e.images}"  alt="Space capsule">
            </div>`
            techInfo.innerHTML = html
                
            });
        }
        
        
    })
})

button.forEach(btn => {
    btn.addEventListener('click', (e) => {
        circleActive(e.target.innerHTML)
    })
})
function circleActive(circle){
    button.forEach(btn => {
        if(btn.innerHTML == circle){
            btn.classList.add('Active')
        } else{btn.classList.remove('Active')}
    })
}
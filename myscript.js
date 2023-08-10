const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navMenu');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})

document.querySelectorAll('.navLink').forEach((n) => n
.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

// mobile cards object
const cards = [{
    id: 1,
    snapshot: '<img class="snapshot" src= "./images/Snapshoot Portfolio.png"/>',
    title: "Tonic",
    client: "Canopy",
    counter: '<img class="counter" src="./images/Counter.png"/>',
    role: "Back End Dev",
    counter: '<img class="counter" src="./images/Counter.png"/>',
    year: "2015",
    primary: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    skills: "HTML",
    skills2: "CSS",
    skills3: "JAVASCRIPT",
    action: "See project",
},
{
    id: 2,
    snapshot: '<img class="snapshot" src= "./images/Snapshoot Portfolio (1).png"/>',
    title: "Multi-Post Stories",
    client: "Canopy",
    counter: '<img class="counter" src="./images/Counter.png"/>',
    role: "Back End Dev",
    counter: '<img class="counter" src="./images/Counter.png"/>',
    year: "2015",
    primary: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    skills: "HTML",
    skills2: "CSS",
    skills3: "JAVASCRIPT",
    action: "See project",
},
{
    id: 3,
    snapshot: '<img class="snapshot" src= "./images/Snapshoot Portfolio (2).png"/>',
    title: "Tonic",
    client: "Canopy",
    counter: '<img class="counter" src="./images/Counter.png"/>',
    role: "Back End Dev",
    counter: '<img class="counter" src="./images/Counter.png"/>',
    year: "2015",
    primary: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    skills: "HTML",
    skills2: "CSS",
    skills3: "JAVASCRIPT",
    action: "See project",
},
{
    id: 4,
    snapshot: '<img class="snapshot" src= "./images/Snapshoot Portfolio (3).png"/>',
    title: "Multi-Post Stories",
    client: "Canopy",
    counter: '<img class="counter" src="./images/Counter.png"/>',
    role: "Back End Dev",
    counter: '<img class="counter" src="./images/Counter.png"/>',
    year: "2015",
    primary: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    skills: "HTML",
    skills2: "CSS",
    skills3: "JAVASCRIPT",
    action: "See project",
}];

// desktop cards object

const work = [{
    id: 1,
    snapshot: '<img class="snapshot" src="./images/Portoflio Card/Snapshoot Portfolio.png">',
    title: "Tonic",
    client: "CANOPY",
    counter: '<img class="counter" src="./images/Counter.png"/>',
    role: "Back End Dev",
    counter: '<img class="counter" src="./images/Counter.png"/>',
    year: "2015",
    primary: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    skills: "html",
    skills1: "css",
    skills2: "javascript",
    action: "See project",
},
{
    id: 2,
    snapshot: '<img class="snapshot" src="./images/Snapshoot Portfolio (3).png"/>',
    title: "Multi-Post Stories",
    client: "FACEBOOK",
    counter: '<img class="counter" src="./images/Counter.png"/>',
    role: "Full Stack Dev",
    counter: '<img class="counter" src="./images/Counter.png"/>',
    year: "2015",
    primary: "Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.",
    skills: "html",
    skills1:"ruby on rails",
    skills2: "css",
    skills3: "javascript",
    action: "See project", 
},
{
    id: 3,
    snapshot: '<img class="snapshot" src="./images/Snapshoot Portfolio.png"/>',
    title: "Facebook 360",
    client: "FACEBOOK",
    counter: '<img class="counter" src="./images/Counter.png"/>',
    role: "Full Stack Dev",
    counter: '<img class="counter" src="./images/Counter.png"/>',
    year: "2015",
    primary: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    skills: "html",
    skills1:"ruby on rails",
    skills2: "css",
    skills3: "javascript",
    action: "See project", 
},
{
    id: 4,
    snapshot: '<img class="snapshot" src="./images/Snapshoot Portfolio (1).png">',
    title: "Uber Navigation",
    client: "Uber",
    counter: '<img class="counter" src="./images/Counter.png"/>',
    role: "Lead Developer",
    counter: '<img class="counter" src="./images/Counter.png"/>',
    year: "2018",
    primary: "A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.",
    skills: "html",
    skills1:"ruby on rails",
    skills2: "css",
    skills3: "javascript",
    action: "See project", 
}];

// mobile cards function
window.onload = function loader() {

const mobileContainer = document.getElementById('works')

function addMobileCards(){
    let mobileCards = '';

    cards.forEach((card) => {
        mobileCards += `
        <div class="card-works">
     ${card.snapshot}
        <div class="left-block">
            <div class="primary-text">
                <h1 class="title">${card.title}</h1>
                <div class="frame2">
                    <h2 class="client">${card.client}</h2>
                 ${card.counter}
                    <h3 class="role">${card.role}</h3>
                ${card.counter}
                    <h3 class="year">${card.year}</h3>

                </div>
            </div>
            <p class="primary">${card.primary}</p>
            <div class="tags">
                <ul class="list">
                    <li class="skills">${card.skills}</li>
                    <li class="skills">${card.skills2}</li>
                    <li class="skills">${card.skills3}</li>
                </ul>
            </div>
            <a href="#${card.id}"class="action">See project</a>
        </div>
    </div>`
    });
    mobileContainer.innerHTML = mobileCards;
};


// desktop cards function

    const desktopContainer = document.getElementById('desktop-cards')
    
    function addDesktopCards(){
        let desktopCards = '';
    
        work.forEach((item, index) => {
            if(index==1 || index==3) {
                desktopCards += `
                <div class="card-works card-work2">
                ${item.snapshot}
                <div class="left-block">
                    <div class="primary-text">
                        <h1 class="title">${item.title}</h1>
                        <div class="frame2">
                            <h2 class="client">${item.client}</h2>
                        ${item.counter}
                            <h3 class="role">${item.role}</h3>
                        ${item.counter}
                            <h3 class="year">${item.year}</h3>
                
                        </div>
                    </div>
                    <p class="primary">${item.primary}</p>
                    <div class="tags">
                        <ul class="list">
                            <li class="skills">${item.skills}</li>
                            <li class="skills">${item.skills1}</li>
                            <li class="skills">${item.skills2}</li>
                            <li class="skills">${item.skills3}</li>
                        </ul>
                    </div>
                    <a href="#${item.id}"class="action">See project</a>
                </div>
                </div>`
            
            } else{
                desktopCards += `
                <div class="card-works">
                ${item.snapshot}
                <div class="left-block">
                    <div class="primary-text">
                        <h1 class="title">${item.title}</h1>
                        <div class="frame2">
                            <h2 class="client">${item.client}</h2>
                        ${item.counter}
                            <h3 class="role">${item.role}</h3>
                        ${item.counter}
                            <h3 class="year">${item.year}</h3>
                
                        </div>
                    </div>
                    <p class="primary">${item.primary}</p>
                    <div class="tags">
                        <ul class="list">
                            <li class="skills">${item.skills}</li>
                            <li class="skills">${item.skills1}</li>
                            <li class="skills">${item.skills2}</li>
                            <li class="skills">${item.skills3}</li>
                        </ul>
                    </div>
                    <a href="#${item.id}"class="action">See project</a>
                </div>
                </div>`
            };
            });

        desktopContainer.innerHTML = desktopCards;
    };

    addMobileCards();
    
    addDesktopCards();
};

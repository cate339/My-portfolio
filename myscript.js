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
            <button class="action">${card.action}</button>
        </div>
    </div>`
    });
    mobileContainer.innerHTML = mobileCards;
};

addMobileCards();
}
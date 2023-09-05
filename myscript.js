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


// mobile pop-up object
const popModal = [{
    no: 1,
    title: "Tonic",
    client: "Canopy",
    counter: '<img class="counter" src="./images/Counter.png"/>',
    role: "Back End Dev",
    counter: '<img class="counter" src="./images/Counter.png"/>',
    year: "2015",
    snapshot: '<img class="snapshot" src= "./images/Snapshoot Portfolio.png"/>',
    p_text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    skills: "HTML",
    skills1: "CSS",
    skills2: "JAVASCRIPT",
    p_action: "See Live",
    p_action1: "See Source",
},
{
    no: 2,
    title: "Multi-Post Stories",
    client: "Canopy",
    counter: '<img class="counter" src="./images/Counter.png"/>',
    role: "Back End Dev",
    counter: '<img class="counter" src="./images/Counter.png"/>',
    year: "2015",
    snapshot: '<img class="snapshot" src= "./images/Snapshoot Portfolio (1).png"/>',
    p_text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    skills: "HTML",
    skills1: "CSS",
    skills2: "JAVASCRIPT",
    p_action: "See Live",
    p_action1: "See Source",
},
{
    no: 3,
    title: "Tonic",
    client: "Canopy",
    counter: '<img class="counter" src="./images/Counter.png"/>',
    role: "Back End Dev",
    counter: '<img class="counter" src="./images/Counter.png"/>',
    year: "2015",
    snapshot: '<img class="snapshot" src= "./images/Snapshoot Portfolio (2).png"/>',
    p_text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    skills: "HTML",
    skills1: "CSS",
    skills2: "JAVASCRIPT",
    p_action: "See Live",
    p_action1: "See Source",
},
{
    no: 4,
    title: "Multi-Post Stories",
    client: "Canopy",
    counter: '<img class="counter" src="./images/Counter.png"/>',
    role: "Back End Dev",
    counter: '<img class="counter" src="./images/Counter.png"/>',
    year: "2015",
    snapshot: '<img class="snapshot" src= "./images/Snapshoot Portfolio (3).png"/>',
    p_text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    skills: "HTML",
    skills1: "CSS",
    skills2: "JAVASCRIPT",
    p_action: "See Live",
    p_action1: "See Source",
}];

// desktop pop-up object
const Modal = [{
    no: 1,
    title: "Tonic",
    client2: "Canopy",
    counter: '<img class="counter" src="./images/Counter.png"/>',
    role2: "Back End Dev",
    counter: '<img class="counter" src="./images/Counter.png"/>',
    year2: "2015",
    snapshot2: '<img class="snapshot2" src="./images/Portoflio Card/Snapshoot Portfolio.png">',
    pp_text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.",
    skills: "HTML",
    skills1: "CSS",
    skills2: "Javascript",
    skills3: "Ruby",
    skills4: "Bootstrap",
    p_action: "See Live",
    p_action1: "See Source",
},
{
    no: 2,
    title: "Multi-Post Stories",
    client2: "FACEBOOK",
    counter: '<img class="counter" src="./images/Counter.png"/>',
    role2: "Full Stack Dev",
    counter: '<img class="counter" src="./images/Counter.png"/>',
    year2: "2015",
    snapshot2: '<img class="snapshot2" src="./images/Snapshoot Portfolio (3).png"/>',
    pp_text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.",
    skills: "HTML",
    skills1: "CSS",
    skills2: "Javascript",
    skills3: "Ruby",
    skills4: "Bootstrap",
    p_action: "See Live",
    p_action1: "See Source",
},
{
    no: 3,
    title: "Facebook 360",
    client2: "FACEBOOK",
    counter: '<img class="counter" src="./images/Counter.png"/>',
    role2: "Full Stack Dev",
    counter: '<img class="counter" src="./images/Counter.png"/>',
    year2: "2015",
    snapshot2: '<img class="snapshot2" src="./images/Snapshoot Portfolio.png"/>',
    pp_text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.",
    skills: "HTML",
    skills1: "CSS",
    skills2: "Javascript",
    skills3: "Ruby",
    skills4: "Bootstrap",
    p_action: "See Live",
    p_action1: "See Source",
},
{
    no: 4,
    title: "Uber Navigation",
    client2: "Uber",
    counter: '<img class="counter" src="./images/Counter.png"/>',
    role2: "Lead Developer",
    counter: '<img class="counter" src="./images/Counter.png"/>',
    year2: "2018",
    snapshot2: '<img class="snapshot2" src="./images/Snapshoot Portfolio (1).png">',
    pp_text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.",
    skills: "HTML",
    skills1: "CSS",
    skills2: "Javascript",
    skills3: "Ruby",
    skills4: "Bootstrap",
    p_action: "See Live",
    p_action1: "See Source",
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


     // mobile pop-up function

     const popUp = document.getElementById ('pop-up')

     function addMobilePopUp (){
         let mobileModal ='';

         popModal.forEach ((pop, index)=> {
            let skills = '';
            for (let i = 0; i < pop.skills.length; i += 1){
                skills += `<li>${pop.skills[i]}</li>`;
            }

             mobileModal += `
             <div class="primary" id="${pop.no}">
             <div class="div1">
                <h1 class="title">${pop.title}</h1>
                <a href="#" class="close-btn">&times;</a>
            </div>
         <div class="frame2">
             <h2 class="client">${pop.client}</h2>
             ${pop.counter}
             <h2 class="role">${pop.role}</h2>
             ${pop.counter}
             <h2 class="year">${pop.year}</h2>
         </div>
     </div>
     ${pop.snapshot}
     <div class="left-block2">
         <p class="p_text">${pop.p_text}</p>
         <div class="tag">
             <ul class="list">
                 <li class="skills">${pop.skills}</li>
                 <li class="skills">${pop.skills1}</li>
                 <li class="skills">${pop.skills2}</li>
             </ul>
         </div>
         <div class="buttons">
             <button class="action p_action">
                 <h2>${pop.p_action}</h2>
             </button>
             <button class=" action p_action">
                 <h2>${pop.p_action1}</h2>
                 <i class="fab fa-github"></i>
             </button>
         </div>
     </div>`
         });
         popUp.innerHTML = mobileModal;
     };

     // desktop pop-up function

     const desktopPop = document.getElementById ('modal')

     function addDesktopPopUp (){
         let desktopModal ='';

         Modal.forEach ((up)=> {
             desktopModal += `
             <div class="top-block" id="${up.no}">
             <div class="div1">
                <h1 class="title">${up.title}</h1>
                <a href="#" class="close-btn">&times;</a>
             </div>
         <div class="frame2">
             <h2 class="client2">${up.client2}</h2>
             ${up.counter}
             <h2 class="role2">${up.role2}</h2>
             ${up.counter}
             <h2 class="year2">${up.year2}</h2>
         </div>
     </div>
     ${up.snapshot2}
     <div class="bottom-block">
         <div class="block-left">
             <p class="pp_text">${up.pp_text}</p>
         </div>
         <div class="right-block">
             <div class="tag">
                 <ul class="list">
                     <li class="skills">${up.skills}</li>
                     <li class="skills">${up.skills1}</li>
                     <li class="skills">${up.skills2}</li>
                     <li class="skills">${up.skills3}</li>
                     <li class="skills">${up.skills4}</li>
                 </ul>
             </div>
             <div class="buttons">
                 <button class="action p_action">
                     <h2>${up.p_action}</h2>
                 </button>
                 <button class="action p_action">
                     <h2>${up.p_action1}</h2>
                     <i class="fab fa-github"></i>
                 </button>
             </div>
         </div>
     </div>`
         });
         desktopPop.innerHTML = desktopModal;
     };


     addMobilePopUp();

     addDesktopPopUp();
};





const frontend = document.querySelector(".frontend");
const ui = document.querySelector(".ui");

const frontendProjects = frontend.querySelectorAll(".project");
const uiProjects = ui.querySelectorAll(".project");

const counterFillFrontend = frontend.querySelector(".counter-fill");
const counterFillUi = ui.querySelector(".counter-fill");

const frontendLeft = frontend.querySelector(".frontend-left");
const uiLeft = ui.querySelector(".frontend-left");

console.log("Yo");
console.log(frontendLeft);
console.log(ui);
console.log(frontendProjects);
console.log(uiProjects);

//to get the total number of projects in each section 
frontend.querySelector(".total-projects").textContent += frontendProjects.length;
ui.querySelector(".total-projects").textContent += uiProjects.length;



let limit = 375;

window.addEventListener("scroll", ()=>{
    for(let i = 0; i<frontendProjects.length; i++){
        if(frontendProjects[i].getBoundingClientRect().top<limit){
            counterFillFrontend.style.width = (i+1)*100/frontendProjects.length + "%";
            //frontendProjects[i].querySelector(".project-image").style.filter = "grayscale(0)";
            if(frontendLeft.getBoundingClientRect().top<limit-300){
                frontendLeft.style.opacity = 0;
            }else{
                frontendLeft.style.opacity = 1;

            }
        }
        // else{
        //     frontendProjects[i].querySelector(".project-image").style.filter = "grayscale(100%)";
        // }
    }
    for(let i = 0; i<uiProjects.length; i++){
        if(uiProjects[i].getBoundingClientRect().top<limit){
            counterFillUi.style.width = (i+1)*100/uiProjects.length + "%";
            //uiProjects[i].querySelector(".project-image").style.filter = "grayscale(0)";

            if(uiLeft.getBoundingClientRect().top<limit-300){
                uiLeft.style.opacity = 0;
            }else{
                uiLeft.style.opacity = 1;

            }
        }
        // else{
        //     uiProjects[i].querySelector(".project-image").style.filter = "grayscale(100%)";
        // }
    }

    const block1 = document.querySelector(".hero--image");

    console.log(window.pageYOffset);
    if(window.pageYOffset >= 0 && window.pageYOffset <= 800){
        block1.style.top = 50+(window.pageYOffset)/5+"px";
    }
});






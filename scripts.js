/* ==========================================
   ALI SOLEIMANI PORTFOLIO
   scripts.js
========================================== */

// Smooth active navigation
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});



// Navbar background

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>50){

        header.style.background="rgba(15,23,42,.92)";

        header.style.boxShadow="0 10px 30px rgba(0,0,0,.25)";

    }

    else{

        header.style.background="rgba(15,23,42,.70)";

        header.style.boxShadow="none";

    }

});



// Reveal Animation

const revealElements=document.querySelectorAll("section,.stat-card");

const reveal=()=>{

    revealElements.forEach(el=>{

        const windowHeight=window.innerHeight;

        const top=el.getBoundingClientRect().top;

        if(top<windowHeight-100){

            el.classList.add("show");

        }

    });

};

window.addEventListener("scroll",reveal);

reveal();



// Counter Animation

const counters=document.querySelectorAll(".stat-card h3");

let started=false;

function runCounter(){

    if(started) return;

    const stats=document.querySelector(".stats");

    const trigger=stats.getBoundingClientRect().top;

    if(trigger<window.innerHeight-120){

        started=true;

        counters.forEach(counter=>{

            const text=counter.innerText;

            let target=0;
            let prefix="";
            let suffix="";

            if(text.includes("€")){

                prefix="€";
                suffix="M+";
                target=10;

            }

            else if(text.includes("30")){

                suffix="+";
                target=30;

            }

            else if(text.includes("10")){

                suffix="+";
                target=10;

            }

            else{

                target=8;

            }

            let current=0;

            const timer=setInterval(()=>{

                current++;

                counter.innerText=prefix+current+suffix;

                if(current>=target){

                    clearInterval(timer);

                }

            },60);

        });

    }

}

window.addEventListener("scroll",runCounter);

runCounter();




// Button Hover Effect

document.querySelectorAll(".btn-primary,.btn-secondary").forEach(btn=>{

    btn.addEventListener("mousemove",(e)=>{

        const rect=btn.getBoundingClientRect();

        const x=e.clientX-rect.left;

        const y=e.clientY-rect.top;

        btn.style.backgroundPosition=`${x}px ${y}px`;

    });

});



// Fade Hero

window.addEventListener("scroll",()=>{

    const hero=document.querySelector(".hero");

    hero.style.opacity=1-window.scrollY/900;

});



// Typing Cursor Effect

const logo=document.querySelector(".logo");

logo.addEventListener("mouseenter",()=>{

    logo.style.letterSpacing="2px";

});

logo.addEventListener("mouseleave",()=>{

    logo.style.letterSpacing=".5px";

});



// Scroll To Top

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.className="topButton";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        topBtn.classList.add("visible");

    }

    else{

        topBtn.classList.remove("visible");

    }

});

topBtn.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};
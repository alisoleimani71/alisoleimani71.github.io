// ===============================
// Ali Soleimani Portfolio Website
// Interactive Effects
// ===============================



document.addEventListener(
    "DOMContentLoaded",
    () => {



    /*
    ============================
    SCROLL REVEAL ANIMATION
    ============================
    */


    const revealElements = document.querySelectorAll(
        ".section, .stat-card, .timeline-item, .skills-grid div, .impact-grid div"
    );


    revealElements.forEach(
        element => {

            element.classList.add("reveal");

        }
    );



    const observer = new IntersectionObserver(
        entries => {


            entries.forEach(
                entry => {


                    if(entry.isIntersecting){

                        entry.target.classList.add(
                            "active"
                        );

                    }


                }
            );


        },
        {
            threshold:0.15
        }

    );



    revealElements.forEach(
        element => {

            observer.observe(element);

        }
    );







    /*
    ============================
    NAVBAR EFFECT
    ============================
    */


    const navbar =
        document.querySelector(".navbar");


    window.addEventListener(
        "scroll",
        () => {


            if(window.scrollY > 60){

                navbar.style.background =
                "rgba(8,16,24,0.92)";


                navbar.style.backdropFilter =
                "blur(10px)";


            }

            else {


                navbar.style.background =
                "transparent";


            }



        }
    );








    /*
    ============================
    COUNTER ANIMATION
    ============================
    */


    const counters =
    document.querySelectorAll(
        ".stat-card h2"
    );


    let started = false;



    function startCounters(){


        if(started)
            return;


        const statsSection =
        document.querySelector(".stats");


        const position =
        statsSection.getBoundingClientRect();


        if(position.top <
        window.innerHeight - 100){


            started = true;



            counters.forEach(
                counter => {


                    let text =
                    counter.innerText;


                    let number =
                    parseInt(
                        text.replace(/\D/g,'')
                    );


                    let suffix =
                    text.replace(/[0-9]/g,'');



                    let current = 0;



                    let interval =
                    setInterval(
                        () => {


                            current +=
                            Math.ceil(
                                number / 40
                            );



                            if(current >= number){

                                current = number;

                                clearInterval(
                                    interval
                                );

                            }



                            counter.innerText =
                            current + suffix;



                        },
                        40
                    );



                }
            );


        }


    }



    window.addEventListener(
        "scroll",
        startCounters
    );









    /*
    ============================
    ACTIVE LINK HIGHLIGHT
    ============================
    */


    const sections =
    document.querySelectorAll(
        "section[id]"
    );


    const links =
    document.querySelectorAll(
        ".navbar a"
    );



    window.addEventListener(
        "scroll",
        () => {


            let current="";


            sections.forEach(
                section => {


                    const sectionTop =
                    section.offsetTop - 150;



                    if(
                        window.scrollY >= sectionTop
                    ){

                        current =
                        section.getAttribute(
                            "id"
                        );

                    }



                }
            );



            links.forEach(
                link => {


                    link.style.color =
                    "#dce5ef";


                    if(
                        link.getAttribute("href")
                        === "#" + current
                    ){

                        link.style.color =
                        "#56ccf2";

                    }


                }
            );



        }
    );








    /*
    ============================
    IMAGE PARALLAX EFFECT
    ============================
    */


    const image =
    document.querySelector(
        ".image-frame"
    );



    window.addEventListener(
        "mousemove",
        (event)=>{


            if(!image)
                return;



            let x =
            (window.innerWidth / 2 -
            event.clientX) / 60;



            let y =
            (window.innerHeight / 2 -
            event.clientY) / 60;



            image.style.transform =
            `
            translate(${x}px,${y}px)
            `;



        }
    );







    /*
    ============================
    SMOOTH BUTTON FEEDBACK
    ============================
    */


    const buttons =
    document.querySelectorAll(
        ".btn"
    );


    buttons.forEach(
        button=>{


            button.addEventListener(
                "mouseenter",
                ()=>{

                    button.style.boxShadow =
                    "0 15px 35px rgba(47,128,237,.35)";

                }
            );



            button.addEventListener(
                "mouseleave",
                ()=>{

                    button.style.boxShadow =
                    "none";

                }
            );


        }
    );



});
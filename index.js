// navbar slider

document.addEventListener("scroll",()=>{

    let NavBar = document.querySelector(".nav-bar");

    if(document.documentElement.scrollTop > 20){

        NavBar.classList.add("slide-mode");
    }   

    else{

        NavBar.classList.remove("slide-mode");
    }

})

// hide navbar

let NavBar = document.querySelector(".navbar-collapse");

let NavLinks = document.querySelectorAll(".nav-item a");

NavLinks.forEach((ele)=>{

    ele.addEventListener("click",()=>{

        let tmp = setInterval(() => {

            NavBar.classList.remove("show");

            clearInterval(tmp);
            
        }, 1000);

    });

});

// counter

document.addEventListener("DOMContentLoaded",()=>{

    function CounterFun(ElementId,CountStart,CountEnd,CountDuration){

        let Element = document.querySelector(`.${ElementId}`);

        let Current = CountStart;

        let Steps = Math.floor(CountDuration / CountEnd);

        let Timer = setInterval(()=>{

            Current += 1;

            Element.innerHTML = Current;

            if(Current === CountEnd){   

                clearInterval(Timer);

            }

        },Steps);

    };

    CounterFun("count-1",0,500,3000);
    CounterFun("count-2",0,1000,3000);
    CounterFun("count-3",0,1500,3000);
    CounterFun("count-4",0,2000,3000);

});

//slider buttons

let tracker = 0;

let slider_btns = document.querySelectorAll(".slider-btn");

let carousel = new bootstrap.Carousel(document.querySelector('#carouselExample'));


setInterval(() => {

    slider_btns.forEach(btn => btn.classList.remove("active"));
   

    slider_btns[tracker].classList.add("active");

    carousel.to(tracker);


    tracker++;

    if(tracker >= slider_btns.length) {
        tracker = 0;
    }

}, 2000);
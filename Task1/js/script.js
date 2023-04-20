// navbar toggle activation

let menuIcone = document.querySelector('.bx-menu');
let navbar = document.querySelector('.navbar');

menuIcone.onclick = () => {
    menuIcone.classList.toggle('bx-x')
    navbar.classList.toggle('active')
};
// scrool activation
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec => {
        let top =window.scrollY;
        let offset=sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            }); 
        };
    });
    // sticky navbar 
    let header =document.querySelector('header');


    header.classList.toggle('sticky', window.scrollY > 100 );


    // remove toggleicome and navbar click navbaar scrool 

    menuIcone.classList.remove('bx-x')
    navbar.classList.remove('active')

};

// reveal 
ScrollReveal({
     reset: true ,
     distace: '80px',
     duration: 2000,
     delay: 200
     

});
ScrollReveal().reveal('.home-content,.heading', { origin:'top' });
ScrollReveal().reveal('.home-content h1,.about-img', { origin:'left' });
ScrollReveal().reveal('.home-img,.service-contenar,.portfolio-continer,.contact-box', { origin:'bottom' });

// typeing 

const typed=new Typed('.multiple-text',{
    strings: ['Frontend Devloper!','Coder!','Designner!','YouTuber!'],
    typeSpeed:150,
    backSpeed:100,
    backDelay:1000,
    loop:true

});
const sec=new Typed('.call',{
    strings: ['Arman!','Loren!','Arman Panda!'],
    typeSpeed:150,
    backSpeed:100,
    backDelay:1000,
    loop:true

});



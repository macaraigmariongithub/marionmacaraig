const landingPages = [
  {
    name: 'Animationtemplate',
    img: './images/animation-template.PNG',
    liveLink: 'https://animationtemplate.netlify.app/',
    code: 'https://github.com/macaraigmariongithub/animationtemplate',
  },
  {
    name: 'MC Clothing Store',
    img: './images/Clothing-store.PNG',
    liveLink: 'https://macaraigmariongithub.github.io/clothing-store/',
    code: 'https://github.com/macaraigmariongithub/clothing-store',
  },
  {
    name: 'Travel&Tour',
    img: './images/Travel&Tour.PNG',
    liveLink: 'https://macaraigmariongithub.github.io/Travel-Tour/',
    code: 'https://github.com/macaraigmariongithub/Travel-Tour',
  },

];
  
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
  
const landingPageName = document.querySelector('.landing-page--name');
const landingPageImg = document.querySelector('.landing-page--src');
const landingPageLive = document.querySelector('.btn--view-live');
const landingPageCode = document.querySelector('.btn--view-code');
  
let currentLandingPage = 0;
  
const displayLandingPage = () => {
  landingPageName.textContent = `${landingPages[currentLandingPage].name} - Responsive Landing Page `;
  landingPageImg.src = landingPages[currentLandingPage].img;
  landingPageLive.href = landingPages[currentLandingPage].liveLink;
  landingPageCode.href = landingPages[currentLandingPage].code;
};
  
displayLandingPage();
  
prevBtn.addEventListener('click', () => {
  currentLandingPage--;

  if (currentLandingPage < 0) currentLandingPage = landingPages.length - 1;

  console.log(currentLandingPage);
  displayLandingPage();
});
  
nextBtn.addEventListener('click', () => {
  currentLandingPage++;

  if (currentLandingPage > landingPages.length - 1) currentLandingPage = 0;

  console.log(currentLandingPage);
  displayLandingPage();
});



  
  /* Nav */

jQuery(document).ready(function($){
  //open navigation clicking the menu icon
  $('.cd-nav-trigger').on('click', function(event){
    event.preventDefault();
    toggleNav(true);
  });
  //close the navigation
  $('.cd-close-nav, .cd-overlay').on('click', function(event){
    event.preventDefault();
    toggleNav(false);
  });

  function toggleNav(bool) {
    $('.cd-nav-container, .cd-overlay').toggleClass('is-visible', bool);
    $('main').toggleClass('scale-down', bool);
  }
  $('.cd-nav li').on('click', function(event){
    //close navigation
    toggleNav(false);
  });
});



/* ScrollReveal Effect */

ScrollReveal().reveal('.footer-social', { delay: 500 });
ScrollReveal().reveal('.projects--item', { interval: 400 });
ScrollReveal().reveal('.skills-container', { duration: 1000 });




(function($) { "use strict";

  /* Hover Letter Effect */

  $(document).ready(function() {
    $('.chaffle').chaffle({
    speed: 10,
    time: 60
    });
  });  

/* Scroll Too */

$(window).load(function(){
        
  /* Page Scroll to id fn call */
  $("ul.cd-nav li a,a[href='#top'],a[data-gal='m_PageScroll2id']").mPageScroll2id({
    highlightSelector:"ul.cd-nav li a",
    offset: 40,
    scrollSpeed: 100,
    scrollEasing: "easeInOutCubic"
  });
  
  /* demo functions */
  $("a[rel='next']").click(function(e){
    e.preventDefault();
    var to=$(this).parent().parent("section").next().attr("id");
    $.mPageScroll2id("scrollTo",to);
  });
  
});

})(jQuery); 



// (function($) { "use strict";

// $('.tipped').tipper();

// })(jQuery); 
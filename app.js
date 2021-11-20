// show or hide btn for scroll.
window.onscroll = function() {scrollFunction()};
const btn = document.getElementById('button');

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
}

// back to top function

btn.addEventListener('click', topFunction);

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// adding the current year.

const year = document.getElementById('year');

const date = new Date();
let currentYear = date.getFullYear();

year.innerHTML = currentYear;


// resize window listener to fix display fix when transfer from and to small size.

window.addEventListener('resize', function(event){
    if(window.innerWidth > 991) {
        list.style.display= "flex";
    }
    else {
        list.style.display= "none";
    }
});

// animation for mobile navIcon

const iconContainer = document.getElementById('iconContainer');
const topIcon = document.getElementById('topIcon');
const middleIcon = document.getElementById('middleIcon');
const bottomIcon = document.getElementById('bottomIcon');
const list = document.getElementById('showList');

iconContainer.addEventListener('click', () => {
    middleIcon.classList.toggle('middleMove');
    topIcon.classList.toggle('topMove');
    bottomIcon.classList.toggle('bottomMove');
    if(topIcon.classList.contains('topMove')) {
        list.style.display= "block"
    } else {
        list.style.display= "none";
    }
});


// action button which will take customer to contact.

const actionBtn = document.getElementById('actionBtn');
const contactLink = document.getElementById('contactLink');
actionBtn.addEventListener('click', () => {
    contactLink.click();
});
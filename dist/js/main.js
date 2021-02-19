const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');
const closeMenu = document.querySelector('.close-menu')
const tabsHeading = document.querySelector('.tabs-heading');
const accordion = document.querySelector('.accordion');
const socialIcons = document.querySelector('.social-icons');
const form = document.querySelector('form');

let showMenu = false;

// remove all open classes when device orientaion changes i.e to avoid showing open menu when user opens menu and then changes orientation to landscape and back to portrait
window.addEventListener('orientationchange', removeOpenClass);

hamburger.addEventListener('click', toggleMenu);
closeMenu.addEventListener('click', toggleMenu);

tabsHeading.addEventListener('click', (e) => {
    tabSwitcher(e.target);
})

accordion.addEventListener('click', (e) => showAccordion(e.target));

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInput();
})


function toggleMenu() {
    if (!showMenu) {
        nav.classList.add('open');
        hamburger.classList.add('open');
        closeMenu.classList.add('open');
        socialIcons.classList.add('menu-open');
        showMenu = true;
    } else {
        removeOpenClass()
        showMenu = false;
    }
}

// switch tabs based on the heading that is clicked
function tabSwitcher(target) {
    const tabs = document.querySelectorAll('.tab');

    if (!target.classList.contains('active')) {
        tabsHeading.querySelectorAll('h4').forEach((heading, index) => {
            heading.classList.remove('active');
            tabs[index].classList.remove('active');
        })

        const headings = [...tabsHeading.children];
        const activeTabIndex = headings.indexOf(target);

        target.classList.add('active');
        tabs[activeTabIndex].classList.add('active');
    }
}

// toggle Accordion
function showAccordion(target) {
    const answer = target.nextElementSibling;
    const accordionItem = target.parentElement;

    if (!answer.style.maxHeight) {
        accordionItem.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + "px"
    } else {
        accordionItem.classList.remove('open');
        answer.style.maxHeight = null;
    }
}

// function to test email input with regex
function isEmailValid(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function alertMessage(message) {
    const alert = document.querySelector('form .alert');
    alert.textContent = message;
}

function checkInput() {
    const email = document.getElementById('email').value;
    const formControl = document.querySelector('.form-control');

    if (email === '') {
        formControl.className = 'form-control error';
        alertMessage(`Please, input an email`);
    } else if (!isEmailValid(email)) {
        formControl.className = 'form-control error';
        alertMessage(`whoops, make sure it's an email`);
    } else {
        formControl.className = 'form-control success';
        alertMessage(`We'll keep you up to date`);

        // remove success message after 2s
        setTimeout(() => {
            formControl.classList.remove('success');
        }, 2000);
    }
}

function removeOpenClass() {
    nav.classList.remove('open');
    hamburger.classList.remove('open');
    closeMenu.classList.remove('open');
    socialIcons.classList.remove('menu-open');
}
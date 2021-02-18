const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');
const closeMenu = document.querySelector('.close-menu')
const tabsHeading = document.querySelector('.tabs-heading');
const accordion = document.querySelector('.accordion');
const socialIcons = document.querySelector('.social-icons');

let showMenu = false;

hamburger.addEventListener('click', toggleMenu);
closeMenu.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        nav.classList.add('open');
        hamburger.classList.add('open');
        closeMenu.classList.add('open');
        // socialIcons.classList.add('menu-open');
        showMenu = true;
    } else {
        nav.classList.remove('open');
        hamburger.classList.remove('open');
        closeMenu.classList.remove('open');
        // socialIcons.classList.remove('menu-open');
        showMenu = false;
    }
}

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

tabsHeading.addEventListener('click', (e) => {
    tabSwitcher(e.target);
})

accordion.addEventListener('click', (e) => showAccordion(e.target));

function showAccordion(target) {
    console.log(target);
    const answer = target.nextElementSibling;
    const accordionItem = target.parentElement;

    if(!answer.style.maxHeight) {
        accordionItem.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + "px"
    } else {
        accordionItem.classList.remove('open');
        answer.style.maxHeight = null;
    }
}

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
})

    
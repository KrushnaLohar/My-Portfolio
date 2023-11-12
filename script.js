function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".mobile-links");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// box animation function
const boxes = document.querySelectorAll('.details-container');
window.addEventListener('scroll', checkBoxes);

checkBoxes();
function checkBoxes() {
    const triggerBtn = window.innerHeight;
    // console.log(window.innerHeight / 5 * 4);

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if(boxTop < triggerBtn) {
            box.classList.add('show');
        }
        else {
            box.classList.remove('show');
        }
    })
}

// text animation function
let sections = document.querySelectorAll('section');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop-600;
        let height = sec.offsetHeight;

        if(top >= offset && top < offset + height) {
            sec.classList.add('show-animate');
        }
        // if you want repaeating scrolling animation then use this
        else {
            sec.classList.remove('show-animate');
        }
    })
}
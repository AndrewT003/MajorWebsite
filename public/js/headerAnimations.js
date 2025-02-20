const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
 navLinks.classList.toggle("active");
});


let lastScrollTop = 0;
const header = document.querySelector('header');

// Функція для перевірки, чи на верху сторінки
const isAtTop = () => window.scrollY <= 0;

// Функція для перевірки, чи мишка всередині header
const isMouseInsideHeader = (event) => {
const headerRect = header.getBoundingClientRect();
return event.clientY >= headerRect.top && event.clientY <= headerRect.bottom;
};

let isHeaderHidden = false; // Відслідковуємо стан header (приховано чи ні)
let isHeaderVisibleByScroll = false; // Відслідковуємо, чи header показаний через скрол

// При прокручуванні сторінки
window.addEventListener('scroll', () => {
let scrollTop = window.scrollY || document.documentElement.scrollTop;

// Якщо прокрутили вниз більше ніж на 100px і не вгорі
if (scrollTop > lastScrollTop && scrollTop > 100 && !isAtTop()) {
    // Прокручено вниз - ховаємо header
    if (!isHeaderHidden) {
        header.classList.add('hidden');
        isHeaderHidden = true; // Позначаємо, що header зараз схований
        isHeaderVisibleByScroll = false; // Зміщуємо, що він прихований через скрол
    }
} else if (scrollTop < lastScrollTop && !isAtTop()) {
    // Прокручено вгору - показуємо header
    if (isHeaderHidden) {
        header.classList.remove('hidden');
        isHeaderHidden = false; // Позначаємо, що header показано
        isHeaderVisibleByScroll = true; // Зміщуємо, що він показаний через скрол
    }
}

lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// При наведенні мишки на верх екрана або на header
window.addEventListener('mousemove', (event) => {
if (isMouseInsideHeader(event) || event.clientY < 50) {
    // Якщо мишка всередині header або близько до верху екрану
    if (isHeaderHidden && !isHeaderVisibleByScroll) {
        header.classList.remove('hidden');
        isHeaderHidden = false; // Показуємо header
    }
} else if (!isHeaderVisibleByScroll) {
    // Якщо мишка не на header і він не прихований
    if (!isAtTop() && window.scrollY > 100 && !isHeaderHidden) {
        header.classList.add('hidden');
        isHeaderHidden = true; // Сховуємо header
    }
}
});






const dropdownContent = document.querySelector('.dropdown-content');
    const isMouseInsideHeaderOrDropdown = (event) => {
    const headerRect = header.getBoundingClientRect();
    const dropdownRect = dropdownContent.getBoundingClientRect();
    
    return (
        (event.clientY >= headerRect.top && event.clientY <= headerRect.bottom) ||
        (event.clientY >= dropdownRect.top && event.clientY <= dropdownRect.bottom &&
        event.clientX >= dropdownRect.left && event.clientX <= dropdownRect.right)
    );
    };

    window.addEventListener('mousemove', (event) => {
        if (isMouseInsideHeaderOrDropdown(event) || event.clientY < 50) {
            if (isHeaderHidden && !isHeaderVisibleByScroll) {
                header.classList.remove('hidden');
                isHeaderHidden = false;
            }
        } else if (!isHeaderVisibleByScroll) {
            if (!isAtTop() && window.scrollY > 100 && !isHeaderHidden) {
                header.classList.add('hidden');
                isHeaderHidden = true;
            }
        }
    });
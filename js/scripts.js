/* ============= SLIDER ============= */
$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });
});

/* ============= TABS ============= */
const linksTabElems = document.querySelectorAll('.tab__link');
const tabLineElem = document.querySelector('.bottom__line');

if (linksTabElems.length >= 0) {
    const firstLinkElem = document.querySelector('.tab__link')
    line(firstLinkElem)

    for (let i = 0; i < linksTabElems.length; i++) {
        let link = linksTabElems[i];

        // default value
        const firstItemElem = document.querySelector('#tab-item-1')
        firstItemElem.classList.add('active')

        link.addEventListener('click', function (e) {
            line(link)
            const tabItemsElem = document.querySelectorAll('.tab-item');
            for (let i = 0; i < tabItemsElem.length; i++) {
                tabItemsElem[i].classList.remove('active');
            }
            const tabItemElem = document.querySelector([link.getAttribute('data-href')]);
            tabItemElem.classList.add('active');
        });
    }
}

// bottom line animation
function line(link) {
    let width = link.offsetWidth;
    let posL = link.offsetLeft;
    tabLineElem.style.left = `${posL}px`;
    tabLineElem.style.width = `${width}px`;
}

/* ============= ANCHORS ============= */
const links = document.querySelectorAll('.scroll-link');
if (links.length > 0) {
    for (let i = 0; i < links.length; i++) {
        const link = links[i];
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const scrollToElem = document.querySelector(link.getAttribute('data-scrollTo'));
            if (scrollToElem) {
                if (scrollToElem.offsetHeight > window.innerHeight) {
                    e.preventDefault();
                    scrollToElem.scrollIntoView({
                        block: "start",
                        inline: "nearest",
                        behavior: "smooth"
                    });
                }else {
                    e.preventDefault();
                    scrollToElem.scrollIntoView({
                        block: "start",
                        inline: "nearest",
                        behavior: "smooth"
                    });
                }
            }
        });
    }
}